import { motion } from "framer-motion";
import React from "react";
const BggradientBtn = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="bg-gradient-to-r from-cyan-600 via-gray-400  to-purple-600 px-6 py-2 rounded-full text-black"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
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
