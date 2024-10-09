"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const textVarients = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      ease: "easeIn",
    },
  },
};

const imageVarients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 5,
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-20 ">
      <motion.div
        variants={textVarients}
        initial="initial"
        animate="animate"
        className="w-full md:w-[50vw]  flex flex-col gap-4 items-center text-center md:text-start md:items-start "
      >
        <motion.h4
          variants={textVarients}
          className="font-lora text-base md:text-lg font-medium"
        >
          Hi &#33; I am Aung Myo Aye
        </motion.h4>
        <motion.h1
          variants={textVarients}
          className=" text-primary font-poppin text-2xl  md:text-3xl lg:text-4xl font-bold leading-loose"
        >
          A full-stack developer and UI/UX designer passionate about creating
          efficient, scalable web solutions.
        </motion.h1>
        <motion.p
          variants={textVarients}
          className="font-poppin  w-[90%] text-base md:text-xl font-light "
        >
          Crafting modern, responsive web applications with a touch of
          creativity.
        </motion.p>

        <motion.div
          variants={textVarients}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg  text-black bg-cyan-400 border-2 border-cyan-400 "
          >
            Get In Touch
          </a>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg relative border-2 border-cyan-400  "
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
      <div className="w-full md:w-[40vw] ">
        <motion.div
          variants={imageVarients}
          initial="initial"
          animate="animate"
          className="relative size-60 sm:size-72 md:size-96  mx-auto "
        >
          <Image
            src={"/elizabeth.png"}
            fill
            alt="Aung Myo Aye's profile photo"
            className="object-cover object-center bg-cyan-400 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
