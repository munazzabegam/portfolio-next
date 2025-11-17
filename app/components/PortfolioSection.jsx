"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
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

      // Enhanced project card animations
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        const img = card.querySelector(".project-img");
        const overlay = card.querySelector(".project-overlay");
        const title = card.querySelector(".project-title");

        // Card entrance
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotationY: 15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animations
        card.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.15,
            duration: 0.6,
            ease: "power2.out",
          });
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.4,
          });
          gsap.fromTo(
            title,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, delay: 0.1 }
          );
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.4,
          });
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(title, {
            y: 20,
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
          });
        });
      });

      // Parallax background
      gsap.to(".portfolio-bg", {
        yPercent: 20,
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

  const projects = [
    { id: 1, title: "Smart Vision Aid", img: "/bg.jpg" },
    { id: 2, title: "Bus Tracking System", img: "/bg.jpg" },
    { id: 3, title: "InfecShield", img: "/bg.jpg" },
    { id: 4, title: "Noise Reduction", img: "/bg.jpg" },
    { id: 5, title: "Notes Website", img: "/bg.jpg" },
  ];

  return (
    <section id="portfolio" ref={ref} className="section section-portfolio relative text-center overflow-hidden">
      {/* Unified background */}
      <UnifiedBackground className="portfolio-bg" />

      <h2 ref={titleRef} className="text-4xl sm:text-5xl mb-8 md:mb-12 text-accent font-bold relative z-10 px-4">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {projects.map((p) => (
          <div key={p.id} className="project-card relative overflow-hidden rounded-2xl group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={p.img}
              alt={p.title}
              className="project-img w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700"
            />
            <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 sm:p-6 transition-opacity duration-300">
              <h3 className="project-title text-lg sm:text-xl font-semibold text-white">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
