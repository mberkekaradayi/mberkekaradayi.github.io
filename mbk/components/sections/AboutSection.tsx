import { SectionHeader } from "@/components/ui/SectionHeader";

const factRows = [
  { label: "Coinbase", value: "Software Engineer" },
  { label: "UBC", value: "Electrical Engineering" },
  {
    label: "Interests",
    value: "Frontend architecture · Real-time systems · AI-assisted workflows",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-[1100px] mx-auto scroll-mt-[72px] px-6 md:px-10 pt-4 pb-12 md:pb-14"
    >
      <SectionHeader label="About" title="Background" compact />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-start">
        <div className="flex max-w-[540px] flex-col gap-4">
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-p-muted)" }}
          >
            I&apos;m Mehmet Berke Karadayi, a Software Engineer at Coinbase and
            an Electrical Engineering graduate from UBC. I build reliable
            product systems across frontend architecture, real-time interfaces,
            and AI-assisted engineering workflows.
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-p-muted)" }}
          >
            My work spans React, TypeScript, GraphQL/Relay, WebSockets, and
            LLM-powered tooling. I care about turning ambiguous technical
            problems into polished, maintainable software—with ownership,
            collaboration, and craft.
          </p>
        </div>

        <dl className="m-0 flex flex-col">
          {factRows.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-1 py-4 sm:grid-cols-[8.5rem_1fr]"
              style={{
                borderTop:
                  i === 0 ? "1px solid rgba(99,143,200,0.12)" : undefined,
                borderBottom: "1px solid rgba(99,143,200,0.12)",
              }}
            >
              <dt
                className="font-mono text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "#4f9cf8" }}
              >
                {row.label}
              </dt>
              <dd
                className="m-0 text-[14px] leading-[1.55]"
                style={{ color: "#e8eef6" }}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
