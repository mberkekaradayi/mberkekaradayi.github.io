import { SectionHeader } from "@/components/ui/SectionHeader";

const sidebarItems = [
  {
    icon: "SWE",
    title: "Coinbase",
    description:
      "Frontend engineering across real-time product systems, reliability workflows, and AI-assisted automation.",
  },
  {
    icon: "BSc",
    title: "University of British Columbia",
    description:
      "Bachelor of Applied Science in Electrical Engineering.",
  },
  {
    icon: "→",
    title: "Engineering Interests",
    description:
      "Frontend architecture, real-time systems, AI-assisted engineering workflows, developer tooling, and product reliability.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-14"
    >
      <SectionHeader label="About" title="Engineering background" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text block */}
        <div className="flex flex-col gap-5 max-w-[560px]">
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-p-muted)" }}
          >
            I&apos;m Mehmet Berke Karadayi, a Software Engineer at Coinbase and
            an Electrical Engineering graduate from the University of British Columbia, focused on
            building reliable product systems across frontend, full-stack,
            real-time, and AI-assisted workflows.
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-p-muted)" }}
          >
            My work spans React, TypeScript, GraphQL/Relay, WebSockets,
            backend services, and LLM-powered tooling. I&apos;m especially
            interested in applying AI to improve engineering workflows, developer
            productivity, and product experiences.
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-p-muted)" }}
          >
            I enjoy solving ambiguous technical problems and turning them into
            polished, maintainable software. I value ownership, collaboration,
            and engineering craftsmanship across software engineering, AI,
            fintech, and product impact.
          </p>
        </div>

        {/* Sidebar cards */}
        <div className="flex flex-col gap-3">
          {sidebarItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-[8px]"
              style={{
                border: "1px solid rgba(99,143,200,0.12)",
                background: "#0b1628",
              }}
            >
              <span
                className="font-mono text-[10px] px-[7px] py-[4px] rounded-[4px] whitespace-nowrap mt-[1px] shrink-0"
                style={{
                  color: "#4f9cf8",
                  background: "rgba(79,156,248,0.08)",
                  border: "1px solid rgba(79,156,248,0.15)",
                }}
              >
                {item.icon}
              </span>
              <div>
                <p
                  className="text-[13px] font-medium mb-[2px]"
                  style={{ color: "#e8eef6" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[13px] leading-[1.5]"
                  style={{ color: "var(--color-p-muted)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
