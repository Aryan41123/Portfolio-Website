import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.from(".mobile-link", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 sm:py-6 px-6 lg:px-12 
          bg-neutral-950/30 lg:bg-neutral-950/20 backdrop-blur-xl lg:backdrop-blur-md 
          border-b lg:border-b border-white/5 
          m-4 lg:m-0 rounded-2xl lg:rounded-none
          lg:fixed lg:top-0 lg:left-0 lg:right-0 shadow-2xl lg:shadow-none"
      >
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "#hero")}
            className="text-white text-2xl sm:text-3xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          >
            Ar
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Icons & Hamburger */}
        <div className="flex items-center gap-4 text-2xl text-white">
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Aryan41123/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white z-50 hover:bg-white/5 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar - Redesigned as a Premium Bottom/Full Sheet */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center translate-x-full bg-neutral-950/98 backdrop-blur-3xl lg:hidden opacity-0"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-4 text-white text-3xl hover:bg-white/5 rounded-full transition-colors"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="mobile-link text-3xl sm:text-4xl font-light tracking-[0.2em] text-neutral-400 hover:text-white transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}

          <div className="h-[1px] w-24 bg-white/10 my-4" />

          <div className="flex gap-8 text-3xl text-white">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-all hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Aryan41123/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-all hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Footer info in sidebar */}
        <div className="absolute bottom-10 text-neutral-600 text-xs tracking-widest uppercase">
          Aryan &copy; 2024
        </div>
      </div>
    </>
  );
};

export default Navbar;
