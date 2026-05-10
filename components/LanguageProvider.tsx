"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext<{
  lang: "en" | "el";
  setLang: (lang: "en" | "el") => void;
}>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "el">("en");

  useEffect(() => {
    const saved = localStorage.getItem("phivi-language");
    if (saved === "el" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("phivi-language", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}