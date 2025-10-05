import ENVIROMENT from "./config/environment.config.js";
import connectToMongoDB from "./config/configMongoDB.config.js";
import express, { request, response } from 'express'
import authRouter from './routes/auth.router.js'
import workspaceRouter from "./routes/workspace.router.js";
import WorkspaceRepository from "./repositories/workspace.repository.js";

connectToMongoDB()

//Crea una app de express (servidor web)
const app = express()


///Configuramos un middleware que permite que el json que envien en el body de la consulta se transforme en objeto de js
app.use(express.json())


app.use("/api/auth",authRouter)
app.use("/api/workspace",workspaceRouter)

//Listen lo usamos para dedicar un puerto a nuestro server
//2 parametro - 1 nro de puerto - 2 callback que ejecuta si sale todo bien

app.listen(ENVIROMENT.PORT || 8080,()=>{
    console.log(`Tu servidor se esta ejecutando en el puerto ${ENVIROMENT.PORT}`);  
})