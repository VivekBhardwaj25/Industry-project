import React from 'react'
import Navbar from '../Navbar/Navbar'

function Contact() {
  return (
    <div className="bg-[url('/src/assets/contact.jpg')] h-screen w-full bg-no-repeat bg-cover bg-fixed bg-center">
      <Navbar/>
      <div className='flex justify-center items-center h-screen'>
      <p className='text-white text-7xl font-bold text-center'>Contact</p>

      </div>
    </div>
  )
}

export default Contact
