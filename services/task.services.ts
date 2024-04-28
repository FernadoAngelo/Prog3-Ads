import taskModel from "../model/task.schema"

export class taskService {
    async create(task: any) {
        const createdTask = await taskModel.create(task)
        return createdTask
    }

    async find() {
        const findedAll = await taskModel.find()
        return findedAll
    }

    async findByTaskId(id: string) {
        const findedTasks = await taskModel.findById(id)
        return findedTasks
    }

    async findByUserId(id: string) {
        const findedAll = await taskModel.find()
        const findedTasks = findedAll.filter( task =>
            task.usuarioID === id
        )
        return findedTasks
    }

    async update(id: string, task: any) {
        const updatedTask = await taskModel.findByIdAndUpdate(id, {
            titulo: task.titulo,
            dataCriacao: task.dataCriacao,
            dataConclusao: task.dataConclusao,
            tipo: task.tipo,
            categoria: task.categoria,
            status: task.status, 
            usuarioID: task.usuarioID
        },{ new: true })
        return updatedTask
    }

    async delete(id: string) {
        try{
            await taskModel.findByIdAndDelete(id)
            return { success: true, message: 'Tarefa removida com sucesso' };
        } catch(err) {
            return { success: false, message: err }
        }
    }
}

export default new taskService;