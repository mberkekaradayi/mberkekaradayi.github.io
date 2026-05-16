interface SectionHeaderProps {
  label: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  /** Wider copy for longer intros (e.g. skills section) */
  subtitleClassName?: string;
  /** Tighter label → title → body spacing */
  compact?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  subtitleClassName,
  compact = false,
}: SectionHeaderProps) {
  const labelMb = compact ? "mb-1" : "mb-2";
  const titleMb = compact ? (subtitle ? "mb-2" : "mb-0") : "mb-3";

  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className={`font-mono text-[11px] font-medium tracking-[0.1em] uppercase ${labelMb}`}
        style={{ color: "#4f9cf8" }}
      >
        {label}
      </p>
      {title && (
        <h2
          className={`text-[2rem] font-light tracking-tight leading-[1.2] ${titleMb}`}
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
