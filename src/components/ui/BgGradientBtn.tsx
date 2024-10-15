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
      className="text-lg  font-semibold font-poppin bg-gradient-to-r  from-cyan-400 via-cyan-600 to-cyan-900 rounded-full px-4 py-2"
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        className="flex items-center  gap-1 "
      >
        <motion.span
          variants={{
            initial: {
              x: 0,
            },
            hover: {
              x: -10,
              transition: {
                type: "spring",
              },
            },
          }}
        >
          {text}
        </motion.span>
        <motion.span
          variants={{
            initial: {
              rotate: 0,
            },
            hover: {
              rotate: "180deg",
            },
          }}
        >
          <FaArrowAltCircleRight />
        </motion.span>
      </motion.div>
    </motion.a>
  );
};
export default BggradientBtn;
