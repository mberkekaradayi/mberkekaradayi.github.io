interface SectionHeaderProps {
  label: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  /** Wider copy for longer intros (e.g. skills section) */
  subtitleClassName?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase mb-2"
        style={{ color: "#4f9cf8" }}
      >
        {label}
      </p>
      {title && (
        <h2
          className="text-[2rem] font-light tracking-tight mb-3 leading-[1.2]"
          style={{ color: "#e8eef6" }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-[15px] leading-relaxed ${subtitleClassName ?? "max-w-[500px]"}`}
          style={{ color: "var(--color-p-muted)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
