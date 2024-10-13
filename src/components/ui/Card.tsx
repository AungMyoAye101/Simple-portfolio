import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Card = ({
  id,
  image,
  name,
  description,
  iconList,
  sourceCode,
  siteLink,
}: {
  id: number;
  image: string;
  name: string;
  description: string;
  iconList: { icon: string; name: string }[];
  sourceCode: string;
  siteLink: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row min-w-80  min-h-[50vh] items-center justify-between gap-6  w-full rounded-lg  overflow-hidden ">
      <div className="relative w-full md:w-[45%] h-[50vh]   bg-gray-800 rounded-lg">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover aspect-video"
        />
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-4 px-4 py-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppin font-semibold ">
          {name}
        </h1>
        <p className="font-lora text-lg md:text-xl text-gray-200 ">
          {description}
        </p>
        <div className="flex items-center flex-wrap gap-2">
          {iconList.map((icon, i) => (
            <div
              key={i}
              className="flex gap-2 items-center border border-cyan-500 rounded-lg px-2 py-1 hover:shadow-md hover:shadow-cyan-400 bg-blend-difference"
            >
              <Image src={icon.icon} width={25} height={25} alt={icon.name} />{" "}
              <span className=" font-poppin font-light">{icon.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a
            href={siteLink}
            target="_blank"
            className="flex items-center gap-2 text-base md:text-lg font-poppin hover:text-purple-400"
          >
            <FaGithub />
            <span>Source Code</span>
          </a>
          <a
            href={siteLink}
            target="_blank"
            className="flex items-center gap-2 text-base md:text-lg font-poppin hover:text-purple-400"
          >
            <FaExternalLinkAlt />
            <span>Live Site</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
