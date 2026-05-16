export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Systems",
    description:
      "Product-grade interfaces built with typed, reusable, and maintainable software architecture.",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "React Native",
      "Relay",
      "GraphQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "Real-Time Product Interfaces",
    description:
      "Interactive product experiences for live data, stateful workflows, and complex user interactions.",
    skills: [
      "WebSockets",
      "Redux",
      "Real-Time Workflows",
      "Data-Heavy UX",
      "Performance Optimization",
      "Client-Side Data Flows",
    ],
  },
  {
    title: "AI Automation",
    description:
      "LLM-powered tooling for developer productivity, workflow automation, and structured outputs.",
    skills: [
      "LLM Integrations",
      "Prompt Engineering",
      "Structured Outputs",
      "MCPs",
      "Workflow Automation",
      "OpenAI API",
      "Claude API",
    ],
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Backend services and cloud infrastructure supporting full-stack product workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "AWS",
      "SQS",
      "S3",
      "RDS",
    ],
  },
  {
    title: "Quality & Reliability",
    description:
      "Reliable systems through testing, validation, fallbacks, and production-aware engineering.",
    skills: [
      "Jest",
      "React Testing Library",
      "Schema Validation",
      "Deterministic Fallbacks",
      "CI/CD",
      "Alerting Workflows",
      "Incident Response",
    ],
  },
  {
    title: "Product Engineering",
    description:
      "Turning ambiguous requirements into polished, user-focused product experiences.",
    skills: [
      "Product Thinking",
      "Cross-Functional Collaboration",
      "UX Quality",
      "Analytics",
      "A/B Testing",
      "Technical Ownership",
    ],
  },
];
