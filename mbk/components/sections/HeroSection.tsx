import { Pill } from "@/components/ui/Pill";

const heroBadges = [
  "Software architecture",
  "Real-time interfaces",
  "AI-assisted workflows",
  "Full-stack engineering",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col px-6 md:px-10 pt-[100px] pb-10 max-w-[1100px] mx-auto"
    >
      {/* Headline — strong mobile floor; scales with viewport up to cap */}
      <h1
        className="font-sans font-light leading-[1.08] max-w-[min(100%,36rem)] mb-5 md:max-w-[min(640px,calc(100vw-80px))]"
        style={{
          fontSize: "clamp(2.5rem, 0.65rem + 6.2vw, 3rem)",
          color: "#e8eef6",
          letterSpacing: "-0.02em",
          textWrap: "balance",
        }}
      >
        Software engineer
        <span className="md:hidden"> </span>
        <br aria-hidden className="hidden md:block" />
        building{" "}
        <em
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
            fontSize: "1.05em",
            color: "#4f9cf8",
          }}
        >
          reliable product systems
        </em>
        .
      </h1>

      {/* Sub-headline */}
      <p
        className="mb-9 max-w-[min(100%,36rem)] text-[16px] leading-[1.7] md:max-w-[560px] md:text-[15px] md:leading-[1.65]"
        style={{ color: "var(--color-p-muted)" }}
      >
        BASc in Electrical Engineering from the University of British Columbia.
        Currently a Software Engineer at Coinbase, focused on software
        architecture, real-time product systems, and AI-assisted engineering
        workflows.
      </p>

      {/* CTAs — one row at all breakpoints; equal thirds on mobile */}
      <div className="mb-8 grid min-w-0 w-full grid-cols-3 gap-2 md:gap-3 md:flex md:flex-row md:flex-wrap">
        <a
          href="#experience"
          className="btn-primary-hover flex min-h-11 min-w-0 items-center justify-center px-1.5 py-2.5 text-center text-[11px] font-medium leading-snug rounded-[6px] no-underline sm:px-2 md:min-h-0 md:px-[22px] md:py-[10px] md:text-[13px]"
          style={{ background: "#4f9cf8", color: "#fff" }}
        >
          View Experience
        </a>
        <a
          href="#projects"
          className="btn-ghost-hover flex min-h-11 min-w-0 items-center justify-center px-1.5 py-2.5 text-center text-[11px] font-normal leading-snug rounded-[6px] no-underline sm:px-2 md:min-h-0 md:px-[22px] md:py-[10px] md:text-[13px]"
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
          className="btn-ghost-hover flex min-h-11 min-w-0 items-center justify-center px-1.5 py-2.5 text-center text-[11px] font-normal leading-snug rounded-[6px] no-underline sm:px-2 md:min-h-0 md:px-[22px] md:py-[10px] md:text-[13px]"
          style={{
            border: "1px solid rgba(99,143,200,0.22)",
            color: "var(--color-p-muted)",
            background: "transparent",
          }}
        >
          Contact
        </a>
      </div>

      {/* Supporting detail */}
      <ul className="m-0 flex w-full min-w-0 max-w-full list-none flex-wrap gap-[10px] p-0">
        {heroBadges.map((badge) => (
          <li key={badge} className="shrink-0">
            <Pill label={badge} variant="badge" />
          </li>
        ))}
      </ul>
    </section>
  );
}
