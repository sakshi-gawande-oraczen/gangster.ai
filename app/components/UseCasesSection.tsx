"use client";

import { useState } from "react";

import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { USE_CASES_SECTION } from "@/app/config";
import { cn } from "@/app/utils/cn";

export function UseCasesSection() {
  const [activeId, setActiveId] = useState<string>(USE_CASES_SECTION.cases[0].id);
  const activeCase = USE_CASES_SECTION.cases.find((c) => c.id === activeId);

  return (
    <section
      id="use-cases"
      className="py-24 md:py-32 bg-(--color-ivory-50)"
      aria-labelledby="usecases-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <span className="type-label text-(--color-orange-300) block mb-5">
            {USE_CASES_SECTION.label}
          </span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 id="usecases-headline" className="type-title text-(--color-brown-300) max-w-3xl mb-14">
            {USE_CASES_SECTION.headline}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={120}>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Tab list */}
            <div
              className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto no-scrollbar lg:w-48 shrink-0"
              role="tablist"
            >
              {USE_CASES_SECTION.cases.map((useCase, i) => (
                <button
                  key={useCase.id}
                  role="tab"
                  aria-selected={activeId === useCase.id}
                  aria-controls={`panel-${useCase.id}`}
                  id={`tab-${useCase.id}`}
                  onClick={() => setActiveId(useCase.id)}
                  className={cn(
                    "relative shrink-0 lg:shrink text-left px-4 py-3 transition-all duration-200 whitespace-nowrap",
                    activeId === useCase.id
                      ? "bg-(--color-brown-300) text-(--color-ivory-100)"
                      : "text-(--color-brown-100) hover:text-(--color-brown-300) hover:bg-(--color-ivory-300)"
                  )}
                >
                  {activeId === useCase.id && (
                    <span
                      className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-(--color-orange-300)"
                      aria-hidden="true"
                    />
                  )}
                  <span className="lg:pl-2">
                    <span className="type-label text-current opacity-40 block mb-0.5">
                      0{i + 1}
                    </span>
                    <span className="text-[0.78rem] font-semibold tracking-tight">
                      {useCase.tabLabel}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Panel */}
            {activeCase && (
              <div
                key={activeCase.id}
                id={`panel-${activeCase.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeCase.id}`}
                className="flex-1 bg-(--color-ivory-200) border border-(--color-orange-100) p-8 md:p-10 animate-scale-in"
              >
                <h3 className="type-card-title text-(--color-brown-300) mb-5">
                  {activeCase.title}
                </h3>
                <p className="type-card-body text-(--color-brown-100) mb-8">
                  {activeCase.description}
                </p>
                <div className="flex items-start gap-3 p-5 bg-(--color-brown-300)">
                  <span
                    className="shrink-0 w-4 h-4 bg-(--color-orange-300) flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 bg-(--color-brown-300)" />
                  </span>
                  <p className="type-card-body text-(--color-ivory-200)">{activeCase.result}</p>
                </div>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
