"use client";

import { projects } from "@/data";

import Card from "./ui/Card";
import MovingGradientBorderButton from "./ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";

const filteredProjects = ["All", "Front-End", "Back-End"];
const Project = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <section className="section-container relative" id="project">
      <h1 className="heading">My Recent Projects</h1>
      <div className="rounded-full relative flex border-2 border-orange-400">
        {filteredProjects.map((tab, i) => (
          <div
            key={i}
            className="relative px-4 py-2 text-base md:text-lg font-semibold font-poppin rounded-full"
            onMouseEnter={() => setActiveTab(i)}
          >
            <span className="relative z-10">{tab}</span>
            {activeTab === i && (
              <motion.span
                layoutId="activeTab"
                transition={{ ease: "easeOut" }}
                className="absolute inset-1 rounded-full bg-gradient-to-tr from-orange-500 via-purple-500 to-sky-500"
              />
            )}
          </div>
        ))}
      </div>

      <main className="flex flex-col gap-12 md:gap-16 w-full">
        {projects.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            iconList={item.iconList}
            sourceCode={item.sourceCode}
            siteLink={item.siteLink}
          />
        ))}
      </main>
    </section>
  );
};

export default Project;
