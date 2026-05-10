"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    title: "PROJECTS",
    subtitle:
      "Browse all categories and explore functional builds, prototypes and custom designs.",
    showAll: "Show All Projects →",
  },

  el: {
    title: "ΕΡΓΑ",
    subtitle:
      "Δες όλες τις κατηγορίες και εξερεύνησε custom κατασκευές, prototypes και λειτουργικά designs.",
    showAll: "Όλα τα Projects →",
  },
};

const categories = [
  {
    title: "Mini Cooper",
    description: "Custom parts, accessories and upgrades.",
    href: "/projects/mini-cooper",
  },

  {
    title: "Aquarium",
    description: "Functional 3D printed parts for aquarium setups.",
    href: "/projects/aquarium",
  },

  {
    title: "Traditional Shaving",
    description: "Stands, holders and shaving accessories.",
    href: "/projects/traditional-shaving",
  },

  {
    title: "Automation Gadgets",
    description: "Useful automation ideas and smart mechanisms.",
    href: "/projects/automation-gadgets",
  },
];

export default function ProjectsPage() {
  const { lang } = useLanguage();

  const t = text[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <section className="relative z-10 px-6 py-8 md:px-12 lg:px-20">
        <Navbar />

        <div className="mx-auto mt-14 max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
                {t.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {t.subtitle}
              </p>
            </div>

            <Link
              href="/projects/all"
              className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-7 py-4 text-lg font-bold text-cyan-200 transition hover:bg-cyan-300/20"
            >
              {t.showAll}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <h2 className="text-4xl font-black text-cyan-100">
                  {category.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {category.description}
                </p>

                <p className="mt-8 font-bold text-cyan-300">
                  Open category →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}