import React, { useRef } from "react";
import profilePic from "../assets/kevinRushProfile.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      tl.from(
        ".hero-img",
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      id="hero"
      ref={containerRef}
      className="border-b border-neutral-900 pb-10 lg:mb-36 overflow-hidden"
    >
      <div className="flex flex-wrap lg:flex-row flex-col-reverse">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start px-2">
            <h1 className="hero-text pb-6 lg:pb-16 text-5xl font-thin tracking-tight lg:mt-16 sm:text-6xl lg:text-8xl text-white">
              Aryan
            </h1>
            <span className="hero-text bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl text-transparent font-medium">
              Full Stack Developer
            </span>
            <p className="hero-text my-2 max-w-xl py-6 font-light tracking-tighter text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed">
              I am a passionate full stack developer with a passion for crafting
              robust and scalable web applications.I have honed my skills in
              front-end technologies like React as well as back-end technologies
              like Node.js,Express.js and MongoDB. My goal is to leverage my
              expertise to create innovative solutions that drive business
              growth and deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mb-10 lg:mb-0">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Aryan"
              className="hero-img rounded-3xl w-56 sm:w-72 lg:w-full group-hover:border-purple-500/50 transition-colors duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
