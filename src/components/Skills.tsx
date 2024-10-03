import Image from "next/image";
import React from "react";
import TechSkills from "./TechSkills";
import { backEnd, frontEnd, others } from "@/data";

const Skills = () => {
  return (
    <section
      className="py-16 px-10 flex flex-col items-center gap-12 min-h-screen relative overflow-hidden"
      id="skill"
    >
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          My Tech Stack
        </h1>
      </div>
      {/* My Skills  */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-80 px-4 py-6 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/react.svg"} width={40} height={40} alt="icons" />

          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Fornt-End Development
            </h1>
            <p className=" text-sm md:text-base text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat beatae minima architecto numquam, autem animi dolore,
              aliquam expedita fugiat voluptatibus voluptate sequi voluptas!
              Soluta, aperiam. Ab excepturi laudantium saepe!
            </p>
          </div>
        </div>
        <div className="max-w-80 p-4 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/nextjs.svg"} width={40} height={40} alt="icons" />
          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Back-End Development
            </h1>
            <p className=" text-sm md:text-base text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat beatae minima architecto numquam, autem animi dolore,
              aliquam expedita fugiat voluptatibus voluptate sequi voluptas!
              Soluta, aperiam. Ab excepturi laudantium saepe!
            </p>
          </div>
        </div>
        <div className="max-w-80 p-4 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/mongodb.svg"} width={40} height={40} alt="icons" />
          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Database & Others
            </h1>
            <p className=" text-sm md:text-base text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat beatae minima architecto numquam, autem animi dolore,
              aliquam expedita fugiat voluptatibus voluptate sequi voluptas!
              Soluta, aperiam. Ab excepturi laudantium saepe!
            </p>
          </div>
        </div>
      </div>

      <TechSkills title={frontEnd.title} skill={frontEnd.skills} />
      <TechSkills title={backEnd.title} skill={backEnd.skills} />
      <TechSkills title={others.title} skill={others.skills} />
    </section>
  );
};

export default Skills;
