import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen py-20 " id="about">
      <h1 className="heading">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center  gap-8 py-8 max-w-4xl mx-auto ">
        <div className=" relative w-full md:w-[40%]  ">
          <Image
            src={"/profile.png"}
            width={400}
            height={400}
            alt="profile"
            className="size-96 border-4 border-gray-400 rounded-xl"
          />
        </div>
        <div className=" w-[55%] flex flex-col gap-3 items-start">
          <h2 className="font-lora text-xl md:text-2xl font-semibold">
            Hi &#33; I am Aung Myo Aye{" "}
          </h2>
          <p className="font-poppin text-lg md:text-xl">
            A full stack developer and UI/UX Desinger from Myanmar.I&apos;m
            currenty learning python and dijango. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi, ab assumenda aliquid sed quas
            harum molestiae distinctio tenetur debitis in accusamus.
          </p>
          <p className="text-xs md:text-sm font-poppin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            cumque id! Natus excepturi dolorem molestias doloremque.
          </p>
          <a
            href="mailto:aungmyoaye101@gmail.com"
            className="px-3 py-2 font-lora rounded-lg shadow-lg border-2  border-yellow-400 self-end mt-6  "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
