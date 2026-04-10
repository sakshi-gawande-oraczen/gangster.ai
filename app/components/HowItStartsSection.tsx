import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { HOW_IT_STARTS_SECTION } from "@/app/config";

export function HowItStartsSection() {
  return (
    <section
      id="getting-started"
      className="py-24 md:py-32 bg-(--color-ivory-200)"
      aria-labelledby="how-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <span className="type-label text-(--color-orange-300) block mb-5">
            {HOW_IT_STARTS_SECTION.label}
          </span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 id="how-headline" className="type-title text-(--color-brown-300) max-w-3xl mb-16">
            {HOW_IT_STARTS_SECTION.headline}
          </h2>
        </AnimateOnScroll>

        <ol className="relative flex flex-col" role="list">
          {/* Vertical connector line */}
          <div
            aria-hidden="true"
            className="absolute left-4.75 top-10 bottom-10 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-orange-300), var(--color-orange-200), transparent)",
            }}
          />

          {HOW_IT_STARTS_SECTION.steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 130} threshold={0.12}>
              <li className="flex gap-8 md:gap-12 items-start pb-12 last:pb-0">
                {/* Step number — square not circle */}
                <div
                  className="relative z-10 shrink-0 w-10 h-10 border border-(--color-orange-300) bg-(--color-ivory-200) flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="type-label text-(--color-orange-300)">{step.number}</span>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="type-card-title text-(--color-brown-300) mb-4">{step.title}</h3>
                  <p className="type-card-body text-(--color-brown-100) max-w-2xl">{step.body}</p>
                </div>
              </li>
            </AnimateOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
