import Link from "next/link";
import { allProjects } from "@/data/projects";

const aquariumProjects = allProjects.filter(
  (project) => project.category === "aquarium"
);

export function generateStaticParams() {
  return aquariumProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function AquariumProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = aquariumProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#020617] p-10 text-white">
        <h1 className="text-4xl font-black">Project not found</h1>
        <Link href="/projects/aquarium" className="mt-6 inline-block text-cyan-300">
          ← Back to Aquarium
        </Link>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto max-w-5xl">
        <Link href="/projects/aquarium" className="text-cyan-300">
          ← Back to Aquarium
        </Link>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          {project.type}
        </p>

        <h1 className="mt-4 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
          {project.title}
        </h1>

        <div className="mt-10 aspect-video rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20" />

        <p className="mt-10 text-xl leading-9 text-slate-300">
          {project.description}
        </p>
      </div>
    </main>
  );
}