import React, { useRef } from "react";
import aboutImg from "../assets/about.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      gsap.from(".about-img", {
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      id="about"
      ref={sectionRef}
      className="border-b border-neutral-900 pb-4 overflow-hidden"
    >
      <h2 className="my-10 lg:my-20 text-center text-3xl lg:text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="about-img flex items-center justify-center">
            <img
              className="rounded-2xl shadow-xl"
              src={aboutImg}
              alt="About Me"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="about-text flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center lg:text-left text-sm sm:text-base lg:text-lg">
              I am a dedicated and versatile full stack developer with a passion
              for creating efficient and user-friendly web applications. I have
              worked with a variety of technologies, including React, Node.js,
              Express.js, and MongoDB. My journey in web development began with
              a deep curiosity for how things work, and it has evolved into a
              career where I continuously strive to learn and adapt to new
              challenges. I thrive in collaborative environments and enjoy
              solving complex problems to deliver high-quality solutions.
              Outside of coding, I enjoy staying active, exploring new
              technologies, and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
