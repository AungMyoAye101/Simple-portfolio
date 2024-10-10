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
      duration: 3,
    },
  },
};

const charVarients = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Hero = () => {
  const intro = "Hi! I am Aung Myo Aye";
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
          className=" text-primary font-poppin text-2xl  md:text-3xl lg:text-4xl font-bold leading-loose "
        >
          {heroText.split("").map((char, i) => (
            <motion.span key={i} variants={charVarients} className="">
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02, ease: "easeOut" }}
          className="font-poppin  w-[90%] text-base md:text-xl font-light"
        >
          {tagline.split("").map((char, i) => (
            <motion.span key={i} variants={charVarients}>
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, stiffness: 100, type: "spring" }}
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
      <div className=" relative w-full md:w-[40vw] ">
        <motion.div
          variants={imageVarients}
          initial="initial"
          animate="animate"
          className="relative size-60 sm:size-72 md:size-96  mx-auto z-20 "
        >
          <Image
            src={"/elizabeth.png"}
            fill
            alt="Aung Myo Aye's profile photo"
            className="object-cover object-center rounded-full bg-cyan-400 "
          />
          {/* <div className="relative h-full w-full rounded-full animate-spin">
            <div className="size-80 z-10 rounded-full absolute -right-10 top-[40%] bg-red-400 "></div>
            <div className="size-80 z-10 rounded-full absolute -left-10 top-[40%] bg-orange-400 "></div>
            <div className="size-80 z-10 rounded-full absolute -top-10 right-[10%] bg-blue-400 "></div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
