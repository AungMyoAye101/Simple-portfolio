import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 " id="about">
      <h1 className="heading">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8 max-w-4xl mx-auto ">
        <div className=" relative w-full md:w-[40%]  flex justify-center ">
          <Image
            src={"/profile.png"}
            width={400}
            height={400}
            alt="profile"
            className="size-60 md:size-96 border-4 border-gray-400 rounded-xl"
          />
        </div>
        <div className="w-[90%] md:w-[55%] flex flex-col gap-3 items-start justify-center mx-auto">
          <h2 className="font-lora text-xl md:text-2xl font-semibold">
            Hi &#33; I am Aung Myo Aye{" "}
          </h2>
          <p className="font-poppin text-base md:text-xl text-balance ">
            I am a dedicated full-stack web developer and UI/UX designer from
            Myanmar, with a passion for building seamless digital experiences.
            Currently, I am pursuing my studies at Yadanabon University, while
            continuously enhancing my development and design skills through
            real-world projects.
          </p>
          <p className="text-sm md:text-base font-poppin text-balance font-light">
            My expertise spans across a diverse range of technologies, including
            Bootstrap, SCSS, JavaScript, React, Next.js, Node.js, Express.js,
            Tailwind, jQuery, MongoDB, and MySQL. In addition, I leverage my
            design skills using Figma to craft intuitive and user-friendly
            interfaces
          </p>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-3 py-2 font-lora rounded-lg shadow-lg border-2  border-yellow-400 md:self-end mt-6  "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
