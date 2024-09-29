import React from "react";

const Project = () => {
  return (
    <section className="py-20 px-10 space-y-12">
      <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
        My Recent Projects
      </h1>
      <main>
        <div className="border border-gray-300 rounded-md shadow-md w-96">
          <div className="w-full bg-gray-300 h-48"></div>
          <div className="p-4 space-y-2">
            <h1 className="font-serif text-xl md:text-2xl  font-semibold">
              My Project Name
            </h1>
            <p className="text-sm md:text-base font-light font-lora line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              quidem vitae, quas libero dolor ea laudantium? Eius voluptatum
            </p>
            <div className="flex items-center ">
              <div className="size-10 border-[0.5px] border-gray-300 rounded-full  "></div>
              <div className="size-10 border-[0.5px] border-gray-300 rounded-full -ml-2"></div>
              <div className="size-10 border-[0.5px] border-gray-300 rounded-full -ml-2"></div>
              <div className="size-10 border-[0.5px] border-gray-300 rounded-full -ml-2"></div>
              <div className="size-10 border-[0.5px] border-gray-300 rounded-full -ml-2"></div>
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
      </main>
    </section>
  );
};

export default Project;
