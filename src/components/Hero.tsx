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
        <p className="font-poppin text-base md:text-xl font-light ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
          expedita fugit. Ut eius iste eligendi culpa expedita perspiciatis in
          modi sapiente doloremque quisquam minima animi quas quos labore, ad
          quae.
        </p>
        <a
          href="mailto:aungmyoaye101@gmail.com"
          className="px-6 py-2 font-poppin rounded-lg shadow-lg"
        >
          Let Get In Touch
        </a>
      </div>
      <div className="w-full md:w-[40vw]">
        <div className="relative size-72 md:size-96 rounded-full">
          <Image
            src={"/"}
            fill
            alt="Aung Myo Aye's profile photo"
            className="object-cover object-center bg-slate-700 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
