import React from "react";
import { projects } from "@/data";

const Project = () => {
  return (
    <section className="py-16 px-4 md:px-10  min-h-screen " id="project">
      <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
        My Recent Projects
      </h1>
      <main className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" border border-gray-400 rounded-lg shadow-md overflow-hidden min-w-80 "
          >
            <div className="bg-green-300 w-full h-48"></div>
            <div className="p-2">
              <h1 className="text-balance md:text-lg font-lora font-semibold my-1">
                My Project
              </h1>
              <div className="flex justify-between items-center mb-3">
                <div className="flex ">
                  <div className="size-9 rounded-full border border-green-500 "></div>
                  <div className="size-9 rounded-full border border-green-500 -ml-2"></div>
                  <div className="size-9 rounded-full border border-green-500 -ml-2"></div>
                  <div className="size-9 rounded-full border border-green-500 -ml-2"></div>
                  <div className="size-9 rounded-full border border-green-500 -ml-2"></div>
                </div>
                <a
                  href="#"
                  className="text-lora font-medium text-sm md:text-base "
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Project;
