import Image from "next/image";
import React from "react";
import TechSkills from "./TechSkills";
import { backEnd, frontEnd, others } from "@/data";

const Skills = () => {
  return (
    <section className="section-container" id="skill">
      <div className="flex flex-col items-center gap-6">
        <h1 className="heading">My Skills</h1>
      </div>
      {/* My Skills  */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="max-w-80 px-4 py-6 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image
            src={"/react.svg"}
            width={40}
            height={40}
            alt="icons"
            className="mb-4"
          />

          <div className="space-y-3 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              UI & UX Design
            </h1>
            <p className=" para-heading">
              UI/UX design expertise with a focus on user-friendly,
              mobile-responsive interfaces using Figma.
            </p>
          </div>
        </div>
        <div className="max-w-80 p-4 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/nextjs.svg"} width={40} height={40} alt="icons" />
          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Full-Stack Development
            </h1>
            <p className=" para-heading ">
              Proficient in full-stack development using technologies such as
              React, Next.js, Vue.js, Node.js, Express, and MongoDB.
            </p>
          </div>
        </div>
        <div className="max-w-80 p-4 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/mongodb.svg"} width={40} height={40} alt="icons" />
          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Database & Others
            </h1>
            <p className=" para-heading">
              Experienced in designing and developing complex applications with
              database management using Prisma, MySQL, and MongoDB.
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
