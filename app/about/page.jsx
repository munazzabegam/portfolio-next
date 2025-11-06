// FILE: app/about/page.jsx
"use client";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="card-glass">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300">I’m a front-end developer focused on motion, UI, and accessibility. I design systems that feel premium and perform well.</p>
          </div>
          <div className="card-glass">
            <h3 className="text-2xl font-semibold mb-3">Skills</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Next.js · React · TailwindCSS</li>
              <li>GSAP · ScrollTrigger · Lenis</li>
              <li>Design systems & performance</li>
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
