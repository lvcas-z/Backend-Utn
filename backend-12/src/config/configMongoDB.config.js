import mongoose from "mongoose";
import ENVIROMENT from "./environment.config.js";

async function connectToMongoDB() {
    try {
        const connectionString = `${ENVIROMENT.MONGO_DB_HOST}/${ENVIROMENT.MONGO_DB_NAME}`
        console.log(connectionString);
        await mongoose.connect(connectionString) //asincronica
        console.log("coneccion exitosa");
    } catch (error) {
        console.log("SERVER ERROR:", error);
        
    }
}
export default connectToMongoDB