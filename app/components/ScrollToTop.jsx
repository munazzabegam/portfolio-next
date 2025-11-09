"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const showAnim = gsap.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      paused: true,
      ease: "power3.out",
    });

    ScrollTrigger.create({
      start: "top -200",
      onEnter: () => {
        setVisible(true);
        showAnim.play();
      },
      onLeaveBack: () => {
        showAnim.reverse();
        setVisible(false);
      },
    });
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1.2, ease: "power3.inOut" });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className={`floating-btn relative p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(210,94,255,0.5)] hover:shadow-[0_0_35px_rgba(210,94,255,0.8)] transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Scroll to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
