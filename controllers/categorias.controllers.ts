import { Request, Response } from "express";
import { categoriaService } from "../services/categoria.services";

class categoriaController{
    async create(req: Request, res: Response) {
        const categoria = await new categoriaService().create(req.body)
        return res.json(categoria)
    }

    async find(req: Request, res: Response) {
        const categoria = await new categoriaService().find()
        return res.json(categoria)
    }

    async findByTaskId(req: Request, res: Response) {
        const categoria = await new categoriaService().findByTaskId(req.params.id)
        return res.json(categoria)
    }

    async findByUserId(req: Request, res: Response) {
        const categoria = await new categoriaService().findByUserId(req.params.id)
        return res.json(categoria)
    }

    async update(req: Request, res: Response) {
        const categoria = await new categoriaService().update(req.params.id, req.body)
        return res.json(categoria)
    }

    async delete(req: Request, res: Response) {
        const categoria = await new categoriaService().delete(req.params.id)
        return res.json(categoria)
    }

}

export default new categoriaController