import React from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <section className="section-container" id="project">
      <h1 className="heading">My Recent Projects</h1>
      <main className="w-full max-w-5xl flex flex-col gap-8  ">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" flex flex-col md:flex-row  justify-between  p-0 md:p-4 gap-4 border border-gray-400 rounded-lg shadow-md overflow-hidden "
          >
            <div className="relative w-full  md:w-[50%] bg-gray-600 h-44  md:h-64 rounded-lg overflow-hidden">
              <Image src={project.image} fill alt="project name" className="" />
            </div>
            <div className="flex flex-col justify-between px-2  ">
              <div className="space-y-4">
                <h1 className="text-xl md:text-2xl font-lora font-semibold">
                  My Project
                </h1>
                <p className="text-sm md:text-base font-poppin  font-medium line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>
                <div className="flex ">
                  {project.iconList.map((icon, idx) => (
                    <div
                      key={idx}
                      className={`size-8 md;size-10 flex justify-center items-center rounded-full border border-gray-500 ${
                        idx > 0 && "-ml-2"
                      }`}
                    >
                      <Image src={icon} width={20} height={20} alt="icons" />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" flex justify-between items-center pb-3">
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
