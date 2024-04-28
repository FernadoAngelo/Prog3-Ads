import categoriaModel from "../model/categoria.schema";
import taskModel from "../model/task.schema";

export class categoriaService{
    async create(categoria: any) {
        const createdCategoria = await categoriaModel.create(categoria)
        return createdCategoria
    }

    async find() {
        const findedAll = await categoriaModel.find()
        return findedAll
    }

    async findByTaskId(id: string) {
        const findedCategorias = await categoriaModel.findById(id)
        return findedCategorias
    }

    async findByUserId(id: string) {
        try{
            const categoriaUser = await categoriaModel.find()
            categoriaUser.length = 0 // pq deus, pq tem que ser feito dessa forma ISSO É HORRIVEL, mas não funciona de outras formas
            const categorias = await categoriaModel.find()
            const tasks = await taskModel.find({usuarioID: id})
            
            categorias.forEach(categoria => {
                const taskAssociada = tasks.some(task => task.categoriaID === categoria._id.toString())
                if (taskAssociada) {
                    categoriaUser.push(categoria);
                }
            });
            return categoriaUser 
        } catch (error) {
            console.error('Erro ao buscar categorias do usuário:', error);
            throw error;
        } 
        
    }

    async update(id: string, categoria: any) {
        const updatedcategoria = await categoriaModel.findByIdAndUpdate(id, {
            nome: categoria.nome,
            cor: categoria.cor
        },{ new: true });
        return updatedcategoria;
    }

    async delete(id: string) {
        try{
            await categoriaModel.findByIdAndDelete(id)
            return { success: true, message: 'Categoria removida com sucesso' };
        } catch(err) {
            return { success: false, message: err };
        }
    }
}

export default new categoriaService;