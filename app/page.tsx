'use client'

import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/image";

interface ExperienceType {
  title: string
  company: string
  city: string
  country: string
  description: JSX.Element
}

const EXPERIENCES: Array<ExperienceType> = [
  {
    title: "Software Engineer",
    company: "Barcelona Supercomputing Center",
    city: "Barcelona",
    country: "Spain",
    description: <>
      <ul className="list-disc ml-5">
        <li>Interfacing with protein domain experts to understand their needs and translate them to software requirements </li>
        <li>Developing multiple web applications that helps the scientific community to storage knowledge with Angular, Node.js, Django and MongoDB</li>
        <li>Contributing to developing an open-source REST API for distributed resource management like SLURM. </li>
      </ul>
    </>
  },
  {
    title: "Full-stack Developer",
    company: "Università degli Studi di Padova",
    city: "Padova",
    country: "Italy",
    description: <>
      In one
      <ul className="list-disc ml-5">
        <li>Interfacing with protein domain experts to understand their needs and translate them to software requirements </li>
        <li>Developing multiple web applications that helps the scientific community to storage knowledge with Angular, Node.js, Django and MongoDB</li>
        <li>Contributing to developing an open-source REST API for distributed resource management like SLURM. </li>
      </ul>
    </>
  },
]

function ExperienceItem({ experience }: { experience: ExperienceType }) {
  return (
    <div className="flex gap-10 w-full">

      <div className="flex flex-col items-center gap-4">
        <span className="relative flex h-5 w-5 mt-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
        </span>

        <div className=" w-[2px] bg-neutral-50 h-full"></div>
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-2xl font-bold">{experience.title}</h3>
        <h4 className="text-lg">{experience.company}, {experience.city}, {experience.country}</h4>
        <div className="text-neutral-400">
          {experience.description}
        </div>
      </div>
    </div>

  )
}

export default function Home() {
  const scrollTo = useWindowScroll()[1];

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id)
    elem?.scrollIntoView({ behavior: "smooth" });
  }

  return (

    <main className="min-h-screen flex flex-col items-center text-white">
      <div className="fixed top-0 left-0 h-full w-full bg-gradient-to-b from-slate-950 to-slate-900 -z-50"></div>
      <nav className="sticky top-4 flex gap-4">

        <div className="flex gap-12 rounded-full bg-slate-800/75 px-12 py-2 font-semibold ">
          <a className="cursor-pointer hover:text-sky-600"
            onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}>
            lbit.dev
          </a>
        </div>

        <div className="hidden md:flex gap-12 rounded-full bg-slate-800/75 px-12 py-2 font-semibold ">
          <a className="cursor-pointer hover:text-sky-600"
            onClick={() => scrollToSection("skills")}>
            Skills
          </a>
          <a className="cursor-pointer hover:text-sky-600">Projects</a>
          <a className="cursor-pointer hover:text-sky-600"
            onClick={() => scrollToSection("experience")}>
            Experience
          </a>
          <a className="cursor-pointer hover:text-sky-600">Education</a>
          <a className="cursor-pointer hover:text-sky-600">Contact</a>
        </div>

      </nav>

      <div className="my-12 flex flex-col items-center w-full gap-16">

        <section className="flex flex-col items-center animate-fade-in w-full py-12">

          <div className="flex flex-col md:flex-row gap-12 items-center justify-between max-w-screen-lg px-8">
            <img className="bg-black rounded-full aspect-square w-64"
              src="https://media.licdn.com/dms/image/D4D03AQEbBlPhv2thzg/profile-displayphoto-shrink_800_800/0/1666798199681?e=2147483647&v=beta&t=XoBQ_b2BTBDB9fmOBYwFPWEYGA3LhDb08mFgMmTSpAk">
            </img>
            <div className=" flex flex-col gap-4">
              <h2 className="text-4xl font-bold">Luiggi Tenorio Ku</h2>
              <span className="text-lg">
                Design and develop first, then I exist
              </span>
            </div>
          </div>

        </section>

        <section id="skills" className="flex flex-col items-center w-full py-20 animate-fade-in">
          <div className="flex flex-col gap-12 items-center max-w-screen-lg px-8 ">
            <h2 className="font-bold text-3xl">MY SKILLS</h2>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2 items-center">
                <img src={"/logos/JavaScript-logo.png"} alt="react" className="w-12 h-12" />
                <label>Javascript</label>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img src={"/logos/react.svg"} alt="react" className="w-12 h-12" />
                <label>React</label>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img src={"/logos/next.svg"} alt="react" className="w-12 h-12 dark:invert" />
                <label>Next.js</label>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img src={"/logos/python.svg"} alt="react" className="w-12 h-12 object-contain" />
                <label>Python</label>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="flex flex-col items-center bg-slate-800/75 w-full py-20 animate-fade-in">
          <div className="flex flex-col gap-12 items-center max-w-screen-lg px-8">

            <h2 className=" font-bold text-3xl">MY WORK EXPERIENCES</h2>
            {
              EXPERIENCES.map(exp => {
                return (
                  <ExperienceItem key={exp.title} experience={exp} />

                )
              })
            }
          </div>
        </section>

      </div>
    </main>
  );
}
