"use client";

import { projects } from "@/data";

import Card from "./ui/Card";
import MovingGradientBorderButton from "./ui/Button";

const Project = () => {
  return (
    <section className="section-container relative" id="project">
      <h1 className="heading">My Recent Projects</h1>

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

      <MovingGradientBorderButton text="Load more" />
    </section>
  );
};

export default Project;
