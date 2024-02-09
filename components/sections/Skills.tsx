import { SKILLS } from "@/lib/data";
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
    return (
        <section className="flex flex-col gap-12 items-center max-w-screen-lg px-6 mb-24">
            <motion.h2
                className="font-bold text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                id="about"
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