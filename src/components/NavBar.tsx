import React from "react";

const NavBar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white z-40 bg-opacity-85 border-b border-b-gray-400">
      <nav className="flex justify-between items-center px-10 py-2 ">
        <div>
          <h1 className="text-2xl md:text-3xl">AMA-Protfolio</h1>
        </div>
        <div className="flex items-center gap-3 text-xl font-lora font-semibold ">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
