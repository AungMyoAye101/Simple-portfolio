import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10  p-10">
      <div className="w-full md:w-[50vw]  flex flex-col gap-4 md:gap-6 items-start">
        <h4 className="font-lora text-base md:text-lg font-medium">
          Hi! I am Aung Myo Aye
        </h4>
        <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          A Full Stack Web Developer And UI/UX Desinger From Myanmar
        </h1>
        <p className="font-poppin text-balance w-[90%] text-base md:text-xl font-light ">
          I bring ideas to life through clean and user-friendly interfaces.
          Let's create something extraordinary together!
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg bg-yellow-400 "
          >
            Get In Touch
          </a>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg border border-yellow-400 shadow-yellow-100"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-full md:w-[40vw] ">
        <div className="relative size-72 sm:size-80 md:size-96 rounded-full mx-auto">
          <Image
            src={"/"}
            fill
            alt="Aung Myo Aye's profile photo"
            className="object-cover object-center bg-yellow-400 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
