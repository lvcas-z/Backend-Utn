import connectToMongoDB from "./config/configMongoDB.config.js";
import Channel from "./models/Channel.model.js";
import ChannelMessage from "./models/ChannelMessage.model.js";
import MemberWorkspace from "./models/MemberWorkspace.model.js";
import User from "./models/User.model.js";
import Workspace from "./models/Workspace.model.js";
connectToMongoDB()

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

async function crearMiembroWorkspace (user_id, workspace_id, role){
    try{
        await MemberWorkspace.insertOne({
            id_user: user_id,
            id_workspace: workspace_id,
            role: role
        })
        console.log('[SERVER]: miembro creado exitosamente')
    }
    catch(error){
         console.error('[SERVER ERROR]: no se pudo crear el miembro', error)
    }
}
// crearMiembroWorkspace("68c6112dd31a7bbce4c55f27","68cb80dc7d96e4051aa9b5c3","user")


async function crearCanal(workspace_id, name){
    try{
        await Channel.insertOne({
            id_workspace:workspace_id,
            name:name,
        })
        console.log('[SERVER]: se creo el canal exitosamente');
        
    }
    catch(error){
        console.error('[SERVER ERROR]: no se pudo crear el canal', error);
    }
}
// crearCanal("68cb80dd03c7fa9d554ca9d5","PrimerCanal")

async function crearMensajeCanal(id_channel, id_sender, message){
    try{
        await ChannelMessage.insertOne({
            id_channel,
            id_sender,
            message,
        })
        console.log('[SERVER]: se creo el mensaje exitosamente');
        
    }
    catch(error){
        console.error('[SERVER ERROR]: no se pudo crear el mensaje', error);
    }
}

crearMensajeCanal("68cb80dc7d96e4051aa9b5c3","68caca03b57c9e135c7ec91c","Hola soy un mensaje del worskpace member y mi nombre es messi segun mi id jajajsjajs")