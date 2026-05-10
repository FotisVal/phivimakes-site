"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cyan-400/25 bg-slate-950/45 px-5 py-4 shadow-[0_0_50px_rgba(34,211,238,0.12)] backdrop-blur-xl">
      <Link href="/" className="text-xl font-black tracking-tight">
        <span className="bg-gradient-to-r from-cyan-100 via-cyan-300/80 to-white/70 bg-clip-text text-transparent">
          PHIVI
        </span>
        <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
          MAKES
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <Link href="/about" className="hover:text-cyan-300">
            {lang === "el" ? "Σχετικά" : "About"}
          </Link>
          <Link href="/projects" className="hover:text-cyan-300">
            {lang === "el" ? "Έργα" : "Projects"}
          </Link>
          <Link href="/#contact" className="hover:text-cyan-300">
            {lang === "el" ? "Επικοινωνία" : "Contact"}
          </Link>
        </div>

        <button
          onClick={() => setLang(lang === "el" ? "en" : "el")}
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200 hover:bg-cyan-300/20"
        >
          {lang === "el" ? "EN" : "EL"}
        </button>
      </div>
    </nav>
  );
}