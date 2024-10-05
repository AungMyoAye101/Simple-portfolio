"use client";

import Image from "next/image";
import React, { FC } from "react";

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
    <section className="w-full">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-lora font-semibold mb-4">
        {title}
      </h1>
      <section className="flex flex-wrap items-center  gap-6  ">
        {skill.map((skill, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center p-4 w-28 rounded-md shadow-md gap-2 border border-emerald-400 "
          >
            <div className="size-14 flex justify-center items-center overflow-hidden bg-white rounded-full b ">
              <Image
                src={skill.icon}
                width={40}
                height={40}
                alt={skill.name}
                className="group-hover:hidden"
              />
              <div className="hidden group-hover:block  font-poppin ">
                {skill.count}%
              </div>
            </div>

            <p className="font-poppin font-medium text-sm text-white">
              {skill.name}
            </p>

            <div
              className={`absolute bottom-0 -z-10 w-full  h-[65%] ${
                skill.count > 79
                  ? "bg-emerald-400"
                  : skill.count > 60
                  ? "bg-cyan-400"
                  : "bg-rose-400"
              } `}
            ></div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TechSkills;
