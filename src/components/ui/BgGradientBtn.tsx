import React from "react";

const BgGradientBtn = () => {
  return (
    <button className="relative">
      <div className="bg-orange-500 px-4 py-2 rounded-lg relative z-20">
        Bg Button
      </div>
      <div
        className="absolute -inset-1 rounded-lg -10"
        style={{
          backgroundImage: "conic-gradient(from 90deg,purple,cyan,yellow)",
        }}
      ></div>
    </button>
  );
};

export default BgGradientBtn;
