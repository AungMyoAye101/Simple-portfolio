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
        className="absolute top-0 left-0 bottom-0 flex flex-col justify-center items-center bg-green-400 w-40 h-screen  "
      >
        <div>home</div>
        <div>home</div>
        <div>home</div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
