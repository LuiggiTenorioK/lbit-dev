"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <motion.div
      className="flex flex-col gap-4 dark:bg-slate-950 bg-slate-200 rounded-xl border-0 overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col items-center max-w-[24rem] md:max-w-[48rem]">
        <a
          className="w-[24rem] h-[12rem] overflow-hidden md:w-[48rem] md:h-[24rem]"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={image}
            alt={title}
            width={768}
            height={384}
            objectFit="contain"
          />
        </a>

        <div className="px-6 py-4 w-full">
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col gap-12 items-center max-w-screen-lg px-6 mb-24 scroll-mt-32"
    >
      <motion.h2
        className="font-bold text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MY PROJECTS
      </motion.h2>

      <ProjectCard
        title="Autosubmit GUI"
        description="Front-end software that aims to provide users with complex information from the workflow execution of scientific experiments managed by Autosubmit"
        image="https://autosubmit-gui.readthedocs.io/en/latest/_static/fig_main.png"
        link="https://autosubmit-gui.readthedocs.io/en/latest/"
      />

      <ProjectCard
        title="b2 Gym"
        description="The landing page for the b2 gym, a very popular gym located in Lima, Peru."
        image="/images/b2-landing.png"
        link="https://b2.pe/"
      />
    </section>
  );
}
