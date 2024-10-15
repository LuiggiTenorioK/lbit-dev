"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col gap-12 items-center max-w-screen-lg px-6 mb-24 scroll-mt-32"
    >
      <motion.h2
        className="font-bold text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CONTACT
      </motion.h2>
      <div className="flex gap-4">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ltenoriok/"
          target="_blank"
        >
          LinkedIn<i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/LuiggiTenorioK"
          target="_blank"
        >
          GitHub<i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
}
