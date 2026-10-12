// Compact research and training highlights under the founder card.
// Source: Joaquin's CV (October 2026) and PubMed. Keep counts in sync with both.

const training = [
  {
    label: "University of Pennsylvania",
    detail: "M.D., Perelman School of Medicine",
  },
  { label: "Columbia University", detail: "Ophthalmology residency" },
  {
    label: "Johns Hopkins, Wilmer Eye Institute",
    detail: "Cornea & refractive surgery fellowship",
  },
];

const stats = [
  { value: "14", label: "Peer-reviewed papers" },
  { value: "13", label: "Clinical trials & studies", note: "7 as principal investigator" },
  {
    value: "3",
    label: "Best Paper awards",
    note: "American Society of Cataract and Refractive Surgery",
  },
];

const recognition = [
  "Castle Connolly Top Doctor, every year since 2022",
  "U.S. patent holder",
];

const currentStudy = {
  title:
    "Visual outcomes of a presbyopia-correcting IOL in eyes with prior myopic LASIK",
  detail: "Investigator-initiated study",
};

type Tag = { label: string; tone: "cyan" | "amber" };

const work: {
  year: string;
  title: string;
  venue: string;
  href: string;
  tag: Tag;
  code?: string;
}[] = [
  {
    year: "2026",
    title: "Two EDOF intraocular lenses compared, with emphasis on mesopic vision",
    venue: "Journal of Cataract & Refractive Surgery",
    href: "https://doi.org/10.1097/j.jcrs.0000000000001876",
    tag: { label: "First author", tone: "cyan" },
  },
  {
    year: "2025",
    title: "A predictive machine learning model for femtosecond arcuate keratotomy",
    venue: "American Society of Cataract and Refractive Surgery annual meeting",
    href: "https://www.ophthalmologytimes.com/view/q-a-joaquin-de-rojas-md-on-ascrs-2025-best-paper-of-session-for-advancing-ak-with-machine-learning",
    tag: { label: "Best Paper of Session", tone: "amber" },
    code: "https://github.com/wak1616/arcuate_model_comparisons",
  },
  {
    year: "2024",
    title: "How accurate is ChatGPT on corneal transplantation and Fuchs dystrophy?",
    venue: "Cornea",
    href: "https://doi.org/10.1097/ICO.0000000000003439",
    tag: { label: "LLM evaluation", tone: "cyan" },
  },
  {
    year: "2016",
    title: "OCT angiography in Leber hereditary optic neuropathy",
    venue: "Neurology",
    href: "https://doi.org/10.1212/WNL.0000000000003313",
    tag: { label: "Cover article", tone: "amber" },
  },
];

const pubmedIds = [
  41564440, 38305420, 38016014, 37581096, 35800673, 33470675, 31394552,
  30134386, 30115299, 30050711, 28601586, 27821565, 24635923, 23149971,
];
const pubmedHref = `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(
  pubmedIds.map((id) => `${id}[pmid]`).join(" OR "),
)}&sort=date`;

const tagStyles: Record<Tag["tone"], string> = {
  cyan: "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
  amber: "border-amber-400/20 bg-amber-400/[0.06] text-amber-300",
};

function ExternalIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export default function FounderBackground() {
  return (
    <div className="glass mx-auto mt-6 max-w-3xl overflow-hidden rounded-3xl">
      {/* Training path + numbers */}
      <div className="grid gap-8 border-b border-white/5 p-8 sm:p-10 md:grid-cols-[1.15fr_1fr] md:gap-10">
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Training
          </h3>
          <ol className="relative space-y-4">
            <span
              aria-hidden
              className="absolute bottom-2 left-[4px] top-2 w-px bg-gradient-to-b from-cyan-400/50 to-violet-400/50"
            />
            {training.map((t) => (
              <li key={t.label} className="relative pl-6">
                <span
                  aria-hidden
                  className="absolute left-0 top-[7px] h-[9px] w-[9px] rounded-full border border-cyan-400/70 bg-gray-950"
                />
                <p className="text-sm font-semibold text-white">{t.label}</p>
                <p className="text-xs text-gray-500">{t.detail}</p>
              </li>
            ))}
            <li className="relative pl-6">
              <span aria-hidden className="absolute left-0 top-[7px] flex h-[9px] w-[9px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-violet-400" />
              </span>
              <p className="text-sm font-semibold text-white">Board certified</p>
              <p className="text-xs text-gray-500">American Board of Ophthalmology</p>
            </li>
          </ol>
        </div>

        <div className="self-center">
          <dl className="grid gap-5">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <dt className="text-[11px] font-medium uppercase leading-snug tracking-wider text-gray-500">
                  {s.label}
                  {s.note && (
                    <span className="mt-0.5 block normal-case tracking-normal text-gray-600">
                      {s.note}
                    </span>
                  )}
                </dt>
                <dd className="order-first w-12 shrink-0 bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-3xl font-extrabold tabular-nums text-transparent sm:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 space-y-2 border-t border-white/5 pt-5">
            {recognition.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-xs leading-snug text-gray-400">
                <svg className="mt-px h-3.5 w-3.5 shrink-0 text-amber-300/80" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.3a1 1 0 00.95.69h3.47c.97 0 1.37 1.24.59 1.81l-2.81 2.04a1 1 0 00-.36 1.12l1.07 3.3c.3.92-.75 1.69-1.54 1.12l-2.8-2.04a1 1 0 00-1.18 0l-2.8 2.04c-.8.57-1.84-.2-1.55-1.12l1.07-3.3a1 1 0 00-.36-1.12L2.96 8.73c-.78-.57-.38-1.81.59-1.81h3.47a1 1 0 00.95-.69l1.08-3.3z" />
                </svg>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Selected research */}
      <div className="p-8 sm:p-10">
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Selected research
          </h3>
          <a
            href={pubmedHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 transition-colors hover:text-cyan-300"
          >
            All on PubMed <ExternalIcon />
          </a>
        </div>
        <div className="-mx-3 mb-1 flex gap-3 rounded-xl border border-violet-400/15 bg-violet-400/[0.04] px-3 py-3.5">
          <span aria-hidden className="relative mt-1.5 flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
          </span>
          <div className="min-w-0">
            <p className="mb-1 font-mono text-[11px] text-violet-300">In progress</p>
            <p className="text-sm font-medium leading-snug text-gray-100">
              {currentStudy.title}
            </p>
            <p className="mt-1 text-xs italic text-gray-500">{currentStudy.detail}</p>
            <span className="mt-2.5 inline-block rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-2 py-0.5 text-[11px] font-medium text-violet-300">
              Principal investigator
            </span>
          </div>
        </div>
        <ul className="-mx-3 grid sm:grid-cols-2">
          {work.map((w) => (
            <li key={w.href}>
              <div className="group relative flex h-full flex-col rounded-xl px-3 py-3.5 transition-colors hover:bg-white/[0.04]">
                <span className="mb-1.5 flex items-center gap-2 font-mono text-[11px] text-gray-500">
                  {w.year}
                  <span className="h-px flex-1 bg-white/5" />
                  <span className="text-gray-600 transition-colors group-hover:text-cyan-400">
                    <ExternalIcon />
                  </span>
                </span>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-snug text-gray-100 transition-colors after:absolute after:inset-0 after:rounded-xl group-hover:text-white"
                >
                  {w.title}
                </a>
                <span className="mt-1 text-xs italic text-gray-500">{w.venue}</span>
                <span className="mt-2.5 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${tagStyles[w.tag.tone]}`}
                  >
                    {w.tag.label}
                  </span>
                  {w.code && (
                    <a
                      href={w.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[11px] text-gray-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      &lt;/&gt; code
                    </a>
                  )}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
