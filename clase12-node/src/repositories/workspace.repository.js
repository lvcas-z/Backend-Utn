import Workspace from "../models/Workspace.model.js"

class WorkspaceRepository {

    static async create(name,url_image) {
        try {
            await Workspace.insertOne({
            name,
            url_image
        })
            console.log("[SERVER RESPONSE]: workspace creado exitosamente ");
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo crear el workspace', error)
        }
    }
/////////////////////////////////////////// get all + diferentes get
    static async getAll() {
        try {
            const workspaces = await Workspace.find()
            console.log(workspaces);
            return workspaces
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de workspaces', error)
        }
    }
    
    static async getAllInactive() {
        try {
            const inactiveWorkspaces = await Workspace.find({active:false})
            console.log(inactiveWorkspaces);
            return inactiveWorkspaces
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de workspaces', error)
        }
    }
    static async getAllActive() {
        try {
            const activeWorkspaces = await Workspace.find({active:true})
            console.log(activeWorkspaces);
            return activeWorkspaces
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de workspaces', error)
        }
    }

    static async getById(workspace_id) {
        try {
            const workspace = await Workspace.findById(workspace_id)
            console.log(workspace);
            return workspace
            
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener el workspace con id ' + workspace_id, error)
        }
    }

    static async deleteById(workspace_id) {
        try {
            const response = await Workspace.findByIdAndDelete(workspace_id)
            console.log("Workspace eliminado exitosamente");
            
            return response
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo eliminar el workspace con id ' + workspace_id, error)
        }
    }

    static async updateById(workspace_id, update_data) {
        try {
            await Workspace.findByIdAndUpdate(workspace_id, update_data)
            console.log("workspace modificado exitosamente");
            
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo actualizar el workspace con id ' + workspace_id, error)
        }
    }
}

export default WorkspaceRepository
