"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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

const charVarients = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Hero = () => {
  const intro = "Hi &#33; I am Aung Myo Aye";
  const heroText =
    " A full-stack developer and UI/UX designer passionate about creating efficient, scalable web solutions.";

  const tagline =
    "  Crafting modern, responsive web applications with a touch of creativity.";
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-20 ">
      <motion.div className="w-full md:w-[50vw]  flex flex-col gap-4 items-center text-center md:text-start md:items-start ">
        <motion.h4
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className="font-lora text-base md:text-lg font-medium"
        >
          {intro.split("").map((char, i) => (
            <motion.span key={i} variants={charVarients}>
              {char}
            </motion.span>
          ))}
        </motion.h4>
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className=" text-primary font-poppin text-2xl  md:text-3xl lg:text-4xl font-bold leading-loose"
        >
          {heroText.split("").map((char, i) => (
            <motion.span key={i} variants={charVarients}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className="font-poppin  w-[90%] text-base md:text-xl font-light "
        >
          {tagline.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={charVarients}
              transition={{ duration: 1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div className="flex flex-wrap gap-4 justify-center">
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
      <div className=" relative w-full md:w-[40vw] ">
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
          <div className="absolute top-50 left-50  size-[250px] sm:size-[290px] md:size-[390px]   rounded-full border border-red-400"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
