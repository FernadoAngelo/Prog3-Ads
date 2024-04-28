import { Router } from 'express'
import taskController from './controllers/task.controllers'
import categoriasControllers from './controllers/categorias.controllers'
import userControllers from './controllers/user.controllers'

const routes = Router()
    // Rotas Task
    routes.post('/task', taskController.create)
    routes.get('/task', taskController.find)
    routes.get('/task/user/:id', taskController.findByUserId)
    routes.get('/task/:id', taskController.findByTaskId)
    routes.put('/task/:id', taskController.update)
    routes.delete('/task/:id', taskController.delete)

    // Rotas Categoria
    routes.post('/categoria', categoriasControllers.create)
    routes.get('/categoria', categoriasControllers.find)
    routes.get('/categoria/user/:id', categoriasControllers.findByUserId)
    routes.get('/categoria/:id', categoriasControllers.findByTaskId)
    routes.put('/categoria/:id', categoriasControllers.update)
    routes.delete('/categoria/:id', categoriasControllers.delete)

    // Rotas Usuario
    routes.post('/user', userControllers.create)
    routes.get('/user', userControllers.find)
    routes.get('/user/:id', userControllers.findByUserId)
    routes.put('/user/:id', userControllers.update)
    routes.delete('/user/:id', userControllers.delete)


export {
    routes
}