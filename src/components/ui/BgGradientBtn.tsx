import { motion } from "framer-motion";

import React from "react";
import { FaArrowAltCircleRight, FaLink } from "react-icons/fa";

const BggradientBtn = ({ text }: { text: string }) => {
  return (
    <motion.a
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      }}
      style={{
        backgroundPosition: "200% 200%",
      }}
      href="#"
      className="flex items-center  gap-1 text-lg  font-semibold font-poppin bg-gradient-to-r  from-cyan-400 via-cyan-600 to-cyan-900 rounded-full px-4 py-2"
    >
      <motion.span initial={{ x: 0 }} whileHover={{ x: -20 }}>
        {text}
      </motion.span>
      <motion.span initial={{ rotate: 0 }} whileHover={{ rotate: "180deg" }}>
        <FaArrowAltCircleRight />
      </motion.span>
    </motion.a>
  );
};
export default BggradientBtn;
