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
  photo1: { type: Schema.Types.ObjectId, ref: 'File', required: false },
  photo2: { type: Schema.Types.ObjectId, ref: 'File',  required: false },
  photo3: { type: Schema.Types.ObjectId, ref: 'File',  required: false },
});

const Motorcycle = mongoose.models.Motorcycles || mongoose.model("Motorcycles", MotorcycleSchema);

export default Motorcycle;