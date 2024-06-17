import React from 'react'
import Navbar from '../Navbar/Navbar'

function About() {
  return (
    <div className="bg-[url('/src/assets/about.jpg')] h-screen w-full bg-no-repeat bg-cover bg-fixed bg-center">
      <Navbar/>
      <div className='flex justify-center items-center h-screen'>
      <h1 className='text-white text-7xl font-bold'>About us</h1>

      </div>
    </div>
  )
}

export default About
