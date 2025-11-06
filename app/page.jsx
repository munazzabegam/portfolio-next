"use client";
import PageTransition from "./components/PageTransition";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </PageTransition>
  );
}
