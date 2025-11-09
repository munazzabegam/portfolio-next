"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.to(".portfolio-bg", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const projects = [
    { id: 1, title: "Smart Vision Aid", img: "/bg.jpg" },
    { id: 2, title: "Bus Tracking System", img: "/bg.jpg" },
    { id: 3, title: "InfecShield", img: "/bg.jpg" },
    { id: 4, title: "Noise Reduction", img: "/bg.jpg" },
    { id: 5, title: "Notes Website", img: "/bg.jpg" },
  ];

  return (
    <section id="portfolio" ref={ref} className="section section-portfolio relative text-center overflow-hidden">
      <div className="portfolio-bg absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-transparent"></div>
      <h2 className="text-5xl mb-12 text-accent font-bold">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {projects.map((p) => (
          <div key={p.id} className="project-card relative overflow-hidden rounded-2xl group">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-6 transition">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
