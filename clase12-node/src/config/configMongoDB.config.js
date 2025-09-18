import mongoose from "mongoose";

async function connectToMongoDB() {
    try {
        const dbName = "utn_test_primer"
        const connectionString = "mongodb://localhost:27017/"+dbName
        await mongoose.connect(connectionString) //asincronica
        console.log("coneccion exitosa");
    } catch (error) {
        console.log("SERVER ERROR:", error);
        
    }
}
export default connectToMongoDB