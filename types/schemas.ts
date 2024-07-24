import mongoose, { Document, Schema, Model } from 'mongoose';
import { MotorcycleType } from '.';


// Definindo o esquema para a motocicleta

const MotorcycleSchema = new Schema<MotorcycleType>({
  model: { type: String, required: true },
  make: { type: String, required: true },
  year: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String },
  KM: { type: Number },
  modelCode: { type: String, required: true },
  makeCode: { type: String, required: true },
  fipeYear: { type: String, required: true },
  photo1: { type: Schema.Types.ObjectId, ref: 'File' },
  photo2: { type: Schema.Types.ObjectId, ref: 'File' },
  photo3: { type: Schema.Types.ObjectId, ref: 'File' },
});

// Criando o modelo a partir do esquema
export const Motorcycle: Model<MotorcycleType> = mongoose.model<MotorcycleType>('Motorcycle', MotorcycleSchema);

export default Motorcycle;