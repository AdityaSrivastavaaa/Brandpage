import React from 'react'
import logo from '../assets/brand_logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className='flex flex-col md:flex-row my-0 mx-auto w-full md:w-[1200px] justify-between h-auto md:h-[72px] mt-4 items-center px-4'>
        <div className='mb-4 md:mb-0'>
          <img src={logo} alt="Brand Logo" className='w-32 md:w-auto' />
        </div>
        <div className='flex-grow mb-4 md:mb-0'>
          <ul className='flex flex-col md:flex-row w-full md:w-auto h-auto md:h-[24px] gap-4 md:gap-7 justify-center items-center font-semibold'>
            <li><a href="#">MENU</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        <div>
          <button className='bg-red-600 text-white px-4 py-2 md:py-1'>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
