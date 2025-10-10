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
            user_id: userIdCreated
        },
            ENVIROMENT.JWT_TOKEN
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
            const payload = jwt.verify(verification_token, ENVIROMENT.JWT_TOKEN )
            const {user_id} = payload
            if(!user_id){
                throw new ServerError(400, 'Accion denegada, token con datos insuficientes')
            } 
            await UserRepository.updateById(user_id, {verified_email: true})
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
}
export default Authservice