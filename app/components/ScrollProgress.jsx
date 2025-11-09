"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = progressRef.current;

    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
    });

    // reset initial scale
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
  }, []);

  return (
<div
  ref={progressRef}
  className="scroll-progress-bar h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full"
></div>

  );
}
