"use client";

import { useState } from "react";
import Link from "next/link";
import STLViewer from "@/components/STLViewer";
import GalleryModal from "@/components/GalleryModal";
import type { Project } from "@/data/projects";

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedModel, setSelectedModel] = useState(
    project.stlVersions?.[0] ?? null
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto max-w-6xl">
        <Link href="/projects/aquarium" className="text-cyan-300 hover:text-cyan-200">
          ← Back to Aquarium
        </Link>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          {project.type}
        </p>

        <h1 className="mt-4 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
          {project.title}
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

        {selectedModel && (
          <section className="mt-14">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="text-4xl font-black text-cyan-100">
                3D Preview
              </h2>

              {project.stlVersions && project.stlVersions.length > 1 && (
                <div className="flex flex-wrap gap-3">
                  {project.stlVersions.map((model) => (
                    <button
                      key={model.file}
                      onClick={() => setSelectedModel(model)}
                      className={`rounded-full px-5 py-3 font-bold transition ${
                        selectedModel.file === model.file
                          ? "bg-cyan-300 text-slate-950"
                          : "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 hover:bg-cyan-300/20"
                      }`}
                    >
                      {model.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              {selectedModel.label}
            </p>

            <STLViewer fileUrl={selectedModel.file} />
          </section>
        )}

        <section className="mt-14 rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl">
          <h2 className="text-4xl font-black text-cyan-100">
            Project Details
          </h2>
          <p className="mt-6 text-xl leading-9 text-slate-300">
            {project.description}
          </p>
        </section>

        {project.images.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-4xl font-black text-cyan-100">
              Gallery
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {project.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/45 text-left"
                >
                  <img
                    src={image}
                    alt={project.title}
                    className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        <GalleryModal
          images={project.images}
          selectedIndex={selectedImage}
          setSelectedIndex={setSelectedImage}
        />
      </div>
    </main>
  );
}