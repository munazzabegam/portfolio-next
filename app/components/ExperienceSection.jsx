"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".exp-card").forEach((card, i) => {
        gsap.from(card, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      role: "Web Developer",
      company: "Gd Tech Company",
      period: "Apr 2025 – Present",
      desc: "Developing and maintaining client websites with optimized performance.",
    },
    {
      role: "Web Development Intern",
      company: "Solukraft Pharmaceutical Company",
      period: "Jul 2024 – Dec 2024",
      desc: "Enhanced company digital presence and user experience.",
    },
    {
      role: "AI/ML Intern",
      company: "Technologies Global Pvt",
      period: "May 2024 – Jul 2024",
      desc: "Developed ML models using Python, TensorFlow, and Scikit-learn.",
    },
  ];

  return (
    <section id="experience" ref={ref} className="section section-exp relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <h2 className="text-5xl text-center mb-12 text-accent font-bold">Experience</h2>
      <div className="max-w-5xl mx-auto border-l border-white/10 pl-8">
        {experiences.map((e, i) => (
          <div key={i} className="exp-card relative mb-10">
            <div className="absolute -left-[10px] w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400"></div>
            <div className="glass rounded-2xl p-6 hover:bg-white/10 transition">
              <h3 className="text-2xl font-semibold">{e.role}</h3>
              <p className="text-accent mb-1 font-medium">{e.company}</p>
              <p className="text-sm text-gray-400 mb-2">{e.period}</p>
              <p className="text-gray-300 text-sm">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
