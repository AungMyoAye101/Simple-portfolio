"use client";
import React, { useRef, useState } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const projectVarients = {
  initial: {
    opacity: 0,
  },
  animation: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export const textAnimate = {
  initial: {
    y: 20,

    transition: {
      ease: "easeIn",
      delay: 1,
    },
  },
  animation: {
    y: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      ease: "easeOut",
    },
  },
};

const Project = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  const showToggle = () => {
    setShow(true);
  };
  return (
    <section className="section-container relative" id="project">
      <h1 className="heading">My Recent Projects</h1>
      <motion.div className=" absolute left-0 top-0 h-4  rounded-lg bg-cyan-400" />
      <main className="w-full max-w-5xl flex flex-col gap-12 " ref={ref}>
        {projects.map((project, i) => (
          <motion.div
            variants={projectVarients}
            initial="initial"
            whileInView="animation"
            key={i}
            className="group relative flex flex-col md:flex-row  justify-between  p-0 md:p-4 gap-4 rounded-md shadow-md  "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-full  md:w-[45%] h-[30vh] md:h-[45vh] md:rounded-md overflow-hidden bg-gray-600"
            >
              <Image
                src={project.image}
                fill
                alt="project name"
                className="object-cover"
              />
            </motion.div>
            <motion.div className="flex flex-col gap-2 justify-between   p-2 w-full md:w-[50%]">
              <div className="flex justify-between">
                <motion.h1
                  variants={textAnimate}
                  initial="initial"
                  whileInView="animation"
                  className="text-xl md:text-2xl font-lora font-semibold"
                >
                  {project.title}
                </motion.h1>
                <button
                  className="flex md:hidden font-poppin text-sm "
                  onClick={showToggle}
                >
                  See Detail
                </button>
              </div>

              <motion.p
                variants={textAnimate}
                initial="initial"
                whileInView="animation"
                className="text-sm md:text-base hidden md:block font-poppin  font-medium line-clamp-2 md:line-clamp-none"
              >
                {project.description}
              </motion.p>
              <motion.div
                variants={textAnimate}
                initial="initial"
                whileInView="animation"
                className="hidden md:flex flex-wrap gap-2 "
              >
                {project.iconList.map((icon, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-1 items-center p-1 shadow-md rounded-md border border-cyan-500"
                  >
                    <Image src={icon.icon} width={20} height={20} alt="icons" />
                    <span>{icon.name}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                variants={textAnimate}
                initial="initial"
                whileInView="animation"
                className=" hidden md:flex justify-between items-center pb-3"
              >
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
              </motion.div>
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
          // <motion.div
          //   style={{ y }}
          //   key={i}
          //   className=" bg-green-500 flex justify-center items-center gap-12"
          // >
          //   <div className="relative w-[45%] h-[60vh] bg-sky-600">
          //     <Image src={project.image} fill alt="project name" />
          //   </div>
          //   <div className="w-[50%] flex flex-col gap-10 px-10">
          //     <h1>{project.title}</h1>
          //     <p>{project.description}</p>
          //     <div className="w-full flex justify-between items-center  ">
          //       <a
          //         href="#"
          //         className="text-lora font-medium text-sm md:text-base flex items-center gap-1 "
          //       >
          //         <span>Source Code</span>
          //         <FaGithub />
          //       </a>
          //       <a
          //         href="#"
          //         className="text-lora font-medium text-sm md:text-base flex items-center gap-1 "
          //       >
          //         <span> Live Site</span>
          //         <FaLocationArrow />
          //       </a>
          //     </div>
          //   </div>
          // </motion.div>
        ))}
      </main>

      <button className="border border-cyan-400 rounded-md shadow-md px-6 py-3 font-poppin text-base font-medium">
        Load More
      </button>
    </section>
  );
};

export default Project;
