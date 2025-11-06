"use client";
export default function PortfolioSection() {
  const projects = [
    { id: 1, title: "Interactive 3D Website", img: "/bg.jpg" },
    { id: 2, title: "Brand Portfolio", img: "/bg.jpg" },
    { id: 3, title: "Cinematic Landing Page", img: "/bg.jpg" },
  ];
  return (
    <section className="section text-center px-6">
      <h2 className="text-6xl mb-10">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div key={p.id} className="group overflow-hidden relative rounded-xl">
            <img src={p.img} alt={p.title} className="w-full h-80 object-cover opacity-80 group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <h3 className="text-xl font-bold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
