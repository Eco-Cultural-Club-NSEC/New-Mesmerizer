import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.webp";
import technoLogo from "../../assets/techno.webp";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar flex justify-between items-center lg:h-[100px] h-[65px]">
        <div className="backdrop-blur-sm bg-black/30 flex justify-between items-center lg:h-[100px] h-[65px] w-full">
          <div className="flex">
            <Link to="/">
              <img
                className="lg:w-[80px] w-[47px] lg:ml-[30px] ml-[10px] z-10"
                src={logo}
                loading="lazy"
                alt="Logo of Mesmerizer"
              />
            </Link>
            <img
              className="lg:w-[60px] w-[37px] lg:ml-[10px] ml-[10px] z-10"
              src={technoLogo}
              loading="lazy"
              alt="Logo of Techno India International"
            />
          </div>
          <div className="nav-content lg:flex lg:mr-10">
            <div className="navItems hidden lg:flex space-x-10 text-[20px]">
              <ul>
                <li className="mr-[60px] text-white">
                  <Link to="/events">Events</Link>
                </li>
                <li className="mr-[60px] text-white">
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-row justify-center items-center">
              <Link to="/grab">
                <button
                  className="bg-cyan-400 font-semibold lg:px-6 px-3 lg:py-2 py-1 rounded-lg relative lg:left-0 left-[-10px] lg:bottom-[7px] bottom-[3px] lg:text-[18px] text-[14px]"
                  style={{ boxShadow: "3px 3px yellow" }}
                >
                  Grab Your Passes
                </button>
              </Link>
              <div className="lg:hidden mr-4">
                <button onClick={toggle}>
                  {isOpen ? (
                    <HiX className="text-white text-[30px]" />
                  ) : (
                    <HiMenuAlt1 className="text-white text-[30px]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="navItems flex flex-col p-3 justify-center items-center backdrop-blur-xl bg-black/30 text-[20px]"
          style={{ backgroundColor: "#0e151b" }}
        >
          <ul className="text-center">
            <ul>
              <li className="text-white mb-4">
                <Link to="/events" onClick={toggle}>
                  Events
                </Link>
              </li>
              <li className="text-white">
                <Link to="/gallery" onClick={toggle}>
                  Gallery
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
