"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const path = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Page enter animation
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 30,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Animate children with stagger
    gsap.fromTo(
      container.children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  }, [path]);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
}
