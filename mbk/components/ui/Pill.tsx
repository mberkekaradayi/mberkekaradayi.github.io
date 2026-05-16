interface PillProps {
  label: string;
  variant?: "tech" | "skill" | "badge";
}

export function Pill({ label, variant = "tech" }: PillProps) {
  if (variant === "tech") {
    return (
      <span
        className="font-mono text-[11px] px-[9px] py-[3px] rounded-[4px] tracking-[0.03em]"
        style={{
          background: "rgba(79,156,248,0.07)",
          border: "1px solid rgba(79,156,248,0.15)",
          color: "#4f9cf8",
        }}
      >
        {label}
      </span>
    );
  }

  if (variant === "skill") {
    return (
      <span
        className="text-[12.5px] px-[10px] py-[4px] rounded-[5px] transition-all duration-150 cursor-default"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(99,143,200,0.12)",
          color: "#e8eef6",
        }}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className="font-mono text-[12px] px-[11px] py-[5px] rounded-[5px] tracking-[0.025em]"
      style={{
        border: "1px solid rgba(99,143,200,0.16)",
        color: "#c4d6e9",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {label}
    </span>
  );
}
