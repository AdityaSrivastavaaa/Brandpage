import React from 'react'
import HeroText from '../components/HeroText'
import HeroImage from '../components/HeroImage'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-full h-auto md:w-[1125px] md:h-[613px] mx-auto mt-32 p-4'>
      <div className='w-full md:w-1/2 p-2'>
        <HeroText />
      </div>
      <div className='w-full md:w-1/2 p-2'>
        <HeroImage />
      </div>
    </div>
  )
}

export default Hero
