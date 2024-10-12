import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInfo } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

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
    <div className=" min-w-80 w-full rounded-lg shadow shadow-cyan-400 border-[1px] border-cyan-200 overflow-hidden">
      <div className="relative w-full h-40   bg-purple-400">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover aspect-video"
        />
      </div>
      <div className="flex justify-between items-center px-2 py-4">
        <h1 className="font-lora text-lg md:text-xl font-bold">{name}</h1>
        <Link
          href={`/project/${id}`}
          className="flex gap-1 items-center hover:text-cyan-400 "
        >
          <span>See Detatails</span> <FaCircleInfo />
        </Link>
      </div>
    </div>
  );
};

export default Card;
