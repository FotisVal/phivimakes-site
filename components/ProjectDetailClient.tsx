"use client";

import Link from "next/link";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import STLViewer from "@/components/STLViewer";
import GalleryModal from "@/components/GalleryModal";
import { useLanguage } from "@/components/LanguageProvider";

import type { Project } from "@/data/projects";

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  const { lang } = useLanguage();

  const [selectedImage, setSelectedImage] =
    useState<number | null>(null);

  const [selectedVersion, setSelectedVersion] =
    useState(project.stlVersions?.[0] ?? null);

  const text = {
    en: {
      back: "← Back to",
      preview: "3D Preview",
      details: "Project Details",
      gallery: "Gallery",
      version: "Model",
    },

    el: {
      back: "← Πίσω στο",
      preview: "3D Preview",
      details: "Λεπτομέρειες Project",
      gallery: "Gallery",
      version: "Μοντέλο",
    },
  };

  const t = text[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.24),transparent_34%),radial-gradient(circle_at_70%_78%,rgba(59,130,246,0.22),transparent_38%)]" />
      </div>

      <section className="relative z-10 px-6 py-8 md:px-12 lg:px-20">
        <Navbar />

        <div className="mx-auto mt-14 max-w-6xl">
          <Link
            href={`/projects/${project.category}`}
         className="text-cyan-300 hover:text-cyan-200"
          >
            {t.back}{" "}
          {project.category
            .replace("-", " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            {project.type}
          </p>

          <h1 className="mt-4 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
            {lang === "el"
              ? project.title
              : project.titleEn}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
            {project.shortDescription}
          </p>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/45">
            <img
              src={project.coverImage}
              alt={project.title}
              className="aspect-video w-full object-cover"
            />
          </div>

          {selectedVersion && (
            <section className="mt-14">
              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h2 className="text-4xl font-black text-cyan-100">
                    {t.preview}
                  </h2>

                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                    {t.version}: {selectedVersion.label}
                  </p>
                </div>

                {project.stlVersions &&
                  project.stlVersions.length > 1 && (
                    <div className="flex flex-wrap gap-3">
                      {project.stlVersions.map(
                        (version) => (
                          <button
                            key={version.file}
                            onClick={() =>
                              setSelectedVersion(version)
                            }
                            className={`rounded-full px-5 py-3 font-bold transition ${
                              selectedVersion.file ===
                              version.file
                                ? "bg-cyan-300 text-slate-950"
                                : "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 hover:bg-cyan-300/20"
                            }`}
                          >
                            {version.label}
                          </button>
                        )
                      )}
                    </div>
                  )}
              </div>

              <STLViewer
                fileUrl={selectedVersion.file}
              />
            </section>
          )}

          <section className="mt-14 rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl">
            <h2 className="text-4xl font-black text-cyan-100">
              {t.details}
            </h2>

            <p className="mt-6 whitespace-pre-line text-xl leading-9 text-slate-300">
              {selectedVersion
                ? lang === "el"
                  ? selectedVersion.descriptionEl
                  : selectedVersion.descriptionEn
                : project.description}
            </p>
          </section>

          {project.images.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-6 text-4xl font-black text-cyan-100">
                {t.gallery}
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {project.images.map(
                  (image, index) => (
                    <button
                      key={image}
                      onClick={() =>
                        setSelectedImage(index)
                      }
                      className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/45 text-left"
                    >
                      <img
                        src={image}
                        alt={project.title}
                        className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </button>
                  )
                )}
              </div>
            </section>
          )}
        </div>
      </section>

      <GalleryModal
        images={project.images}
        selectedIndex={selectedImage}
        setSelectedIndex={setSelectedImage}
      />
    </main>
  );
}