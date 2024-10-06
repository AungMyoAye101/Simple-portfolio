"use client";

import { motion } from "framer-motion";

import React from "react";

const varients = {
  open: {
    x: "0%",
  },
  close: {
    x: "-100%",
  },
};

const SideBar = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <motion.div
      variants={varients}
      initial="close"
      animate="open"
      className="absolute top-0 left-0 bottom-0 flex flex-col justify-center items-center w-96 bg-white h-screen px-1  "
    >
      <a
        href="#"
        className="w-full font-lora font-semibold text-lg border border-gray-300 py-2 text-center"
        onClick={handleClick}
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
  );
};

export default SideBar;
