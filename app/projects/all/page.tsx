import Link from "next/link";
import { allProjects } from "@/data/projects";

export default function AllProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <Link href="/projects" className="text-cyan-300">
          ← Back to projects
        </Link>

        <h1 className="mt-10 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
          ALL PROJECTS
        </h1>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {allProjects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              <div className="mb-8 aspect-video rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20" />
              <p className="text-sm font-semibold text-cyan-300">
                {project.type}
              </p>
              <h2 className="mt-3 text-2xl font-black">{project.title}</h2>
              <p className="mt-5 text-slate-400">Open project →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}