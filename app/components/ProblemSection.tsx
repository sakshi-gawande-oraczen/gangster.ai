import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { PROBLEM_SECTION } from "@/app/config";
import type { ProblemCard } from "@/app/types";

function ProblemRow({ card, index }: { card: ProblemCard; index: number }) {
  return (
    <AnimateOnScroll delay={index * 80} threshold={0.12}>
      <article className="grid grid-cols-1 md:grid-cols-[64px_1fr_1fr] gap-6 md:gap-10 py-10 border-b border-[var(--color-orange-100)] last:border-0">
        <div>
          <span className="type-label text-(--color-orange-300)">0{index + 1}</span>
        </div>
        <h3 className="type-card-title text-(--color-brown-300)">{card.title}</h3>
        <p className="type-card-body text-(--color-brown-100)">{card.body}</p>
      </article>
    </AnimateOnScroll>
  );
}

export function ProblemSection() {
  return (
    <section
      id="why-now"
      className="py-24 md:py-32 bg-(--color-ivory-50)"
      aria-labelledby="problem-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20 pb-10 border-b border-(--color-orange-100)">
          <AnimateOnScroll className="lg:col-span-7">
            <span className="type-label text-(--color-orange-300) block mb-5">
              {PROBLEM_SECTION.label}
            </span>
            <h2 id="problem-headline" className="type-title text-(--color-brown-300)">
              {PROBLEM_SECTION.headline}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100} className="lg:col-span-5 lg:pt-14">
            <p className="type-subtitle text-(--color-brown-100)">{PROBLEM_SECTION.intro}</p>
          </AnimateOnScroll>
        </div>

        <div>
          {PROBLEM_SECTION.cards.map((card, i) => (
            <ProblemRow key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
