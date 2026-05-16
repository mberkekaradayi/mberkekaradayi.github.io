import { Fragment } from "react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:mberkekaradayi@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehmet-berke-karadayi-a28494217/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/mberkekaradayi",
    external: true,
  },
] as const;

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative z-10 mt-0"
      style={{
        borderTop: "1px solid rgba(99,143,200,0.1)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-10 md:py-11">
        <p
          className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] mb-7 md:mb-8"
          style={{ color: "#4f9cf8" }}
        >
          Contact
        </p>

        <div className="flex flex-col gap-7 md:flex-row md:justify-between md:items-baseline md:gap-12">
          <div className="min-w-0">
            <p
              className="text-[14px] font-normal tracking-normal leading-snug md:text-[15px]"
              style={{ color: "#e8eef6" }}
            >
              Mehmet Berke Karadayi
            </p>
            <p
              className="text-[13px] mt-[5px] leading-snug tracking-normal"
              style={{ color: "var(--color-p-muted)" }}
            >
              Software Engineer
            </p>
          </div>

          <nav
            aria-label="Contact links"
            className="flex flex-wrap items-center gap-x-[10px] gap-y-[6px] text-[13px] leading-snug tracking-normal md:justify-end"
          >
            {contactLinks.map((link, idx) => (
              <Fragment key={link.href}>
                {idx > 0 ? (
                  <span
                    aria-hidden
                    className="select-none px-[2px]"
                    style={{ color: "var(--color-p-muted)", opacity: 0.65 }}
                  >
                    ·
                  </span>
                ) : null}
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="nav-link-hover no-underline outline-offset-4"
                  style={{ color: "var(--color-p-muted)" }}
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </nav>
        </div>

        <div
          className="mt-9 pt-7 md:mt-10 md:pt-8"
          style={{ borderTop: "1px solid rgba(99,143,200,0.08)" }}
        >
          <p
            className="text-[11px] leading-snug tracking-normal"
            style={{ color: "var(--color-p-muted)" }}
          >
            &copy; {year} Mehmet Berke Karadayi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
