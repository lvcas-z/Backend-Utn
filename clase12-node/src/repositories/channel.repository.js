// ChannelRepository.js
import Channel from "../models/Channel.model.js"

class ChannelRepository {

    static async create(workspace_id, name) {
        try {
            await Channel.insertOne({
            id_workspace:workspace_id,
            name:name,
        })
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo crear el canal', error)
        }
    }

    static async getAll() {
        try {
            const channels = await Channel.find()
            return channels
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de canales', error)
        }
    }

    static async getById(channel_id) {
        try {
            const channel_found = await Channel.findById(channel_id)
            return channel_found
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener el canal con id ' + channel_id, error)
        }
    }

    static async deleteById(channel_id) {
        try {
            const response = await Channel.findByIdAndDelete(channel_id)
            return response
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo eliminar el canal con id ' + channel_id, error)
        }
    }

    static async updateById(channel_id, update_data) {
        try {
            await Channel.findByIdAndUpdate(channel_id, update_data)
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo actualizar el canal con id ' + channel_id, error)
        }
    }
}

export default ChannelRepository
