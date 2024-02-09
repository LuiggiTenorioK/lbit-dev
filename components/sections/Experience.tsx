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
  
          <div className=" w-[2px] bg-gray-50 h-full"></div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="text-2xl font-bold">{experience.title}</h3>
          <h4 className="text-lg">{experience.company}, {experience.city}, {experience.country}</h4>
          <div className="text-gray-700 dark:text-gray-400">
            {experience.description}
          </div>
        </div>
      </div>
  
    )
  }

export default function Experience(){
    return (
        <section className="flex flex-col items-center w-full mb-24 animate-fade-in">
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
    )
}