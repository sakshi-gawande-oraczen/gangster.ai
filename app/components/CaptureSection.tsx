import { Mic, Brain, FileText } from "lucide-react";

export default function CaptureSection() {
  return (
    <section
      className="py-32 px-8"
      style={{ background: "var(--color-ivory-100)" }}
    >
      <div className="max-w-screen-2xl mx-auto text-center mb-24">
        <h2
          className="text-6xl font-bold tracking-tight mb-6"
          style={{ color: "var(--color-brown-300)" }}
        >
          Capture the Soul of Work
        </h2>

        <p
          className="text-xl max-w-2xl mx-auto"
          style={{ color: "var(--color-brown-50)" }}
        >
          One three-minute voice capture converts decades of intuition into
          executable machine intelligence.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl p-12 overflow-hidden shadow-2xl border"
          style={{
            background: "var(--color-ivory-300)",
            borderColor: "rgba(0,0,0,0.05)",
          }}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center">
            {/* Voice Capture */}
            <div>
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "var(--color-orange-300)",
                  color: "white",
                }}
              >
                <Mic size={28} />
              </div>

              <h3
                className="font-semibold text-lg mb-3"
                style={{ color: "var(--color-brown-300)" }}
              >
                Voice Capture
              </h3>

              <p
                className="text-sm"
                style={{ color: "var(--color-brown-50)" }}
              >
                No forms. No typing. Just talk through the problem for 180 seconds.
              </p>
            </div>

            {/* AI Distillation */}
            <div>
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "var(--color-orange-200)",
                  color: "white",
                }}
              >
                <Brain size={28} />
              </div>

              <h3
                className="font-semibold text-lg mb-3"
                style={{ color: "var(--color-brown-300)" }}
              >
                AI Distillation
              </h3>

              <p
                className="text-sm"
                style={{ color: "var(--color-brown-50)" }}
              >
                Our neural engine extracts logic, safety protocols, and nuances instantly.
              </p>
            </div>

            {/* Live Assets */}
            <div>
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "var(--color-brown-200)",
                  color: "white",
                }}
              >
                <FileText size={28} />
              </div>

              <h3
                className="font-semibold text-lg mb-3"
                style={{ color: "var(--color-brown-300)" }}
              >
                Live Assets
              </h3>

              <p
                className="text-sm"
                style={{ color: "var(--color-brown-50)" }}
              >
                Dynamic SOPs and decision trees generated and shared across the fleet.
              </p>
            </div>
          </div>

          {/* 🔥 Premium Tower Waveform */}
          <div className="relative mt-12 h-24 overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-center gap-[6px] opacity-30">
              {[32, 48, 28, 60, 42, 70, 36, 52, 30, 64, 40].map((h, i) => (
                <div
                  key={i}
                  className="w-[10px] rounded-sm"
                  style={{
                    height: `${h}px`,
                    background:
                      i === 5
                        ? "var(--color-orange-300)"
                        : "var(--color-brown-100)",
                  }}
                />
              ))}
            </div>

            {/* fade overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--color-ivory-300) 15%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}