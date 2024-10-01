import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </section>
  );
}
