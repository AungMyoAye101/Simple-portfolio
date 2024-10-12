"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      animate={{ x: position.x + 10, y: position.y + 10 }}
      className="fixed z-50"
    >
      <Image
        src={"/butterfly.svg"}
        width={20}
        height={20}
        alt="butterfly coursor"
      />
    </motion.div>
  );
};

export default Cursor;
