"use client"

import { useState } from "react"
import Image from "next/image"

import { MotorcycleProps } from "@/types"
import CustomButton from "./CustomButton"

interface MotorcycleCardProps {
  motorcycle : MotorcycleProps;
}

const MotorcycleCard = ({motorcycle} : MotorcycleCardProps) => {
  const { make, model, year, type, displacement, engine, compression, bore_stroke, valves_per_cylinder, fuel_system, fuel_control, cooling, gearbox, transmission, frame, front_suspension, front_wheel_travel, rear_suspension, rear_wheel_travel, front_tire, rear_tire, front_brakes, rear_brakes, seat_height, wheelbase, fuel_capacity, starter } = motorcycle;
  
  const MotorcyclePrice = 10;

  return (
    <div className="motorcycles-card group">
      <div className="motorcycle-card__content">
        <h2 className="motorcycles-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>
          Car Rent..
        </span>
      </p>
    </div>
  )
}

export default MotorcycleCard