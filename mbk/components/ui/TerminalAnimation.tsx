"use client";

import { useEffect, useRef, useState } from "react";

const TERMINAL_LINES = [
  "$ git push origin feat/system-update",
  "Compiling TypeScript... done",
  "Running test suite (Jest)...",
  "✓ 247 tests passed (99.2% coverage)",
  "Building Next.js bundle...",
  "Bundle size: 142kb gzipped",
  "$ deploy --env=production",
  "► Deploying to production...",
  "► Health checks passing...",
  "✓ Deployed successfully in 38s",
] as const;

const LINE_DELAY_MIN_MS = 260;
const LINE_DELAY_MAX_MS = 440;
const PAUSE_AFTER_LOOP_MS = 2000;

function randomLineDelay(): number {
  return (
    LINE_DELAY_MIN_MS +
    Math.floor(Math.random() * (LINE_DELAY_MAX_MS - LINE_DELAY_MIN_MS + 1))
  );
}

function TerminalCursor() {
  return (
    <span
      className="terminal-cursor"
      aria-hidden
      style={{
        display: "inline-block",
        width: 7,
        height: 13,
        marginLeft: 2,
        verticalAlign: "text-bottom",
        background: "#4f9cf8",
      }}
    />
  );
}

function TerminalLine({ text }: { text: string }) {
  if (text.startsWith("$")) {
    const command = text.slice(1).trimStart();
    return (
      <span>
        <span style={{ color: "#38d9c4" }}>› </span>
        <span style={{ color: "#e8eef6" }}>{command}</span>
      </span>
    );
  }

  if (text.startsWith("✓")) {
    return <span style={{ color: "#38d9c4" }}>{text}</span>;
  }

  if (text.startsWith("►")) {
    return <span style={{ color: "#4f9cf8" }}>{text}</span>;
  }

  if (text.startsWith("//")) {
    return <span style={{ color: "#3a5270" }}>{text}</span>;
  }

  return <span style={{ color: "#4a6080" }}>{text}</span>;
}

export function TerminalAnimation() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) {
      body.scrollTop = body.scrollHeight;
    }
  }, [visibleCount, cycle]);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeouts.push(id);
    };

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runLoop = () => {
      if (cancelled) return;

      setVisibleCount(0);
      setCycle((c) => c + 1);

      if (prefersReduced) {
        setVisibleCount(TERMINAL_LINES.length);
        return;
      }

      let index = 0;

      const showNext = () => {
        if (cancelled) return;

        if (index < TERMINAL_LINES.length) {
          setVisibleCount(index + 1);
          index += 1;
          schedule(showNext, randomLineDelay());
          return;
        }

        schedule(() => {
          runLoop();
        }, PAUSE_AFTER_LOOP_MS);
      };

      schedule(showNext, randomLineDelay());
    };

    runLoop();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const visibleLines = TERMINAL_LINES.slice(0, visibleCount);

  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-[11px]"
      style={{ border: "1px solid rgba(79,156,248,0.18)" }}
      aria-hidden
    >
      <header
        className="flex items-center gap-2 px-3.5 py-2.5"
        style={{ background: "#0c1a2e" }}
      >
        <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
          <span
            className="size-2.5 rounded-full"
            style={{ background: "#3a1a1a" }}
          />
          <span
            className="size-2.5 rounded-full"
            style={{ background: "#3a2f10" }}
          />
          <span
            className="size-2.5 rounded-full"
            style={{ background: "#153020" }}
          />
        </div>
        <span
          className="min-w-0 truncate font-mono text-[11px] tracking-[0.02em]"
          style={{ color: "rgba(170, 191, 212, 0.65)" }}
        >
          mberkekaradayi.com ~ deploy
        </span>
      </header>

      <div
        ref={bodyRef}
        className="overflow-y-auto overflow-x-hidden"
        style={{
          minHeight: 230,
          padding: "16px 18px",
          background: "#071020",
          fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
          fontSize: 12,
          lineHeight: 1.75,
        }}
      >
        {visibleLines.map((line, index) => (
          <div
            key={`${cycle}-${index}`}
            className="whitespace-pre-wrap break-words"
          >
            <TerminalLine text={line} />
            {index === visibleLines.length - 1 ? <TerminalCursor /> : null}
          </div>
        ))}
        {visibleCount === 0 ? (
          <div>
            <TerminalCursor />
          </div>
        ) : null}
      </div>
    </div>
  );
}
