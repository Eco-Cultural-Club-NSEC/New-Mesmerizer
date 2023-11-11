import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

    return (
        <>
            <div className="navbar flex justify-between items-center h-[100px] backdrop-opacity-10">
                <img className="w-80 ml-[30px]" src={logo} alt="Logo of Mesmerizer" />
                <div className="navItems hidden lg:flex space-x-10 mr-10 text-[20px]">
                    <ul>
                        <li className='mr-8 text-white'>Events</li>
                        <li className='mr-8 text-white'>Gallery</li>
                        <li className='mr-8 text-white'>Teams</li>
                        <li>
                            <button className='bg-cyan-400 px-2 py-1 rounded-lg relative bottom-[4px]'>Grab your passes</button>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden mr-10">
                    <button onClick={toggle}>{isOpen ? <HiX className='text-white text-[30px]' /> : <HiMenuAlt1 className='text-white text-[30px]' />}</button>
                </div>
            </div>
            {
                isOpen && (
                    <div className="navItems flex flex-col justify-center items-center bg-white/40 backdrop-blur-[8px] text-[20px]">
                    <ul className='text-center'>
                        <li className='mr-8 text-white'>Events</li>
                        <li className='mr-8 text-white'>Gallery</li>
                        <li className='mr-8 text-white'>Teams</li>
                        <li>
                            <button className='bg-cyan-400 rounded-lg relative bottom-[4px]'>Grab your passes</button>
                        </li>
                    </ul>
                </div>
                )
            }
        </>
    )
}

export default Header