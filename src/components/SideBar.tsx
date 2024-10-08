"use client";

import { NavLinks } from "@/data";
import { motion } from "framer-motion";

import React from "react";

const varients = {
  open: {
    x: "0%",
    transition: {
      when: "beforechild",
    },
  },
  close: {
    x: "-100%",
    transition: {
      when: "afterchild",
      staggerChildren: 0.1,
    },
  },
};
const childVarients = {
  open: { opacity: 1 },
  close: { opacity: 0 },
};

const SideBar = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <motion.div
      variants={varients}
      initial="close"
      animate="open"
      exit="close"
      className="absolute top-0 left-0 bottom-0 flex flex-col justify-center items-center gap-2 w-96 bg-white dark:bg-neutral-900 h-screen px-4  "
    >
      {NavLinks.map((link, i) => (
        <motion.a
          variants={childVarients}
          whileHover={{ scale: 0.9 }}
          href={link.link}
          className="w-full font-lora font-semibold text-lg border border-gray-300 py-2 text-center"
          onClick={handleClick}
          key={i}
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SideBar;
