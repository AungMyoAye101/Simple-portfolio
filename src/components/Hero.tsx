"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import TextReveal from "./ui/TextReveal";

import BgGradientBtn from "./ui/BgGradientBtn";

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
    "A Full-Stack developer and UI/UX designer passionate about creating efficient, scalable web solutions.";

  const tagline =
    "Crafting modern, responsive web applications with a touch of creativity.";
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-20 ">
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
          className="font-poppin  w-[90%] text-base md:text-xl font-light gap-1 text-purple-300"
        />

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
        <BgGradientBtn />
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
