"use client"

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";


export default function Skills() {
    const { ref } = useSectionInView("Projects");
    return (
        <section ref={ref} id="projects"
            className="flex flex-col gap-12 items-center max-w-screen-lg px-6 mb-24 scroll-mt-32">
            <motion.h2
                className="font-bold text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >MY PROJECTS</motion.h2>

        </section>
    )
}