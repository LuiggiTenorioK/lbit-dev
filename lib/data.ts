
export const MENU_LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  },
] as const;

export const SKILLS = [
  {
    name: "Javascript",
    iconURL: "/logos/JavaScript-logo.png",
    darkInvert: false
  },
  {
    name: "React",
    iconURL: "/logos/react.svg",
    darkInvert: false
  },
  {
    name: "Next.js",
    iconURL: "/logos/next-js.svg",
    darkInvert: true
  },
  {
    name: "Tailwind CSS",
    iconURL: "/logos/tailwind-logo.svg",
    darkInvert: false
  },
  {
    name: "Python",
    iconURL: "/logos/python.svg",
    darkInvert: false
  },
  {
    name: "Flask",
    iconURL: "/logos/flask-logo.png",
    darkInvert: false
  },
  {
    name: "MongoDB",
    iconURL: "/logos/mongodb.svg",
    darkInvert: false
  },
  {
    name: "Firebase",
    iconURL: "/logos/firebase.svg",
    darkInvert: false
  },
  {
    name: "GCP",
    iconURL: "/logos/gcp.svg",
    darkInvert: false
  },
  {
    name: "AWS",
    iconURL: "/logos/aws.svg",
    darkInvert: false
  },
] as const;
