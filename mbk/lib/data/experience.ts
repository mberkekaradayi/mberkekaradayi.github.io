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
    companyLogo:
      "https://www.google.com/s2/favicons?domain=coinbase.com&sz=128",
    role: "Software Engineer",
    dates: "June 2025 - Present",
    summary:
      "Building production-grade frontend systems across trading workflows, real-time product interfaces, reliability tooling, and AI-assisted engineering automation.",
    bullets: [
      "Owned software architecture for trading workflows from MVP through production, building React, TypeScript, and GraphQL/Relay systems.",
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
      "Built scalable full-stack systems for sustainability analytics workflows across a Chrome extension, backend APIs, and AWS infrastructure.",
    bullets: [
      "Developed a React and TypeScript Chrome extension for Digital Scope, a sustainability analytics product used by 100K+ users.",
      "Built AWS-backed infrastructure with RDS, SQS, Secrets Manager, and S3, supporting peak traffic of 1,000+ requests per second.",
      "Improved frontend performance by optimizing React components, increasing page load speed by 40%.",
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
      "Built React, Electron.js, and Fluent UI desktop application experiences for engineering workflows used by 5,000+ engineers.",
      "Used Redux and React Hooks to manage complex state across large datasets and data visualization views.",
      "Added Jest and React Testing Library coverage, achieving 95%+ React component test coverage.",
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
