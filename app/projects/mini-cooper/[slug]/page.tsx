import type { Metadata } from "next";

import { allProjects } from "@/data/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

const miniProjects = allProjects.filter(
  (project) => project.category === "mini-cooper"
);

export function generateStaticParams() {
  return miniProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = miniProjects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.titleEn} · Phivimakes` : "Phivimakes",
  };
}

export default async function MiniCooperProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = miniProjects.find((item) => item.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetailClient project={project} />;
}