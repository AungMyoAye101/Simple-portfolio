import About from "@/components/About";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section>
      <Hero />
      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
    </section>
  );
}
