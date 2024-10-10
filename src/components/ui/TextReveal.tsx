"use client";
import { motion } from "framer-motion";
import React from "react";

const charVarients = {
  hidden: { opacity: 0 },
  reveal: {
    opacity: 1,
  },
};

const TextReveal = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const characters = words.split("");
  return (
    <motion.div
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02, ease: "easeOut" }}
      className={className}
    >
      {characters.map((char, i) => (
        <motion.span variants={charVarients} key={i}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
