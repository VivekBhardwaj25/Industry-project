import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#011627] flex flex-col justify-center md:pt-24 pt-16'>
      <div className="w-[1200px] mx-auto flex md:flex-row justify-between flex-col flex-wrap gap-y-4 pl-10 md:pl-0">
          <div className=''>
            <p className='text-wrap text-lg text-white font-light'>Masters in industrial manufacturing <br /> with 25 years of experience and 10+ <br /> awards!</p>
          </div>

          <div>
            <p className='text-white text-2xl'>Products</p>

            <ul className='md:mt-5 mt-3'>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Roller Chain Drives</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Gear Couplings</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Conveyor Chains</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Marine Bearings</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Saving investments</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Gear Drives</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Industrial Shafts</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Mechanical Drives</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Conveyor Belts</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Helical Gears</li>
            </ul>
          </div>

          <div>
            <p className='text-white text-2xl'>Features</p>

            <ul className='md:mt-5 mt-3'>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Enterprise</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Customer Service</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Media & Entertainment</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Product</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Marketing</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Analytics</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Professional Services</li>
            </ul>
          </div>

          <div>
            <p className='text-white text-2xl'>Company</p>

            <ul className='md:mt-5 mt-3'>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>About Us</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Careeres </li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Legal</li>
              <li className='text-white text-base font-normal hover:text-[#d94948] cursor-pointer'>Contact Us</li>
            </ul>
          </div>

      </div>

      <div className='flex justify-between items-center w-full mx-auto md:mt-36 mt-10 pb-4 md:px-20 px-4'>
        <p className='text-wrap md:text-base text-sm text-white font-light'>Copyright © 2024 Sierra Industry</p>
        <p className='text-wrap md:text-base text-sm text-white font-light'>Powered by Sierra Industry</p>
      </div>
    </div>
  )
}

export default Footer
