export function Footer() {
  return (
    <footer
      className="relative z-10 text-center py-8 px-6"
      style={{ borderTop: "1px solid rgba(99,143,200,0.12)" }}
    >
      <p
        className="font-mono text-[11px] tracking-[0.04em]"
        style={{ color: "var(--color-p-muted)" }}
      >
        Berke Karadayi · Software Engineer · Built with Next.js &amp; TypeScript · &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
