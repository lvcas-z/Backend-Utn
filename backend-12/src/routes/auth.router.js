import { Router } from "express";
import AuthController from '../controller/auth.controller.js'
// Creamos una ruta de express
const authRouter= Router()


authRouter.post('/register', AuthController.register)
authRouter.get('/verify-email/:verification_token',AuthController.verifyEmail)

// authRouter.post("/")

export default authRouter