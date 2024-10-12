"use client";

import { projects } from "@/data";

import Card from "./ui/Card";
import MovingGradientBorderButton from "./ui/Button";

const Project = () => {
  return (
    <section className="section-container relative" id="project">
      <h1 className="heading">My Recent Projects</h1>

      <main className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-8 w-full">
        {projects.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
          />
        ))}
      </main>

      <MovingGradientBorderButton text="Load more" />
    </section>
  );
};

export default Project;
