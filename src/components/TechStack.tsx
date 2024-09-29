import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="py-20 px-10 flex flex-col items-center gap-12 min-h-screen">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          My Tech Stack
        </h1>
        <div className="font-poppin text-xl sm:text-2xl md:text-3xl lg:text-4xl  flex items-center gap-10 ">
          <span>Front-End </span>
          <span>Back-End </span>
          <span>Database </span>
        </div>
      </div>
      <main className="grid grid-cols-3 place-content-center gap-10">
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={40} height={40} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image
              src={"/mongodb.svg"}
              width={40}
              height={40}
              alt="react icon"
            />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image
              src={"/nextjs.svg"}
              width={40}
              height={40}
              alt="react icon"
            />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={40} height={40} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image
              src={"/nodejs.svg"}
              width={40}
              height={40}
              alt="react icon"
            />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded-md shadow-md border border-gray-700/5">
            <Image src={"/react.svg"} width={40} height={40} alt="react icon" />
          </div>
          <p className="font-lora font-semibold text-sm">React Js</p>
        </div>
      </main>
    </section>
  );
};

export default TechStack;
