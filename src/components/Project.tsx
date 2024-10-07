import React from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <section className="section-container" id="project">
      <h1 className="heading">My Recent Projects</h1>
      <main className="w-full max-w-5xl flex flex-col gap-8 md:gap-12  ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative flex flex-col md:flex-row  justify-between  p-0 md:p-4 gap-4 rounded-md shadow-md overflow-hidden border md:border-cyan-500 "
          >
            <div className="relative w-full  md:w-[45%] bg-gray-600 h-48 sm:h-80  md:h-64 md:rounded-md overflow-hidden">
              <Image src={project.image} fill alt="project name" className="" />
            </div>
            <div className="flex flex-col gap-2 justify-between  p-2 w-full md:w-[50%]">
              <div className="space-y-2">
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
                      className="flex  gap-1 items-center p-1 shadow-md rounded-md border border-gray-200"
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
            </div>
            {/* 
            <div className="hidden  group-hover:flex md:hidden flex-col gap-2 p-4  justify-center items-center absolute w-full h-full bg-cyan-100 transition-all duration-500 ease-out ">
              <p>{project.description}</p>

              <div className="w-full flex justify-between items-center ">
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
            </div> */}
          </div>
        ))}
      </main>

      <button className="border border-cyan-400 rounded-md shadow-md px-6 py-3 font-poppin text-base font-medium">
        Load More
      </button>
    </section>
  );
};

export default Project;
