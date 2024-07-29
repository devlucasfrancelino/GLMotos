import mongoose from "mongoose";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit' | 'reset';
  textStyles?: string;
  containerStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer : string;
  SetManufacturer : (manufacturer : string) => void;
}

export interface MotorcycleProps {
    vehicleType: Int16Array,
    price: string,
    brand: string,
    model: string,
    modelYear: Int16Array,
    fuel: string,
    codeFipe: string,
    referenceMonth:  string,
    fuelAcronym: string
}

export interface MotorcycleRequest {
    brands : string, 
    model : string, 
    year : string
}

export interface MotorcycleType extends Document {
  model: string;
  make: string;
  year: string;
  price: number;
  color?: string;
  KM?: number;
  modelCode: string;
  makeCode: string;
  fipeYear: string;
  photo1?: mongoose.Types.ObjectId;
  photo2?: mongoose.Types.ObjectId;
  photo3?: mongoose.Types.ObjectId;
}