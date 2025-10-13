import ENVIROMENT from "../config/environment.config.js";
import Authservice from "../services/auth.service.js";

class AuthController {
    static async register(request, response) {
        try {
            const { email, name, password } = request.body
            const email_regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+/
            if (!email || !email_regex.test(email)) {
                throw new ServerError(400, 'Email no valido')
            }

            if (!name || name.length <= 4) {
                throw new ServerError(400, 'El nombre debe tener más de 4 caracteres');
            }

            if (!password || password.length <= 6) {
                throw new ServerError(400, 'La contraseña debe tener más de 6 caracteres');
            }

            Authservice.register(email,password,name)
            response.send({
                ok: true
            })
        }
        catch (error) {
            if (error.status) {
                response.send({
                    ok: false,
                    message: error.message,
                    status: error.status
                })
            }
            else {
                response.send({
                    ok: false,
                    message: 'Error interno del servidor',
                    status: 500
                })
            }
        }
    }

    static async verifyEmail(request,response){
        try {
            const {verification_token} = request.params
            await Authservice.verifyEmail(verification_token)
            response.redirect(
                ENVIROMENT.URL_FRONTEND + '/login?from=verified_email'
            )
            
            
            // response.json({
            //     ok:true,
            //     message:"usuario verificado exitosamente",
            //     status:200
            // })

        } catch (error) {
            if (error.status) {
                response.send(`<h1>${error.message}</h1>`)
            }
            else {
                response.send(`<h1>Error en el servidor, intentelo mas tarde</h1>`)
            }
        }
    }


    static async login (request, response){
        try{
            const {email, password} = request.body

            const { authToken } = await Authservice.login(email, password)

            response.json(
                {
                    ok: true, 
                    message: 'Usuario logueado con exito',
                    status: 200,
                    body: {
                        authToken
                    }
                }
            )
            return 
        }
        catch(error){
            if(error.status){
                return response.send({
                    ok:false,
                    message: error.message,
                    status: error.status
                })
            }
            else{
                console.error(
                    'ERROR AL REGISTRAR', error
                )
                return response.send({
                    ok: false,
                    message: 'Error interno del servidor',
                    status: 500
                })
            }
        }
    }


}

export default AuthController