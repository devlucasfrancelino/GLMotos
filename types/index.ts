import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: 
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
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