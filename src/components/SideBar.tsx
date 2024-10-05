"use client";

import { motion } from "framer-motion";

import React from "react";
const varients = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const SideBar = ({ open }: { open: boolean }) => {
  return (
    <motion.div
      animate={open ? "open" : "close"}
      className="absolute top-12 left-0 bottom-0 h-screen w-60 bg-green-400 flex justify-center items-center"
    >
      <motion.div variants={varients}>Home</motion.div>
    </motion.div>
  );
};

export default SideBar;
