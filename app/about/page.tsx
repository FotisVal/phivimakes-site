import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.28),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(217,70,239,0.16),transparent_32%),radial-gradient(circle_at_70%_78%,rgba(59,130,246,0.22),transparent_38%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Link href="/" className="text-cyan-300 hover:text-cyan-200">
          ← Back home
        </Link>

        <h1 className="mt-10 text-6xl font-black tracking-tight text-cyan-100 md:text-8xl">
          ABOUT
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              The idea
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              PhiVi Makes started as a place to collect practical objects and
              designs I created for my own everyday use.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              The process
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Each project begins from a real need, then becomes a model,
              prototype, print and finished object.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              The goal
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The goal is to make useful designs accessible to others who may
              need the same solution.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-cyan-400/20 bg-slate-950/45 p-8 backdrop-blur-xl md:p-12">
          <h2 className="text-4xl font-black text-cyan-100 md:text-6xl">
            From problem to object.
          </h2>

          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-300">
            I design and build everyday objects, custom parts, prototypes and
            functional solutions mainly through 3D printing. Some projects are
            small improvements, others are complete custom builds, but all of
            them start from the same idea: making something useful, personal and
            easy to access.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["3D Printing", "Product Design", "Prototyping", "Functional Parts", "Everyday Objects"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </main>
    const { lang, setLang } = useLanguage();
  );
}