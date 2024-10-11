"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaLocationArrow, FaXmark } from "react-icons/fa6";
import SideBar from "./SideBar";
import { AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-50 dark:bg-neutral-900 z-40 bg-opacity-85  mx-auto">
      <nav className="z-40 flex justify-between items-center px-4 md:px-16 py-3 backdrop-blur-sm">
        <div
          className="block md:hidden rounded-full text-cyan-400 border border-cyan-400 p-2 shadow-md cursor-pointer relative z-50"
          onClick={handleClick}
        >
          {open ? <FaXmark /> : <FaBars />}
        </div>
        <AnimatePresence>
          {open && <SideBar handleClick={handleClick} />}
        </AnimatePresence>
        <div>
          <h1 className=" font-lora text-2xl md:text-3xl font-bold bg-gradient-to-tr from-orange-400 to-purple-400 bg-clip-text text-transparent">
            AMA <span className="hidden lg:inline"> -Portfolio</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center  text-xl font-lora font-semibold ">
          <a href="#" className="bg-gradient-text">
            Home
          </a>
          <a href="#skill" className="bg-gradient-text">
            Skills
          </a>
          <a href="#project" className="bg-gradient-text">
            Projects
          </a>
          <a href="#about" className="bg-gradient-text">
            About
          </a>
          <a href="#contact" className="bg-gradient-text">
            Contact
          </a>
        </div>
        <div>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="flex gap-1 items-center font-medium font-poppin text-white px-3 py-2 rounded-lg shadow-md  bg-sky-500"
          >
            <span className="hidden lg:block"> Contact Me</span>
            <FaLocationArrow />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
