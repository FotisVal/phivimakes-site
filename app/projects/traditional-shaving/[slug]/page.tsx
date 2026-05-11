import type { Metadata } from "next";

import { allProjects } from "@/data/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

const shavingProjects = allProjects.filter(
  (project) => project.category === "traditional-shaving"
);

export function generateStaticParams() {
  return shavingProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = shavingProjects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.titleEn} · PhiViMakes` : "PhiViMakes",
  };
}

export default async function TraditionalShavingProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = shavingProjects.find((item) => item.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetailClient project={project} />;
}