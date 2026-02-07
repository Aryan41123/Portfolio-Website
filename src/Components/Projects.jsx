import React, { useRef } from "react";
import { PROJECTS } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".project-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      id="projects"
      ref={containerRef}
      className="border-b border-neutral-800 pb-24 overflow-hidden"
    >
      <h2 className="projects-title my-10 lg:my-20 text-center text-3xl lg:text-4xl text-white">
        Projects
      </h2>

      <div className="project-list flex flex-col gap-8 lg:gap-12 px-4 sm:px-0">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            onClick={() => project.link && window.open(project.link, "_blank")}
            className={`project-card group relative flex flex-wrap items-center lg:justify-center 
                            rounded-3xl border border-neutral-800 
                            bg-neutral-950/40 p-6 lg:p-10 backdrop-blur-xl
                            transition-all duration-300
                            hover:scale-[1.01]
                            hover:border-purple-500/40
                            hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]
                            ${project.link ? "cursor-pointer" : ""}`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded-2xl shadow-2xl sm:w-44 sm:h-44 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="w-full max-w-2xl lg:w-3/4 lg:pl-12 text-center lg:text-left">
              <h6 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
                {project.title}
              </h6>

              <p className="mb-6 text-neutral-400 leading-relaxed text-base sm:text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold
                                            border border-purple-500/20
                                            bg-purple-900/20 text-purple-300
                                            transition-all duration-300
                                            hover:bg-purple-900/40 hover:border-purple-500/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
