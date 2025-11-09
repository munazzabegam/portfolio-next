"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
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

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <ul className="flex gap-8 text-xs uppercase tracking-widest backdrop-blur-lg bg-black/10 px-8 py-3 rounded-full border border-white/10">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`transition duration-300 ${
                activeSection === link.id
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
