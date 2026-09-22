import Image from "next/image";
import {
  site,
  dataminded,
  services,
  experience,
  certifications,
  projects,
  techIcons,
  type Logo,
} from "@/lib/site";
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

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl leading-snug tracking-[-0.01em] sm:text-4xl">
    {children}
  </h2>
);

/** Company mark in ink. Decorative: the adjacent heading carries the name. */
const CompanyLogo = ({ logo }: { logo: Logo }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={logo.src}
    alt=""
    aria-hidden="true"
    width={logo.width}
    height={logo.height}
    className={`select-none ${logo.raster ? "grayscale" : ""}`}
    loading="lazy"
  />
);

const TechList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
    {items.map((name) => {
      const icon = techIcons[name];
      return (
        <li
          key={name}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-muted"
        >
          {icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="size-3.5 opacity-80"
              loading="lazy"
            />
          )}
          {name}
        </li>
      );
    })}
  </ul>
);

export default function Home() {
  const year = new Date().getFullYear();

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
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#services" className="-my-2 hidden py-2 transition-colors hover:text-ink sm:inline">
              Services
            </a>
            <a href="#experience" className="-my-2 py-2 transition-colors hover:text-ink">
              Experience
            </a>
            <a href="#projects" className="-my-2 hidden py-2 transition-colors hover:text-ink sm:inline">
              Projects
            </a>
            <a
              href="#contact"
              className="-my-2 py-2 font-medium text-ink transition-colors hover:text-accent"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
          <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-7xl">
            Data and AI architecture.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {site.company} is the freelance data and AI architecture company of{" "}
            <span className="text-ink">{site.founder}</span>, based in Antwerp.
            Specialised in AI and ML in production.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              What I can help with
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink active:bg-paper-2"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <SectionHeading>Services</SectionHeading>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {services.map((s) => (
                <div
                  key={s.id}
                  className="grid gap-3 py-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14"
                >
                  <dt className="text-xl font-medium leading-snug text-ink">
                    {s.name}
                  </dt>
                  <dd className="max-w-xl text-[17px] leading-relaxed text-muted">
                    {s.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <SectionHeading>Experience</SectionHeading>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] text-muted">
              Client engagements, delivered as a consultant with
              <a
                href={dataminded.href}
                target="_blank"
                rel="noopener noreferrer"
                className="-my-2.5 inline-flex items-center py-2.5 opacity-90 transition-opacity hover:opacity-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dataminded.logo} alt={dataminded.name} width={105} height={15} loading="lazy" />
              </a>
            </p>

            <ol className="mt-10">
              {experience.map((e) => (
                <li
                  key={e.id}
                  className="grid gap-6 border-t border-line py-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14 md:py-12"
                >
                  <h3 className="flex items-center gap-4 self-start font-serif text-3xl tracking-[-0.01em] lg:text-4xl">
                    <CompanyLogo logo={e.logo} />
                    {e.company}
                  </h3>
                  <div className="max-w-xl">
                    <p className="text-xl font-medium leading-snug text-ink">{e.did}</p>
                    <p className="mt-3 text-[17px] leading-relaxed text-muted">{e.summary}</p>
                    {e.highlights.length > 0 && (
                      <ul className="mt-5 space-y-2.5 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent">
                        {e.highlights.map((h) => (
                          <li key={h} className="list-disc pl-1">
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-7">
                      <TechList items={e.stack} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <SectionHeading>Certifications</SectionHeading>
            <ul className="mt-10 grid border-y border-line md:grid-cols-2 md:gap-x-14">
              {certifications.map((c) => (
                <li
                  key={c.id}
                  className="flex items-start gap-4 border-b border-line py-6 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.icon}
                    alt=""
                    aria-hidden="true"
                    className="mt-1 size-6 shrink-0 opacity-80"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-[17px] font-medium leading-snug text-ink">
                      {c.name}
                    </p>
                    <p className="mt-1 text-[15px] text-muted">
                      {c.issuer}
                      {c.code && <> · {c.code}</>}
                    </p>
                    <p className="mt-2.5 text-[13px]">
                      {c.status === "in-progress" ? (
                        <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                          <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
                          In progress
                        </span>
                      ) : (
                        <span className="text-muted">
                          Issued {c.issued} · Expired {c.expired}
                        </span>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Other projects */}
        <section id="projects" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <SectionHeading>Other projects</SectionHeading>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {projects.map((p) => (
                <li
                  key={p.id}
                  className="grid gap-4 py-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14"
                >
                  <div>
                    {p.clients ? (
                      <>
                        <h3 className="sr-only">{p.name}</h3>
                        <ul className="space-y-3">
                          {p.clients.map((c) => (
                            <li
                              key={c.name}
                              className="flex items-center gap-4 font-serif text-2xl tracking-[-0.01em] sm:text-3xl"
                            >
                              <CompanyLogo logo={c.logo} />
                              {c.name}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <h3 className="flex items-center gap-4 font-serif text-2xl tracking-[-0.01em] sm:text-3xl">
                        {p.logo && <CompanyLogo logo={p.logo} />}
                        {p.name}
                      </h3>
                    )}
                    <p className="mt-3 text-[15px] text-muted">{p.role}</p>
                  </div>
                  <div className="max-w-xl">
                    <p className="text-[17px] leading-relaxed text-ink">{p.description}</p>
                    {p.stack.length > 0 && (
                      <div className="mt-5">
                        <TechList items={p.stack} />
                      </div>
                    )}
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group -mb-2 mt-3 inline-flex items-center gap-1.5 py-2 text-sm font-medium text-accent"
                      >
                        {p.hrefLabel}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About and contact */}
        <section id="about" className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <SectionHeading>About</SectionHeading>
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
                  />
                </div>
                <p className="mt-4 text-[15px] font-semibold text-ink">
                  {site.founder}
                </p>
                <p className="text-[15px] text-muted">
                  {site.title} · Antwerp
                </p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div className="max-w-xl">
                <div className="space-y-6 text-lg leading-relaxed text-muted">
                  <p>
                    I started out as a{" "}
                    <span className="text-ink">data engineer and data scientist</span>
                    , consulting for teams that needed to turn messy data into
                    something they could actually use.
                  </p>
                  <p>
                    That grew into architecture and leadership: designing the
                    platforms data teams stand on, introducing data products where
                    there were only pipelines, and leading the engineers and
                    scientists who take it into production. In energy, aviation,
                    rail, and banking.
                  </p>
                  <p>
                    {site.company} is the company behind that work, based in
                    Antwerp. The client engagements ran through {dataminded.name}.
                    On the side I co-founded Expedait.
                  </p>
                  <p className="text-ink">
                    If a problem is worth solving end to end, I want to build it.
                  </p>
                </div>
                <div id="contact" className="mt-12 scroll-mt-24 border-t border-line pt-10">
                  <p className="text-lg text-muted">
                    I read every email and reply to the ones that aren&apos;t robots.
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="group mt-6 inline-flex items-center gap-2 font-serif text-2xl text-ink underline decoration-ink/25 decoration-2 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-3xl"
                  >
                    {site.email}
                    <ArrowUpRight className="size-5 text-muted transition-[transform,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </a>
                </div>
              </div>
            </div>
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
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="-my-2 py-2 transition-colors hover:text-ink">
              LinkedIn
            </a>
            <a href="https://expedait.org" target="_blank" rel="noopener noreferrer" className="-my-2 py-2 transition-colors hover:text-ink">
              Expedait
            </a>
            <span>© {year}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
