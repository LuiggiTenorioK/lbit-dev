"use client"

import { SKILLS } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import clsx from "clsx";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section ref={ref} id="skills"
            className="flex flex-col gap-12 items-center max-w-screen-lg px-6 mb-24 scroll-mt-32">
            <motion.h2
                className="font-bold text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >MY SKILLS</motion.h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                {SKILLS.map((skill, index) => (
                    <motion.li
                        className="flex flex-col gap-2 items-center justify-center p-4 w-32 max-w-32"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                            margin: "50px"
                        }}
                        custom={index}
                    >
                        <img src={skill.iconURL} alt={skill.name}
                            className={clsx("object-contain h-12 aspect-square", { "dark:invert": skill.darkInvert })} />
                        <label className="break-words truncate">{skill.name}</label>
                    </motion.li>
                ))}
            </div>
        </section>
    )
}