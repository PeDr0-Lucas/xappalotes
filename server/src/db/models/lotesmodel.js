import mongoose from "mongoose";

mongoose.connect('mongodb+srv://pedro:10031108@xappaloteamento.m3qoa2w.mongodb.net/?retryWrites=true&w=majority&appName=XappaLoteamento')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
}); 

export const LoteSchema = new mongoose.Schema ({
    area: String,
    quadra: String,
    numeroLote: Number,
    endereco: String,
    disponibilidade: Boolean,
    proprietario: String
  });

export const LoteModel = mongoose.model('Lotes', LoteSchema);
