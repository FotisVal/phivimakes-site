"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

import { allProjects } from "@/data/projects";

const miniProjects = allProjects.filter(
  (project) => project.category === "mini-cooper"
);

const text = {
  en: {
    title: "MINI COOPER",
    subtitle:
      "Custom Mini Cooper accessories, replacement parts and everyday-use upgrades.",
    back: "← Back to projects",
    openProject: "Open project →",
  },

  el: {
    title: "MINI COOPER",
    subtitle:
      "Custom αξεσουάρ, ανταλλακτικά και πρακτικές αναβαθμίσεις για Mini Cooper.",
    back: "← Πίσω στα έργα",
    openProject: "Άνοιγμα project →",
  },
};

export default function MiniCooperPage() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.24),transparent_34%),radial-gradient(circle_at_70%_78%,rgba(59,130,246,0.22),transparent_38%)]" />
      </div>

      <section className="relative z-10 px-6 py-8 md:px-12 lg:px-20">
        <Navbar />

        <div className="mx-auto mt-14 max-w-7xl">
          <Link
            href="/projects"
            className="text-cyan-300 hover:text-cyan-200"
          >
            {t.back}
          </Link>

          <h1 className="mt-10 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {t.subtitle}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {miniProjects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <div className="mb-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="text-sm font-semibold text-cyan-300">
                  {project.type}
                </p>

                <h2 className="mt-3 text-3xl font-black text-cyan-100">
                  {lang === "el" ? project.title : project.titleEn}
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-300">
                  {project.shortDescription}
                </p>

                <p className="mt-6 font-bold text-cyan-300">
                  {t.openProject}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
