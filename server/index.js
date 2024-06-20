import express from 'express';
import bodyParser from 'body-parser';
import { createLote, deleteLote, listAllLotes, editLote } from './src/controller/lotesControler.js';
import cors from 'cors'

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}))



app.post('/lotes', cors(), async (req, res) => {

  try {
    if(!req.body.area){
      return res.status(400).json({ message: 'A Área é obrigatória' });
  }
  if(!req.body.quadra)
      return res.status(400).json({ message: 'A Quadra é um campo obrigatório'})
  if(!req.body.numeroLote)
      return res.status(400).json({ message:'O Número é um campo obrigatório'})
  if(!req.body.endereco)
      return res.status(400).json({ message: 'O Endereço é um campo obrigatório'})
  if(!req.body.disponibilidade)
      req.body.disponibilidade = false
    const savedLote = await createLote(req.body)
  
    return res.status(201).json(savedLote)
  } catch (error) {
    return res.status(400).json({ message: error.message });
}
});

app.get('/lotes', cors(), async (req, res) => {
  
  try {
    const listLotes = await listAllLotes()
    return res.status(200).json(listLotes)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
});

app.delete('/lotes/:id', cors(), async (req, res) => {
  
  try {
    const deleteCount = await deleteLote(req.params.id)
    console.log(deleteCount)
    return res.status(200).json({message:"Excluído Com sucesso"})
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
});

app.put('/lotes/:id', cors(), async (req, res) =>{
  const {id} = req.params;
  const body = req.body;
   try {
        const updatedLote = await editLote(id, body);
       return res.status(200).json(updatedLote);
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao atualizar o lote', erro: error.message });
    }
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});