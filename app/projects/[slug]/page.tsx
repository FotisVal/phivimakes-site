import Link from "next/link";

const projectData: any = {
  "modular-desk-organizer": {
    title: "Modular Desk Organizer",
    type: "3D Printed Product",
    description:
      "Ένα modular organizer για γραφείο, σχεδιασμένο ώστε να προσαρμόζεται σε διαφορετικές ανάγκες.",
  },
  "aquarium-utility-part": {
    title: "Aquarium Utility Part",
    type: "Functional Prototype",
    description:
      "Πρακτικό εξάρτημα για ενυδρείο, σχεδιασμένο για αντοχή, απλότητα και σωστή εφαρμογή.",
  },
  "custom-mechanical-holder": {
    title: "Custom Mechanical Holder",
    type: "Custom Build",
    description:
      "Custom holder για μηχανική χρήση, με έμφαση στη λειτουργικότητα και την ακριβή εφαρμογή.",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#020617] p-10 text-white">
        <h1>Project not found</h1>
        <Link href="/projects" className="text-cyan-300">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/projects" className="text-cyan-300">
          ← Back to projects
        </Link>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          {project.type}
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
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