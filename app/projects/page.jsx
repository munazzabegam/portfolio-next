// FILE: app/projects/page.jsx
"use client";
import PageTransition from "../components/PageTransition";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".projects-grid", start: "top 85%" },
      }
    );
  }, []);

  const projects = new Array(6).fill(0).map((_, i) => ({ id: i + 1, title: `Project ${i + 1}` }));

  return (
    <PageTransition>
      <section className="min-h-screen py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="projects-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.id} className="project-card card-glass hover:scale-[1.02] transition transform">
                <div className="h-40 bg-gradient-to-r from-purple-700/30 to-indigo-700/20 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-300 mt-2">Short description of the project with key tech and outcome.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
