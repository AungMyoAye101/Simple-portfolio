"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaLocationArrow, FaXmark } from "react-icons/fa6";
import SideBar from "./SideBar";
import { AnimatePresence, motion } from "framer-motion";
import { NavLinks } from "@/data";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

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
          <h1 className=" font-lora text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            AMA <span className="hidden lg:inline"> -Portfolio</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center  text-xl font-lora font-semibold ">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="px-4 py-1 relative"
              onClick={() => setActive(link.id)}
            >
              <span className="relative z-10">{link.name}</span>
              {active === link.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 rounded-full"
                ></motion.span>
              )}
            </a>
          ))}
        </div>
        <div>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="flex gap-1 items-center font-medium font-poppin text-white p-2 rounded-full shadow-md  bg-sky-500"
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
