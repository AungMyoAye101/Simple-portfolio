"use client";

import { motion } from "framer-motion";

import React from "react";

const varients = {
  open: {
    clipPath: "circle(1200px at 0 0)",
    transition: {
      duration: 1,
    },
  },
  close: {
    clipPath: "circle(30px at -100px 0 )",
    transition: {
      duration: 1,
    },
  },
};

const SideBar = ({ open }: { open: boolean }) => {
  return (
    <motion.div
      animate={open ? "open" : "close"}
      className={` flex justify-center items-center absolute transition-opacity duration-500 ease-out`}
    >
      <motion.div
        variants={varients}
        className="absolute top-0 left-0 bottom-0 flex flex-col justify-center items-center w-[50vw] bg-white h-screen px-4   "
      >
        <a
          href="#"
          className="w-full font-lora font-semibold text-lg border border-gray-300 py-2 text-center"
        >
          Home
        </a>
        <a
          href="#skill"
          className="w-full font-lora font-semibold text-lg border border-gray-300 py-2 text-center"
        >
          Skills
        </a>
        <a
          href="#project"
          className="w-full font-lora font-semibold text-lg border border-gray-300 py-2 text-center"
        >
          Projects
        </a>
        <a
          href="#about"
          className="w-full font-lora font-semibold text-lg border border-gray-300 py-2 text-center"
        >
          About
        </a>
        <a
          href="#contact"
          className="w-full font-lora font-semibold text-lg border border-gray-300 py-2 text-center"
        >
          Contact
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
