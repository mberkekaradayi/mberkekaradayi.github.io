import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { skillGroups } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-14"
    >
      <SectionHeader
        label="Engineering Focus"
        title="How I build"
        subtitle="Across frontend architecture, real-time product workflows, AI-assisted automation, backend services, and reliability-focused engineering."
        subtitleClassName="max-w-[42rem]"
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="skill-hover flex h-full flex-col rounded-[10px] p-6"
            style={{
              background: "#0b1628",
              border: "1px solid rgba(99,143,200,0.12)",
            }}
          >
            {/* Card title (mono accent) */}
            <div
              className="mb-3 flex shrink-0 items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em]"
              style={{ color: "#38d9c4" }}
            >
              <span
                className="h-px w-4 shrink-0 opacity-60"
                style={{ background: "#38d9c4" }}
              />
              {group.title}
            </div>

            {/* One-line engineering focus */}
            <p
              className="mb-5 flex-1 text-[13px] leading-[1.55]"
              style={{ color: "var(--color-p-muted)" }}
            >
              {group.description}
            </p>

            {/* Skill pills */}
            <div className="mt-auto flex flex-wrap gap-[6px]">
              {group.skills.map((skill) => (
                <Pill key={skill} label={skill} variant="skill" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
