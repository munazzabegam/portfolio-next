"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection() {
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

      // Enhanced card animations
      gsap.utils.toArray(".ach-card").forEach((card, i) => {
        const title = card.querySelector(".ach-title");
        const desc = card.querySelector(".ach-desc");

        // Card entrance with 3D effect
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            scale: 0.8,
            rotationX: -20,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            delay: i * 0.1,
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
              delay: i * 0.1 + 0.3,
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
              delay: i * 0.1 + 0.5,
              ease: "power2.out",
            }
          );
        }

        // Hover effect
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -15,
            scale: 1.05,
            rotationY: 5,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });

      // Parallax background
      gsap.to(".ach-bg", {
        yPercent: 25,
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

  const achievements = [
    { title: "Design Impact Challenge Winner", desc: "1st Prize — Titan Company 'InfecShield' project." },
    { title: "National Hackathon 3rd Place", desc: "Developed ChatGPT for Blind accessibility system." },
    { title: "HackSummit Finalist", desc: "Top 6 nationwide with Bus Tracking project." },
    { title: "ADC 2023 Finalist", desc: "Top 10 National Innovation Finalist." },
    { title: "Postman Student Expert", desc: "Certified in API testing and collaboration." },
  ];

  return (
    <section id="achievements" ref={ref} className="section section-achievements relative overflow-hidden">
      {/* Unified background */}
      <UnifiedBackground className="ach-bg" />

      <h2 ref={titleRef} className="text-4xl sm:text-5xl text-accent font-bold mb-8 md:mb-12 text-center relative z-10 px-4">
        Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="ach-card glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
          >
            <h3 className="ach-title text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {a.title}
            </h3>
            <p className="ach-desc text-gray-400 text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
