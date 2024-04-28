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

}

export default new taskSController()