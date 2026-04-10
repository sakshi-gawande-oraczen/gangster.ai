import { SIGNAL_STRIP_TEXT } from "@/app/config";

const DOTS_COUNT = 6;

export function SignalStrip() {
  const repeated = Array(4).fill(SIGNAL_STRIP_TEXT);

  return (
    <div
      className="relative bg-[var(--bg-dark)] py-5 overflow-hidden marquee-wrapper"
      aria-label="Market signal"
      role="note"
    >
      {/* Gradient fade edges */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--color-brown-300), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--color-brown-300), transparent)",
        }}
      />

      <div className="animate-marquee flex items-center gap-0">
        {repeated.map((text, i) => (
          <span key={i} className="flex items-center gap-0 shrink-0">
            <span className="text-sm font-medium text-[var(--color-ivory-200)] px-10 leading-relaxed whitespace-nowrap">
              {text}
            </span>
            <span
              className="flex gap-1 shrink-0"
              aria-hidden="true"
            >
              {Array(DOTS_COUNT)
                .fill(null)
                .map((_, j) => (
                  <span
                    key={j}
                    className="w-1 h-1 rounded-full bg-[var(--accent-primary)] opacity-60"
                  />
                ))}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
