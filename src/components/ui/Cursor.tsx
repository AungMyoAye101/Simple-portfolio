"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);
  return (
    <motion.div
      animate={{ x: position.x + 5, y: position.y + 5 }}
      className="size-10 rounded-full border-2 border-rose-600 fixed z-50"
    ></motion.div>
  );
};

export default Cursor;
