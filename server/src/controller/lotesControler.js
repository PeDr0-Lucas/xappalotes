import { LoteModel } from "../db/models/lotesmodel.js"

export const createLote = async (body) =>{
    console.log(body)
    const newLote = new LoteModel(body);
    const savedLote = await newLote.save()
    return savedLote

};

export const listAllLotes = async() => {

    const result = await LoteModel.find()
    return result
    
}

export const deleteLote = async(id) => {

    const result = await LoteModel.deleteOne({_id:id})
    return result
}

export const editLote = async(id, body) => {

    try {
    const updatedLote = await LoteModel.findOneAndUpdate({_id:id}, body, {new: true});
    if (!updatedLote){
        throw new Error('lote não encontrado');
    }

    return updatedLote;
}
    catch (error) {
        throw error;
    }    
}