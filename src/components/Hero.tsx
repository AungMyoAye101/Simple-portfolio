import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center p-10">
      <div className="w-full md:w-[50vw]  flex flex-col gap-6 items-start">
        <h4 className="font-lora text-sm md:text-base">
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
      <div className="w-full md:w-[40vw] bg-red-200">
        <div className="relative size-96">
          <Image
            src={"/"}
            width={400}
            height={400}
            alt="Aung Myo Aye's profile photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
