import React, { useRef } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      // Entrance animation
      gsap.from(".tech-title", {
        scrollTrigger: {
          trigger: ".tech-title",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".tech-icon-wrapper", {
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Pulsing animations
      const pulsingIcons = [
        {
          class: ".react-icon",
          color: "rgba(6, 182, 212, 0.5)",
          duration: 2.5,
        },
        { class: ".node-icon", color: "rgba(34, 197, 94, 0.5)", duration: 3 },
        {
          class: ".express-icon",
          color: "rgba(255, 255, 255, 0.3)",
          duration: 5,
        },
        { class: ".mongo-icon", color: "rgba(16, 185, 129, 0.5)", duration: 2 },
      ];

      pulsingIcons.forEach((icon) => {
        gsap.to(icon.class, {
          boxShadow: `0 0 30px 5px ${icon.color}`,
          duration: icon.duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      id="technologies"
      ref={containerRef}
      className="border-b pb-12 lg:pb-24 border-neutral-800 bg-neutral-950/50 pt-10 lg:pt-20 px-4"
    >
      <h2 className="tech-title mb-12 lg:mb-24 text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Core Technologies
        </span>
      </h2>
      <div className="tech-grid flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {/* React */}
        <div className="tech-icon-wrapper react-icon relative group p-[2px] rounded-3xl bg-gradient-to-br from-cyan-400/20 to-transparent">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6 transition-all duration-300 group-hover:bg-neutral-900">
            <FaReact className="text-5xl sm:text-7xl lg:text-8xl text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          </div>
        </div>

        {/* Node.js */}
        <div className="tech-icon-wrapper node-icon relative group p-[2px] rounded-3xl bg-gradient-to-br from-green-400/20 to-transparent">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6 transition-all duration-300 group-hover:bg-neutral-900">
            <FaNodeJs className="text-5xl sm:text-7xl lg:text-8xl text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
          </div>
        </div>

        {/* Express */}
        <div className="tech-icon-wrapper express-icon relative group p-[2px] rounded-3xl bg-gradient-to-br from-white/20 to-transparent">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6 transition-all duration-300 group-hover:bg-neutral-900">
            <SiExpress className="text-5xl sm:text-7xl lg:text-8xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          </div>
        </div>

        {/* MongoDB */}
        <div className="tech-icon-wrapper mongo-icon relative group p-[2px] rounded-3xl bg-gradient-to-br from-emerald-400/20 to-transparent">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6 transition-all duration-300 group-hover:bg-neutral-900">
            <SiMongodb className="text-5xl sm:text-7xl lg:text-8xl text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
