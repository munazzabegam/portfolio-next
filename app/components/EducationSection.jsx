"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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

      // Enhanced node animations
      gsap.utils.toArray(".edu-node").forEach((node, i) => {
        const dot = node.querySelector(".edu-dot");
        const card = node.querySelector(".edu-card");

        // Card animation - alternate from left/right
        const isEven = i % 2 === 0;
        if (card) {
          gsap.fromTo(
            card,
            {
              x: isEven ? -80 : 80,
              opacity: 0,
              scale: 0.9,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: node,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.15,
            }
          );
        }

        // Dot pulse animation
        if (dot) {
          gsap.to(dot, {
            scale: 1.8,
            opacity: 0.4,
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.3,
          });
        }

        // Hover effect
        node.addEventListener("mouseenter", () => {
          if (card) {
            gsap.to(card, {
              scale: 1.03,
              y: -5,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        node.addEventListener("mouseleave", () => {
          if (card) {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });

      // Animated timeline line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );

      // Parallax background
      gsap.to(".edu-bg", {
        yPercent: -20,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const education = [
    { title: "B.E. Electronics & Communication", inst: "PA College of Engineering", year: "2021–2025", note: "CGPA: 8.9" },
    { title: "PUC (PCMB)", inst: "St. Philomena PU College", year: "2019–2021", note: "Score: 95.83%" },
    { title: "SSLC", inst: "Vittal Jaycees English Medium School", year: "2008–2019", note: "94.72%" },
  ];

  return (
    <section id="education" ref={ref} className="section section-education relative overflow-hidden">
      {/* Unified background */}
      <UnifiedBackground className="edu-bg" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 ref={titleRef} className="text-4xl sm:text-5xl text-accent font-bold mb-12 md:mb-16 text-center">
          Education
        </h2>
        
        <div className="relative max-w-6xl mx-auto" style={{ width: '100% !important' }}>
          {/* Vertical centered timeline - hidden on mobile, shown on desktop */}
          <div className="timeline-line hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-400 to-transparent"></div>
          
          <div className="space-y-8 md:space-y-12">
            {education.map((e, i) => (
              <div key={i} className="edu-node relative">
                {/* Timeline dot - centered, positioned at card top */}
                <div className="edu-dot hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 shadow-lg shadow-purple-500/50 z-10"></div>
                
                {/* Card content - matching experience structure */}
                <div className={`edu-card glass rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/30 border border-white/10 transition-all duration-300 cursor-pointer w-full ${
                  i % 2 === 0 
                    ? "md:w-[98%] md:max-w-[calc(50%-1rem)] md:pr-12 md:mr-auto" 
                    : "md:w-[98%] md:max-w-[calc(50%-1rem)] md:pl-12 md:ml-auto"
                }`}>
                  {/* Year badge - centered */}
                  <div className="flex justify-center mb-4">
                    <span className="text-xs md:text-sm text-accent font-medium px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 whitespace-nowrap">
                      {e.year}
                    </span>
                  </div>
                  
                  {/* Title and Institution */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {e.title}
                    </h3>
                    <p className="text-accent font-medium text-base md:text-lg">{e.inst}</p>
                  </div>
                  
                  {/* Note/CGPA */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}