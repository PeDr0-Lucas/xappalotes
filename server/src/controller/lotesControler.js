import { LoteModel } from "../db/models/lotesmodel.js"

export const createLote = async (body) =>{
    
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