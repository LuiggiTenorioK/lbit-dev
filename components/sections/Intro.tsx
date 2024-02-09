"use client"

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section className="animate-fade-in flex flex-col md:flex-row gap-10 items-center justify-between max-w-screen-lg px-6 mb-24">

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
            >
                <Image alt="Luiggi" height={256} width={256} priority={true} quality={100}
                    className="object-cover rounded-full aspect-square w-48 md:w-52 lg:w-64 border-white border-8 drop-shadow-lg"
                    src="/profile.jpeg"
                />
            </motion.div>

            <div className="flex flex-col text-center md:text-left">
                <motion.div
                    className="flex flex-col text-center md:text-left"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-4xl font-bold mb-4">Luiggi Tenorio Ku</h2>
                    <span className="text-xl mb-1">
                        I'm a <strong>Software Engineer</strong> with more than <strong>5 years of experience</strong>.
                    </span>
                    <span className="text-xl italic mb-4">
                        "Design and develop first, then I exist"
                    </span>
                </motion.div>

                <motion.div
                    className="flex gap-2 flex-wrap items-center justify-center md:justify-normal"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none scale-100 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
                        onClick={() => {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                        }}
                    >
                        Contact me
                    </Link>
                    <a
                        className="group bg-white px-6 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10"
                        href="https://www.linkedin.com/in/ltenoriok/"
                        target="_blank"
                    >
                        Download CV <i className="fa-solid fa-download"></i>
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
                        href="https://www.linkedin.com/in/ltenoriok/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
                        href="https://github.com/LuiggiTenorioK"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </motion.div>
            </div>

        </section>
    )
}