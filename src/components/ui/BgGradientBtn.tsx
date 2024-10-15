import { motion } from "framer-motion";

import React from "react";
import { FaArrowAltCircleRight, FaLink } from "react-icons/fa";

const BggradientBtn = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="flex items-center  gap-1 text-lg  font-semibold font-poppin bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 via-purple-400 to-cyan-400 rounded-full px-4 py-2"
    >
      <span>{text}</span>

      <FaArrowAltCircleRight />
    </a>
  );
};
export default BggradientBtn;
