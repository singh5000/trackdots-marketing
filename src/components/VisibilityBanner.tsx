import { ArrowRight, Monitor, TrendUp } from "./icons";

const APPS = [
  { name: "Chrome", time: "03:00:26", pct: 85, color: "bg-green-500" },
  { name: "Figma", time: "02:00:20", pct: 65, color: "bg-blue-500" },
  { name: "VS Code", time: "01:00:08", pct: 45, color: "bg-amber-500" },
  { name: "Slack", time: "00:12:40", pct: 15, color: "bg-gray-300" },
];

export default function VisibilityBanner() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-600 to-violet-600 px-6 py-14 sm:px-10 lg:px-16">
        {/* decorative glow + faint arc */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 border-l border-white/10 lg:block"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* ── Left: quote + CTA ── */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-[100px] leading-none text-white/10"
            >
              &ldquo;
            </span>
            <p className="relative text-2xl font-bold leading-snug text-white sm:text-3xl">
              Most teams don&apos;t have an effort problem — they have a{" "}
              <span className="text-white">visibility</span> problem. No clear
              view of how work actually happens across people, projects, and
              time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="/features/app-usage"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14.5px] font-semibold text-gray-900 shadow-lg transition-colors hover:bg-gray-50"
              >
                Find Your Visibility Gaps
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* ── Right: abstract illustration + floating widgets ── */}
          <div className="relative hidden justify-self-center lg:block">
            <div className="relative h-[220px] w-[420px]">
              {/* photo-placeholder block */}
              <div className="absolute left-0 top-0 flex h-full w-[260px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-400/80 to-violet-700 ring-1 ring-white/20">
                <Monitor className="h-20 w-20 text-white/25" strokeWidth={1} />
                <span className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
              </div>

              {/* avatar badge, top-right of the photo block */}
              <span className="absolute left-[210px] top-[52px] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-bold text-white shadow-lg">
                MK
              </span>

              {/* apps widget */}
              <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
                <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">
                  Recent Apps &amp; Websites
                </div>
                <div className="mt-2 space-y-1.5">
                  {APPS.map((a) => (
                    <div key={a.name} className="flex items-center gap-1.5 text-[9px]">
                      <span className="w-11 shrink-0 truncate text-gray-600">{a.name}</span>
                      <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.pct}%` }} />
                      </div>
                      <span className="w-12 shrink-0 text-right font-medium text-gray-400">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* productivity widget, overlapping bottom */}
              <div className="absolute -bottom-6 right-4 w-[170px] rounded-xl bg-white p-3.5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-500">Productivity</span>
                  <TrendUp className="h-3.5 w-3.5 text-green-500" />
                </div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-[22px] font-bold text-gray-900">93.5</span>
                  <span className="text-[12px] font-bold text-gray-400">%</span>
                  <span className="text-[10px] font-semibold text-green-500">▲ 2.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
