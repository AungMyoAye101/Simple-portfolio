import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen py-16 " id="about">
      <h1 className="font-poppin font-bold text-2xl sm:text3xl md:text-4xl lg:text-5xl text-center">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center  gap-10 mt-10  p-8 mx-auto">
        <div className="">
          <Image
            src={"/profile.png"}
            width={400}
            height={400}
            alt="profile"
            className="size-96 border-4 border-gray-400 rounded-xl"
          />
        </div>
        <div className=" w-full md:w-[40%] flex flex-col gap-4 items-start">
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
          <p className="text-xs md:text-sm font-poppin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            cumque id! Natus excepturi dolorem molestias doloremque, modi
            repellat voluptatem vero adipisci reprehenderit? Quae, laudantium.
          </p>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-4 py-3 font-lora rounded-lg shadow-lg border bg-yellow-400 shadow-yellow-100 self-end "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
