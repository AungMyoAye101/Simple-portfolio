import Image from "next/image";
import React from "react";

const forntendSkil = [1, 2, 3, 4];

const TechSkills = () => {
  return (
    <section>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora font-semibold mb-4">
        Front-End Skills
      </h1>
      <section className="flex flex-wrap justify-center w-full  gap-6">
        {forntendSkil.map((x) => (
          <div
            key={x}
            className="flex justify-between items-center min-w-72 border border-gray-400 shadow-md rounded-lg relative overflow-hidden"
          >
            <div className="ml-2 my-2">
              <div className="size-10 flex items-center justify-center  rounded-full bg-gray-100  shadow-md">
                <Image src={"/react.svg"} width={30} height={30} alt="icons" />
              </div>
              <p className="font-poppin font-medium text-sm mt-1">React Js</p>
            </div>
            <div className="mx-2 size-12 flex justify-center items-center rounded-full border-4 border-green-400">
              80%
            </div>
            <div className="absolute  bg-blue-500 w-[75%] h-full -z-10"></div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TechSkills;
