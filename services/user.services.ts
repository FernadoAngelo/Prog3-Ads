import userModel from "../model/user.schema"

export class userService {
    async create(task: any) {
        const createdUser = await userModel.create(task)
        return createdUser
    }

    async find() {
        const findedAll = await userModel.find()
        return findedAll
    }

    async findByUserId(id: string) {
        const findedUser = await userModel.findById(id)
        return findedUser
    }

    async update(id: string, user: any) {
        const updatedUser = await userModel.findByIdAndUpdate(id, {
            nome: user.nome,
            peso: user.peso,
            senha: user.Senha,
            email: user.String
        },{ new: true })
        return updatedUser
    }

    async delete(id: string) {
        try{
            await userModel.findByIdAndDelete(id)
            return { success: true, message: 'Usuario removida com sucesso' };
        } catch(err) {
            return { success: false, message: err }
        }
    }
}

export default new userService;