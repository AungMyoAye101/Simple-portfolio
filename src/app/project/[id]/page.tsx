import { projects } from "@/data";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const project = projects[params.id];
  return (
    <section className="section-container">
      <div className="flex flex-col md:felx-row gap-10 justify-center items-center ">
        <div className="w-[45%]">
          <Image
            src={`/${project.image}`}
            width={400}
            height={400}
            alt="nama"
          />
        </div>
        <div className="w-[50%]">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </div>
    </section>
  );
};

export default page;
