import { SectionHeader } from "@/components/ui/SectionHeader";
import { GithubBrandIcon, LinkedInBrandIcon } from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";

const ICON_SIZE = 15;
const iconStroke = 1.75;

type IconKey = "mail" | "github" | "linkedin";

const contactLinks: {
  key: IconKey;
  label: string;
  href: string;
  external: boolean;
}[] = [
  {
    key: "mail",
    label: "Email",
    href: "mailto:mberkekaradayi@gmail.com",
    external: false,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehmet-berke-karadayi-a28494217/",
    external: true,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/mberkekaradayi",
    external: true,
  },
];

function ContactIcon({ type }: { type: IconKey }) {
  switch (type) {
    case "mail":
      return (
        <Mail
          size={ICON_SIZE}
          strokeWidth={iconStroke}
          className="shrink-0 opacity-100"
          aria-hidden
        />
      );
    case "github":
      return (
        <GithubBrandIcon size={ICON_SIZE} className="shrink-0 opacity-100" />
      );
    case "linkedin":
      return (
        <LinkedInBrandIcon size={ICON_SIZE} className="shrink-0 opacity-100" />
      );
    default:
      return null;
  }
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-14"
    >
      <div
        className="relative rounded-[16px] px-8 md:px-14 py-14 text-center overflow-hidden contact-highlight"
        style={{
          background: "#0b1628",
          border: "1px solid rgba(99,143,200,0.12)",
        }}
      >
        <SectionHeader label="Contact" title="Get in touch" centered />

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="contact-link-hover font-mono text-[12px] px-[18px] py-[9px] rounded-[6px] no-underline inline-flex items-center gap-2"
              style={{
                border: "1px solid rgba(99,143,200,0.22)",
                color: "var(--color-p-muted)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <ContactIcon type={link.key} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
