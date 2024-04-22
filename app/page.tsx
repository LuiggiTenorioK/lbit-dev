'use client'

import Intro from "@/components/sections/Intro";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 sm:pt-40">
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
