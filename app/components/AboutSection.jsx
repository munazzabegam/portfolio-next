"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current.querySelectorAll(".fade"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={ref} className="section grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
      <div className="fade">
        <h2 className="text-7xl mb-6">About Me</h2>
        <p className="text-muted text-lg leading-relaxed">
          I craft dynamic and visually engaging websites blending motion design with usability.
          My mission is to create experiences that connect creativity and performance.
        </p>
      </div>
      <div className="fade">
        <img
          src="/bg.jpg"
          alt="Alex working"
          className="rounded-lg object-cover w-full h-[400px]"
        />
      </div>
    </section>
  );
}
