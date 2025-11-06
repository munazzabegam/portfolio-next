"use client";
export default function ServicesSection() {
  const services = [
    { title: "Web Development", desc: "Next.js, React, TailwindCSS, GSAP animations" },
    { title: "Brand Design", desc: "Identity, typography, layout systems" },
    { title: "Motion Design", desc: "Framer Motion, GSAP timelines, scroll animations" },
  ];
  return (
    <section className="section text-center px-6">
      <h2 className="text-6xl mb-10">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="border border-white/10 p-8 rounded-xl hover:bg-white/5 transition">
            <h3 className="text-2xl mb-3 font-semibold">{s.title}</h3>
            <p className="text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
