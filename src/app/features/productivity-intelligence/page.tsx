import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  ChevronDown,
  DotsLogo,
  Eye,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Monitor,
  Search,
  Settings,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Productivity Intelligence — TrackDots",
  description:
    "Daily 0–100 productivity scores, trend direction, team averages, and side-by-side employee comparison — all built on one shared scoring engine.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Productivity Trends
 * layout (period pills, team summary, per-employee trend cards). */
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

const TRENDS_EMPLOYEES = [
  { name: "Piyush Rajput", role: "Software Engineer", days: "21 active days", trend: "→ steady", avg: "98%", best: "100%", rating: "Excellent" },
  { name: "Vivek Bharti", role: "SEO Executive", days: "19 active days", trend: "↓ -2%", avg: "98%", best: "100%", rating: "Excellent" },
  { name: "Sia Chandan", role: "HR Manager", days: "20 active days", trend: "↑ +3%", avg: "94%", best: "99%", rating: "Excellent" },
];

function ratingClasses(rating: string) {
  if (rating === "Excellent") return "bg-green-50 text-green-600";
  if (rating === "Good") return "bg-blue-50 text-blue-600";
  if (rating === "Fair") return "bg-amber-50 text-amber-600";
  return "bg-red-50 text-red-500";
}

function ProductivityHeroCard() {
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
            {/* Heading + range pills */}
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[15px] font-bold text-gray-900">Productivity Trends</div>
                <div className="text-[9px] text-gray-400">Daily productivity scores over the last 30 days</div>
              </div>
              <div className="flex items-center gap-1.5">
                {["14 days", "30 days", "60 days"].map((r) => (
                  <span
                    key={r}
                    className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                      r === "30 days" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Team summary tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">TEAM AVG SCORE</div>
                <div className="mt-1 text-[15px] font-bold text-green-600">95%</div>
                <div className="text-[7.5px] text-gray-400">Excellent</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">TOP PERFORMER</div>
                <div className="mt-1 truncate text-[12px] font-bold text-gray-900">Piyush Rajput</div>
                <div className="text-[7.5px] text-gray-400">98% avg</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">NEEDS ATTENTION</div>
                <div className="mt-1 text-[15px] font-bold text-gray-900">None</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">ACTIVE EMPLOYEES</div>
                <div className="mt-1 text-[15px] font-bold text-gray-900">13</div>
                <div className="text-[7.5px] text-gray-400">of 19 total</div>
              </div>
            </div>

            {/* Employee trend rows */}
            <div className="space-y-2">
              {TRENDS_EMPLOYEES.map((e) => (
                <div key={e.name} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                  <div className="w-[150px] shrink-0">
                    <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                    <div className="text-[8px] text-gray-400">
                      {e.days} · {e.trend}
                    </div>
                  </div>
                  <div className="flex flex-1 gap-4">
                    <div>
                      <div className="text-[13px] font-bold text-gray-900">{e.avg}</div>
                      <div className="text-[7px] text-gray-400">avg</div>
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900">{e.best}</div>
                      <div className="text-[7px] text-gray-400">best</div>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold ${ratingClasses(e.rating)}`}>
                    {e.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ScoreEngineWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Rating Bands</div>
    <div className="space-y-1.5">
      {[
        { r: "Excellent", v: "80–100", c: "text-green-400" },
        { r: "Good", v: "65–79", c: "text-blue-400" },
        { r: "Fair", v: "45–64", c: "text-amber-400" },
        { r: "Low", v: "0–44", c: "text-red-400" },
      ].map((b) => (
        <div key={b.r} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5 text-[10px]">
          <span className="text-white/80">{b.r}</span>
          <span className={`font-bold ${b.c}`}>{b.v}</span>
        </div>
      ))}
    </div>
  </div>
);

const TrendWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Piyush Rajput — Daily Score"
      rows={[
        { label: "Week 1", pct: 96, value: "96%", color: "green" },
        { label: "Week 2", pct: 97, value: "97%", color: "green" },
        { label: "Week 3", pct: 98, value: "98%", color: "green" },
      ]}
    />
  </div>
);

const TeamSummaryWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Team Summary — 30 Days"
      stats={[
        { label: "Team Avg", value: "95%" },
        { label: "Top Score", value: "98%" },
        { label: "Active", value: "13" },
        { label: "Total Team", value: "19" },
      ]}
    />
  </div>
);

const AttentionWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Needs Attention — 30 Days</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Employees in Fair or Low band</span>
      <span className="text-[13px] font-bold text-green-400">None</span>
    </div>
  </div>
);

const CompareWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Compare — Last 7 Days</div>
    <div className="grid grid-cols-2 gap-2">
      {[
        { n: "Piyush Rajput", s: "8h 06m focus" },
        { n: "Vivek Bharti", s: "8h 32m focus" },
      ].map((p) => (
        <div key={p.n} className="rounded-lg bg-white/10 p-2.5 text-center">
          <div className="truncate text-[10px] font-semibold text-white/90">{p.n}</div>
          <div className="text-[9px] text-white/50">{p.s}</div>
        </div>
      ))}
    </div>
  </div>
);

const VISUALS: FeaturePageVisuals = {
  hero: <ProductivityHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "45% 30%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Piyush Rajput</div>
        <div className="mt-2 flex gap-4">
          <div>
            <div className="text-[16px] font-bold text-gray-900">98%</div>
            <div className="text-[8px] text-gray-400">avg</div>
          </div>
          <div>
            <div className="text-[16px] font-bold text-gray-900">100%</div>
            <div className="text-[8px] text-gray-400">best</div>
          </div>
        </div>
        <span className="mt-2 inline-block rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-600">Excellent · → steady</span>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Team Avg — 30 Days</div>
        <div className="mt-1 text-[20px] font-bold text-green-600">95%</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">13 of 19 employees active</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <ScoreEngineWidget key="score-engine" />,
    <TrendWidget key="trend" />,
    <TeamSummaryWidget key="team-summary" />,
    <AttentionWidget key="attention" />,
    <CompareWidget key="compare" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "60% 40%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Powers</div>
        <div className="mt-3 space-y-2">
          {["Time Tracking confidence scores", "Productivity Trends", "Compare Employees"].map((f) => (
            <div key={f} className="rounded-lg bg-gray-50 px-2.5 py-2 text-[10px] font-medium text-gray-700">
              {f}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Engines</div>
        <div className="mt-1 text-[20px] font-bold text-gray-900">1</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Powering every productivity view</div>
      </div>
    </div>
  ),
  dark2: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "50% 50%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Compare — Last 7 Days</div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-gray-50 px-2.5 py-2 text-center ring-1 ring-gray-100">
            <div className="truncate text-[9.5px] font-semibold text-gray-900">Piyush Rajput</div>
            <div className="text-[13px] font-bold text-green-600">98%</div>
            <div className="text-[8px] text-gray-400">8h 06m focus</div>
          </div>
          <div className="rounded-lg bg-gray-50 px-2.5 py-2 text-center ring-1 ring-gray-100">
            <div className="truncate text-[9.5px] font-semibold text-gray-900">Vivek Bharti</div>
            <div className="text-[13px] font-bold text-green-600">98%</div>
            <div className="text-[8px] text-gray-400">8h 32m focus</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <Eye className="h-6 w-6" strokeWidth={1.8} />
        <span className="text-[10px] font-semibold leading-tight">
          Side by Side,
          <br />
          Instantly
        </span>
      </div>
    </div>
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function ProductivityIntelligencePage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
