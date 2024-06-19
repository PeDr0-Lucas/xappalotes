import mongoose from "mongoose";

export const LoteSchema = new mongoose.Schema ({
    area: String,
    quadra: String,
    numeroLote: Number,
    endereco: String,
    disponibilidade: Boolean,
    proprietario: String
  });

