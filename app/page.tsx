"use client";

import Link from "next/link";
import { useState } from "react";
import { allProjects } from "@/data/projects";

const text = {
  el: {
    projects: "ΕΡΓΑ",
    hero: "Κατασκευές για καθημερινή χρήση.",
    intro:
      "Σχέδια και αντικείμενα που δημιούργησα για να λύσω πρακτικές ανάγκες της καθημερινότητάς μου, συγκεντρωμένα εδώ ώστε να μπορούν να τα αξιοποιήσουν και άλλοι.",
    moreAbout: "Περισσότερα →",
    viewProjects: "Δες τα έργα",
    contactMe: "Επικοινωνία",
    latestProjects: "Πρόσφατα έργα",
    projectSubtitle:
      "Τα τρία πιο πρόσφατα projects από custom κατασκευές, prototypes και 3D printed λύσεις.",
    more: "Περισσότερα →",
    contactTitle: "Έχεις μια ιδέα;",
    contactText: "Στείλε μου μήνυμα για custom project, prototype ή συνεργασία.",
    socialsTitle: "Ακολούθησέ με",
    socialsText:
      "Βρες το phivimakes σε Instagram και TikTok για νέα builds, prototypes και behind the scenes.",
  },
  en: {
    projects: "PROJECTS",
    hero: "Built for everyday use.",
    intro:
      "Practical designs and objects I created to solve everyday needs, collected here so others can use, adapt and enjoy them too.",
    moreAbout: "More about me →",
    viewProjects: "View Projects",
    contactMe: "Contact",
    latestProjects: "Latest Projects",
    projectSubtitle:
      "The three latest custom builds, prototypes and 3D printed solutions.",
    more: "More →",
    contactTitle: "Have an idea?",
    contactText: "Send me a message for a custom project, prototype or collaboration.",
    socialsTitle: "Follow me",
    socialsText:
      "Find phivimakes on Instagram and TikTok for new builds, prototypes and behind the scenes.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"el" | "en">("en");
  const t = text[lang];

  const projects = [...allProjects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.28),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(217,70,239,0.16),transparent_32%),radial-gradient(circle_at_70%_78%,rgba(59,130,246,0.22),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.25),rgba(2,6,23,0.9))]" />
      </div>

      <section id="about" className="relative z-10 min-h-screen px-6 py-8 md:px-12 lg:px-20">
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
              <Link href="#contact" className="hover:text-cyan-300">
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

        <div className="mx-auto mt-8 grid max-w-7xl items-center gap-14 rounded-[2.5rem] border border-cyan-400/20 bg-slate-950/45 p-7 shadow-[0_0_90px_rgba(34,211,238,0.12)] backdrop-blur-xl md:grid-cols-2 md:p-12">
          <div>
            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
              {t.hero}
            </h2>

            <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-5 text-lg leading-8 text-slate-200">
              {t.intro}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center font-bold text-slate-950 shadow-[0_0_35px_rgba(103,232,249,0.45)] transition hover:bg-cyan-200"
              >
                {t.viewProjects}
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-7 py-4 text-center font-bold text-cyan-200 transition hover:bg-cyan-300/20"
              >
                {t.moreAbout}
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                {t.contactMe}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[3rem] border border-cyan-300/20 bg-slate-950/35 shadow-[0_0_90px_rgba(34,211,238,0.16)] backdrop-blur-xl" />
            <div className="absolute inset-5 rounded-[2.5rem] border border-fuchsia-400/20" />

            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite] rounded-[2rem] border border-cyan-300/50 bg-cyan-300/10 shadow-[0_0_90px_rgba(34,211,238,0.35)] backdrop-blur-xl md:h-80 md:w-80" />

            <div className="absolute bottom-[22%] left-1/2 h-28 w-44 -translate-x-1/2 rounded-[2rem] border border-cyan-300/40 bg-slate-900/70 shadow-[0_0_70px_rgba(34,211,238,0.25)] backdrop-blur-xl">
              <div className="absolute left-1/2 top-[-54px] h-20 w-20 -translate-x-1/2 rounded-full border border-cyan-300/40 bg-slate-900 shadow-[0_0_45px_rgba(34,211,238,0.25)]" />
              <div className="absolute left-1/2 top-[-28px] h-3 w-16 -translate-x-1/2 rounded-full bg-cyan-300/60" />
              <div className="absolute left-8 top-8 h-3 w-28 rounded-full bg-cyan-300/40" />
              <div className="absolute left-8 top-14 h-3 w-20 rounded-full bg-fuchsia-400/30" />
            </div>

            <div className="absolute right-3 top-16 rounded-2xl border border-cyan-300/20 bg-slate-950/60 p-4 backdrop-blur-xl">
              <p className="text-xs text-slate-300">Animation Space</p>
              <p className="text-2xl font-black text-cyan-200">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-6xl font-black leading-none tracking-tight text-cyan-100 md:text-8xl lg:text-9xl">
            {t.projects}
          </h2>

          <div className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-6 backdrop-blur-xl md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              {t.latestProjects}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              {t.projectSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <div className="mb-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="aspect-video w-full" />
                  )}
                </div>

                <p className="text-sm font-semibold text-cyan-300">{project.type}</p>
                <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                <p className="mt-5 text-slate-400 group-hover:text-slate-200">
                  Open project →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-8 py-4 text-lg font-bold text-cyan-200 transition hover:bg-cyan-300/20"
            >
              {t.more}
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-cyan-300 text-slate-950 shadow-[0_0_60px_rgba(34,211,238,0.18)] md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              {t.contactTitle}
            </h2>

            <p className="mt-5 max-w-xl text-lg text-slate-800">
              {t.contactText}
            </p>

            <a
              href="mailto:hello@phi-vi-makes.com"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              hello@phi-vi-makes.com
            </a>
          </div>

          <div className="border-t border-slate-950/20 p-8 md:border-l md:border-t-0 md:p-12">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              {t.socialsTitle}
            </h2>

            <p className="mt-5 max-w-xl text-lg text-slate-800">
              {t.socialsText}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.instagram.com/phivimakes?igsh=ejRibTdrMm9sNXZk"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-950 px-7 py-4 text-center font-bold text-white transition hover:bg-slate-800"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@phivimakes?_r=1&_d=ed9bb7kb0elhbe&sec_uid=MS4wLjABAAAAd0A_oC1ZKMAuyl_HpFvO_xGQQNFXSr4H0c3HyEKq-9trclc-lDZkOKjCY1O4Gh5w&share_author_id=7637309696769311766&sharer_language=en&source=h5_m&u_code=f3bd0c0i76gmch&timestamp=1778199841&user_id=7637309696769311766&sec_user_id=MS4wLjABAAAAd0A_oC1ZKMAuyl_HpFvO_xGQQNFXSr4H0c3HyEKq-9trclc-lDZkOKjCY1O4Gh5w&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7634100450640611094&share_link_id=41ab6d3a-91c3-4347-8a7a-b2381d7f6645&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-950 px-7 py-4 text-center font-bold text-white transition hover:bg-slate-800"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}