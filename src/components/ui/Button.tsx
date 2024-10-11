import React from "react";

const Button = ({ text }: { text?: string }) => {
  return (
    <button className="px-6 py-2 rounded-full border-none bg-cyan-600 bg-blend-difference font-poppin">
      <span>{text}</span>
    </button>
  );
};

export default Button;
