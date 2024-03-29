"use client"

import { useActiveSectionContext } from "@/context/active-section-context";
import { MENU_LINKS } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.25rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {MENU_LINKS.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-900 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

        </ul>
        {/* <div className="flex gap-12 rounded-full bg-slate-800/75 px-12 py-2 font-semibold ">
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
        </div> */}

      </nav>
    </header>

  );
}
