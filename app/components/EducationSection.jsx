"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      ".edu-node",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(".edu-bg", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const education = [
    { title: "B.E. Electronics & Communication", inst: "PA College of Engineering", year: "2021–2025", note: "CGPA: 8.9" },
    { title: "PUC (PCMB)", inst: "St. Philomena PU College", year: "2019–2021", note: "Score: 95.83%" },
    { title: "SSLC", inst: "Vittal Jaycees English Medium School", year: "2008–2019", note: "94.72%" },
  ];

  return (
    <section id="education" ref={ref} className="section section-education relative overflow-hidden">
      <div className="edu-bg absolute inset-0 bg-gradient-to-t from-purple-950/10 via-transparent to-indigo-900/10"></div>
      <h2 className="text-5xl text-accent font-bold mb-12 text-center">Education</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-400 to-transparent"></div>
        {education.map((e, i) => (
          <div key={i} className="edu-node mb-12 relative flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 mb-4"></div>
            <div className="glass rounded-xl p-6 max-w-md text-center">
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <p className="text-accent">{e.inst}</p>
              <p className="text-sm text-gray-400">{e.year} — {e.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
