// MemberWorkspaceRepository.js
import MemberWorkspace from "../models/MemberWorkspace.model.js"

class MemberWorkspaceRepository {

    static async create(user_id, workspace_id, role) {
        try {
            await MemberWorkspace.insertOne({
            id_user: user_id,
            id_workspace: workspace_id,
            role: role
        })
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo crear el miembro en el workspace', error)
        }
    }
/////////////////////////////////////////// get all + diferentes get
    static async getAll() {
        try {
            const members = await MemberWorkspace.find()
            console.log(members);
            
            return members
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de miembros del workspace', error)
        }
    }
    static async getAllActive() {
        try {
            const members = await MemberWorkspace.find({ active: true })
            console.log(members);
            return members
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de miembros del workspace', error)
        }
    }
    static async getAllInactive() {
        try {
            const members = await MemberWorkspace.find({ active: false })
            console.log(members);
            return members
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de miembros del workspace', error)
        }
    }

    static async getById(member_id) {
        try {
            const member_found = await MemberWorkspace.findById(member_id)
            console.log(member_found);
            
            return member_found
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener el miembro con id ' + member_id, error)
        }
    }

    static async deleteById(member_id) {
        try {
            const response = await MemberWorkspace.findByIdAndDelete(member_id)
            console.log("Miembro eliminado exitosamente");
            
            return response
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo eliminar el miembro con id ' + member_id, error)
        }
    }

    static async updateById(member_id, update_data) {
        try {
            await MemberWorkspace.findByIdAndUpdate(member_id, update_data)
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo actualizar el miembro con id ' + member_id, error)
        }
    }
}

export default MemberWorkspaceRepository
