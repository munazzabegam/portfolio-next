"use client";
import PageTransition from "./components/PageTransition";
import ScrollReveal from "./components/ScrollReveal";
// import SectionDivider from "./components/SectionDivider";

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import AchievementsSection from "./components/AchievementsSection";
import EducationSection from "./components/EducationSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <PageTransition>
      <ScrollReveal>
        <Hero />

        <AboutSection className="reveal" />

        <ExperienceSection className="reveal" />

        <SkillsSection className="reveal" />

        <AchievementsSection className="reveal" />

        <EducationSection className="reveal" />

        <ServicesSection className="reveal" />

        <PortfolioSection className="reveal" />

        <ContactSection className="reveal" />
      </ScrollReveal>
    </PageTransition>
  );
}
