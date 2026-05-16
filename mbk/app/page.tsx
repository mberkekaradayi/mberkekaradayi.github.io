import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Divider = () => (
  <div
    className="max-w-[1100px] mx-auto shrink-0 px-6 md:px-10 py-3 md:py-4"
    aria-hidden="true"
  >
    <div
      className="h-px w-full"
      style={{ background: "rgba(99,143,200,0.14)" }}
    />
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
      </main>

      <ContactSection />
    </div>
  );
}
