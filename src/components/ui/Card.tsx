import Image from "next/image";
import React from "react";
import { FaInfo } from "react-icons/fa";

const Card = ({
  id,
  image,
  name,
}: {
  id: number;
  image: string;
  name: string;
}) => {
  return (
    <div className=" min-w-80 rounded-md shadow-md shadow-purple-400 border-[1px] border-gray-100">
      <div className="relative w-full h-60 overflow-hidden rounded-md">
        <Image src={image} fill alt={name} className="object-cover" />
      </div>
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="font-lora text-lg md:text-xl font-bold">{name}</h1>
        <button className="flex gap-1 items-center">
          <span>See Detatails</span> <FaInfo />
        </button>
      </div>
    </div>
  );
};

export default Card;
