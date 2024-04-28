import { Request, Response } from 'express'
import { taskService } from '../services/task.services'

class taskSController {
    async create(req: Request, res: Response) {
        const task = await new taskService().create(req.body)
        return res.json(task)
    }

    async find(req: Request, res: Response) {
        const task = await new taskService().find()
        return res.json(task)
    }

    async findByTaskId(req: Request, res: Response) {
        const task = await new taskService().findByTaskId(req.params.id)
        return res.json(task)
    }

    async findByUserId(req: Request, res: Response) {
        const task = await new taskService().findByUserId(req.params.id)
        return res.json(task)
    }

    async update(req: Request, res: Response) {
        const task = await new taskService().update(req.params.id, req.body)
        return res.json(task)
    }

    async delete(req: Request, res: Response) {
        const task = await new taskService().delete(req.params.id)
        return res.json(task)
    }

    async findByCategoria(req: Request, res: Response) {
        const task = await new taskService().findByCategoria(req.params.id)
        return res.json(task)
    }

    async findTaskStatus(req: Request, res: Response) {
        try {
            const tasksConcluidas = await new taskService().findTaskStatus(req.params.status);
            return res.json(tasksConcluidas);
        } catch (error) {
            console.error('Erro ao encontrar tarefas concluídas:', error);
            res.status(500).json({ message: 'Erro ao encontrar tarefas concluídas' });
        }
    }

    async findContByUser(req: Request, res: Response) {
        try {
            const tasksConcluidas = await new taskService().findContByUser(req.params.id);
            return res.json(tasksConcluidas);
        } catch (error) {
            console.error('Erro ao encontrar tarefas concluídas:', error);
            res.status(500).json({ message: 'Erro ao encontrar tarefas concluídas' });
        }
    }
    

}

export default new taskSController()