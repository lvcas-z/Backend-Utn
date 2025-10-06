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
            const {email} = request.params
            console.log("Mail a verificar",email);
            response.json({
                ok:true
            })

        } catch (error) {
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
}

export default AuthController