import React from 'react';

const HeroText = () => {
  return (
    <div className='w-[595px] h-[613px] flex flex-col justify-start items-start gap-[36px] text-left'>
      <h1 className='w-[595px] h-[306px] font-extrabold text-8xl'>YOUR FEET DESERVE THE BEST</h1>
      <p className='w-[404px] h-[91px] text-base font-semibold text-gray-500'>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
      </p>
      <div className='flex justify-start items-start gap-[40px]'>
        <button className='bg-red-600 w-[150px] h-[41px] text-white'>Shop Now</button>
        <button className='bg-slate-50 border border-gray-400 w-[150px] h-[41px]'>Category</button>
      </div>
    </div>
  );
}

export default HeroText;
