import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <section>
      <Hero />
      <Skills />
      <Project />
      <About />
      <Contact />
    </section>
  );
}
