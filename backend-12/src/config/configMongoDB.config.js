import mongoose from "mongoose";
import ENVIROMENT from "./environment.config.js";

async function connectToMongoDB() {
    try {
        const connectionString =  ENVIROMENT.MONGO_DB_CONNECTION_STRING
        await mongoose.connect(connectionString) //asincronica
    } catch (error) {
        console.log("SERVER ERROR:", error);
        
    }
}
export default connectToMongoDB