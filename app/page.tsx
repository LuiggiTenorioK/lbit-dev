'use client'

import Intro from "@/components/sections/Intro";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-28 sm:pt-36">
      <Intro />
      <Skills />
      <Experience />
    </main>
  );
}
