"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnifiedBackground from "./UnifiedBackground";
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, scale: 0.8, y: -30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // Contact items animation with magnetic effect
      gsap.utils.toArray(".contact-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          }
        );

        // Magnetic hover effect
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.1,
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Floating background elements
      gsap.utils.toArray(".float-contact").forEach((el, i) => {
        gsap.to(el, {
          y: `+=${30 + i * 10}`,
          x: `+=${20 - i * 5}`,
          rotation: 360,
          duration: 4 + i,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.5,
        });
      });

      // Parallax background
      gsap.to(".contact-bg", {
        yPercent: -15,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="section section-contact relative text-center overflow-hidden">
      {/* Unified background */}
      <UnifiedBackground className="contact-bg" />

      <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-accent relative z-10 px-4">
        Let's Work Together
      </h2>
      <p ref={subtitleRef} className="text-muted mb-8 md:mb-10 max-w-xl mx-auto text-base sm:text-lg relative z-10 px-4">
        Have an idea or project in mind? Let's collaborate and make something remarkable.
      </p>
      <div className="flex flex-col items-center gap-3 sm:gap-4 text-base sm:text-lg relative z-10 px-4">
        <a
          href="mailto:munazzabegam11@gmail.com"
          className="contact-item glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:border-white/40 border border-white/20 transition-all duration-300 text-sm sm:text-base text-center w-full max-w-md"
        >
          📧 munazzabegam11@gmail.com
        </a>
        <a
          href="tel:+918197458962"
          className="contact-item glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:border-white/40 border border-white/20 transition-all duration-300 text-sm sm:text-base text-center w-full max-w-md"
        >
          📞 +91 81974 58962
        </a>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 sm:mt-4 w-full max-w-md">
          <a
            href="https://github.com/munazzabegam"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:border-white/40 border border-white/20 transition-all duration-300 text-base sm:text-xl text-center flex-1"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/munazza-munnaa"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:border-white/40 border border-white/20 transition-all duration-300 text-base sm:text-xl text-center flex-1"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
