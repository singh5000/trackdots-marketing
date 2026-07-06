import {
  Activity,
  ArrowRight,
  Bell,
  CheckCircle,
  CreditCard,
  Folder,
  Monitor,
  ShieldCheck,
} from "./icons";

const FILTERS = ["Time", "Activity", "Projects", "Attendance", "Payroll"];

/* Real, freely-licensed photos (Lorem Picsum → Unsplash, no attribution required). */
const PHOTO = (id: number) => `https://picsum.photos/id/${id}/640/480`;

/* ── Small widget mockups shown over each photo — same visual language as the rest of the site. ── */

function StatRingWidget({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-2xl">
      <div className="relative h-12 w-12 shrink-0">
        <div
          className="h-full w-full rounded-full"
          style={{ background: "conic-gradient(#22c55e 0% 94%, #e5e7eb 94% 100%)" }}
        />
        <div className="absolute inset-[4px] flex items-center justify-center rounded-full bg-white text-[10px] font-bold text-gray-900">
          {value}
        </div>
      </div>
      <div className="text-[11px] font-semibold text-gray-700">{label}</div>
    </div>
  );
}

function SignalWidget() {
  return (
    <div className="w-[180px] rounded-xl bg-white p-3 shadow-2xl">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-wide text-gray-500">Burnout Risk</span>
        <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-bold text-red-600">High</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {["Long hours", "No breaks", "Late nights"].map((s) => (
          <span key={s} className="rounded-md bg-gray-50 px-1.5 py-1 text-[8px] font-medium text-gray-600 ring-1 ring-gray-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function AnomalyWidget() {
  const tiles = [
    { label: "Critical", value: "0", color: "text-red-500" },
    { label: "Warning", value: "11", color: "text-amber-500" },
    { label: "Clear", value: "8", color: "text-green-500" },
  ];
  return (
    <div className="flex gap-2 rounded-xl bg-white p-3 shadow-2xl">
      {tiles.map((t) => (
        <div key={t.label} className="text-center">
          <div className={`text-[16px] font-bold ${t.color}`}>{t.value}</div>
          <div className="text-[8px] font-semibold text-gray-500">{t.label}</div>
        </div>
      ))}
    </div>
  );
}

function AppUsageWidget() {
  const rows = [
    { label: "Chrome", pct: 85, color: "bg-green-500" },
    { label: "Figma", pct: 60, color: "bg-blue-500" },
    { label: "VS Code", pct: 40, color: "bg-brand-500" },
  ];
  return (
    <div className="w-[190px] rounded-xl bg-white p-3 shadow-2xl">
      <div className="mb-2 text-[9px] font-bold uppercase tracking-wide text-gray-500">Top Apps Today</div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-1.5 text-[9px]">
            <span className="w-11 shrink-0 truncate text-gray-600">{r.label}</span>
            <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-gray-100">
              <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PayslipWidget() {
  return (
    <div className="w-[170px] rounded-xl bg-white p-3 shadow-2xl">
      <div className="flex items-center justify-between">
        <span className="text-[8.5px] font-semibold uppercase tracking-wide text-gray-500">Net Pay</span>
        <span className="rounded-full bg-green-50 px-2 py-0.5 text-[8px] font-bold text-green-600">Paid</span>
      </div>
      <div className="mt-1 text-[17px] font-bold text-gray-900">₹42,500</div>
      <div className="mt-1.5 h-[5px] w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-4/5 rounded-full bg-brand-500" />
      </div>
    </div>
  );
}

function AttendanceWidget() {
  const rows = [
    { label: "Mon", value: "13/19" },
    { label: "Tue", value: "8/19" },
  ];
  return (
    <div className="w-[170px] rounded-xl bg-white p-3 shadow-2xl">
      <div className="mb-1.5 text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Attendance</div>
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between text-[9.5px] text-gray-600">
          <span>{r.label}</span>
          <span className="font-semibold text-brand-600">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

const CARDS = [
  {
    tone: "purple" as const,
    photo: PHOTO(0),
    icon: Folder,
    title: "Protect Delivery & Project Deadlines",
    desc: "Without clear task visibility, small delays snowball into missed deadlines.",
    checks: ["On-time project delivery", "Fewer missed deadlines", "Clear task ownership"],
    widget: <StatRingWidget value="94%" label="On-time delivery" />,
  },
  {
    tone: "dark" as const,
    photo: PHOTO(1),
    icon: Activity,
    title: "Spot Burnout Before It Costs You",
    desc: "A 14-day rolling risk score flags overwork before it turns into attrition.",
    checks: ["Early risk scoring", "Proactive manager alerts", "Healthier, consistent teams"],
    widget: <SignalWidget />,
  },
  {
    tone: "purple" as const,
    photo: PHOTO(3),
    icon: Bell,
    title: "Catch What Manual Reviews Miss",
    desc: "7 anomaly detectors flag erratic schedules and activity gaming automatically.",
    checks: ["Erratic-schedule flags", "Activity-gaming detection", "Early productivity-dip alerts"],
    widget: <AnomalyWidget />,
  },
  {
    tone: "dark" as const,
    photo: PHOTO(4),
    icon: Monitor,
    title: "Full Visibility Into Where Time Goes",
    desc: "See exactly which apps and sites make up every employee's working day.",
    checks: ["App & website breakdown", "Active vs. idle time", "Per-employee daily timeline"],
    widget: <AppUsageWidget />,
  },
  {
    tone: "purple" as const,
    photo: PHOTO(6),
    icon: CreditCard,
    title: "Payroll That Runs Itself",
    desc: "Attendance flows straight into salary calculations — no spreadsheets required.",
    checks: ["Attendance-based salary calc", "One-click payslip generation", "Auto-generated bank letters"],
    widget: <PayslipWidget />,
  },
  {
    tone: "dark" as const,
    photo: PHOTO(9),
    icon: ShieldCheck,
    title: "Fair, Transparent Accountability",
    desc: "Meeting time is excluded automatically, and staff can review any edge case.",
    checks: ["Meeting-aware idle exclusion", "Manual staff overrides", "Employee-visible dashboards"],
    widget: <AttendanceWidget />,
  },
];

export default function WorkVisibilitySection() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-[1280px] grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ── Left: sticky intro, vertically centered in the viewport ── */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
              COMPLETE VISIBILITY
            </span>
            <h2 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl lg:text-[48px]">
              See How Work Happens Across Your Team
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-600">
              TrackDots brings monitoring, projects, attendance, and payroll
              into one place — so nothing about your team&apos;s work stays
              hidden. Every card on the right maps to a real feature you can
              turn on today.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {FILTERS.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-gray-100 px-5 py-2.5 text-[14px] font-semibold text-gray-700"
                >
                  {f}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="mt-10 flex w-fit items-center gap-2 text-[15px] font-semibold text-brand-600 transition-all hover:gap-3"
            >
              Explore All Features
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ── Right: stacked outcome cards ── */}
        <div className="space-y-10">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`overflow-hidden rounded-3xl ${
                card.tone === "purple"
                  ? "bg-gradient-to-br from-brand-600 to-violet-700"
                  : "bg-gradient-to-br from-gray-900 to-slate-800"
              }`}
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.photo}
                  alt=""
                  className="h-56 w-full object-cover opacity-90"
                  loading="lazy"
                  width={640}
                  height={480}
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${
                    card.tone === "purple"
                      ? "bg-gradient-to-t from-brand-600/90 via-brand-600/10 to-transparent"
                      : "bg-gradient-to-t from-gray-900/90 via-gray-900/10 to-transparent"
                  }`}
                />
                <div className="absolute -bottom-7 right-6">{card.widget}</div>
              </div>

              <div className="p-7 pt-10">
                <div className="flex items-center gap-2.5 text-white">
                  <card.icon className="h-5 w-5" strokeWidth={1.8} />
                  <h3 className="text-[19px] font-bold">{card.title}</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70">{card.desc}</p>
                <ul className="mt-4 space-y-2">
                  {card.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[13.5px] text-white/85">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-400" strokeWidth={1.8} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
