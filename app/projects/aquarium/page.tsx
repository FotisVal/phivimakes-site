import Link from "next/link";
import { allProjects } from "@/data/projects";

const aquariumProjects = allProjects.filter(
  (project) => project.category === "aquarium"
);

export default function AquariumPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <Link href="/projects" className="text-cyan-300 hover:text-cyan-200">
          ← Back to projects
        </Link>

        <h1 className="mt-10 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
          AQUARIUM
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Functional 3D printed parts and decorative objects for aquarium setups.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {aquariumProjects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              <div className="mb-8 overflow-hidden rounded-3xl border border-cyan-300/20">
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
                {project.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                {project.shortDescription}
              </p>

              <p className="mt-6 font-bold text-cyan-300">
                Open project →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}