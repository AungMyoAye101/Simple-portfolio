import React from "react";

const Button = ({ text }: { text?: string }) => {
  return (
    <button className="px-4 py-2 rounde-full border-none bg-cyan-600 bg-blend-difference">
      <span>{text}</span>
    </button>
  );
};

export default Button;
