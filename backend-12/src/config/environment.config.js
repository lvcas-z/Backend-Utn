import dotenv from 'dotenv'

//Cargo variables de entorno en process.env
dotenv.config()

const ENVIROMENT = {
    GMAIL_USER : process.env.GMAIL_USER,
    GMAIL_PASSWORD : process.env.GMAIL_PASSWORD,
    PORT: process.env.PORT,
    MONGO_DB_HOST: process.env.MONGO_DB_HOST,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    JWT_TOKEN:process.env.JWT_TOKEN,
    URL_FRONTEND:process.env.URL_FRONTEND
}


export default ENVIROMENT