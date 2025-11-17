"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with split effect
      const titleChars = titleRef.current?.textContent?.split("") || [];
      if (titleRef.current && titleChars.length > 0) {
        titleRef.current.innerHTML = titleChars
          .map((char, i) => `<span class="char-${i}" style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`)
          .join("");
        
        gsap.fromTo(
          `.char-${0}`,
          { opacity: 0, y: 100, rotationX: -90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        gsap.utils.toArray(titleRef.current.querySelectorAll("[class^='char-']")).forEach((char, i) => {
          gsap.fromTo(
            char,
            { opacity: 0, y: 100, rotationX: -90 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.6,
              delay: i * 0.05,
              ease: "power3.out",
            }
          );
        });
      }

      // Animate subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.8,
          ease: "elastic.out(1, 0.5)",
        }
      );

      // Animate scroll indicator
      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.5,
          ease: "power2.out",
        }
      );

      // Continuous bounce animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Parallax background motion
      gsap.to(".hero-bg", {
        yPercent: 30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Floating particles animation
      gsap.utils.toArray(".floating-particle").forEach((particle, i) => {
        gsap.to(particle, {
          y: `+=${30 + i * 10}`,
          x: `+=${20 - i * 5}`,
          rotation: 360,
          duration: 3 + i * 0.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="home" className="section section-hero text-center overflow-hidden relative">
      {/* Unified background */}
      <UnifiedBackground className="hero-bg" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-particle absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      <div className="z-10 relative px-4">
        <h1
          ref={titleRef}
          className="text-[11vw] sm:text-[9vw] md:text-[7vw] font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent glow mb-4 sm:mb-6 leading-tight"
        >
          Munazza Begam
        </h1>
        <p ref={subtitleRef} className="text-muted mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-medium px-2">
          Web Developer • AI Enthusiast • Electronics Engineer
        </p>
      </div>
      <p ref={scrollIndicatorRef} className="scroll-indicator mt-8 sm:mt-12">Scroll ↓</p>
    </section>
  );
}
