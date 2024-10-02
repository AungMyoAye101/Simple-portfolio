import React from "react";
import {
  FaArrowUp,
  FaDownLeftAndUpRightToCenter,
  FaInstagram,
} from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <a href="#" className="bg-gray-700 p-3 rounded-full animate-bounce ">
        <FaArrowUp className="text-lg text-white " />
      </a>
      <footer className="border-t border-t-gray-300 w-full py-12 px-4 md:px-10 flex justify-between bg-gray-600">
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
        <div className="flex gap-4">
          <div className="p-3 bg-blue-100 rounded-full shadow-md">
            <FaGithub className="text-xl " />
          </div>
          <div className="p-3 bg-green-100 rounded-full shadow-md">
            <FaFacebookF className="text-xl  " />
          </div>
          <div className="p-3 bg-green-100 rounded-full shadow-md">
            <FaLinkedin className="text-xl  " />
          </div>
          <div className="p-3 bg-green-100 rounded-full shadow-md">
            <FaInstagram className="text-xl  " />
          </div>
        </div>
        <a
          href="mailto:aungmyoaye101@gmail.com"
          className="flex gap-1 items-center font-medium font-poppin text-white px-4 py-2 rounded-lg shadow-md  bg-purple-600"
        >
          <span> Contact Me</span>
          <FaLocationArrow />
        </a>
      </footer>
    </section>
  );
};

export default Footer;
