import mongoose from "mongoose";

//creamos definimos el esquema
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required :true,
        },
        email:{
            type:String,
            required :true,
        },
        password:{
            type:String,
            required :true
        },
        created_at:{
            type:Date,
            default :Date.now
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
const User = mongoose.model("User",userSchema)

export default User