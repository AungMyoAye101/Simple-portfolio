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
  const characters = words.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.09, ease: "easeOut" }}
      className={`flex flex-wrap  ${className}`}
    >
      {characters.map((char, i) => (
        <motion.span
          variants={charVarients}
          key={i}
          className={`${
            char === "Aung" ||
            char === "Myo" ||
            char === "Aye" ||
            char === "full-stack" ||
            char === "UI/UX" ||
            char === "Myanmar" ||
            char === "Yadanabon" ||
            char === "scalable" ||
            char === "passionate"
              ? "text-cyan-300"
              : "text-neutral-50"
          }`}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
