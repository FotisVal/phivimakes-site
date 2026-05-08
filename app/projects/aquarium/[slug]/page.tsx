import Link from "next/link";
import { allProjects } from "@/data/projects";
import STLViewer from "@/components/STLViewer";

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
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.24),transparent_34%),radial-gradient(circle_at_70%_78%,rgba(59,130,246,0.22),transparent_38%)]" />
      </div>

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

        {project.stl && (
          <section className="mt-14">
            <h2 className="mb-6 text-4xl font-black text-cyan-100">
              3D Preview
            </h2>
            <STLViewer fileUrl={project.stl} />
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
              {project.images.map((image) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/45"
                >
                  <img
                    src={image}
                    alt={project.title}
                    className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}