"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import TextReveal from "./ui/TextReveal";

import BgGradientBtn from "./ui/BgGradientBtn";
import Button from "./ui/Button";

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

const buttonVarients = {
  initial: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
  inView: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const Hero = () => {
  const intro = "Hi! I am Aung Myo Aye";
  const heroText =
    "A Full-Stack developer and UI/UX designer passionate about creating efficient, scalable web solutions.";

  const tagline =
    "Crafting modern, responsive web applications with a touch of creativity.";
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-20 px-4 md:px-10 ">
      <div className="w-full md:w-[50vw]  flex flex-col gap-4 items-center text-center md:text-start md:items-start ">
        <TextReveal
          words={intro}
          className="font-lora text-base md:text-lg font-medium gap-1"
        />
        <TextReveal
          words={heroText}
          className="  font-poppin text-2xl  md:text-3xl lg:text-4xl font-bold gap-2 "
        />

        <TextReveal
          words={tagline}
          className="font-poppin  w-[90%] text-base md:text-xl font-light gap-1 "
        />

        <motion.div
          variants={buttonVarients}
          initial="initial"
          whileInView="inView"
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.a
            variants={buttonVarients}
            href="mailto:aungmyoaye101@gmail.com"
          >
            <BgGradientBtn text="Get In Touch" />
          </motion.a>
          <motion.a
            variants={buttonVarients}
            href="mailto:aungmyoaye101@gmail.com"
          >
            <Button text="Download Resume" />
          </motion.a>
        </motion.div>
      </div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
