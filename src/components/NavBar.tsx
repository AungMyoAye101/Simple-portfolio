import React from "react";
import { FaBars } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white z-40 bg-opacity-85 ">
      <nav className="flex justify-between items-center px-10 py-2 backdrop-blur-sm">
        <div className="block md:hidden rounded-full border border-gray-300 p-2 shadow-md cursor-pointer">
          <FaBars />
        </div>
        <div>
          <h1 className=" font-lora text-2xl md:text-3xl font-bold text-gray-600">
            AMA <span className="hidden md:inline"> -Portfolio</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xl font-lora font-semibold ">
          <a href="#">Home</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="flex gap-1 items-center font-medium font-poppin text-white px-4 py-2 rounded-lg shadow-md  bg-purple-600"
          >
            <span className="hidden md:block"> Contact Me</span>
            <FaLocationArrow />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
