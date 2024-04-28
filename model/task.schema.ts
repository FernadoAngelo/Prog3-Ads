import { Schema, model, Types } from 'mongoose';

const taskSchema = new Schema({
    titulo: String,
    dataCriacao: { type: Date, default: Date.now },
    dataConclusao: { type: Date, required: false },
    tipo: String,
    categoria: String,
    userType: {
        type: String,
        enum : ['Pendente','Andamento','Concluída'],
        default: 'Pendente'
    },
    usuarioID: String
}, {
    timestamps: true
})

export default model('Task', taskSchema);
