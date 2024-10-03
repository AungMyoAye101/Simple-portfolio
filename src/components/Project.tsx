import React from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

const Project = () => {
  return (
    <section
      className="py-16 px-4 md:px-10  min-h-screen flex flex-col items-center gap-8 "
      id="project"
    >
      <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
        My Recent Projects
      </h1>
      <main className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" border border-gray-400 rounded-lg shadow-md overflow-hidden min-w-80 md:w-full mx-auto"
          >
            <div className="relative bg-gray-600 w-full h-60">
              <Image src={project.image} fill alt="project name" className="" />
            </div>
            <div className="p-2 ">
              <h1 className="text-balance md:text-lg font-lora font-semibold my-1">
                My Project
              </h1>
              <p className="font-xs md:text-sm font-poppin  font-medium line-clamp-2">
                {project.description}
              </p>
              <div className="flex justify-between items-center my-3">
                <div className="flex ">
                  {project.iconList.map((icon, idx) => (
                    <div
                      key={idx}
                      className={`size-10 flex justify-center items-center rounded-full border border-gray-500 ${
                        idx > 0 && "-ml-2"
                      }`}
                    >
                      <Image src={icon} width={25} height={25} alt="icons" />
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-lora font-medium text-sm md:text-base flex items-center gap-1 "
                >
                  <span> Check Live Site</span>
                  <FaLocationArrow />
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>

      <button className="border border-gray-400 rounded-md shadow-md px-6 py-3 font-poppin text-base font-medium">
        Load More
      </button>
    </section>
  );
};

export default Project;
