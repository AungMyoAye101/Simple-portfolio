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
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6  ">
        {skill.map((skill, i) => (
          <div
            key={i}
            className="  flex justify-between items-center border border-gray-400 shadow-md rounded-lg relative overflow-hidden"
          >
            <div className="ml-2 my-2">
              <div className="size-10 flex items-center justify-center  rounded-full bg-gray-100  shadow-md">
                <Image src={skill.icon} width={30} height={30} alt="icons" />
              </div>
              <p className="font-poppin font-medium text-sm mt-1 text-white">
                {skill.name}
              </p>
            </div>
            <div className="mx-2 size-12 flex justify-center items-center rounded-full border-4 bg-white border-green-400">
              {skill.count}%
            </div>
            <div
              className={`absolute ${
                skill.count > 79
                  ? "w-[80%]"
                  : skill.count > 60
                  ? "w-[70%]"
                  : "w-[60%]"
              }   h-full -z-10 ${
                skill.count > 79
                  ? "bg-emerald-500"
                  : skill.count > 60
                  ? "bg-cyan-500"
                  : "bg-rose-500"
              }`}
            ></div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TechSkills;
