import { Pill } from "@/components/ui/Pill";

const heroBadges = [
  "React · TypeScript · GraphQL/Relay",
  "WebSockets · Real-Time Systems",
  "Next.js · Full-Stack Workflows",
  "LLM Tooling · AI Automation",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-[100px] pb-[40px] max-w-[1100px] mx-auto"
    >
      {/* Role tag */}
      <div
        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase px-3 py-[5px] rounded-[4px] mb-8 w-fit"
        style={{
          color: "#38d9c4",
          border: "1px solid rgba(56,217,196,0.2)",
          background: "rgba(56,217,196,0.05)",
        }}
      >
        <span
          className="w-[6px] h-[6px] rounded-full pulse-dot shrink-0"
          style={{ background: "#38d9c4" }}
        />
        Software Engineer · Coinbase
      </div>

      {/* Headline */}
      <h1
        className="font-sans font-light leading-[1.15] max-w-[640px] mb-6"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.1rem)",
          color: "#e8eef6",
          letterSpacing: "-0.02em",
          textWrap: "balance",
        }}
      >
        Software engineer focused on{" "}
        <em
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
            color: "#4f9cf8",
          }}
        >
          frontend systems,
        </em>{" "}
        real-time interfaces, and AI tooling.
      </h1>

      {/* Sub-headline */}
      <p
        className="mb-10 max-w-[560px] text-[15px] leading-[1.65]"
        style={{ color: "var(--color-p-muted)" }}
      >
        BASc in Electrical Engineering from the University of British Columbia.
        Currently a Software Engineer at Coinbase, focused on frontend architecture,
        real-time product systems, and AI-assisted engineering workflows.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mb-14">
        <a
          href="#experience"
          className="btn-primary-hover text-[13px] font-medium px-[22px] py-[10px] rounded-[6px] no-underline"
          style={{ background: "#4f9cf8", color: "#fff" }}
        >
          View Experience
        </a>
        <a
          href="#projects"
          className="btn-ghost-hover text-[13px] font-normal px-[22px] py-[10px] rounded-[6px] no-underline"
          style={{
            border: "1px solid rgba(99,143,200,0.22)",
            color: "var(--color-p-muted)",
            background: "transparent",
          }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="btn-ghost-hover text-[13px] font-normal px-[22px] py-[10px] rounded-[6px] no-underline"
          style={{
            border: "1px solid rgba(99,143,200,0.22)",
            color: "var(--color-p-muted)",
            background: "transparent",
          }}
        >
          Contact
        </a>
      </div>

      {/* Technical badges */}
      <div className="flex flex-wrap gap-[10px]">
        {heroBadges.map((badge) => (
          <Pill key={badge} label={badge} variant="badge" />
        ))}
      </div>
    </section>
  );
}
