import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { GithubBrandIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/data/projects";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-14"
    >
      <SectionHeader
        label="Projects"
        title="Featured work"
        subtitle="Selected technical projects across AI product engineering, full-stack systems, and crypto interfaces."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="card-lift flex flex-col rounded-[12px] p-8"
            style={{
              background: "#0b1628",
              border: "1px solid rgba(99,143,200,0.12)",
            }}
          >
            {/* Type */}
            <p
              className="font-mono text-[10px] uppercase tracking-[0.12em] mb-3"
              style={{ color: "#8b7cf8" }}
            >
              {project.type}
            </p>

            {/* Title */}
            <h3
              className="text-[1.15rem] font-medium tracking-[-0.01em] leading-[1.3] mb-3"
              style={{ color: "#e8eef6" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="text-[13.5px] leading-[1.65] mb-6 flex-1"
              style={{ color: "var(--color-p-muted)" }}
            >
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-[6px] mb-5">
              {project.tech.map((t) => (
                <Pill key={t} label={t} variant="tech" />
              ))}
            </div>

            {/* Footer links */}
            <div
              className="flex items-center justify-between pt-5 mt-auto gap-3 flex-wrap"
              style={{ borderTop: "1px solid rgba(99,143,200,0.12)" }}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title}: view source on GitHub`}
                  className="project-link-hover font-mono text-[11px] no-underline flex items-center gap-1.5"
                  style={{ color: "#4f9cf8" }}
                >
                  <GithubBrandIcon size={14} className="shrink-0" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-hover font-mono text-[11px] no-underline flex items-center gap-1.5"
                  style={{ color: "#38d9c4" }}
                >
                  <ExternalLink
                    size={14}
                    strokeWidth={1.75}
                    className="shrink-0"
                    aria-hidden
                  />
                  Live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
