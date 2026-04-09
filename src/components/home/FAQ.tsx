"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={cn(
        "border rounded-2xl transition-all duration-200",
        isOpen
          ? "bg-dark-800 border-brand-green/30"
          : "bg-dark-800 border-dark-700 hover:border-dark-600"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-inset rounded-2xl"
      >
        <span className={cn("font-semibold text-sm sm:text-base leading-snug transition-colors", isOpen ? "text-white" : "text-slate-light")}>
          {question}
        </span>
        <span
          className={cn(
            "w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200",
            isOpen
              ? "bg-brand-green border-brand-green text-dark-900 rotate-180"
              : "border-dark-600 text-slate-muted"
          )}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5">
          <p className="text-slate-muted text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <SectionWrapper id="faq" theme="darker">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4">{t.faq.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.faq.headline}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
