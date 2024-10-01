import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10  p-10">
      <div className="w-full md:w-[50vw]  flex flex-col gap-4 items-start">
        <h4 className="font-lora text-base md:text-lg font-medium">
          Hi! I am Aung Myo Aye
        </h4>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-loose">
          A Full Stack Web Developer And UI/UX Desinger From Myanmar
        </h1>
        <p className="font-poppin text-balance w-[90%] text-base md:text-xl font-light ">
          I bring ideas to life through clean and user-friendly interfaces.
          Let's create something extraordinary together!
        </p>
        <div className="flex gap-4">
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
        <div className="relative size-64 sm:size-72 md:size-96  mx-auto ">
          <Image
            src={"/profile.png"}
            fill
            alt="Aung Myo Aye's profile photo"
            className="object-cover object-center  rounded-xl border border-gray-300 "
          />
          <div className="p-2 rounded-lg z-20 shadow-md border border-gray-300  absolute -left-20 top-[45%] animate-pulse">
            <Image
              src={"/mongodb.svg"}
              width={40}
              height={60}
              alt="icon "
              className=" object-cover object-center "
            />
          </div>
          <div className="p-2 rounded-lg z-20 shadow-md border border-gray-300  absolute -right-20 top-[45%]  animate-pulse">
            <Image
              src={"/react.svg"}
              width={40}
              height={60}
              alt="icon "
              className=" object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
