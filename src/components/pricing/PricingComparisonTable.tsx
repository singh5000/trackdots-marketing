import { CheckCircle } from "../icons";

type Row = { label: string; free: string | boolean; pro: string | boolean; business: string | boolean };
type Group = { title: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    title: "Core Tracking",
    rows: [
      { label: "Time tracking", free: true, pro: true, business: true },
      { label: "Screenshots", free: true, pro: true, business: true },
      { label: "Work diary", free: true, pro: true, business: true },
      { label: "Attendance calendar", free: true, pro: true, business: true },
    ],
  },
  {
    title: "Reports & Dashboards",
    rows: [
      { label: "Team overview dashboard", free: false, pro: true, business: true },
      { label: "App usage report", free: false, pro: true, business: true },
      { label: "Focus sessions", free: false, pro: true, business: true },
      { label: "Idle time breakdown", free: false, pro: true, business: true },
      { label: "CSV export", free: false, pro: true, business: true },
      { label: "Executive dashboard", free: false, pro: false, business: true },
      { label: "Productivity trends", free: false, pro: false, business: true },
      { label: "Activity heatmap", free: false, pro: false, business: true },
      { label: "Employee comparison", free: false, pro: false, business: true },
      { label: "Automated email reports", free: false, pro: false, business: true },
    ],
  },
  {
    title: "Intelligence",
    rows: [
      { label: "Alerts (late / early / short)", free: false, pro: true, business: true },
      { label: "Burnout detection", free: false, pro: false, business: true },
      { label: "Anomaly detection", free: false, pro: false, business: true },
    ],
  },
  {
    title: "Team Management",
    rows: [
      { label: "Employee portal (self-view)", free: false, pro: true, business: true },
      { label: "Projects & task tracking", free: false, pro: true, business: true },
      { label: "Project budget & burn rate", free: false, pro: false, business: true },
      { label: "Custom roles", free: false, pro: true, business: true },
      { label: "Device logs", free: false, pro: false, business: true },
      { label: "Meeting Mode with staff approval", free: false, pro: false, business: false },
    ],
  },
  {
    title: "Limits",
    rows: [
      { label: "Members", free: "3", pro: "25", business: "Unlimited" },
      { label: "Data retention", free: "7-day", pro: "1-month", business: "3-month" },
      { label: "Support", free: "Community", pro: "Email", business: "Priority" },
    ],
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "string") return <span className="text-[13.5px] font-semibold text-gray-700">{value}</span>;
  if (value) return <CheckCircle className="mx-auto h-5 w-5 text-green-500" strokeWidth={1.8} />;
  return <span className="mx-auto block h-px w-3 bg-gray-200" />;
}

export default function PricingComparisonTable() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">Full Feature Comparison</h2>
        <p className="mt-4 text-lg text-gray-500">Every feature, side by side, so there&apos;s never a surprise later.</p>
      </div>

      <div className="mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
        <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr] items-center gap-4 bg-gray-50 px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-gray-500">
          <span>Feature</span>
          <span className="text-center">Free</span>
          <span className="text-center text-brand-600">Pro</span>
          <span className="text-center">Business</span>
        </div>

        {GROUPS.map((g) => (
          <div key={g.title}>
            <div className="bg-gray-50/70 px-6 py-2.5 text-[11.5px] font-bold uppercase tracking-wider text-gray-400">
              {g.title}
            </div>
            {g.rows.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr] items-center gap-4 px-6 py-4 text-[14.5px] text-gray-700 ${
                  i % 2 === 1 ? "bg-gray-50/40" : "bg-white"
                }`}
              >
                <span>{r.label}</span>
                <span className="flex justify-center">
                  <Cell value={r.free} />
                </span>
                <span className="flex justify-center">
                  <Cell value={r.pro} />
                </span>
                <span className="flex justify-center">
                  <Cell value={r.business} />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
