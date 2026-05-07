import Link from "next/link";

const aquariumProjects = [
  {
    title: "Λαγούμι",
    description:
      "3D printed aquarium cave structure designed for fish shelter and aquascaping.",
    slug: "lagoumi",
  },
  {
    title: "Νησίδα",
    description:
      "Floating-style aquarium island concept with custom rock and plant support.",
    slug: "nisida",
  },
];

export default function AquariumPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.24),transparent_34%),radial-gradient(circle_at_70%_78%,rgba(59,130,246,0.22),transparent_38%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Link
          href="/projects"
          className="text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back to projects
        </Link>

        <h1 className="mt-10 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
          AQUARIUM
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Aquarium focused projects, custom 3D printed builds and functional
          aquascaping solutions.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {aquariumProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/aquarium/${project.slug}`}
              className="group rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              <div className="mb-8 aspect-video rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20" />

              <h2 className="text-3xl font-black text-cyan-100">
                {project.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                {project.description}
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