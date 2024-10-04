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
          <div className=" relative flex flex-col items-center p-4 w-28 rounded-md shadow-md gap-2 border border-emerald-400">
            <div className="size-14 flex justify-center items-center bg-gray-50 rounded-full border border-teal-400">
              <Image src={skill.icon} width={40} height={40} alt={skill.name} />
            </div>

            <p className="font-poppin font-medium text-sm ">{skill.name}</p>
            <div className="absolute bottom-0 -z-10 w-full bg-rose-300 h-20 "></div>
          </div>
          // <div
          //   key={i}
          //   className="  flex justify-between items-center border border-gray-400 shadow-md rounded-lg relative overflow-hidden"
          // >
          //   <div className="ml-2 my-2">
          //     <div className="size-10 flex items-center justify-center  rounded-lg bg-gray-100  shadow-md">
          //       <Image src={skill.icon} width={30} height={30} alt="icons" />
          //     </div>
          //     <p className="font-poppin font-medium text-sm mt-1 text-white">
          //       {skill.name}
          //     </p>
          //   </div>
          //   <div className="mx-2 size-12 flex justify-center items-center rounded-full border-4 bg-white border-green-400">
          //     {skill.count}%
          //   </div>
          //   <div
          //     className={`absolute ${
          //       skill.count > 79
          //         ? "w-[80%]"
          //         : skill.count > 60
          //         ? "w-[70%]"
          //         : "w-[60%]"
          //     }   h-full -z-10 ${
          //       skill.count > 79
          //         ? "bg-emerald-500"
          //         : skill.count > 60
          //         ? "bg-cyan-500"
          //         : "bg-rose-500"
          //     }`}
          //   ></div>
          // </div>
        ))}
      </section>
    </section>
  );
};

export default TechSkills;
