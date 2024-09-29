import React from "react";
import { projects } from "@/data";

const Project = () => {
  return (
    <section className="py-20 px-10 space-y-12">
      <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
        My Recent Projects
      </h1>
      <main className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8">
        {projects.map((project, i) => (
          <div key={i} className="border border-gray-300 rounded-md shadow-md ">
            <div className="w-full bg-gray-300 h-48"></div>
            <div className="p-4 space-y-2">
              <h1 className="font-serif text-xl md:text-2xl  font-semibold">
                {project.title}
              </h1>
              <p className="text-sm md:text-base font-light font-lora line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center ">
                {project.iconList.map((icon, index) => (
                  <div
                    className={`size-10 border-[0.5px] border-gray-300 rounded-full ${
                      index > 0 && "-ml-2"
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm font-poppin py-2">
                <a
                  href="#"
                  className="px-3 py-2 border border-gray-300 rounded shadow-md"
                >
                  View Source Code
                </a>
                <a
                  href="#"
                  className="px-3 py-2 border border-gray-300 rounded shadow-md"
                >
                  Check Live Site
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
