// components/GradientButton.js

import { motion } from "framer-motion";

const GradientButton = () => {
  return (
    <motion.button
      whileHover={{
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0)",
      }}
      className="relative p-2 px-4 rounded-lg text-white bg-gray-900 overflow-hidden border-4 border-transparent hover:border-gray-300 transition-all duration-1000"
    >
      <span className="z-10">Hover me</span>
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20"
      ></motion.div>
    </motion.button>
  );
};

export default GradientButton;
