// FILE: app/contact/page.jsx
"use client";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center py-32">
        <div className="max-w-3xl mx-auto px-6 text-center card-glass">
          <h2 className="text-4xl font-bold mb-4">Let’s work together</h2>
          <p className="text-gray-300 mb-6">Available for freelance and contract work. I love building motion-rich UIs.</p>
          <a href="mailto:alex@example.com" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-300 text-black font-semibold">
            Email me
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
