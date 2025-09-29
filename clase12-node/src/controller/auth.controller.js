class AuthController {
    static async register(request, response) {
        try {
            const { email, name, password } = request.body
            const email_regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+/
            if (!email || !email_regex.test(email))
                throw new ServerError(400, 'Email no valido')

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
}

export default AuthController