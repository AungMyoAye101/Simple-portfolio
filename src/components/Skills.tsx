import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section
      className="py-16 px-10 flex flex-col items-center gap-12 min-h-screen relative overflow-hidden"
      id="skill"
    >
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          My Tech Stack
        </h1>
      </div>
      {/* My Skills  */}
      <div className="flex gap-4">
        <div className="max-w-80 px-4 py-6 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/react.svg"} width={40} height={40} alt="icons" />
          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Fornt-End Development
            </h1>
            <p className=" text-sm md:text-base text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat beatae minima architecto numquam, autem animi dolore,
              aliquam expedita fugiat voluptatibus voluptate sequi voluptas!
              Soluta, aperiam. Ab excepturi laudantium saepe!
            </p>
          </div>
        </div>
        <div className="max-w-80 p-4 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/nextjs.svg"} width={40} height={40} alt="icons" />
          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Back-End Development
            </h1>
            <p className=" text-sm md:text-base text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat beatae minima architecto numquam, autem animi dolore,
              aliquam expedita fugiat voluptatibus voluptate sequi voluptas!
              Soluta, aperiam. Ab excepturi laudantium saepe!
            </p>
          </div>
        </div>
        <div className="max-w-80 p-4 rounded-xl shadow-md border-2 border-gray-300 ">
          <Image src={"/mongodb.svg"} width={40} height={40} alt="icons" />
          <div className="space-y-2 mt-2">
            <h1 className="font-poppin text-lg md:text-xl font-semibold">
              Database & Others
            </h1>
            <p className=" text-sm md:text-base text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat beatae minima architecto numquam, autem animi dolore,
              aliquam expedita fugiat voluptatibus voluptate sequi voluptas!
              Soluta, aperiam. Ab excepturi laudantium saepe!
            </p>
          </div>
        </div>
      </div>

      {/* orbit */}
      <div className="absolute -right-36 top-[30%] -z-10">
        <div className="p-20 rounded-full border border-gray-400 relative animate-spin-slow">
          <div className="p-2 rounded-full z-20 bg-gray-100 absolute -bottom-6 left-[50%] border border-gray-200/50 shadow-sm">
            <Image src={"/react.svg"} width={40} height={40} alt="icons" />
          </div>
          <div className="p-2 rounded-full z-20 bg-gray-100 absolute -top-6 right-[50%] border border-gray-200/50 shadow-sm">
            <Image src={"/nextJs.svg"} width={40} height={40} alt="icons" />
          </div>
          <div className="p-2 rounded-full z-20 bg-gray-100 absolute bottom-[50%] -left-6 border border-gray-200/50 shadow-sm">
            <Image src={"/nodeJs.svg"} width={40} height={40} alt="icons" />
          </div>
          <div className="p-2 rounded-full z-20 bg-gray-100 absolute bottom-[50%] -right-6 border border-gray-200/50 shadow-sm">
            <Image src={"/mongodb.svg"} width={40} height={40} alt="icons" />
          </div>
          <div className="p-12  rounded-full relative border border-gray-400 animate-spin-slow">
            <div className="p-2 rounded-full z-20 bg-gray-50 absolute -bottom-6 left-[50%] border border-gray-300 shadow-sm">
              <Image src={"/react.svg"} width={40} height={40} alt="icons" />
            </div>
            <div className="p-2 rounded-full z-20 bg-gray-50 absolute -top-6 right-[50%] border border-gray-300 shadow-sm">
              <Image src={"/nextJs.svg"} width={40} height={40} alt="icons" />
            </div>
            <div className="p-2 rounded-full z-20 bg-gray-50 absolute bottom-[50%] -left-6 border border-gray-300 shadow-sm ">
              <Image src={"/nodeJs.svg"} width={40} height={40} alt="icons" />
            </div>
            <div className="p-2 rounded-full z-20 bg-gray-50 absolute bottom-[50%] -right-6 border border-gray-300 shadow-sm ">
              <Image src={"/mongodb.svg"} width={40} height={40} alt="icons" />
            </div>

            <div className="size-36 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
