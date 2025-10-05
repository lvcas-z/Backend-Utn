import { ServerError } from "../error.js";
import UserRepository from "../repositories/user.repository.js";
import bcrypt from 'bcrypt'

class Authservice{
    static async register(email,password,name){
        const user =await UserRepository.getByEmail(email)
        if (user) {
            throw new ServerError(400,'Email ya en uso')
        }
        const passwordHashed = await bcrypt.hash(password,12)
        await UserRepository.create(name,email,passwordHashed)
    }
}
export default Authservice