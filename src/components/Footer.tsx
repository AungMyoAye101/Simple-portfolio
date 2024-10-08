import React from "react";
import { FaArrowUp, FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-4 ">
      <a
        href="#"
        className="bg-cyan-400 p-3 rounded-full animate-bounce   shadow-md  "
      >
        <FaArrowUp className="text-lg text-white " />
      </a>
      <footer className="w-full py-12  px-10 rounded-t-md flex flex-wrap gap-6 items-center justify-center md:justify-between bg-neutral-900">
        <div className="text-xl font-poppin font-semibold ">
          Aung Myo Aye - Portfolio
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/AungMyoAye101"
            target="_blank"
            className="p-3 border border-cyan-400  rounded-full shadow-md"
          >
            <FaGithub className="text-xl " />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556195843942"
            target="_blank"
            className="p-3 border border-cyan-400  rounded-full shadow-md"
          >
            <FaFacebookF className="text-xl  " />
          </a>
          <a
            href=""
            target="_blank"
            className="p-3 border border-cyan-400  rounded-full shadow-md"
          >
            <FaLinkedin className="text-xl  " />
          </a>
          <a
            href="https://www.instagram.com/aungmyoaye404/"
            target="_blank"
            className="p-3 border border-cyan-400  rounded-full shadow-md"
          >
            <FaInstagram className="text-xl  " />
          </a>
        </div>
        <a
          href="mailto:aungmyoaye101@gmail.com"
          className="flex gap-1 items-center font-medium font-poppin text-white px-4 py-2 rounded-lg shadow-md  bg-cyan-500"
        >
          <span> Contact Me</span>
          <FaLocationArrow />
        </a>
      </footer>
    </section>
  );
};

export default Footer;
