import { Router } from 'express'
import taskController from './controllers/task.controllers'

const routes = Router()
    routes.post('/task', taskController.create)
    routes.get('/task', taskController.find)
    routes.get('/task/user/:id', taskController.findByUserId)
    routes.get('/task/:id', taskController.findByTaskId)
    routes.put('/task/:id', taskController.update)
    routes.delete('/task/:id', taskController.delete)
export {
    routes
}