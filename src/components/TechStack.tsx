import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="py-16 px-10 flex flex-col items-center gap-12 min-h-screen">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          My Tech Stack
        </h1>
        <div className="font-poppin text-lg sm:text-xl md:text-2xl lg:text-3xl  flex items-center gap-10 ">
          <span>Front-End Development </span>
          <span>Back-End Development </span>
          <span>Database & Others </span>
        </div>
      </div>
      {/* <main className="flex gap-10">
        <div className="flex flex-col gap-4 items-center hover:bg-cyan-400">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5 bg-slate-50">
            <Image src={"/react.svg"} width={60} height={60} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={60} height={60} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={60} height={60} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={60} height={60} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={60} height={60} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={60} height={60} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
      </main> */}
      <div>
        <div className="p-20 rounded-full border border-gray-400 relative animate-spin-slow">
          <div className="size-14 rounded-full z-20 bg-purple-400 absolute -bottom-6 left-[50%]"></div>
          <div className="size-14 rounded-full z-20 bg-red-400 absolute -top-6 right-[50%]"></div>
          <div className="size-14 rounded-full z-20 bg-green-400 absolute bottom-[50%] -left-6"></div>
          <div className="size-14 rounded-full z-20 bg-sky-400 absolute bottom-[50%] -right-6"></div>
          <div className="p-14  rounded-full relative border border-gray-400 animate-spin-slow">
            <div className="size-14 rounded-full z-20 bg-purple-400 absolute -bottom-6 left-[50%]"></div>
            <div className="size-14 rounded-full z-20 bg-red-400 absolute -top-6 right-[40%]"></div>
            <div className="size-14 rounded-full z-20 bg-green-400 absolute bottom-[50%] -left-6"></div>
            <div className="size-14 rounded-full z-20 bg-sky-400 absolute bottom-[40%] -right-6"></div>
            <div className="size-40 bg-green-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
