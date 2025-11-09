"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in cards
      gsap.utils.toArray(".ach-card").forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax background
      gsap.to(".ach-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const achievements = [
    { title: "Design Impact Challenge Winner", desc: "1st Prize — Titan Company 'InfecShield' project." },
    { title: "National Hackathon 3rd Place", desc: "Developed ChatGPT for Blind accessibility system." },
    { title: "HackSummit Finalist", desc: "Top 6 nationwide with Bus Tracking project." },
    { title: "ADC 2023 Finalist", desc: "Top 10 National Innovation Finalist." },
    { title: "Postman Student Expert", desc: "Certified in API testing and collaboration." },
  ];

  return (
    <section id="achievements" ref={ref} className="section section-achievements relative overflow-hidden">
      <div className="ach-bg absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-transparent to-indigo-900/10"></div>
      <h2 className="text-5xl text-accent font-bold mb-12 text-center">Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="ach-card glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-500"
          >
            <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
            <p className="text-gray-400 text-sm">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
