"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
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

      // Enhanced service card animations
      gsap.utils.toArray(".service-card").forEach((card, i) => {
        const title = card.querySelector(".service-title");
        const desc = card.querySelector(".service-desc");

        // Card entrance with 3D flip
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            rotationY: -30,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Stagger text animation
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.2 + 0.4,
              ease: "power2.out",
            }
          );
        }

        if (desc) {
          gsap.fromTo(
            desc,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.2 + 0.6,
              ease: "power2.out",
            }
          );
        }

        // Enhanced hover effect
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.08,
            y: -15,
            rotationY: 8,
            rotationX: 5,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });

      // Parallax background
      gsap.to(".services-bg", {
        yPercent: 30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: "Web Development", desc: "Responsive apps using React, Next.js & TailwindCSS." },
    { title: "AI/ML Systems", desc: "Python, TensorFlow, and intelligent data-driven solutions." },
    { title: "UI/UX Design", desc: "Crafting intuitive, elegant, and modern design systems." },
  ];

  return (
    <section id="services" ref={ref} className="section section-services relative overflow-hidden text-center">
      {/* Unified background */}
      <UnifiedBackground className="services-bg" />

      <h2 ref={titleRef} className="text-4xl sm:text-5xl mb-8 md:mb-12 text-accent font-bold relative z-10 px-4">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="service-card glass p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
          >
            <h3 className="service-title text-xl sm:text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {s.title}
            </h3>
            <p className="service-desc text-gray-300 leading-relaxed text-sm sm:text-base">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
