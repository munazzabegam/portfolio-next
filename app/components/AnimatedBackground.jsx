"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const orbs = gsap.utils.toArray(".orb");
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        x: "random(-100,100)",
        y: "random(-100,100)",
        scale: "random(0.8,1.2)",
        repeat: -1,
        yoyo: true,
        duration: 6 + Math.random() * 4,
        ease: "sine.inOut",
      });
    });

    // Parallax scroll movement
    gsap.to(ref.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: { trigger: ref.current, scrub: true },
    });
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="orb w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[120px] opacity-30 absolute top-10 left-10"></div>
      <div className="orb w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-[140px] opacity-20 absolute bottom-10 right-10"></div>
      <div className="orb w-64 h-64 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full blur-[100px] opacity-25 absolute top-1/3 left-1/2"></div>
    </div>
  );
}
