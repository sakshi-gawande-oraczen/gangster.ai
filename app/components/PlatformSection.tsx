import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { PLATFORM_SECTION } from "@/app/config";

export function PlatformSection() {
  return (
    <section
      id="platform"
      className="py-24 md:py-32 bg-(--color-brown-300)"
      aria-labelledby="platform-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20 pb-10 border-b border-[var(--color-ivory-100)]/10">
          <AnimateOnScroll className="lg:col-span-7">
            <span className="type-label text-(--color-orange-300) block mb-5">
              {PLATFORM_SECTION.label}
            </span>
            <h2 id="platform-headline" className="type-title text-(--color-ivory-100)">
              {PLATFORM_SECTION.headline}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100} className="lg:col-span-5 lg:pt-14">
            <p className="type-subtitle text-ivory-100/50">
              {PLATFORM_SECTION.intro}
            </p>
          </AnimateOnScroll>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {PLATFORM_SECTION.cards.map((card, i) => (
            <AnimateOnScroll key={card.id} delay={i * 120} threshold={0.1}>
              <article
                className={`relative flex flex-col gap-5 p-7 border-l-2 h-full ${
                  i === 0
                    ? "bg-(--color-brown-100) border-l-(--color-orange-300)"
                    : "bg-(--color-ivory-50) border-l-(--color-orange-300)"
                }`}
              >
                <span className="type-label text-(--color-orange-300)">
                  {card.label}
                </span>
                <h3
                  className={`type-card-title ${
                    i === 0 ? "text-(--color-ivory-100)" : "text-(--color-brown-300)"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`type-card-body flex-1 ${
                    i === 0 ? "text-ivory-100/55" : "text-(--color-brown-100)"
                  }`}
                >
                  {card.body}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Pull quote */}
        <AnimateOnScroll delay={80}>
          <blockquote className="relative p-8 md:p-12 bg-(--color-orange-300) overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute -top-4 -left-1 text-[8rem] leading-none text-(--color-brown-300) opacity-10 select-none pointer-events-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              "
            </span>
            <p className="relative type-card-title text-(--color-brown-300) max-w-3xl">
              {PLATFORM_SECTION.pullQuote}
            </p>
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
