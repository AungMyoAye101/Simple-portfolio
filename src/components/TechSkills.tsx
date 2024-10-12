"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";

interface SkillsProp {
  title: string;
  skill: {
    icon: string;
    name: string;
    count: number;
  }[];
}

const techVarients = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 1,
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const TechSkills: FC<SkillsProp> = ({ title, skill }) => {
  return (
    <section className="w-full space-y-4 ">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-lora font-semibold ">
        {title}
      </h1>
      <motion.section
        variants={techVarients}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-center md:justify-start gap-5  "
      >
        {skill.map((skill, i) => (
          <div
            key={i}
            className="group relative flex  items-center  w-36  rounded-lg shadow-md gap-1 border-2 border-cyan-300
              "
          >
            <motion.div
              initial={{ y: 10, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                ease: "easeIn",
                duration: 0.1,
              }}
              className="relative z-30 size-11 p-1  flex justify-center items-center overflow-hidden rounded-md bg-black  m-1"
            >
              <Image
                src={skill.icon}
                width={40}
                height={40}
                alt={skill.name}
                className="group-hover:hidden object-contain"
              />
              <div
                className={`hidden group-hover:block  font-poppin text-white`}
              >
                {skill.count}%
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 10, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                ease: "linear",
                duration: 0.1,
              }}
              className="relative z-30 font-poppin font-semibold text-sm mr-1"
            >
              {skill.name}
            </motion.p>

            <div
              className={`absolute bottom-0 z-20 w-0  group-hover:w-full h-full transition-all duration-500 ease-out ${
                skill.count > 79
                  ? "bg-emerald-400"
                  : skill.count > 60
                  ? "bg-cyan-400"
                  : "bg-rose-400"
              } `}
            ></div>
          </div>
        ))}
      </motion.section>
    </section>
  );
};

export default TechSkills;
