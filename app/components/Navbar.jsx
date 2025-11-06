"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <ul className="flex gap-10 text-xs uppercase tracking-widest text-gray-400">
        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-white transition">About</Link></li>
        <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
        <li><Link href="/projects" className="hover:text-white transition">Portfolio</Link></li>
        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
      </ul>
    </nav>
  );
}
