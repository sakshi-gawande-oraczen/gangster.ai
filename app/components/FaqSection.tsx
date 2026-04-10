"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { FAQ_SECTION } from "@/app/config";
import { cn } from "@/app/utils/cn";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

function FaqItem({ question, answer, isOpen, onToggle, id }: FaqItemProps) {
  return (
    <div className="border-b border-(--color-orange-100) last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`answer-${id}`}
        id={`question-${id}`}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
      >
        <span
          className={cn(
            "flex-1 type-card-title transition-colors duration-200",
            isOpen
              ? "text-(--color-brown-300)"
              : "text-(--color-brown-200) group-hover:text-(--color-brown-300)"
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-200",
            isOpen
              ? "bg-(--color-orange-300) text-(--color-brown-300)"
              : "bg-(--color-ivory-300) text-(--color-brown-50) group-hover:bg-(--color-orange-200)"
          )}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <div
        id={`answer-${id}`}
        role="region"
        aria-labelledby={`question-${id}`}
        className={cn(
          "overflow-hidden transition-all",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ transitionDuration: "320ms", transitionTimingFunction: "ease-out" }}
      >
        <p className="pb-7 type-card-body text-(--color-brown-100)">{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-(--color-ivory-50)"
      aria-labelledby="faq-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <AnimateOnScroll>
            <div className="lg:sticky lg:top-24">
              <span className="type-label text-(--color-orange-300) block mb-5">Questions</span>
              <h2 id="faq-headline" className="type-title text-(--color-brown-300)">
                {FAQ_SECTION.headline}
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div>
              {FAQ_SECTION.items.map((item) => (
                <FaqItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
