export interface Capability {
  title: string;
  items: string;
}

export const capabilities: Capability[] = [
  {
    title: "Frontend Architecture",
    items: "React, TypeScript, Next.js, Relay, GraphQL",
  },
  {
    title: "Real-Time Systems",
    items: "WebSockets, Redux, data-heavy interfaces",
  },
  {
    title: "AI-Assisted Engineering",
    items: "LLM integrations, structured outputs, workflow automation",
  },
  {
    title: "Backend Services",
    items: "Node.js, Go, Django, Ruby on Rails, PostgreSQL, AWS",
  },
  {
    title: "Reliability",
    items: "Testing, validation, fallbacks, CI/CD",
  },
  {
    title: "Product Engineering",
    items: "Technical ownership, UX quality, cross-functional delivery",
  },
];
