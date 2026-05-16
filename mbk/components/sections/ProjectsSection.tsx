import { SectionHeader } from "@/components/ui/SectionHeader";
import { GithubBrandIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/data/projects";
import { ExternalLinkIcon } from "@/components/ui/NavIcons";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-[1100px] mx-auto px-6 md:px-10 py-12 md:py-14"
    >
      <SectionHeader
        label="Projects"
        title="Selected work"
        subtitle="A few technical projects—concise snapshots, not full case studies."
      />

      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="card-lift flex flex-col rounded-[8px] px-5 py-5"
            style={{
              background: "rgba(11, 22, 40, 0.45)",
              border: "1px solid rgba(99,143,200,0.09)",
            }}
          >
            <p
              className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em]"
              style={{ color: "#8b7cf8" }}
            >
              {project.type}
            </p>

            <h3
              className="mb-2 text-[1.05rem] font-medium leading-[1.3] tracking-[-0.01em]"
              style={{ color: "#e8eef6" }}
            >
              {project.title}
            </h3>

            <p
              className="mb-4 flex-1 text-[13px] leading-[1.6]"
              style={{ color: "var(--color-p-muted)" }}
            >
              {project.description}
            </p>

            <p
              className="mb-4 font-mono text-[10px] leading-relaxed tracking-[0.02em]"
              style={{ color: "rgba(170, 191, 212, 0.7)" }}
            >
              {project.tech.join(" · ")}
            </p>

            <div
              className="mt-auto flex flex-wrap items-center gap-4 pt-3"
              style={{ borderTop: "1px solid rgba(99,143,200,0.08)" }}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title}: view source on GitHub`}
                  className="project-link-hover flex items-center gap-1.5 font-mono text-[11px] no-underline"
                  style={{ color: "#4f9cf8" }}
                >
                  <GithubBrandIcon size={14} className="shrink-0" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-hover flex items-center gap-1.5 font-mono text-[11px] no-underline"
                  style={{ color: "#38d9c4" }}
                >
                  <ExternalLinkIcon size={14} className="shrink-0" />
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
