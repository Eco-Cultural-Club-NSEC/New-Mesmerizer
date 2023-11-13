import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      console.log(isOpen);
      setIsOpen(!isOpen);
  }

  return (
      <>
          <div className="navbar flex justify-between items-center lg:h-[100px] h-[65px] backdrop-opacity-10">
              <Link to="/"><img className="lg:w-[80px] w-[47px] lg:ml-[30px] ml-[10px]" src={logo} alt="Logo of Mesmerizer" /></Link>
              <div className="nav-content lg:flex lg:mr-10">
                  <div className="navItems hidden lg:flex space-x-10 text-[20px]">
                      <ul>
                          <li className='mr-8 text-white'>
                              <Link to="/events">Events</Link>
                          </li>
                          <li className='mr-8 text-white'>
                              <Link to="/gallery">Gallery</Link>
                          </li>
                      </ul>
                  </div>
                  <button className='bg-cyan-400 px-2 py-1 rounded-lg relative lg:left-0 left-[32px] bottom-[4px] lg:text-[18px] text-[14px]'>Grab your passes</button>
              </div>
              <div className="lg:hidden mr-4">
                  <button onClick={toggle}>{isOpen ? <HiX className='text-white text-[30px]' /> : <HiMenuAlt1 className='text-white text-[30px]' />}</button>
              </div>
          </div>
          {
              isOpen && (
                  <div className="navItems flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-[20px]">
                      <ul className='text-center'>
                          <li className='mr-8 text-white'>Events</li>
                          <li className='mr-8 text-white'>Gallery</li>
                          <li className='mr-8 text-white'>Teams</li>
                      </ul>
                  </div>
              )
          }
      </>
  )
}

export default Header