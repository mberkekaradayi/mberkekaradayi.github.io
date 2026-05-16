import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data/experience";

function TechRow({ items }: { items: string[] }) {
  return (
    <p
      className="m-0 font-mono text-[10px] leading-relaxed tracking-[0.02em]"
      style={{ color: "rgba(170, 191, 212, 0.75)" }}
    >
      {items.join(" · ")}
    </p>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-12 md:py-14"
    >
      <SectionHeader
        label="Experience"
        title="Professional history"
        subtitle="Structured proof across frontend, full-stack, desktop, and AI-assisted engineering."
      />

      <div className="mt-8 flex flex-col gap-2.5">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="card-hover rounded-[8px] px-5 py-5 md:px-6 md:py-5 cursor-default"
            style={{
              background: "rgba(11, 22, 40, 0.55)",
              border: "1px solid rgba(99,143,200,0.1)",
            }}
          >
            <div className="mb-2.5 flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${exp.company} website`}
                  className="shrink-0 overflow-hidden rounded-md border"
                  style={{
                    borderColor: "rgba(99,143,200,0.14)",
                    background: "rgba(79,156,248,0.04)",
                  }}
                >
                  <Image
                    src={exp.companyLogo}
                    alt={exp.company}
                    width={36}
                    height={36}
                    className="block size-9 rounded-[6px]"
                    sizes="36px"
                  />
                </a>
                <div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-hover mb-0.5 inline-block font-mono text-[13px] font-medium tracking-[0.02em] no-underline"
                    style={{ color: "#e8eef6" }}
                  >
                    {exp.company} ↗
                  </a>
                  <p
                    className="text-[11px] font-mono tracking-[0.06em] uppercase"
                    style={{ color: "#4f9cf8" }}
                  >
                    {exp.role}
                  </p>
                </div>
              </div>
              <p
                className="font-mono text-[11px] whitespace-nowrap pt-0.5"
                style={{ color: "var(--color-p-muted)" }}
              >
                {exp.dates}
              </p>
            </div>

            <p
              className="mb-3 max-w-[680px] text-[13px] leading-[1.6]"
              style={{ color: "var(--color-p-muted)" }}
            >
              {exp.summary}
            </p>

            <ul className="mb-3.5 list-outside list-disc space-y-1 pl-5 marker:text-[#4f9cf8]/80">
              {exp.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-[12.5px] leading-[1.55] ps-0.5"
                  style={{ color: "rgba(232, 238, 246, 0.92)" }}
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <TechRow items={exp.tech} />
          </article>
        ))}
      </div>
    </section>
  );
}
