"use client";
import PageTransition from "./components/PageTransition";
import ScrollReveal from "./components/ScrollReveal";
import SectionDivider from "./components/SectionDivider";

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

        <SectionDivider color1="#7b61ff" color2="#d25eff" />
        <AboutSection className="reveal" />

        <SectionDivider color1="#d25eff" color2="#8e74ff" />
        <ExperienceSection className="reveal" />

        <SectionDivider color1="#8e74ff" color2="#d25eff" />
        <SkillsSection className="reveal" />

        <SectionDivider color1="#d25eff" color2="#7b61ff" />
        <AchievementsSection className="reveal" />

        <SectionDivider color1="#7b61ff" color2="#d25eff" />
        <EducationSection className="reveal" />

        <SectionDivider color1="#d25eff" color2="#8e74ff" />
        <ServicesSection className="reveal" />

        <SectionDivider color1="#8e74ff" color2="#d25eff" />
        <PortfolioSection className="reveal" />

        <SectionDivider color1="#d25eff" color2="#7b61ff" />
        <ContactSection className="reveal" />
      </ScrollReveal>
    </PageTransition>
  );
}
