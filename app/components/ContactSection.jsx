"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".contact-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );

    gsap.to(".contact-bg", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="contact" ref={ref} className="section section-contact relative text-center overflow-hidden">
      <div className="contact-bg absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,94,255,0.1),transparent_80%)]"></div>
      <h2 className="text-5xl font-bold mb-6 text-accent contact-item">Let’s Work Together</h2>
      <p className="text-muted mb-10 max-w-xl mx-auto contact-item">
        Have an idea or project in mind? Let’s collaborate and make something remarkable.
      </p>
      <div className="flex flex-col items-center gap-3 text-lg contact-item">
        <a href="mailto:munazzabegam11@gmail.com" className="hover:text-accent transition">
          📧 munazzabegam11@gmail.com
        </a>
        <a href="tel:+918197458962" className="hover:text-accent transition">
          📞 +91 81974 58962
        </a>
        <div className="flex gap-6 mt-4 text-xl">
          <a href="https://github.com/munazzabegam" target="_blank" className="hover:text-accent transition">GitHub</a>
          <a href="https://linkedin.com/in/munazza-munnaa" target="_blank" className="hover:text-accent transition">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
