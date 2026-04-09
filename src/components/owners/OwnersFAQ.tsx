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
          ? "bg-white border-brand-green/30 shadow-sm"
          : "bg-white border-light-100 hover:border-slate-200"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`owners-faq-answer-${index}`}
        id={`owners-faq-question-${index}`}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-inset rounded-2xl"
      >
        <span className={cn("font-semibold text-sm sm:text-base leading-snug", isOpen ? "text-dark-900" : "text-dark-800")}>
          {question}
        </span>
        <span
          className={cn(
            "w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200",
            isOpen
              ? "bg-brand-green border-brand-green text-dark-900 rotate-180"
              : "border-slate-200 text-slate-400"
          )}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        id={`owners-faq-answer-${index}`}
        role="region"
        aria-labelledby={`owners-faq-question-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5">
          <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function OwnersFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <SectionWrapper id="owners-faq" theme="light">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="light" className="mb-4">{t.owners.faq.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-900 tracking-tight">
            {t.owners.faq.headline}
          </h2>
        </div>

        <div className="space-y-3">
          {t.owners.faq.items.map((item, i) => (
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
