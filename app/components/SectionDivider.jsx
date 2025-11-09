"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionDivider({ color1 = "#7b61ff", color2 = "#d25eff" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { backgroundPosition: "0% 50%" },
      {
        backgroundPosition: "100% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
<div
  ref={ref}
  className="w-full h-[15vh] section-divider"
  style={{ background: `linear-gradient(120deg, ${color1}, ${color2})` }}
></div>

  );
}
