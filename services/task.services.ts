import { Schema } from "mongoose"
import TaskModel from "../model/task.schema"

export class taskService {
    async create(task: any) {
        const createdTask = await TaskModel.create(task)
        return createdTask
    }

    async find() {
        const findedAll = await TaskModel.find()
        return findedAll
    }

    async findByTaskId(id: string) {
        const findedTasks = await TaskModel.findById(id)
        return findedTasks
    }

    async findByUserId(id: string) {
        const findedAll = await TaskModel.find()
        const findedTasks = findedAll.filter( task =>
            task.usuarioID === id
        )
        return findedTasks
    }

    async update(id: string, task: any) {
        const updatedTask = await TaskModel.findByIdAndUpdate(id, {
            titulo: task.titulo,
            dataCriacao: task.dataCriacao,
            dataConclusao: task.dataConclusao,
            tipo: task.tipo,
            categoria: task.categoria,
            userType: task.userType, 
            usuarioID: task.usuarioID
        },{ new: true });
        return updatedTask;
    }

    async delete(id: string) {
        try{
            await TaskModel.findByIdAndDelete(id)
            return { success: true, message: 'Tarefa removida com sucesso' };
        } catch(err) {
            return { success: false, message: err };
        }
    }

    //Rota para filtrar tarefas por categoria.
    async findByCategoria(categoriaID: string) {
        const findedAll = await TaskModel.find()
        const tasksFiltered = findedAll.filter( task =>
            task.categoriaID === categoriaID
        )
        return tasksFiltered
    }

    async findTaskStatus(status: string){
        try {
            const tasks = await TaskModel.find()
            const tasksConcluidas = tasks.filter( task =>
                task.status === status
            )
            return tasksConcluidas
        } catch (error) {
            console.error('Erro ao encontrar tarefas concluídas:', error);
            throw error;
        }
    }
    
    async findContByUser(id: string){
        try {
            const findedAll = await TaskModel.find()
            const findedTasks = findedAll.filter( task =>
                task.usuarioID === id
            )
            console.log(findedTasks.length)
        return findedTasks.length
        } catch (error) {
            console.error('Erro ao encontrar tarefas concluídas:', error);
            throw error;
        }
    }
    
}

export default new taskService;