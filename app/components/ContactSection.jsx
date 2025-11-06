"use client";
export default function ContactSection() {
  return (
    <section className="section text-center">
      <h2 className="text-6xl mb-6">Let’s Work Together</h2>
      <p className="text-muted mb-10 max-w-xl mx-auto">
        Have a project in mind or want to collaborate? Let's connect and build something meaningful.
      </p>
      <a
        href="mailto:alex@example.com"
        className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition font-semibold"
      >
        Get in Touch
      </a>
    </section>
  );
}
