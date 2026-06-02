import Image from "next/image";
import { site, projects } from "@/lib/site";
import bruno from "@/public/bruno.jpg";

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export default function Home() {
  const year = 2026;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-md bg-ink text-[13px] font-bold text-paper">
              CB
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              {site.company}
            </span>
          </a>
          <nav className="flex items-center gap-7 text-sm text-muted">
            <a href="#projects" className="transition-colors hover:text-ink">
              Projects
            </a>
            <a href="#about" className="hidden transition-colors hover:text-ink sm:inline">
              About
            </a>
            <a
              href="#contact"
              className="font-medium text-ink transition-colors hover:text-accent"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
          <p className="mb-6 flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            {site.company} · {site.location}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl md:text-7xl">
            Software products,
            <br />
            built from Brussels.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {site.company} is the company of {site.founder} — an engineer turned
            founder. These days I build two products:{" "}
            <span className="text-ink">Expedait</span> and{" "}
            <span className="text-ink">Babyfoon</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              See the projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-baseline justify-between py-8">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
                Projects
              </h2>
              <span className="text-[13px] text-muted">{projects.length} of them</span>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
              {projects.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-paper p-8 transition-colors hover:bg-paper-2 sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-muted/70">
                      {p.index}
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-8 flex items-center gap-2 font-serif text-3xl tracking-[-0.01em] sm:text-4xl">
                    {p.name}
                    <ArrowUpRight className="size-5 -translate-y-1 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-1.5 group-hover:text-accent" />
                  </h3>

                  <p className="mt-3 text-lg font-medium leading-snug text-ink">
                    {p.tagline}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {p.description}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {p.hrefLabel}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <h2 className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
              About
            </h2>
            <div className="mt-10 grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-14">
              <div className="shrink-0">
                <div className="relative size-44 overflow-hidden rounded-2xl ring-1 ring-line sm:size-52">
                  <Image
                    src={bruno}
                    alt={`Portrait of ${site.founder}`}
                    fill
                    placeholder="blur"
                    sizes="208px"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-4 text-[15px] font-semibold text-ink">
                  {site.founder}
                </p>
                <p className="text-[15px] text-muted">Founder, {site.company}</p>
              </div>
              <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted">
              <p>
                I started out as a{" "}
                <span className="text-ink">data engineer and data scientist</span>
                , consulting for teams that needed to turn messy data into
                something they could actually use.
              </p>
              <p>
                Over the years that turned into building and shipping products of
                my own. {site.company} is the company behind that work — today
                focused on Expedait, with Babyfoon running quietly on the side.
              </p>
              <p className="text-ink">
                If a problem is worth solving end to end, I want to build it.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <h2 className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
              Contact
            </h2>
            <p className="mt-6 max-w-2xl font-serif text-3xl leading-snug tracking-[-0.01em] sm:text-4xl">
              Building something, hiring, or just want to talk shop?
            </p>
            <p className="mt-4 max-w-lg text-lg text-muted">
              I read every email and reply to the ones that aren&apos;t robots.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-2 font-serif text-2xl text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-3xl"
            >
              {site.email}
              <ArrowUpRight className="size-5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-6 place-items-center rounded bg-ink text-[11px] font-bold text-paper">
              CB
            </span>
            <span>
              {site.legalName} · {site.location}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://expedait.org" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              Expedait
            </a>
            <a href="https://babyfoon.dev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              Babyfoon
            </a>
            <span>© {year}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
