"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section relative text-center overflow-hidden">
      <div className="z-10 fade-up">
        <h1 className="text-[14vw] leading-none font-extrabold">ALEX JOHNSON</h1>
        <div className="flex justify-center gap-4 mt-4 text-muted text-lg">
          <p>Creative Developer</p><span>•</span><p>London, UK</p>
        </div>
      </div>
      <img
        src="/portrait.jpg"
        alt="Alex portrait"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
      />
      <p className="scroll-indicator">Scroll ↓</p>
    </section>
  );
}
