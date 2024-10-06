import Image from "next/image";
import React from "react";
import TechSkills from "./TechSkills";
import { backEnd, frontEnd, others, skills } from "@/data";
import { MagicCard } from "./ui/MagicCard";
import { BorderBeam } from "./ui/BorderBeam";

const Skills = () => {
  return (
    <section className="section-container" id="skill">
      <div className="flex flex-col items-center gap-6">
        <h1 className="heading">My Skills</h1>
      </div>
      {/* My Skills  */}
      <div className="flex flex-wrap justify-center items-center w-full gap-4  md:gap-6">
        {skills.map(({ id, image, title, description }) => (
          <MagicCard
            key={id}
            className="max-w-72 h-80 rounded-xl shadow-md relative "
          >
            <div className="px-4 py-6">
              <Image
                src={image}
                width={40}
                height={40}
                alt="icons"
                className="mb-4"
              />

              <div className="space-y-3 mt-2">
                <h1 className="font-poppin text-lg md:text-xl font-semibold">
                  {title}
                </h1>
                <p className=" para-heading">{description}</p>
              </div>
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
