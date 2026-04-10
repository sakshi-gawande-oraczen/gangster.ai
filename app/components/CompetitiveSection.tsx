import { Check, X } from "lucide-react";

import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { COMPETITIVE_SECTION } from "@/app/config";
import type { CompetitorCard } from "@/app/types";
import { cn } from "@/app/utils/cn";

function CompetitorCardItem({ card, index }: { card: CompetitorCard; index: number }) {
  return (
    <AnimateOnScroll delay={index * 90} threshold={0.1}>
      <article
        className={cn(
          "relative flex flex-col gap-5 p-7 h-full transition-all duration-300 hover:-translate-y-1",
          card.isHighlighted
            ? "bg-(--color-orange-300)"
            : "bg-(--color-ivory-100) border border-(--color-orange-100)"
        )}
      >
        {card.isHighlighted && (
          <div className="absolute -top-3 left-6">
            <span className="px-3 py-1 bg-(--color-brown-300) text-(--color-orange-300) type-label">
              Built for this
            </span>
          </div>
        )}

        <div className="pt-2">
          <h3
            className={cn(
              "type-card-title mb-1",
              card.isHighlighted ? "text-(--color-brown-300)" : "text-(--color-brown-300)"
            )}
          >
            {card.name}
          </h3>
          <span
            className={cn(
              "type-label",
              card.isHighlighted ? "text-(--color-brown-200)" : "text-(--color-brown-50)"
            )}
          >
            {card.type}
          </span>
        </div>

        <div
          className={cn(
            "h-px",
            card.isHighlighted ? "bg-brown-200/30" : "bg-(--color-orange-100)"
          )}
        />

        <div className="flex gap-3">
          <Check
            size={13}
            className={cn(
              "mt-0.5 shrink-0",
              card.isHighlighted ? "text-(--color-brown-300)" : "text-emerald-600"
            )}
            aria-hidden="true"
          />
          <div>
            <p
              className={cn(
                "type-label mb-2",
                card.isHighlighted ? "text-(--color-brown-200)" : "text-(--color-brown-50)"
              )}
            >
              {card.isHighlighted ? "What it does" : "Does well"}
            </p>
            <p
              className={cn(
                "type-card-body",
                card.isHighlighted ? "text-(--color-brown-300)" : "text-(--color-brown-100)"
              )}
            >
              {card.doesWell}
            </p>
          </div>
        </div>

        {!card.isHighlighted && card.doesntDo && (
          <div className="flex gap-3">
            <X size={13} className="mt-0.5 text-(--color-brown-50) shrink-0" aria-hidden="true" />
            <div>
              <p className="type-label text-(--color-brown-50) mb-2">Doesn't do</p>
              <p className="type-card-body text-(--color-brown-100)">{card.doesntDo}</p>
            </div>
          </div>
        )}
      </article>
    </AnimateOnScroll>
  );
}

export function CompetitiveSection() {
  return (
    <section
      id="comparison"
      className="py-24 md:py-32 bg-(--color-ivory-50)"
      aria-labelledby="competitive-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <span className="type-label text-(--color-orange-300) block mb-5">
            {COMPETITIVE_SECTION.label}
          </span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 id="competitive-headline" className="type-title text-(--color-brown-300) max-w-3xl mb-7">
            {COMPETITIVE_SECTION.headline}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={160}>
          <p className="type-subtitle text-(--color-brown-100) max-w-2xl mb-14">
            {COMPETITIVE_SECTION.intro}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPETITIVE_SECTION.cards.map((card, i) => (
            <CompetitorCardItem key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
