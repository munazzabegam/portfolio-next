"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // Enhanced skill animations with magnetic effect
      gsap.utils.toArray(".skill").forEach((skill, i) => {
        gsap.fromTo(
          skill,
          { scale: 0, opacity: 0, rotation: -180 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            delay: i * 0.05,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: skill,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Magnetic hover effect
        skill.addEventListener("mouseenter", (e) => {
          const rect = skill.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(skill, {
            x: x * 0.3,
            y: y * 0.3,
            scale: 1.15,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        skill.addEventListener("mouseleave", () => {
          gsap.to(skill, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        skill.addEventListener("mousemove", (e) => {
          const rect = skill.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(skill, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.2,
            ease: "power1.out",
          });
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const skills = [
    "HTML5", "CSS3", "JavaScript", "ReactJS", "Next.js", "TailwindCSS",
    "Node.js", "PHP", "MySQL", "Python", "Java", "C", "TensorFlow", "Flutter", "GitHub", "Figma"
  ];

  return (
    <section id="skills" ref={ref} className="section section-skills relative overflow-hidden">
      {/* Unified background */}
      <UnifiedBackground />

      <h2 ref={titleRef} className="text-4xl sm:text-5xl mb-8 md:mb-10 text-accent font-bold text-center relative z-10 px-4">
        Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {skills.map((s, i) => (
          <span
            key={i}
            className="skill px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-500/30 border border-white/20 text-xs sm:text-sm text-gray-200 font-medium cursor-pointer backdrop-blur-sm hover:border-white/40 transition-all duration-300"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
