import React, { useRef } from "react";
import { CONTACT } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 90%",
        },
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 90%",
        },
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="border-b border-neutral-900 pb-20 overflow-hidden"
    >
      <h2 className="contact-header my-10 text-center text-4xl text-white">
        Get in Touch
      </h2>
      <div className="contact-content text-center tracking-tighter">
        <p className="contact-item my-4">{CONTACT.address}</p>
        <p className="contact-item my-4">{CONTACT.phoneNo}</p>
        <a
          className="contact-item border-b inline-block mt-2 hover:text-purple-400 transition-colors"
          href={`mailto:${CONTACT.email}`}
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
