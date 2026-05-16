"use client";

import { useState, useEffect, useRef } from "react";
import { navLinks } from "@/lib/data/navigation";
import { Menu, X } from "lucide-react";

const MOBILE_NAV_ID = "mobile-primary-nav";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Body scroll + focus trap + Escape (when overlay open)
  useEffect(() => {
    if (!mobileOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () => {
      const root = overlayRef.current;
      if (!root) return [];
      const nodes = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      return [...nodes].filter(
        (el) => el.offsetParent !== null || el.getClientRects().length > 0
      );
    };

    const focusTimeout = window.setTimeout(() => {
      const list = getFocusable();
      list[0]?.focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (e.key !== "Tab" || !overlayRef.current) return;

      const list = getFocusable();
      if (list.length === 0) return;

      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || !overlayRef.current.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimeout);
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[60px]"
        style={{
          background: "rgba(6,13,26,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(99,143,200,0.12)",
        }}
        aria-label="Primary"
      >
        <a
          href="#home"
          className="min-w-0 flex-1 pr-3 font-sans text-[11.5px] font-medium leading-snug tracking-tight no-underline truncate sm:text-[12px] sm:flex-initial md:text-[13px] md:overflow-visible md:whitespace-normal md:pr-6"
          title="Mehmet Berke Karadayi"
          style={{ color: "#7ab8fb" }}
        >
          Mehmet Berke Karadayi
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-hover text-[13px] font-normal tracking-[0.02em] no-underline"
                style={{ color: "#c9dded" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={menuButtonRef}
          type="button"
          id="mobile-menu-button"
          aria-controls={MOBILE_NAV_ID}
          className="md:hidden flex min-h-11 min-w-11 items-center justify-center rounded-md"
          style={{ color: "#c9dded" }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
          style={{ background: "#060d1a" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-heading"
        >
          <h2 id="mobile-menu-heading" className="sr-only">
            Primary navigation
          </h2>

          <nav id={MOBILE_NAV_ID} className="flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu-link no-underline text-[2.4rem] font-light tracking-[-0.02em] outline-offset-4"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute bottom-12 font-mono text-[11px] tracking-[0.14em] uppercase min-h-11 px-4"
            style={{ color: "var(--color-p-muted)", opacity: 0.92 }}
          >
            Close [ESC]
          </button>
        </div>
      )}
    </header>
  );
}
