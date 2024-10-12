"use client";
import React, { useRef, useState } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./ui/Card";

const projectVarients = {
  initial: {
    opacity: 0,
  },
  animation: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export const textAnimate = {
  initial: {
    y: 20,

    transition: {
      ease: "easeIn",
      delay: 1,
    },
  },
  animation: {
    y: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      ease: "easeOut",
    },
  },
};

const Project = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow(true);
  };
  return (
    <section className="section-container relative" id="project">
      <h1 className="heading">My Recent Projects</h1>

      <main className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10">
        {projects.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
          />
        ))}
      </main>

      <button className="border border-cyan-400 rounded-md shadow-md px-6 py-3 font-poppin text-base font-medium">
        Load More
      </button>
    </section>
  );
};

export default Project;
