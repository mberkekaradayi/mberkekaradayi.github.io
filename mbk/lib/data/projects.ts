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
      "Turns pasted resume and role narratives into an explainable score, qualitative strength tier, and a compact readout of standout alignment, missing signals, and follow-on actions. The core path favors rich reasoning first yet always falls back to heuristic scoring when generations stall or truncate, returning normalized payloads plus surfaced warnings instead of brittle empty states.",
    tech: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Structured Outputs",
      "Zod",
    ],
    githubUrl: "https://github.com/mberkekaradayi/ResumeFit-Agent",
  },
  {
    type: "Full-Stack · Simulation",
    title: "Energy Simulation Tool",
    description:
      "Renewable-energy assessment for mining and industrial footprints spanning solar, wind, and hydro, with geography-aware context and operator-style dashboards. Insight views pair with scripted PDF exports for stakeholder-ready handoffs. CI-backed test suites caught regressions early, while ingestion work raised batch throughput to around 100 files per second with tightly held detection accuracy during heavy runs.",
    tech: ["React", "Flask", "Python", "PDF Generation", "CI/CD", "REST APIs"],
    githubUrl: "https://github.com/puneetchopra25/Capstone_WebsiteApp",
  },
  {
    type: "Crypto · Product Interface",
    title: "Web3 Portfolio Dashboard",
    description:
      "Wallet-connected explorer for fungible holdings on Base, biased toward perceived performance through skeleton loaders and readability in either theme when tables stack many rows. Sorting and pagination prioritize fast scanning over decorative chrome, aligning the interaction model with pragmatic portfolio inspection of refreshed balances.",
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
