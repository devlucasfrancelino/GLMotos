import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: 
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer : string;
  SetManufacturer : (manufacturer : string) => void;
}

export interface MotorcycleProps {
    make: string,
    model: string,
    year: string,
    type: string,
    displacement: string,
    engine: string,
    power: string,
    torque: string,
    compression: string,
    bore_stroke: string,
    valves_per_cylinder: string,
    fuel_system: string,
    fuel_control: string,
    ignition: string,
    cooling: string,
    gearbox: string,
    transmission: string,
    frame: string,
    front_suspension: string,
    front_wheel_travel: string,
    rear_suspension: string,
    rear_wheel_travel: string,
    front_tire: string,
    rear_tire: string,
    front_brakes: string,
    rear_brakes: string,
    total_weight: string,
    seat_height: string,
    total_height: string,
    total_length: string,
    total_width: string,
    wheelbase: string,
    fuel_capacity: string,
    starter: string
}