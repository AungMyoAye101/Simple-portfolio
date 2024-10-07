import Image from "next/image";
import React from "react";
import TechSkills from "./TechSkills";
import { backEnd, frontEnd, others, skills } from "@/data";
import { MagicCard } from "./ui/MagicCard";
import { BorderBeam } from "./ui/BorderBeam";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="section-container" id="skill">
      <div className="flex flex-col items-center gap-6">
        <h1 className="heading">My Skills</h1>
      </div>
      {/* My Skills  */}
      <div className="flex  justify-center items-center gap-6  md:gap-10">
        {skills.map(({ id, image, title, description }) => (
          <MagicCard
            key={id}
            className="  w-80 h-72 py-6 px-4 rounded-xl shadow-md shadow-sky-300 relative border border-sky-500 "
          >
            <FaCode />

            <div className="space-y-3 mt-2">
              <h1 className="font-poppin text-lg md:text-xl font-semibold">
                {title}
              </h1>
              <p className=" para-heading">{description}</p>
            </div>
          </MagicCard>
        ))}
      </div>

      <TechSkills title={frontEnd.title} skill={frontEnd.skills} />
      <TechSkills title={backEnd.title} skill={backEnd.skills} />
      <TechSkills title={others.title} skill={others.skills} />
    </section>
  );
};

export default Skills;
