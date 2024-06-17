import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import ind1 from "/src/assets/ind1.jpg";
import ind2 from "/src/assets/ind2.jpg";
import ind3 from "/src/assets/ind3.jpg";

function Home() {
  return (
    <div className="">
      <div className="bg-gradient-to-t from-gray-800 to-black relative h-screen">
        <div className="bg-[url('/src/assets/home.jpg')] h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed absolute mix-blend-lighten">
          <Navbar />

          <div className="flex flex-col justify-center items-center h-screen">
            <p className="md:text-lg text-base text-white font-bold">
              World's Leading Industry Corporation
            </p>
            <h1 className="md:text-[5rem] text-[3rem] px-4 md:px-0 text-center font-bold text-white">
              One Industry All Solution
            </h1>
            <a href="" className="mt-6">
              <button className="cursor-pointer bg-[#d94948] text-white hover:bg-[#011627] rounded-full transition-colors text-center font-sans px-6 py-2">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About us  */}
      <div className="h-[680px] bg-[#ffffff] flex flex-col justify-center items-center">
        <div className="text-center px-10 md:px-0 md:w-1/2 flex flex-col md:gap-y-8 gap-y-4">
          <p className="text-base font-bold">About Us</p>
          <h2 className="md:text-[34px] text-2xl font-bold leading-[2.3rem] text-wrap md:px-10">
            25 Long Years Of Manufacturing Excellence With Quality At It's Best!
          </h2>
          <p className="text-gray-400 text-base text-wrap">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor
            aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
            consequat ipsum.
          </p>
          <p className="text-gray-400 text-base text-wrap">
            Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris in erat justo.
          </p>
        </div>

        <a href="" className="mt-12">
          <button className="cursor-pointer bg-[#d94948] text-white hover:bg-[#011627] rounded-full transition-colors text-center font-sans px-6 py-2">
            Learn More
          </button>
        </a>
      </div>

      {/* Our Product */}
      <div className="bg-[url('/src/assets/product.jpg')] h-screen bg-no-repeat bg-cover bg-fixed bg-center  mix-blend-overlay">
        <div className="flex items-center w-[85%] flex-wrap md:flex-nowrap mx-auto">
          <div className="divide-y flex flex-col md:gap-y-8 gap-y-4 mt-4">
            <div className="flex flex-col md:gap-y-4 gap-y-2">
              <p className="text-base font-bold text-white">Our Products</p>
              <p className="md:text-2xl text-xl font-bold text-white">
                We are the industry heads and produce the most reliable and
                trendy solution you are looking for.
              </p>
            </div>
            <div className="flex flex-col md:gap-y-4 gap-y-2">
              <p className="text-lg font-bold text-white mt-4">
                Roller Chain Drives
              </p>
              <p className="text-base text-gray-400">
                A short product description that highlights the main usage and
                features of the product.
              </p>
            </div>
            <div className="flex flex-col md:gap-y-4 gap-y-2">
              <p className="text-lg font-bold text-white mt-4">
                Roller Chain Drives
              </p>
              <p className="text-base text-gray-400">
                A short product description that highlights the main usage and
                features of the product.
              </p>
            </div>
            <div className="flex flex-col md:gap-y-4 gap-y-2">
              <p className="text-lg font-bold text-white mt-4">
                Roller Chain Drives
              </p>
              <p className="text-base text-gray-400">
                A short product description that highlights the main usage and
                features of the product.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:pl-40 mt-4 md:mt-0">
            <h2 className="md:text-4xl text-xl font-bold text-white">
              The only place where you’ll get the perfect solution for all your
              industry needs.
            </h2>
            <a href="" className="md:mt-12 mt-4">
              <button className="cursor-pointer bg-[#d94948] text-white hover:bg-[#011627] rounded-full transition-colors text-center font-sans px-6 py-2">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Our Contributions */}
      <div className="w-full mx-auto flex flex-col justify-between md:mt-28 mt-16 mb-8">
        <div className="text-center flex flex-col gap-4">
          <p className="text-md font-extrabold">Our Contributions</p>
          <h1 className="text-4xl font-bold ">Industries We Serve!</h1>
        </div>

        {/* Image row */}

        <div className="flex justify-center gap-8 items-center flex-wrap md:mt-20 mt-10 gap-y-6">
          <div className="w-[370px] flex flex-col justify-center gap-y-4">
            <div className="">
              <img src={ind1} alt="" className="w-full h-[550px] object-cover" />
            </div>
            <div>
              <p className="text-xl font-bold">Aerospace And Defense</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-wrap">
                This can be a short description about a project or an industry
                you are contributing to through the reliable products you build.
              </p>
            </div>
          </div>
          <div className="w-[370px] flex flex-col justify-center gap-y-4">
            <div className="">
              <img src={ind2} alt="" className="w-full h-[550px] object-cover" />
            </div>
            <div>
              <p className="text-xl font-bold text-start">Aerospace And Defense</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-wrap text-start">
                This can be a short description about a project or an industry
                you are contributing to through the reliable products you build.
              </p>
            </div>
          </div>
          <div className="w-[370px] flex flex-col justify-center gap-y-4">
            <div className="">
              <img src={ind3} alt="" className="w-full h-[550px] object-cover" />
            </div>
            <div>
              <p className="text-xl font-bold text-start">Aerospace And Defense</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-wrap text-start">
                This can be a short description about a project or an industry
                you are contributing to through the reliable products you build.
              </p>
            </div>
          </div>
          
         
        </div>

        <div className="flex justify-between items-center flex-wrap md:mt-20 mt-10 md:px-24 px-6">
          <div>
            <p className="md:text-2xl text-xl font-bold">Need Help with Easier Industrial Solutions? We Are Experts!</p>
          </div>
          <div className="mt-4 md:mt-0">
          <a href="" className="md:mt-12">
              <button className="cursor-pointer bg-[#d94948] text-white hover:bg-[#011627] rounded-full transition-colors text-center font-sans px-6 py-2">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
