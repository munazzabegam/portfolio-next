"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(".services-bg", {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const services = [
    { title: "Web Development", desc: "Responsive apps using React, Next.js & TailwindCSS." },
    { title: "AI/ML Systems", desc: "Python, TensorFlow, and intelligent data-driven solutions." },
    { title: "UI/UX Design", desc: "Crafting intuitive, elegant, and modern design systems." },
  ];

  return (
    <section id="services" ref={ref} className="section section-services relative overflow-hidden text-center">
      <div className="services-bg absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,94,255,0.1),transparent_70%)]"></div>
      <h2 className="text-5xl mb-12 text-accent font-bold">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateY: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="service-card glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
