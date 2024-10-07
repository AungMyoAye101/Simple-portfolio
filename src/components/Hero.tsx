import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-20 ">
      <div className="w-full md:w-[50vw]  flex flex-col gap-4 items-center text-center md:text-start md:items-start ">
        <h4 className="font-lora text-base md:text-lg font-medium">
          Hi &#33; I am Aung Myo Aye
        </h4>
        <h1 className=" text-primary font-poppin text-2xl  md:text-3xl lg:text-4xl font-bold leading-loose">
          A full-stack developer and UI/UX designer passionate about creating
          efficient, scalable web solutions.
        </h1>
        <p className="font-poppin  w-[90%] text-base md:text-xl font-light ">
          Crafting modern, responsive web applications with a touch of
          creativity.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg  relative bg-cyan-400"
          >
            Get In Touch
          </a>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-poppin rounded-lg shadow-lg relative border-2 border-cyan-400  "
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-full md:w-[40vw] ">
        <div className="relative size-60 sm:size-72 md:size-96  mx-auto ">
          <Image
            src={"/elizabeth.png"}
            fill
            alt="Aung Myo Aye's profile photo"
            className="object-cover object-center bg-cyan-400 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
