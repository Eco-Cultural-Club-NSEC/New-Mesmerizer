import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-red-500 flex justify-between items-center h-[100px]">
            <img className="w-80 ml-[30px]" src={logo} alt="Logo of Mesmerizer" />
            <div className="navItems flex space-x-10 mr-10 text-[20px]">
                <ul>
                    <li className='mr-8 text-white'>Events</li>
                    <li className='mr-8 text-white'>Gallery</li>
                    <li className='mr-8 text-white'>Teams</li>
                    <li>
                        <button className='bg-cyan-400 px-2 py-1 rounded-lg relative bottom-[4px]'>Grab your passes</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header