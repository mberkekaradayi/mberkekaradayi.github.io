import { SectionHeader } from "@/components/ui/SectionHeader";

const UBC_FEATURE_URL =
  "https://vantagecollege.ubc.ca/news/october-10-2025/meet-mehmet-vantage-one-engineering-alumni-and-basc-graduate-2025";

type FactRow = {
  label: string;
  value: string;
  href?: string;
  linkLabel?: string;
  linkAriaLabel?: string;
};

const factRows: FactRow[] = [
  { label: "Coinbase", value: "Software Engineer" },
  {
    label: "UBC",
    value: "BASc, Electrical Engineering",
  },
  {
    label: "Featured by UBC",
    value: "UBC Engineering alumni feature",
    href: UBC_FEATURE_URL,
    linkLabel: "Read feature",
    linkAriaLabel:
      "Read UBC Engineering alumni feature: Meet Mehmet, BASc graduate of 2025 (opens in new tab)",
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
              <dd className="m-0">
                <p
                  className="text-[14px] leading-[1.55]"
                  style={{ color: "#e8eef6" }}
                >
                  {row.value}
                </p>
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-hover mt-1.5 inline-block text-[13px] leading-snug no-underline outline-offset-4"
                    style={{ color: "#4f9cf8" }}
                    aria-label={row.linkAriaLabel}
                  >
                    {row.linkLabel} →
                  </a>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
