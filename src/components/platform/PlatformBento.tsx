import { ArrowRight, BarChart, Clock, Monitor, Users } from "../icons";
import { FEATURE_GROUPS } from "../nav/navData";

const ALL_LINKS = FEATURE_GROUPS.flatMap((g) => g.links);

export default function PlatformBento() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          WHY IT ALL FITS TOGETHER
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">
          Not Sixteen Tools. One Platform.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-4 gap-5 [grid-auto-flow:dense]">
        {/* ── Big tile: shared scoring engine ── */}
        <div className="col-span-4 flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-brand-900 p-8 text-white lg:col-span-2 lg:row-span-2">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <BarChart className="h-5.5 w-5.5 text-white" strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-[22px] font-bold leading-snug">One Scoring Engine, Everywhere</h3>
            <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-white/70">
              Time Tracking&apos;s confidence score, Productivity Intelligence&apos;s daily rating, and
              Burnout Detection&apos;s risk signals all read from the same 0–100 real-activity score.
              Nothing is judged twice, by two different rules.
            </p>
          </div>
          <div className="mt-8 flex items-end gap-1.5">
            {[38, 52, 44, 61, 70, 58, 82, 90, 76, 95, 88, 100].map((h, i) => (
              <div key={i} className="w-full rounded-t-sm bg-gradient-to-t from-brand-500 to-violet-400" style={{ height: `${h * 0.7}px`, opacity: 0.5 + (i / 12) * 0.5 }} />
            ))}
          </div>
        </div>

        {/* ── Stat tiles ── */}
        <div className="col-span-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-1">
          <div className="text-[36px] font-extrabold leading-none text-gray-900">16</div>
          <div className="mt-2 text-[13.5px] font-medium text-gray-500">Product features, one login</div>
        </div>
        <div className="col-span-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-1">
          <div className="text-[36px] font-extrabold leading-none text-gray-900">2</div>
          <div className="mt-2 text-[13.5px] font-medium text-gray-500">Native platforms — macOS &amp; Windows</div>
        </div>
        <div className="col-span-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-1">
          <div className="text-[36px] font-extrabold leading-none text-gray-900">0</div>
          <div className="mt-2 text-[13.5px] font-medium text-gray-500">Manual timers required</div>
        </div>
        <div className="col-span-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-1">
          <div className="text-[36px] font-extrabold leading-none text-gray-900">100%</div>
          <div className="mt-2 text-[13.5px] font-medium text-gray-500">Self-view for every employee</div>
        </div>

        {/* ── Wide tile: one roster ── */}
        <div className="col-span-4 flex items-center gap-5 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm lg:col-span-2">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Users className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-[16.5px] font-bold text-gray-900">One Employee Roster, Everywhere</h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-gray-500">
              Add someone once — they show up in attendance, payroll, projects, and every report automatically.
            </p>
          </div>
        </div>

        {/* ── Wide tile: works remotely ── */}
        <div className="col-span-4 flex items-center gap-5 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm lg:col-span-2">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <Monitor className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-[16.5px] font-bold text-gray-900">Same Dashboard, Any Location</h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-gray-500">
              In-office, remote, or hybrid — every employee is tracked the exact same honest way.
            </p>
          </div>
        </div>

        {/* ── Full-width: every feature, browsable ── */}
        <div className="col-span-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Clock className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-[16.5px] font-bold text-gray-900">Every Feature, In One Place</h3>
            </div>
            <a href="/features/time-tracking" className="hidden items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 sm:flex">
              Explore all
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {ALL_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full bg-gray-50 px-3.5 py-2 text-[13px] font-medium text-gray-600 ring-1 ring-gray-100 transition-colors hover:bg-brand-50 hover:text-brand-600 hover:ring-brand-100"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
