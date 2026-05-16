import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { experiences } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-14"
    >
      <SectionHeader
        label="Experience"
        title="Professional history"
        subtitle="Three production environments. Frontend, full-stack, desktop engineering, and AI-assisted automation."
      />

      <div className="mt-10 flex flex-col gap-3">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="card-hover rounded-[10px] p-7 cursor-default"
            style={{
              background: "#0b1628",
              border: "1px solid rgba(99,143,200,0.12)",
            }}
          >
            {/* Header row */}
            <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
              <div className="flex items-start gap-4">
                {/* Company logo */}
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${exp.company} website`}
                  className="shrink-0 rounded-lg overflow-hidden border"
                  style={{
                    borderColor: "rgba(99,143,200,0.18)",
                    background: "rgba(79,156,248,0.05)",
                  }}
                >
                  <Image
                    src={exp.companyLogo}
                    alt={exp.company}
                    width={40}
                    height={40}
                    className="block size-10 rounded-[7px]"
                    sizes="40px"
                  />
                </a>
                <div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-hover font-mono text-[13px] font-medium tracking-[0.02em] mb-1 inline-block no-underline"
                    style={{ color: "#e8eef6" }}
                  >
                    {exp.company} ↗
                  </a>
                  <p
                    className="text-[12px] font-mono tracking-[0.06em] uppercase"
                    style={{ color: "#4f9cf8" }}
                  >
                    {exp.role}
                  </p>
                </div>
              </div>
              <p
                className="font-mono text-[11px] pt-[2px] whitespace-nowrap"
                style={{ color: "var(--color-p-muted)" }}
              >
                {exp.dates}
              </p>
            </div>

            {/* Summary */}
            <p
              className="text-[13.5px] leading-[1.65] mb-4 max-w-[680px]"
              style={{ color: "var(--color-p-muted)" }}
            >
              {exp.summary}
            </p>

            {/* Bullets (native markers for predictable rendering across clients) */}
            <ul className="mb-4 list-outside list-disc space-y-[6px] pl-6 marker:text-[#4f9cf8]">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-[13px] leading-[1.55] ps-1"
                  style={{ color: "#e8eef6" }}
                >
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-[6px]">
              {exp.tech.map((t) => (
                <Pill key={t} label={t} variant="tech" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
