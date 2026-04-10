"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        "rounded-2xl border transition-colors duration-300 overflow-hidden",
        isOpen
          ? "border-brand-green/40 bg-dark-900"
          : "border-dark-700 bg-dark-900 hover:border-dark-600"
      )}
    >
      {/* Green left accent bar */}
      <div className="flex">
        <div
          className={cn(
            "w-1 flex-shrink-0 rounded-l-2xl transition-all duration-300",
            isOpen ? "bg-brand-green" : "bg-transparent"
          )}
        />

        <div className="flex-1 min-w-0">
          <button
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
            className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-inset"
          >
            <span
              className={cn(
                "font-semibold text-sm sm:text-base leading-snug transition-colors duration-200",
                isOpen ? "text-white" : "text-slate-300"
              )}
            >
              {question}
            </span>

            {/* Chevron icon */}
            <span
              className={cn(
                "w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300",
                isOpen
                  ? "bg-brand-green border-brand-green text-dark-900 rotate-180"
                  : "border-dark-600 text-slate-500"
              )}
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Animated answer panel */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="answer"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div className="px-5 pb-5 pt-0">
                  <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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

        {/* Accordion list */}
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
