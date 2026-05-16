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
      {/* Headline */}
      <h1
        className="font-sans font-light leading-[1.12] max-w-[520px] mb-5"
        style={{
          fontSize: "clamp(1.85rem, 3.15vw, 2.65rem)",
          color: "#e8eef6",
          letterSpacing: "-0.02em",
          textWrap: "balance",
        }}
      >
        Software engineer building{" "}
        <em
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
            color: "#4f9cf8",
          }}
        >
          reliable product systems
        </em>
        .
      </h1>

      {/* Sub-headline */}
      <p
        className="mb-9 max-w-[560px] text-[15px] leading-[1.65]"
        style={{ color: "var(--color-p-muted)" }}
      >
        BASc in Electrical Engineering from the University of British Columbia.
        Currently a Software Engineer at Coinbase, focused on frontend
        architecture, real-time product systems, and AI-assisted engineering
        workflows.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mb-8">
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

      {/* Supporting detail */}
      <ul className="m-0 flex max-w-full list-none flex-nowrap gap-[10px] overflow-x-auto overflow-y-hidden p-0 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {heroBadges.map((badge) => (
          <li key={badge} className="shrink-0">
            <Pill label={badge} variant="badge" />
          </li>
        ))}
      </ul>
    </section>
  );
}
