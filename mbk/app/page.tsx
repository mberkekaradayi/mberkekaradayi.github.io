import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Divider = () => (
  <div className="max-w-[1100px] mx-auto px-6 md:px-10" aria-hidden="true">
    <div style={{ height: "1px", background: "rgba(99,143,200,0.12)" }} />
  </div>
);

export default function Home() {
  return (
    <div className="grid-bg relative">
      <Navbar />

      <main id="main" className="relative z-10">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
