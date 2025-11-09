"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up intro animation
      gsap.fromTo(
        ".fade-up",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3, stagger: 0.25, ease: "power3.out" }
      );

      // Parallax background motion
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section section-hero text-center overflow-hidden relative">
      {/* Parallax background layer */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-b from-purple-800/40 via-transparent to-black dark:from-purple-500/30"></div>

      <div className="z-10 fade-up relative">
        <h1 className="text-[9vw] font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent glow">
          Munazza Begam
        </h1>
        <p className="text-muted mt-4 text-lg">
          Web Developer • AI Enthusiast • Electronics Engineer
        </p>
      </div>
      <p className="scroll-indicator">Scroll ↓</p>
    </section>
  );
}
