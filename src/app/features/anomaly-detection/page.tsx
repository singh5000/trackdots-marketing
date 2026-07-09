import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, ChecklistRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  ChevronDown,
  DotsLogo,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Monitor,
  Search,
  Settings,
  ShieldCheck,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Anomaly Detection — TrackDots",
  description:
    "Automatically flags unusual work patterns — no-activity streaks, sudden hour drops, erratic hours — ranked by severity so nothing gets missed.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Anomaly Detection layout
 * (severity stat tiles, per-employee flagged/clear list). */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true },
  { label: "Analytics", icon: BarChart, active: true },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings },
];

const ANOMALY_STATS = [
  { label: "CRITICAL", value: "0" },
  { label: "WARNING", value: "7", amber: true },
  { label: "TOTAL FLAGS", value: "9" },
  { label: "ALL CLEAR", value: "12", green: true },
];

const ANOMALY_EMPLOYEES = [
  { name: "Amit Chawla", role: "CEO", emoji: "💤", flag: "No-activity streak", detail: "10 consecutive weekdays with zero tracked activity", date: "Jul 6, 2026", tone: "warning" },
  { name: "Prabhjot Kaur", role: "Quality Analyst", emoji: "📉", flag: "Sudden hour drop", detail: "3h 53m logged — 47% below personal average (7h 17m)", date: "Jun 30, 2026", tone: "warning" },
  { name: "Nihar Ranjan Mohanta", role: "Software Engineer", emoji: "🔀", flag: "Erratic start times", detail: "Start times vary by 9h 20m across last 14 active days", date: "Jul 6, 2026", tone: "warning" },
  { name: "Akansha Dogra", role: "SEO Executive", emoji: "✓", flag: "All clear", detail: "No anomalies in the last 30 days", date: "", tone: "clear" },
];

function AnomalyHeroCard() {
  return (
    <div className="w-[820px] overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(80,63,205,0.35)] ring-1 ring-gray-200/70">
      <div className="flex h-[540px]">
        {/* ───────── Sidebar ───────── */}
        <aside className="w-[150px] shrink-0 border-r border-gray-100 bg-white px-3 py-4">
          <div className="mb-5 flex items-center gap-1.5 px-1">
            <DotsLogo className="scale-[0.8]" />
            <span className="text-[13px] font-bold tracking-tight">
              <span className="text-gray-900">Track</span>
              <span className="text-brand-600">Dots</span>
            </span>
          </div>
          <nav className="space-y-1">
            {HERO_SIDEBAR_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-[7px] text-[11px] font-medium ${
                  item.active ? "bg-brand-600 text-white shadow-sm" : "text-gray-500"
                }`}
              >
                <item.icon className={`h-3.5 w-3.5 ${item.active ? "text-white" : "text-gray-400"}`} />
                <span className="flex-1">{item.label}</span>
                {item.chevron && (
                  <ChevronDown className={`h-3 w-3 ${item.active ? "text-white" : "text-gray-400"}`} />
                )}
                {item.badge && (
                  <span className="rounded-full bg-brand-100 px-1.5 py-px text-[8px] font-bold text-brand-600">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* ───────── Main ───────── */}
        <div className="flex min-w-0 flex-1 flex-col bg-[#f8f9fd]">
          {/* Topbar */}
          <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-2.5">
            <div className="flex w-[220px] items-center gap-2 rounded-lg bg-gray-50 px-3 py-1.5 ring-1 ring-gray-100">
              <Search className="h-3 w-3 text-gray-400" />
              <span className="text-[10px] text-gray-400">Search anything...</span>
            </div>
            <div className="flex items-center gap-3">
              <Inbox className="h-4 w-4 text-gray-400" />
              <div className="relative">
                <Bell className="h-4 w-4 text-gray-400" />
                <span className="absolute -right-1.5 -top-1.5 rounded-full bg-red-500 px-1 text-[7px] font-bold leading-[11px] text-white">
                  15
                </span>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-[9px] font-bold text-white">
                MK
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3 overflow-hidden p-4">
            {/* Heading */}
            <div>
              <div className="text-[15px] font-bold text-gray-900">Anomaly Detection</div>
              <div className="text-[9px] text-gray-400">Unusual patterns flagged over the last 30 days</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {ANOMALY_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div
                    className={`mt-1 text-[15px] font-bold ${
                      s.amber ? "text-amber-500" : s.green ? "text-green-500" : "text-gray-900"
                    }`}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Employee flag list */}
            <div className="space-y-2">
              {ANOMALY_EMPLOYEES.map((e) => (
                <div key={e.name} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                  <div className="w-[150px] shrink-0">
                    <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                    <div className="text-[8px] text-gray-400">{e.role}</div>
                  </div>
                  <span className="text-[13px]">{e.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-[10px] font-bold ${
                        e.tone === "clear" ? "text-green-600" : "text-amber-600"
                      }`}
                    >
                      {e.flag}
                    </div>
                    <div className="truncate text-[8.5px] text-gray-400">{e.detail}</div>
                  </div>
                  {e.date && <span className="shrink-0 text-[8.5px] text-gray-400">{e.date}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SeverityWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Flags — Last 30 Days"
      stats={[
        { label: "Critical", value: "0" },
        { label: "Warning", value: "7" },
        { label: "Total", value: "9" },
        { label: "All Clear", value: "12" },
      ]}
    />
  </div>
);

const StreakWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">💤 No-Activity Streak</div>
    <div className="rounded-lg bg-white/10 p-3">
      <div className="text-[10.5px] font-semibold text-white/90">Amit Chawla</div>
      <div className="mt-1 text-[10px] text-white/60">10 consecutive weekdays, zero tracked activity</div>
    </div>
  </div>
);

const HourDropWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="📉 Sudden Hour Drop — Prabhjot Kaur"
      rows={[
        { label: "Average", pct: 100, value: "7h 17m", color: "blue" },
        { label: "Jun 30", pct: 53, value: "3h 53m", color: "amber" },
      ]}
    />
  </div>
);

const ErraticWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "🔀 Erratic start times — Nihar R. Mohanta", done: false },
        { label: "🌙 Unusual working hours — same employee", done: false },
        { label: "✓ All clear — Akansha Dogra", done: true },
      ]}
    />
  </div>
);

const ClearWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Team Status — Today"
      stats={[
        { label: "Flagged", value: "9" },
        { label: "Clear", value: "12" },
        { label: "Reviewed", value: "9" },
      ]}
    />
  </div>
);

const VISUALS: FeaturePageVisuals = {
  hero: <AnomalyHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "40% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Amit Chawla</div>
                <span className="rounded-full bg-amber-50 px-1.5 py-0.5 text-[8px] font-bold text-amber-600">Warning</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[12px] font-bold text-gray-900">
                <span>💤</span> No-activity streak
              </div>
              <div className="mt-1 text-[9.5px] text-gray-500">10 consecutive weekdays, zero tracked activity</div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Total Flags — 30 Days</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">9</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">0 critical · 7 warning · 12 all clear</div>
            </div>
          </div>
  ),
  stickyWidgets: [
    <SeverityWidget key="severity" />,
    <StreakWidget key="streak" />,
    <HourDropWidget key="hour-drop" />,
    <ErraticWidget key="erratic" />,
    <ClearWidget key="clear" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 35%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Prabhjot Kaur</div>
              <div className="mt-2 flex items-center gap-1.5 text-[12px] font-bold text-gray-900">
                <span>📉</span> Sudden hour drop
              </div>
              <div className="mt-1 text-[9.5px] text-gray-500">3h 53m logged — 47% below average</div>
              <div className="mt-3 flex gap-2">
                <span className="flex-1 rounded-lg bg-gray-100 py-1.5 text-center text-[9.5px] font-bold text-gray-600">📋 Diary</span>
                <span className="flex-1 rounded-lg bg-gray-100 py-1.5 text-center text-[9.5px] font-bold text-gray-600">👤 Profile</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Evidence
                <br />
                Linked
              </span>
            </div>
          </div>
  ),
  dark2: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "60% 50%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Nihar Ranjan Mohanta</div>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-700">
                  <span>🔀</span> Erratic start times
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-700">
                  <span>🌙</span> Unusual working hours
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
                <BarChart className="h-3.5 w-3.5" strokeWidth={1.8} />
                30-Day Activity
              </div>
              <div className="mt-2 text-[13px] font-bold text-white">2 flags, same employee</div>
              <div className="mt-2 text-[9px] text-white/40">Reviewed alongside their activity diary</div>
            </div>
          </div>
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function AnomalyDetectionPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
