"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const fadeElems = el.querySelectorAll(".fade");

    // Content fade + parallax image
    gsap.fromTo(
      fadeElems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    gsap.to(".about-img", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="about" ref={ref} className="section section-about relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(123,97,255,0.1),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center relative z-10">
        <div className="fade glass rounded-2xl p-8">
          <h2 className="text-5xl font-bold mb-6 text-accent">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Final-year Electronics and Communication Engineering student passionate about
            modern web development, IoT systems, and creative software solutions.
          </p>
        </div>

        <div className="fade relative">
          <img
            src="/bg.jpg"
            alt="Munazza Begam"
            className="about-img rounded-2xl w-full h-[420px] object-cover border border-white/10 shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
