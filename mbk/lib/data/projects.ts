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
      "LLM-powered resume-to-role fit evaluator built with Next.js and TypeScript. Compares resume and job-description signals, returns structured fit assessments, and uses schema validation, timeout handling, and heuristic fallbacks for reliability.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Structured Outputs", "Zod"],
    githubUrl: "https://github.com/mberkekaradayi/ResumeFit-Agent",
  },
  {
    type: "Full-Stack · Simulation",
    title: "Energy Simulation Tool",
    description:
      "Full-stack renewable energy simulation platform for solar, wind, and hydro analysis. Built real-time calculation workflows, automated PDF exports, and an AI-assisted technical layer for interpreting simulation outputs.",
    tech: ["React", "Flask", "Python", "PDF Generation", "CI/CD", "REST APIs"],
    githubUrl: "https://github.com/puneetchopra25/Capstone_WebsiteApp",
  },
  {
    type: "Crypto · Product Interface",
    title: "Web3 Portfolio Dashboard",
    description:
      "Wallet-connected portfolio dashboard for exploring token holdings on Base. Built with Next.js, OnchainKit, and Alchemy SDK, with sortable tables, pagination, skeleton loading, and dark-mode-first data views.",
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
