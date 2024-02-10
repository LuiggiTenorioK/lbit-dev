'use client'

import Intro from "@/components/sections/Intro";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 sm:pt-40">
      <Intro />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
