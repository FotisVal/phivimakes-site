import Link from "next/link";

const projects = [
  {
    title: "Modular Desk Organizer",
    type: "3D Printed Product",
    slug: "modular-desk-organizer",
  },
  {
    title: "Aquarium Utility Part",
    type: "Functional Prototype",
    slug: "aquarium-utility-part",
  },
  {
    title: "Custom Mechanical Holder",
    type: "Custom Build",
    slug: "custom-mechanical-holder",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-cyan-300">
          ← Back home
        </Link>

        <h1 className="mt-10 text-5xl font-black tracking-tight md:text-7xl">
          Projects
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Μια συλλογή από 3D printed κατασκευές, prototypes και custom λύσεις.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-[2rem] border border-cyan-400/20 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/60"
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