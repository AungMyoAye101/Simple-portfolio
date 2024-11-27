"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const variants = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 50,
      dumpind: 20,
    },
  },
};

const Card = ({
  image,
  name,
  description,
  iconList,
  sourceCode,
  siteLink,
}: {
  image: string;
  name: string;
  description: string;
  iconList: { icon: string; name: string }[];
  sourceCode: string;
  siteLink: string;
}) => {
  return (
    <motion.div className="relative flex flex-col md:flex-row min-w-80  min-h-[70vh] items-center justify-between gap-4  w-full rounded-lg  overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative w-full md:w-[45%] h-[30vh] sm:h-[50vh] md:h-[40vh] lg:h-[50vh]  bg-gray-800 rounded-lg border border-gray-200"
      >
        <Image
          src={image}
          fill
          alt={name}
          className=" aspect-video object-cover  rounded-lg"
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="w-full md:w-[50%] flex flex-col gap-4 px-4 py-4"
      >
        <motion.h1
          variants={variants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppin font-semibold "
        >
          {name}
        </motion.h1>
        <motion.p
          variants={variants}
          className="font-lora text-lg md:text-xl text-gray-200 "
        >
          {description}
        </motion.p>
        <motion.div
          variants={variants}
          className="flex items-center flex-wrap gap-2"
        >
          {iconList.map((icon, i) => (
            <div
              key={i}
              className="flex gap-2 items-center border border-cyan-500 rounded-lg px-2 py-1 hover:shadow-md hover:shadow-cyan-400 bg-blend-difference"
            >
              <Image src={icon.icon} width={25} height={25} alt={icon.name} />{" "}
              <span className=" font-poppin font-light">{icon.name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={variants}
          className="flex justify-between items-center"
        >
          <a
            href={sourceCode}
            target="_blank"
            className="group relative flex items-center gap-2 text-base md:text-lg font-poppin hover:text-purple-400"
          >
            <FaGithub />
            <span>Source Code</span>
            <span className=" absolute -bottom-2 h-1 bg-purple-400 w-0 group-hover:w-full rounded-lg transition-all duration-300"></span>
          </a>
          <a
            href={siteLink}
            target="_blank"
            className="group relative flex items-center gap-2 text-base md:text-lg font-poppin hover:text-purple-400"
          >
            <FaExternalLinkAlt />
            <span>Live Site</span>
            <span className=" absolute -bottom-2 h-1 bg-purple-400 w-0 group-hover:w-full rounded-lg transition-all duration-300"></span>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
