export interface Project {
  type: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    type: "AI Product Engineering",
    title: "ResumeFit Agent",
    description:
      "LLM-powered resume-to-role fit evaluator with structured assessments, schema validation, and reliability fallbacks.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Structured Outputs", "Zod"],
    githubUrl: "https://github.com/mberkekaradayi/ResumeFit-Agent",
  },
  {
    type: "Full-Stack · Simulation",
    title: "Energy Simulation Tool",
    description:
      "Renewable energy simulation platform with real-time calculations, PDF exports, and AI-assisted output interpretation.",
    tech: ["React", "Flask", "Python", "PDF Generation", "CI/CD", "REST APIs"],
    githubUrl: "https://github.com/puneetchopra25/Capstone_WebsiteApp",
  },
  {
    type: "Crypto · Product Interface",
    title: "Web3 Portfolio Dashboard",
    description:
      "Wallet-connected portfolio dashboard for Base token holdings with sortable tables, pagination, and dark-mode data views.",
    tech: [
      "Next.js",
      "OnchainKit",
      "Alchemy SDK",
      "Tailwind CSS",
      "Base Network",
    ],
    githubUrl:
      "https://github.com/mberkekaradayi/Token-Dashboard-with-OnchainKit",
  },
];
