import ENVIROMENT from "../config/environment.config.js";
import mailTransporter from "../config/mailTransporte.config.js";
import { ServerError } from "../error.js";
import UserRepository from "../repositories/user.repository.js";
import bcrypt from 'bcrypt'

class Authservice {
    static async register(email, password, name) {
        const user = await UserRepository.getByEmail(email)
        if (user) {
            throw new ServerError(400, 'Email ya en uso')
        }
        const passwordHashed = await bcrypt.hash(password, 12)
        await UserRepository.create(name, email, passwordHashed)

        await mailTransporter.sendMail({
            from: ENVIROMENT.GMAIL_USER,
            to: email,
            subject: 'Verifica tu cuenta de mail',
            html: `
                <h1>Verifica tu cuenta de mail</h1>
                <a href="http://localhost:${ENVIROMENT.PORT}/api/auth/verify-email/${email}">Verificar</a>
            `
        })

        return
    }
}
export default Authservice