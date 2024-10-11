"use client";

import { useTime, useTransform } from "framer-motion";
import React from "react";

const BgGradientBtn = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
  });
  return (
    <button className="relative">
      <div className="bg-orange-200 px-4 py-2 rounded-lg relative z-20">
        Bg Button
      </div>
      <div
        style={{
          background: `${rotatingBg}`,
        }}
        className="absolute -inset-1 rounded-lg  z-10"
      ></div>
    </button>
  );
};

export default BgGradientBtn;
