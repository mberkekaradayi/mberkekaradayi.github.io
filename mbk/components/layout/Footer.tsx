export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 py-6 px-6 text-center"
      style={{ borderTop: "1px solid rgba(99,143,200,0.08)" }}
    >
      <p
        className="text-[11px] leading-snug tracking-normal"
        style={{ color: "var(--color-p-muted)" }}
      >
        &copy; {year} Berke Karadayi. All rights reserved.
      </p>
    </footer>
  );
}
