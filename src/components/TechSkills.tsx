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
    <section className="w-full">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-lora font-semibold mb-4">
        {title}
      </h1>
      <section className="flex flex-wrap items-center  gap-6  ">
        {skill.map((skill, i) => (
          <NeonGradientCard
            key={i}
            className="group relative flex flex-col items-center justify-center w-32 h-36 rounded-md shadow-md gap-2  "
          >
            <div className="size-14 flex justify-center items-center overflow-hidden bg-white rounded-full b ">
              <Image
                src={skill.icon}
                width={40}
                height={40}
                alt={skill.name}
                className="group-hover:hidden"
              />
              <div
                className={`hidden group-hover:block  font-poppin ${
                  skill.count > 79
                    ? "text-emerald-400"
                    : skill.count > 60
                    ? "text-cyan-400"
                    : "text-rose-400"
                } `}
              >
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
          </NeonGradientCard>
        ))}
      </section>
    </section>
  );
};

export default TechSkills;
