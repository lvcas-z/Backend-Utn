import ENVIROMENT from "../config/environment.config.js";
import mailTransporter from "../config/mailTransporte.config.js";
import { ServerError } from "../error.js";
import UserRepository from "../repositories/user.repository.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
class Authservice {
    static async register(email, password, name) {
        const user = await UserRepository.getByEmail(email)
        if (user) {
            throw new ServerError(400, 'Email ya en uso')
        }
        const passwordHashed = await bcrypt.hash(password, 12)
        const userCreated = await UserRepository.create(name, email, passwordHashed)
        const userIdCreated = userCreated._id


        //CREAMOS UN JSON WEB TOKEN
        //Un JSON web token es un objeto pasado a texto con una firma (SIGNATURE)
        //Vamos a enviar entre JWT por URL 

        //.sing() firmar un token
        const vericationToken = jwt.sign({
            userId: userIdCreated
        },
            ENVIROMENT.JWT_SECRET
        )

        await mailTransporter.sendMail({
            from: ENVIROMENT.GMAIL_USER,
            to: email,
            subject: 'Verifica tu cuenta de mail',
            html: `
                <h1>Verifica tu cuenta de mail</h1>
                <a href="http://localhost:${ENVIROMENT.PORT}/api/auth/verify-email/${vericationToken}">Verificar</a>
            `
        })

        return
    }
    static async verifyEmail (verification_token){
        try{
            //Nos dice si el token esta firmado con x clave
            const payload = jwt.verify(verification_token, ENVIROMENT.JWT_SECRET )
            const {userId} = payload
            
            if(!userId){
                throw new ServerError(400, 'Accion denegada, token con datos insuficientes')
            } 
            const userFound = await UserRepository.getById(userId)
            if (!userFound) {
                throw new ServerError(404,'Usuario no encontrado');
            }
            if (userFound.verified_email) {
                throw new ServerError(400,'Usuario ya validado');
            }

            await UserRepository.updateById(userId, {verified_email: true})
            return 
        }
        catch(error){
            //Checkeamos si el error es de la verificacion del token
            if(error instanceof jwt.JsonWebTokenError){
                throw new ServerError(400, 'Accion denegada, token invalido')
            }
            throw error
        }
    }

    static async login (email, password){
        /* 
        -Buscar al usuario por email
        -Validar que exista
        -Validar que este verificado su mail
        -Comparar la password recibida con la del usuario
        -Genera un token con datos de sesion del usuario y responderlo
        */

        const userFound = await UserRepository.getByEmail(email)
        
        if(!userFound) {
            throw new ServerError(404, 'Usuario con este mail no encontrado')
        }
        
        if(!userFound.verified_email){
            throw new ServerError(401, 'Usuario con mail no verificado')
        }

        const isSamePassword = await bcrypt.compare( password, userFound.password )

        if(!isSamePassword){
            throw new ServerError(401, 'Contraseña invalida')
        }

        //creo un token con datos de sesion (DATOS NO SENSIBLES)
        const authToken = jwt.sign(
            {
                name: userFound.name,
                email: userFound.email,
                id: userFound.id,
            },
            ENVIRONMENT.JWT_SECRET
        )

        return {
            authToken: authToken
        }
    }

}
export default Authservice