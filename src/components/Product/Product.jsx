import React from 'react'
import Navbar from '../Navbar/Navbar'

function Product() {
  return (
    <div className="bg-[url('/src/assets/product.jpg')] h-screen w-full bg-no-repeat bg-cover bg-fixed bg-center">
      <Navbar/>
      <div className='flex justify-center items-center h-screen'>
      <p className='text-white text-7xl font-bold'>Product</p>

      </div>
    </div>
  )
}

export default Product
