"use client";

import Image from "next/image";
import React, { FC } from "react";
import { BorderBeam } from "./ui/BorderBeam";

interface SkillsProp {
  title: string;
  skill: {
    icon: string;
    name: string;
    count: number;
  }[];
}

const TechSkills: FC<SkillsProp> = ({ title, skill }) => {
  return (
    <section className="w-full space-y-4 ">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-lora font-semibold ">
        {title}
      </h1>
      <section className="flex flex-wrap items-center justify-center md:justify-start gap-5  ">
        {skill.map((skill, i) => (
          <div
            key={i}
            className="group relative flex  items-center  w-36  rounded-md shadow-md bg-neutral-100 gap-1 border-2 border-cyan-300
              "
          >
            <div className="relative z-30 size-11 p-1  flex justify-center items-center overflow-hidden rounded-md bg-black  m-1">
              <Image
                src={skill.icon}
                width={40}
                height={40}
                alt={skill.name}
                className="group-hover:hidden "
              />
              <div
                className={`hidden group-hover:block  font-poppin text-white`}
              >
                {skill.count}%
              </div>
            </div>

            <p className="relative z-30 font-poppin font-semibold text-sm text-black mr-1">
              {skill.name}
            </p>

            <div
              className={`absolute bottom-0 z-20 w-0  group-hover:w-full h-full transition-all duration-500 ease-out ${
                skill.count > 79
                  ? "bg-emerald-400"
                  : skill.count > 60
                  ? "bg-cyan-400"
                  : "bg-rose-400"
              } `}
            >
              {/* <div className=" relative bottom-0 w-full h-0  group-hover:h-full bg-red-900 transition-all duration-500 ease-out  "></div> */}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TechSkills;
