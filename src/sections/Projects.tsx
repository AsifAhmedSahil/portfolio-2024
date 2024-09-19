import fortune from "@/assets/images/fortune.png";
import checkNalart from "@/assets/images/checknalart.png";
import devpath from "@/assets/images/coursewebsite.png";
import grainImages from "@/assets/images/grain.jpg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Full-Stack Project",
    year: "2024",
    title: "Fortune Sport's Arena",
    results: [
      { title: "Sports Facilities Booking Platform" },
      { title: "With Admin & User Dashboard" },
      { title: "Intregrate AmaarPay Payment Gateway" },
    ],
    link: "https://fortune-sports.vercel.app",
    github:
      "https://github.com/AsifAhmedSahil/Fortune-Sports---Sports-Facility-Booking-Platform---React-Tailwind-Magic-UI--Typescript",
    image: fortune,
  },
  {
    company: "Check-N-alert",
    year: "2024",
    title: "Light Saas Landing Page",
    results: [
      { title: "Start Monitoring You Website" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://checknalert.vercel.app",
    github: "https://github.com/AsifAhmedSahil/Modern-and-fully-responsive-UI-UX-website-with-Next.js-14-and-Tailwind",
    image: checkNalart,
  },
  {
    company: "DevPath-Academy",
    year: "2023",
    title: "Start Your Programming",
    results: [
      { title: "Using Next.Js & Accertinity UI" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://devpath-academy-next-js-aceternity-ui-with-typescript.vercel.app",
    github: "https://github.com/AsifAhmedSahil/Learn-NextJS-with-Aceternity-UI-library-by-building-a-project-with-typescript",
    image: devpath,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-20 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real - world Results
          </p>
        </div>
        <h2 className="font-serif mt-6 text-3xl md:text-5xl text-center">
          Featured Projects
        </h2>
        <p className="mt-4 text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60">
          See how i transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 "
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <div>&bull;</div>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5  " />
                  <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex text-sm md:text-base gap-2 text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col md:flex-row lg:flow-row lg:gap-3 md:gap-3">
                    <div>
                      <a href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 md:w-auto px-6">
                          <span>Visit Live Site</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    </div>

                    <div>
                      <a href={project.github} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-4 lg:mt-8 md:mt-8 md:w-auto px-6">
                          <span>Github Repo</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative border-2 border-black rounded-xl sm:border-0">
  <Image
    src={project.image}
    alt={project.title}
    className="mt-6 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl"
  />
</div>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
