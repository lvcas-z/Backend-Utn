import mongoose from "mongoose";

//creamos definimos el esquema
const workspaceSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required :true,
        },
        url_image:{
            type:String
        },
        created_at:{
            type:Date,
            default :Date.now,
            required:true
        },        
        modified_at:{
            type:Date,
            default :null
        },
        active:{
            type:Boolean,
            default :true,
            required: true
        }
    }
)

//El modelo registra el esquema para la entidad que luego sera guardada en la coleccion
const Workspace = mongoose.model("Workspace",workspaceSchema)

export default Workspace