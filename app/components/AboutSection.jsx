"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Text animation with split effect
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: -80, rotationY: -15 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Image animation with scale and parallax
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8, x: 80 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Parallax effect on scroll
        gsap.to(imageRef.current, {
          yPercent: 20,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Floating elements
      gsap.utils.toArray(".float-element").forEach((el, i) => {
        gsap.to(el, {
          y: `+=${20 + i * 5}`,
          rotation: 5,
          duration: 2 + i * 0.3,
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
    <section id="about" ref={ref} className="section section-about relative overflow-hidden">
      {/* Unified background */}
      <UnifiedBackground />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 items-center relative z-10">
        <div ref={textRef} className="glass rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-accent">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Final-year Electronics and Communication Engineering student passionate about
            modern web development, IoT systems, and creative software solutions.
          </p>
        </div>

        <div ref={imageRef} className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="/bg.jpg"
            alt="Munazza Begam"
            className="about-img rounded-2xl w-full h-[300px] sm:h-[350px] md:h-[420px] object-cover border border-white/20 shadow-2xl relative z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl z-10"></div>
        </div>
      </div>
    </section>
  );
}
