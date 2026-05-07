import Link from "next/link";

const projects = [
  {
    title: "Modular Desk Organizer",
    type: "3D Printed Product",
    href: "/projects/modular-desk-organizer",
  },
  {
    title: "Aquarium Utility Part",
    type: "Functional Prototype",
    href: "/projects/aquarium-utility-part",
  },
  {
    title: "Custom Mechanical Holder",
    type: "Custom Build",
    href: "/projects/custom-mechanical-holder",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <section className="relative min-h-screen px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-120px] top-40 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute bottom-[-100px] left-[-100px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[100px]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cyan-400/20 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <Link href="/" className="text-xl font-black tracking-tight">
            PHIVI<span className="text-cyan-300">MAKES</span>
          </Link>
          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <Link href="#about" className="hover:text-cyan-300">About</Link>
            <Link href="/projects" className="hover:text-cyan-300">Projects</Link>
            <Link href="#contact" className="hover:text-cyan-300">Contact</Link>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              3D Printing • Custom Design • Functional Objects
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Ideas made physical.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Είμαι ο δημιουργός πίσω από το PhiVi Makes. Σχεδιάζω και κατασκευάζω custom αντικείμενα, prototypes και πρακτικές λύσεις με 3D printing.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center font-bold text-slate-950 shadow-[0_0_35px_rgba(103,232,249,0.35)] transition hover:bg-cyan-200"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
            <div className="absolute inset-10 rounded-full border border-cyan-300/10" />
            <div className="absolute inset-20 rounded-full border border-cyan-300/10" />

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2rem] border border-cyan-300/50 bg-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,0.35)] backdrop-blur-xl md:h-72 md:w-72" />
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[1.5rem] border border-violet-300/40 bg-violet-400/10 shadow-[0_0_60px_rgba(167,139,250,0.25)] backdrop-blur-xl md:h-48 md:w-48" />

            <div className="absolute right-8 top-16 rounded-2xl border border-cyan-300/20 bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-xs text-slate-300">Layer height</p>
              <p className="text-2xl font-black text-cyan-200">0.20mm</p>
            </div>

            <div className="absolute bottom-14 left-4 rounded-2xl border border-cyan-300/20 bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-xs text-slate-300">Material</p>
              <p className="text-2xl font-black text-cyan-200">PLA / PETG</p>
            </div>

            <div className="absolute bottom-6 right-8 rounded-2xl border border-cyan-300/20 bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-xs text-slate-300">Status</p>
              <p className="text-2xl font-black text-cyan-200">Printing</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">About</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
            From digital design to real objects.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Το PhiVi Makes είναι ένα creative project γύρω από το 3D printing, το product design και τις custom κατασκευές. Στόχος είναι κάθε ιδέα να γίνεται ένα χρήσιμο, όμορφο και λειτουργικό αντικείμενο.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Projects</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Selected Builds</h2>
            </div>
            <Link href="/projects" className="font-bold text-cyan-300 hover:text-cyan-200">
              See all projects →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group rounded-[2rem] border border-cyan-400/20 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <div className="mb-8 aspect-video rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20" />
                <p className="text-sm font-semibold text-cyan-300">{project.type}</p>
                <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                <p className="mt-5 text-slate-400 group-hover:text-slate-200">Open project →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-cyan-300 p-8 text-slate-950 md:p-12">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Have an idea?</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-800">
            Στείλε μου μήνυμα για custom project, 3D printed part ή συνεργασία.
          </p>
          <a
            href="mailto:hello@phi-vi-makes.com"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
          >
            hello@phi-vi-makes.com
          </a>
        </div>
      </section>
    </main>
  );
}
