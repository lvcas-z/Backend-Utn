import nodemailer from 'nodemailer'
import ENVIROMENT from './environment.config.js'

const mailTransporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user:ENVIROMENT.GMAIL_USER,
        pass:ENVIROMENT.GMAIL_PASSWORD
    },
    tls:{
        rejectUnauthorized:false // Ignoramos validaciones de certificado tle
    }
})

export default mailTransporter