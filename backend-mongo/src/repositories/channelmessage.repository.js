import ChannelMessage from "../models/ChannelMessage.model.js"

class ChannelMessageRepository {

    static async create(id_channel, id_sender, message) {
        try {
            await ChannelMessage.insertOne({
            id_channel,
            id_sender,
            message,
        })
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo crear el mensaje', error)
        }
    }

    static async getAll() {
        try {
            const messages = await ChannelMessage.find()
            return messages
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de mensajes', error)
        }
    }

    static async getById(message_id) {
        try {
            const message_found = await ChannelMessage.findById(message_id)
            return message_found
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener el mensaje con id ' + message_id, error)
        }
    }

    static async deleteById(message_id) {
        try {
            const response = await ChannelMessage.findByIdAndDelete(message_id)
            return response
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo eliminar el mensaje con id ' + message_id, error)
        }
    }

    static async updateById(message_id, update_data) {
        try {
            await ChannelMessage.findByIdAndUpdate(message_id, update_data)
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo actualizar el mensaje con id ' + message_id, error)
        }
    }
}

export default ChannelMessageRepository
