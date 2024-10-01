import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen py-12 ">
      <h1 className="font-poppin font-bold text-2xl sm:text3xl md:text-4xl lg:text-5xl text-center">
        About Me
      </h1>
      <div className="flex justify-center  gap-10 mt-10 w-[80vw] p-8 bg-green-300 mx-auto">
        <div className="w-[45%]">
          <Image src={"/profile.png"} width={400} height={400} alt="profile" />
        </div>
        <div className="w-[45%] flex flex-col gap-4 items-start">
          <h2 className="font-lora text-xl md:text-2xl font-semibold">
            Hi! I am Aung Myo Aye{" "}
          </h2>
          <p className="font-poppin text-lg md:text-xl">
            A full stack developer and UI/UX Desinger from Myanmar.I'm currenty
            learning python and dijango. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nisi, ab assumenda aliquid sed quas harum
            molestiae distinctio tenetur debitis in accusamus, iure eum numquam
            deserunt libero voluptate esse, exercitationem minima.
          </p>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg border border-yellow-400 shadow-yellow-100 "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
