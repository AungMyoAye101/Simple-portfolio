import { motion } from "framer-motion";
import React from "react";
const BggradientBtn = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="bg-gradient-to-r from-cyan-400 via-pink-400  to-purple-400 px-6 py-2 rounded-full"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      <span>{text}</span>
    </motion.button>
  );
};

export default BggradientBtn;
