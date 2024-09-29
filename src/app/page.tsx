import Hero from "@/components/Hero";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <TechStack />
      <Project />
    </section>
  );
}
