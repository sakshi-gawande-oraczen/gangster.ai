import { ArrowRight } from "lucide-react";

import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { FINAL_CTA_SECTION, SITE_CONFIG } from "@/app/config";

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 bg-(--color-brown-300) overflow-hidden"
      aria-labelledby="cta-headline"
    >
      {/* Orange glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(238,151,69,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Large brand letterform */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          fontSize: "clamp(12rem, 28vw, 28rem)",
          fontWeight: 300,
          color: "var(--color-brown-200)",
          lineHeight: 1,
          letterSpacing: "-0.06em",
          opacity: 0.18,
        }}
      >
        {SITE_CONFIG.name.split(".")[0]}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <AnimateOnScroll>
          <h2 id="cta-headline" className="type-title text-(--color-ivory-100) max-w-4xl mx-auto mb-7">
            {FINAL_CTA_SECTION.headline}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <p className="type-subtitle text-(--color-brown-50) max-w-xl mx-auto mb-14 opacity-75">
            {FINAL_CTA_SECTION.subtext}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-(--color-orange-300) text-(--color-brown-300) text-[0.72rem] uppercase tracking-[0.14em] font-semibold hover:bg-(--color-orange-200) active:scale-[0.98] transition-all duration-200"
            >
              {FINAL_CTA_SECTION.primaryCta}
              <ArrowRight
                size={13}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-ivory-100/20 text-ivory-100/60 text-[0.72rem] uppercase tracking-[0.14em] font-semibold hover:border-ivory-100/35 hover:text-ivory-100/90 active:scale-[0.98] transition-all duration-200"
            >
              {FINAL_CTA_SECTION.secondaryCta}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
