"use client";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SocialSidebar() {
  const sidebarRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/munazzabegam",
      hoverColor: "group-hover:text-white",
      bgGradient: "group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/munazza-munnaa",
      hoverColor: "group-hover:text-blue-400",
      bgGradient: "group-hover:bg-gradient-to-br group-hover:from-blue-600/20 group-hover:to-blue-500/20",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:munazzabegam11@gmail.com",
      hoverColor: "group-hover:text-red-400",
      bgGradient: "group-hover:bg-gradient-to-br group-hover:from-red-600/20 group-hover:to-red-500/20",
    },
    {
      name: "Phone",
      icon: Phone,
      url: "tel:+918197458962",
      hoverColor: "group-hover:text-green-400",
      bgGradient: "group-hover:bg-gradient-to-br group-hover:from-green-600/20 group-hover:to-green-500/20",
    },
  ];

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const topLine = topLineRef.current;
    const bottomLine = bottomLineRef.current;
    if (!sidebar || !topLine || !bottomLine) return;

    // Animate sidebar on mount
    gsap.fromTo(
      sidebar,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );

    // Animate top line
    gsap.fromTo(
      topLine,
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "power2.out",
      }
    );

    // Animate bottom line
    gsap.fromTo(
      bottomLine,
      { scaleY: 0, transformOrigin: "bottom" },
      {
        scaleY: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "power2.out",
      }
    );

    // Animate icons with stagger
    gsap.fromTo(
      ".social-icon",
      { opacity: 0, scale: 0, rotation: -180 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1,
        ease: "back.out(2)",
      }
    );
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="fixed left-4 sm:left-6 md:left-8 bottom-0 z-50 hidden md:flex flex-col items-center gap-6"
    >
      {/* Top vertical line */}
      <div
        ref={topLineRef}
        className="w-[2px] h-20 sm:h-24 bg-gradient-to-b from-purple-500 via-indigo-400 to-transparent"
      ></div>

      {/* Social icons */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`social-icon group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full glass border border-white/20 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 ${link.bgGradient}`}
              aria-label={link.name}
            >
              <Icon className={`w-5 h-5 text-gray-400 transition-colors duration-300 ${link.hoverColor}`} />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 rounded-lg glass border border-white/20 text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-50">
                {link.name}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 rotate-45 border-l border-b border-white/20 bg-inherit"></span>
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom vertical line */}
      <div
        ref={bottomLineRef}
        className="w-[2px] h-20 sm:h-24 bg-gradient-to-b from-transparent via-indigo-400 to-purple-500"
      ></div>
    </aside>
  );
}

