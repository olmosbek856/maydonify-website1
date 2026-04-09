"use client";

import React, { createContext, useContext, useState } from "react";
import { translations } from "@/lib/translations";
import type { Language } from "@/lib/types";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.uz;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "uz";
    const stored = localStorage.getItem("maydonify-lang") as Language | null;
    return stored && ["uz", "ru", "en"].includes(stored) ? stored : "uz";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("maydonify-lang", lang);
  };

  // Cast to uz type — all languages share identical structure, only string values differ
  const t = translations[language] as typeof translations.uz;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
