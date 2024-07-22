"use client";


import React from 'react';
import Image from 'next/image';
import { CustomButton } from "@/components";


const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                As melhores motos em um só lugar — fácil e rápido! 
            </h1>

            <p className='hero__subtitle'>
                Simplifique sua experiencia comprando moto conosco.
            </p>

            <CustomButton 
              title="Explorar Motos"
              containerStyles="bg-red-600
              text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero.png" alt='hero' fill className='object-contain'/>
          </div>
            <div className='hero__image-overlay'></div>
        </div>
    </div>
  )
}

export default Hero