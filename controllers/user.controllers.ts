import { Request, Response } from "express";
import { userService } from "../services/user.services";

class userController{
    async create(req: Request, res: Response) {
        const categoria = await new userService().create(req.body)
        return res.json(categoria)
    }

    async find(req: Request, res: Response) {
        const categoria = await new userService().find()
        return res.json(categoria)
    }

    async findByUserId(req: Request, res: Response) {
        const categoria = await new userService().findByUserId(req.params.id)
        return res.json(categoria)
    }

    async update(req: Request, res: Response) {
        const categoria = await new userService().update(req.params.id, req.body)
        return res.json(categoria)
    }

    async delete(req: Request, res: Response) {
        const categoria = await new userService().delete(req.params.id)
        return res.json(categoria)
    }

}

export default new userController