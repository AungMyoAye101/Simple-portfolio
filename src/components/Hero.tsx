import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-20 px-4 md:px-10">
      <div className="w-full md:w-[50vw]  flex flex-col gap-4 items-center text-center md:text-start md:items-start ">
        <h4 className="font-lora text-base md:text-lg font-medium">
          Hi &#33; I am Aung Myo Aye
        </h4>
        <h1 className="font-poppin text-2xl  md:text-3xl lg:text-4xl font-bold leading-loose">
          A full-stack developer and UI/UX designer passionate about creating
          efficient, scalable web solutions.
        </h1>
        <p className="font-poppin text-balance w-[90%] text-base md:text-xl font-light ">
          Crafting modern, responsive web applications with a touch of
          creativity.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg bg-yellow-400 animate-pulse"
          >
            Get In Touch
          </a>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg border border-yellow-400  "
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-full md:w-[40vw] ">
        <div className="relative size-60 sm:size-72 md:size-96  mx-auto ">
          <Image
            src={"/profile.png"}
            fill
            alt="Aung Myo Aye's profile photo"
            className="object-cover object-center  rounded-xl border border-gray-300 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
