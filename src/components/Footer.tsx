import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <a
        href="#"
        className="size-10 rounded-full bg-purple-400 text-gray-100 animate-bounce "
      >
        l
      </a>
      <footer className="border-t border-t-gray-300 w-full py-12 px-4 md:px-10 flex justify-between">
        <div>Aung Myo Aye - Portfolio</div>
        {/* <ul className="flex gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul> */}
        <div className="flex gap-2">
          <div className="size-10 bg-purple-400 rounded-full shadow-md"></div>
          <div className="size-10 bg-purple-400 rounded-full shadow-md"></div>
          <div className="size-10 bg-purple-400 rounded-full shadow-md"></div>
          <div className="size-10 bg-purple-400 rounded-full shadow-md"></div>
        </div>
        <div className="px-4 py-2 bg-purple-400 rounded-lg shadow-md">
          Contact Me
        </div>
      </footer>
    </section>
  );
};

export default Footer;
