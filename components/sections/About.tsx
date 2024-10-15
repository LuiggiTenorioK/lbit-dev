"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col gap-12 items-center max-w-screen-lg px-6 mb-24 scroll-mt-32"
    >
      <motion.h2
        className="font-bold text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ABOUT
      </motion.h2>

      <div className="text-lg text-center">
        Hi I'm Luiggi! I'm a professional with 4+ years of experience in
        Software related roles. I'm passionate about technology and I'm always
        looking for new challenges. I have experience in the development of
        software solutions, data pipelines, and cloud infrastructure. I'm
        currently working as a Software Engineer at Barcelona Supercomputing
        Center in Spain.
      </div>
    </section>
  );
}
