"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".skill",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const skills = [
    "HTML5", "CSS3", "JavaScript", "ReactJS", "Next.js", "TailwindCSS",
    "Node.js", "PHP", "MySQL", "Python", "Java", "C", "TensorFlow", "Flutter", "GitHub", "Figma"
  ];

  return (
    <section id="skills" ref={ref} className="section section-skills relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,94,255,0.1),transparent_70%)]"></div>
      <h2 className="text-5xl mb-10 text-accent font-bold text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto relative z-10">
        {skills.map((s, i) => (
          <span
            key={i}
            className="skill px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-500/20 border border-white/10 text-sm text-gray-200 hover:scale-110 transition"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
