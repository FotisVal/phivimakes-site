import Link from "next/link";

const categories = [
  {
    title: "Mini Cooper",
    description: "Custom parts, accessories and upgrades.",
    href: "/projects/mini-cooper",
  },
  {
    title: "Aquarium",
    description: "Functional 3D printed parts for aquarium setups.",
    href: "/projects/aquarium",
  },
  {
    title: "Traditional Shaving",
    description: "Stands, holders and handmade-style accessories.",
    href: "/projects/traditional-shaving",
  },
  {
    title: "Automation Gadgets",
    description: "Useful automation ideas, tools and smart mechanisms.",
    href: "/projects/automation-gadgets",
  },
];

const latestProjects = [
  {
    title: "Λαγούμι",
    category: "Aquarium",
    href: "/projects/aquarium/lagoumi",
  },
  {
    title: "Νησίδα",
    category: "Aquarium",
    href: "/projects/aquarium/nisida",
  },
  {
    title: "Mini Cooper Phone Mount",
    category: "Mini Cooper",
    href: "/projects/mini-cooper/phone-mount",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.24),transparent_34%),radial-gradient(circle_at_70%_78%,rgba(59,130,246,0.22),transparent_38%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back home
        </Link>

        <h1 className="mt-10 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
          PROJECTS
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Explore categories and latest custom builds from PhiVi Makes.
        </p>

        {/* LATEST PROJECTS */}

        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Latest Projects
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Recent Builds
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {latestProjects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <div className="mb-8 aspect-video rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20" />

                <p className="text-sm font-semibold text-cyan-300">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {project.title}
                </h3>

                <p className="mt-5 text-slate-400 group-hover:text-slate-200">
                  Open project →
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}

        <div className="mt-24">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Categories
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Project Collections
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <h2 className="text-3xl font-black text-cyan-100">
                  {category.title}
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-300">
                  {category.description}
                </p>

                <p className="mt-6 font-bold text-cyan-300">
                  Open category →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}