import connectToMongoDB from "./config/configMongoDB.config.js";
import User from "./models/User.model.js";
import Workspace from "./models/Workspace.model.js";
connectToMongoDB()

async function crearUsuario(name,email,password ) {
    try {
        await User.insertOne({
            name,
            email,
            password
        })
        console.log("SERVER: usuario creado");
        
    } catch (error) {
        console.log("errore",error);
    }
    
}
//crearUsuario("messi","messi@gmail.com","asdasdad")

async function crearWorkspace(name,url_image) {
    try {
        await Workspace.insertOne({
            name,
            url_image
        })
        console.log("SERVER: Workspace creado");
        
    } catch (error) {
        console.log("error",error);
    }
    
}
crearWorkspace("Test workspace","")