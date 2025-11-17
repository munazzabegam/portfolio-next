"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
      gsap.utils.toArray(".exp-card").forEach((card, i) => {
        const dot = card.querySelector(".exp-dot");
        const cardContent = card.querySelector(".exp-content");

        // Card animation - slide from left
        gsap.fromTo(
          cardContent,
          {
            x: -60,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.15,
          }
        );

        // Dot pulse animation
        if (dot) {
          gsap.to(dot, {
            scale: 1.5,
            opacity: 0.6,
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.3,
          });
        }

        // Hover effect
        card.addEventListener("mouseenter", () => {
          gsap.to(cardContent, {
            scale: 1.03,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(cardContent, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Animated timeline line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      role: "Web Developer",
      company: "PRO GEE DEE VENTURES",
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
      {/* Unified background */}
      <UnifiedBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 ref={titleRef} className="text-4xl sm:text-5xl text-center mb-12 md:mb-16 text-accent font-bold">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line - left side */}
          <div className="timeline-line absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-400 to-transparent"></div>
          
          <div className="space-y-8 md:space-y-12 pl-8 sm:pl-12 md:pl-16">
            {experiences.map((e, i) => (
              <div key={i} className="exp-card relative">
                {/* Timeline dot */}
                <div className="exp-dot absolute -left-[22px] sm:-left-[34px] md:-left-[38px] top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 shadow-lg shadow-purple-500/50 z-10"></div>
                
                {/* Card content - all aligned left */}
                <div className="exp-content glass rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/30 border border-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {e.role}
                      </h3>
                      <p className="text-accent font-medium text-base md:text-lg">{e.company}</p>
                    </div>
                    <span className="text-xs md:text-sm text-accent font-medium px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 whitespace-nowrap self-start sm:self-center">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
