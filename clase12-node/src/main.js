import connectToMongoDB from "./config/configMongoDB.config.js";
import express, { response } from 'express'
import MemberWorkspaceRepository from "./repositories/memberworkspace.repository.js";
import WorkspaceRepository from "./repositories/workspace.repository.js";
import authRouter from './routes/auth.router.js'
import workspaceRouter from "./routes/workspace.router.js";
connectToMongoDB()

//Crea una app de express (servidor web)
const app = express()


///Configuramos un middleware que permite que el json que envien en el body de la consulta se transforme en objeto de js
app.use(express.json())


app.get("/test",(request,response)=>{
    response.send("<h1>Hola mundo</h1>")
})

/// a mi server le mandan un objeto con 1 y 2
app.post("/suma",
    //request es el objeto de la informacion de consulta
    //response es el objeto para dar respuestas
    (request,response)=>{
        const { numero_1, numero_2 } = request.body
        const suma = numero_1 + numero_2
        response.send({ suma })
        console.log(request.body);
})

app.use("/api/auth",authRouter)
app.use("/api/workspace",workspaceRouter)

const PORT = 8080;

//Listen lo usamos para dedicar un puerto a nuestro server
//2 parametro - 1 nro de puerto - 2 callback que ejecuta si sale todo bien

app.listen(PORT,()=>{
    console.log(`Tu servidor se esta ejecutando en el puerto ${PORT}`);  
})