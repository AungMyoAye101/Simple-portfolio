"use client";
import React, { useState } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow(true);
  };
  return (
    <section className="section-container" id="project">
      <h1 className="heading">My Recent Projects</h1>
      <main className="w-full max-w-5xl flex flex-col gap-12  ">
        {projects.map((project, i) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            exit={{ opacity: 0 }}
            key={i}
            className="group relative flex flex-col md:flex-row  justify-between  p-0 md:p-4 gap-4 rounded-md shadow-md overflow-hidden md:border border-cyan-500 "
            onMouseOver={showToggle}
          >
            <motion.div
              initial={{ opacity: 0.2, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeIn",
              }}
              className="relative w-full  md:w-[45%] h-[30vh] md:h-[45vh] md:rounded-md overflow-hidden bg-gray-600"
            >
              <Image
                src={project.image}
                fill
                alt="project name"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.8, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeIn",
                staggerChildren: 1,
              }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-2 justify-between   p-2 w-full md:w-[50%]"
            >
              <h1 className="text-xl md:text-2xl font-lora font-semibold">
                {project.title}
              </h1>
              <p className="text-sm md:text-base hidden md:block font-poppin  font-medium line-clamp-2 md:line-clamp-none">
                {project.description}
              </p>
              <div className="hidden md:flex flex-wrap gap-2 ">
                {project.iconList.map((icon, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-1 items-center p-1 shadow-md rounded-md border border-cyan-500"
                  >
                    <Image src={icon.icon} width={20} height={20} alt="icons" />
                    <span>{icon.name}</span>
                  </div>
                ))}
              </div>
              <div className=" hidden md:flex justify-between items-center pb-3">
                <a
                  href="#"
                  className="text-lora font-medium text-sm md:text-base flex items-center gap-1 "
                >
                  <span>View Source Code</span>
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="text-lora font-medium text-sm md:text-base flex items-center gap-1 "
                >
                  <span> Check Live Site</span>
                  <FaLocationArrow />
                </a>
              </div>
            </motion.div>

            {show && (
              <div className="opacity-0  group-hover:opacity-100  flex flex-col gap-2 p-4 py-8  justify-between items-center absolute w-full h-full bg-neutral-900 text-white transition-all duration-500 ease-out ">
                <p className="font-lora ">{project.description}</p>
                <div className="flex flex-wrap gap-2 ">
                  {project.iconList.map((icon, idx) => (
                    <div
                      key={idx}
                      className="flex  gap-1 items-center p-1 shadow-md rounded-md border border-cyan-500"
                    >
                      <Image
                        src={icon.icon}
                        width={20}
                        height={20}
                        alt="icons"
                      />
                      <span>{icon.name}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-between items-center  ">
                  <a
                    href="#"
                    className="text-lora font-medium text-sm md:text-base flex items-center gap-1 "
                  >
                    <span>Source Code</span>
                    <FaGithub />
                  </a>
                  <a
                    href="#"
                    className="text-lora font-medium text-sm md:text-base flex items-center gap-1 "
                  >
                    <span> Live Site</span>
                    <FaLocationArrow />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </main>

      <button className="border border-cyan-400 rounded-md shadow-md px-6 py-3 font-poppin text-base font-medium">
        Load More
      </button>
    </section>
  );
};

export default Project;
