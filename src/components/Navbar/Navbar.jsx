import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(true);
  const [clicked, setClicked] = useState(true);

  const handleMenu= () => {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <>
    
        <div className="flex justify-between items-center px-3 bg-[rgba(0,0,0,0.1)]">
          {/* left side of Navabr */}
          <div className="flex flex-col items-center cursor-pointer">
            <span className="md:text-3xl font-bold text-white text-2xl">
              Vivek
            </span>
            <span className="md:text-lg text-sm font-light text-white mt-[-10px]">
              BUSINESS
            </span>
          </div>

          {/* Right side of Navbar */}
          <div>
            <div className="md:hidden cursor-pointer">
              <span className="text-white" onClick={handleMenu} >
                {menu ? 
                  <TbMenu2 className="size-6"/>
                 : 
                  <RxCross2 className="size-6"/>
                }
              </span>
            </div>
            <div className="md:block hidden">
              <ul className="flex gap-x-8 items-center">
                <li>
                    <NavLink 
                    to="/"
                    className={({isActive}) => `${isActive ? "text-white" : "text-[#bfc5cb]"} hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]`}

                    >Home</NavLink>
                </li>
                <li>
                  <NavLink 
                  to="/about"
                  className={({isActive}) => `${isActive ? "text-white" : "text-[#bfc5cb]"} hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]`}
                  >About</NavLink>
                </li>
                <li className="hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]">
                  <NavLink to="/product" 
                   className={({isActive}) => `${isActive ? "text-white" : "text-[#bfc5cb]"} hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]`}
                  >Products</NavLink>
                </li>
                <li className="hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]">
                <NavLink to="/projects"
                 className={({isActive}) => `${isActive ? "text-white" : "text-[#bfc5cb]"} hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]`}
                >Projects</NavLink>
                </li>
                <li className="hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]">
                  <NavLink to="/contact"
                   className={({isActive}) => `${isActive ? "text-white" : "text-[#bfc5cb]"} hover:text-white text-[#bfc5cb] cursor-pointer text-[17px]`}
                  >Contact</NavLink>
                </li>
                <li className="cursor-pointer bg-[#d94948] text-white hover:bg-[#011627] rounded-full transition-colors text-center font-sans">
                  <a href="">
                    <button className="px-6 py-2">Take Action</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Navbar;
