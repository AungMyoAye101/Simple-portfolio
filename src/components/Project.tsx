import { projects } from "@/data";

import Card from "./ui/Card";

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

      <button className="border border-cyan-400 rounded-md shadow-md px-6 py-3 font-poppin text-base font-medium">
        Load More
      </button>
    </section>
  );
};

export default Project;
