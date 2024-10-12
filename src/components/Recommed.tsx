import { projects } from "@/data";
import React from "react";
import Card from "./ui/Card";

const Recommed = () => {
  return (
    <main className="space-y-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppin font-semibold">
        Recommedation
      </h1>
      <div className="flex overflow-hidden overflow-x-scroll gap-6 max-w-6xl">
        {projects.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </main>
  );
};

export default Recommed;
