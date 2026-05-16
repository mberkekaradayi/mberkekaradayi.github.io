export interface ExperienceEntry {
  company: string;
  companyUrl: string;
  companyLogo: string;
  role: string;
  dates: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Coinbase",
    companyUrl: "https://www.coinbase.com/home",
    companyLogo: "https://www.google.com/s2/favicons?domain=coinbase.com&sz=128",
    role: "Software Engineer",
    dates: "June 2025 - Present",
    summary:
      "Building production-grade frontend systems across trading workflows, real-time product interfaces, reliability tooling, and AI-assisted engineering automation.",
    bullets: [
      "Owned frontend architecture for trading workflows from MVP through production, partnering closely on React, TypeScript, and GraphQL/Relay integration.",
      "Built real-time product systems with WebSockets, Redux, and GraphQL, with a focus on scalable state management and maintainable UI architecture.",
      "Developed AI-assisted tooling for release automation, on-call triage, debugging, and incident-response workflows.",
    ],
    tech: [
      "React",
      "TypeScript",
      "GraphQL/Relay",
      "WebSockets",
      "Redux",
      "Next.js",
      "LLM Tooling",
      "Production Reliability",
    ],
  },
  {
    company: "Redbrick",
    companyUrl: "https://www.rdbrck.com/",
    companyLogo: "https://www.google.com/s2/favicons?domain=rdbrck.com&sz=128",
    role: "Full Stack Developer Co-op",
    dates: "Jan 2024 - Apr 2024",
    summary:
      "Built scalable full-stack systems for sustainability analytics workflows and user-facing product experiences across a Chrome extension and web platform.",
    bullets: [
      "Developed React and TypeScript Chrome extension experiences for Digital Scope, shipped as a production user-facing product.",
      "Designed Django REST Framework and PostgreSQL APIs for high-volume data ingestion and sustainability analytics workflows.",
      "Built AWS-backed infrastructure using RDS, SQS, Secrets Manager, and S3 to support platform scale.",
      "Improved frontend performance through React component optimization and close collaboration with design.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Django",
      "DRF",
      "PostgreSQL",
      "AWS",
      "SQS",
      "S3",
      "RDS",
    ],
  },
  {
    company: "ConeTec",
    companyUrl: "https://www.conetec.com/",
    companyLogo: "https://www.google.com/s2/favicons?domain=conetec.com&sz=128",
    role: "Software Development Co-op",
    dates: "May 2023 - Dec 2023",
    summary:
      "Built desktop engineering workflow tools for complex, data-heavy interfaces used by geotechnical engineering teams.",
    bullets: [
      "Built React, Electron.js, and Fluent UI desktop application experiences for engineering workflow software handling large datasets.",
      "Used Redux and React Hooks for scalable state management across complex data visualization views.",
      "Integrated frontend components with backend Node.js services for data processing workflows.",
      "Added Jest and React Testing Library coverage for reliable UI behavior across the application.",
    ],
    tech: [
      "React",
      "Electron.js",
      "Redux",
      "Node.js",
      "Fluent UI",
      "Jest",
      "RTL",
    ],
  },
];
