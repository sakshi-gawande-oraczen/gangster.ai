"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { HERO_CONTENT, HERO_STATS } from "@/app/config";
import { useCountUp } from "@/app/hooks/useCountUp";

function StatItem({
  stat,
  index,
  isTriggered,
}: {
  stat: (typeof HERO_STATS)[number];
  index: number;
  isTriggered: boolean;
}) {
  const decimals = stat.suffix === "T" ? 1 : 0;
  const count = useCountUp({
    end: isTriggered ? stat.numericValue : 0,
    duration: 1800 + index * 150,
    decimals,
  });

  const display = isTriggered
    ? `${stat.prefix}${decimals > 0 ? count.toFixed(1) : Math.round(count).toLocaleString()}${stat.suffix}`
    : stat.value;

  return (
    <div
      className="flex flex-col gap-1.5 transition-all duration-700"
      style={{
        opacity: isTriggered ? 1 : 0,
        transform: isTriggered ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${600 + index * 80}ms`,
      }}
    >
      <span className="text-[1.85rem] md:text-[2.1rem] font-light tabular-nums tracking-[-0.04em] text-(--color-ivory-100) leading-none">
        {display}
      </span>
      <span className="text-[0.63rem] uppercase tracking-[0.13em] text-(--color-brown-50) leading-snug mt-0.5">
        {stat.label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const countedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countedRef.current) {
          setStatsVisible(true);
          countedRef.current = true;
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
   <section className="relative min-h-screen flex items-center overflow-hidden bg-(--color-brown-300)">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
    src="LKE_lz_vGa5SUcCRWFhVdJOlDyltlH09gwgZRdSV6gAG22hbD_M96zbx8u_Zp1zty31oTcSxY6KzHNj6BX53A_7DPawVYvz1YTdB0yO42clpB2sL8PKgJa22uMFv0HDx_qk2HDrUjToDlwuj0gVh8oEccKH0ivrO9qXzmTdRBwFx_PwDV5zPKWV_VDvPy9IIdOqzW3GuywspPFNe_1LU1_XmEmsq3ajNa0g34XOP_6EBeEtati"
      alt="Industry"
      className="w-full h-full object-cover"
    />

    {/* Dark overlay using your palette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, rgba(29,25,22,0.9) 20%, rgba(29,25,22,0.6) 60%, rgba(29,25,22,0.4) 100%)",
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
    <div className="max-w-3xl">

      {/* Eyebrow */}
      <div className="mb-6 flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-(--color-orange-300)" />
        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-(--color-brown-50)">
          Foundry Intelligence v4.0
        </span>
      </div>

      {/* Headline */}
      <h1
        className="mb-6"
        style={{
          fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
          fontWeight: 500,
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
        }}
      >
        <span className="block text-(--color-ivory-100)">
          The Intelligence
        </span>
        <span className="block text-(--color-orange-300)">
          Edge
        </span>
        <span className="block text-(--color-ivory-100)">
          For Heavy Industry.
        </span>
      </h1>

      {/* Subheadline */}
      <p
        className="max-w-xl mb-8 text-[0.95rem] leading-[1.8]"
        style={{ color: "var(--color-brown-50)" }}
      >
        Ganster AI integrates directly with your heavy machinery fleets to
        deliver predictive operational intelligence and structural efficiency.
      </p>

      {/* CTA */}
      <div className="flex gap-4">
        <button
          className="px-6 py-3 text-[0.7rem] uppercase tracking-[0.14em] font-semibold flex items-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            backgroundColor: "var(--color-orange-300)",
            color: "var(--color-brown-300)",
          }}
        >
          Deploy Intelligence
        </button>

        <button
          className="px-6 py-3 text-[0.7rem] uppercase tracking-[0.14em] font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            border: "1px solid rgba(251,251,249,0.2)",
            color: "var(--color-ivory-100)",
          }}
        >
          Technical Spec
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Right Bars */}
  <div className="absolute bottom-10 right-10 flex items-end gap-1">
    {[20, 35, 50, 70, 40].map((h, i) => (
      <div
        key={i}
        style={{
          height: `${h}px`,
          background:
            i === 3
              ? "var(--color-orange-300)"
              : "rgba(251,251,249,0.35)",
        }}
        className="w-2"
      />
    ))}
  </div>

</section>
  );
}
