"use client";

import { MotorcycleProps } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import MotorcycleDetails from "./MotorcycleDetails";
// import { formatName } from "@/utils";


interface MotorcycleCardProps {
  motorcycle: MotorcycleProps;
}

const MotorcycleCard = ({ motorcycle }: MotorcycleCardProps) => {
  const { vehicleType, price, brand, model, modelYear, fuel, codeFipe, referenceMonth, fuelAcronym } = motorcycle;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="motorcycles-card group">
      <div className="motorcycle-card__content">
        <h2 className=" capitalize motorcycles-card__content-title">
          {(brand)}
        </h2>
        <h3 className="capitalize font-semibold">
          {model}
        </h3>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
          {price}
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" alt="car-model" fill priority className="object-contain" />
      </div>
      
      <div className="relative flex w-full mt-2 mi">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className=" flex flex-col ms-10 justify-center  items-center gap-2">
            <Image src="/motorcycle.svg" width={20} height={20} alt="little-motorcycle" />
            <p className="text-[14px]">
              {fuel}
            </p>
          </div>
          <div className=" flex flex-col me-10 justify-center items-center gap-2">
            <Image color="#000000" src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">
              {modelYear}
            </p>
          </div>
        </div>

        <div className="motorcycles-card__btn-container"> 
          <CustomButton 
            title="Veja Mais" 
            containerStyles="w-full py-[16px] rounded-full bg-primary-red"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            />
        </div>
      </div>

      <MotorcycleDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} motorcycle={motorcycle}/>
    </div>
  );
}

export default MotorcycleCard;
