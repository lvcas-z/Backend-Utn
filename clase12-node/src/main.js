import connectToMongoDB from "./config/configMongoDB.config.js";
import express, { response } from 'express'
import MemberWorkspaceRepository from "./repositories/memberworkspace.repository.js";
import WorkspaceRepository from "./repositories/workspace.repository.js";
connectToMongoDB()

//Crea una app de express (servidor web)
const app = express()
app.get("/test",(request,response)=>{
    response.send("<h1>Hola mundo</h1>")
})

const PORT = 8080;

//Listen lo usamos para dedicar un puerto a nuestro server
//2 parametro - 1 nro de puerto - 2 callback que ejecuta si sale todo bien

app.listen(PORT,()=>{
    console.log(`Tu servidor se esta ejecutando en el puerto ${PORT}`);  
})