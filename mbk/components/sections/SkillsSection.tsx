import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-12 md:pb-16"
    >
      <SectionHeader
        label="Engineering Focus"
        title="How I build"
        subtitle="Capabilities across architecture, real-time systems, AI-assisted workflows, and product delivery."
        subtitleClassName="max-w-[40rem]"
      />

      <div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-14 lg:gap-x-20"
        style={{ borderTop: "1px solid rgba(99,143,200,0.12)" }}
      >
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="py-4 sm:py-[18px]"
            style={{ borderBottom: "1px solid rgba(99,143,200,0.12)" }}
          >
            <p
              className="mb-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em]"
              style={{ color: "#4f9cf8" }}
            >
              {cap.title}
            </p>
            <p
              className="text-[13px] leading-[1.55]"
              style={{ color: "var(--color-p-muted)" }}
            >
              {cap.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
