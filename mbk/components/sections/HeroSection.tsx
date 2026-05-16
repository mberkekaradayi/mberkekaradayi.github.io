"use client";

import { Pill } from "@/components/ui/Pill";
import { TerminalAnimation } from "@/components/ui/TerminalAnimation";

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
      className="relative mx-auto max-w-[1100px] px-6 pb-10 pt-[100px] md:px-10"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.92fr)] md:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,1fr)] lg:gap-10">
        {/* Copy */}
        <div className="min-w-0">
          <h1
            className="mb-5 max-w-[34rem] font-sans text-[clamp(2.25rem,0.5rem+5.5vw,2.75rem)] font-light leading-[1.12] tracking-[-0.02em] [text-wrap:balance]"
            style={{ color: "#e8eef6" }}
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

          <p
            className="mb-9 max-w-[32rem] text-[15px] leading-[1.7] md:leading-[1.65]"
            style={{ color: "var(--color-p-muted)" }}
          >
            BASc in Electrical Engineering from UBC. Currently a Software Engineer
            at Coinbase, working across frontend architecture, real-time interfaces,
            and AI-assisted engineering workflows.
          </p>

          <div className="mb-8 grid min-w-0 w-full grid-cols-3 gap-2 md:max-w-[32rem] md:flex md:flex-row md:flex-wrap md:gap-3">
            <a
              href="#experience"
              className="btn-primary-hover flex min-h-11 min-w-0 items-center justify-center rounded-[6px] px-1.5 py-2.5 text-center text-[11px] font-medium leading-snug no-underline sm:px-2 md:min-h-0 md:px-[22px] md:py-[10px] md:text-[13px]"
              style={{ background: "#4f9cf8", color: "#fff" }}
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="btn-ghost-hover flex min-h-11 min-w-0 items-center justify-center rounded-[6px] px-1.5 py-2.5 text-center text-[11px] font-normal leading-snug no-underline sm:px-2 md:min-h-0 md:px-[22px] md:py-[10px] md:text-[13px]"
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
              className="btn-ghost-hover flex min-h-11 min-w-0 items-center justify-center rounded-[6px] px-1.5 py-2.5 text-center text-[11px] font-normal leading-snug no-underline sm:px-2 md:min-h-0 md:px-[22px] md:py-[10px] md:text-[13px]"
              style={{
                border: "1px solid rgba(99,143,200,0.22)",
                color: "var(--color-p-muted)",
                background: "transparent",
              }}
            >
              Contact
            </a>
          </div>

          <ul className="m-0 flex w-full min-w-0 max-w-full list-none flex-wrap gap-2 p-0 md:max-w-[32rem]">
            {heroBadges.map((badge) => (
              <li key={badge} className="shrink-0">
                <Pill label={badge} variant="badge" />
              </li>
            ))}
          </ul>
        </div>

        {/* Terminal — fills the right column on md+ */}
        <div className="w-full min-w-0 md:sticky md:top-[76px]">
          <TerminalAnimation className="mx-auto max-w-md md:mx-0 md:max-w-none" />
        </div>
      </div>
    </section>
  );
}
