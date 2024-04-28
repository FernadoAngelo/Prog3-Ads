import { Router } from 'express'
import taskController from './controllers/task.controllers'
import categoriasControllers from './controllers/categorias.controllers'
import userControllers from './controllers/user.controllers'

const routes = Router()
    // Rotas Task
    routes.post('/task/create', taskController.create)
    routes.get('/task/find', taskController.find)
    routes.get('/task/user/:id', taskController.findByUserId)
    routes.get('/task/taskID/:id', taskController.findByTaskId)
    routes.put('/task/update/:id', taskController.update)
    routes.delete('/task/delete/:id', taskController.delete)

    // Rotas Categoria
    routes.post('/categoria/create', categoriasControllers.create)
    routes.get('/categoria/find', categoriasControllers.find)
    routes.get('/categoria/user/:id', categoriasControllers.findByUserId)
    routes.get('/categoria/taskID/:id', categoriasControllers.findByTaskId)
    routes.put('/categoria/update/:id', categoriasControllers.update)
    routes.delete('/categoria/delete/:id', categoriasControllers.delete)

    // Rotas Usuario
    routes.post('/user/create', userControllers.create)
    routes.get('/user/find', userControllers.find)
    routes.get('/user/userID/:id', userControllers.findByUserId)
    routes.put('/user/update/:id', userControllers.update)
    routes.delete('/user/delete/:id', userControllers.delete)

    //Rota para filtrar tarefas por categoria.
    routes.get('/task/categoriaID/:id', taskController.findByCategoria)
    //Rota para listar tarefas concluídas/pendentes.
    routes.get('/task/status/:status', taskController.findTaskStatus);
    //Rota para contar o número total de tarefas de um usuário.
    routes.get('/task/user/:id/count', taskController.findContByUser);
    

export {
    routes
}