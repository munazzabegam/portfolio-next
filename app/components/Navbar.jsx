"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "achievements", label: "Achievements", href: "#achievements" },
    { id: "education", label: "Education", href: "#education" },
    { id: "services", label: "Services", href: "#services" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Animate navbar on mount
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate nav links with stagger (desktop only)
    if (window.innerWidth >= 768) {
      gsap.fromTo(
        ".nav-link",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }

    // Section tracking
    const sections = document.querySelectorAll("section[id]");
    const triggers = [];

    sections.forEach((section) => {
      const id = section.getAttribute("id");

      // ScrollTrigger for each section
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Animate mobile menu and prevent body scroll
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".mobile-nav-link",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    } else {
      // Restore body scroll
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-xs uppercase tracking-widest backdrop-blur-xl bg-black/20 px-6 lg:px-8 py-3 rounded-full border border-white/20 shadow-lg shadow-purple-500/10">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-link">
              <Link
                href={link.href}
                className={`relative transition duration-300 whitespace-nowrap ${
                  activeSection === link.id
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-4 right-4 z-[60] w-12 h-12 rounded-full backdrop-blur-xl bg-black/20 border border-white/20 shadow-lg shadow-purple-500/10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 z-[55] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="absolute top-20 right-4 w-[calc(100vw-2rem)] max-w-[280px] glass rounded-2xl p-5 sm:p-6 border border-white/20 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id} className="mobile-nav-link">
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block py-2 px-4 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white font-bold bg-purple-500/20 border border-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
