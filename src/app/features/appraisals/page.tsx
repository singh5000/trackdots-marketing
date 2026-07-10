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
  TrendUp,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Appraisals & Promotions — TrackDots",
  description:
    "Every appraisal, promotion, and salary update tracked in one auditable record — current vs. new salary, effective dates, and a Published/Pending workflow.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Appraisals & Promotions
 * layout (status tabs, appraisal table with salary comparison). */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true },
  { label: "Analytics", icon: BarChart },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings, active: true },
];

const APPRAISAL_ROWS = [
  { name: "Peter Reynolds", date: "19-Jun-2026", effective: "01-Jun-2026", current: "₹3,84,000", next: "₹4,86,000", designation: "Software Engineer", status: "Published" },
  { name: "Daniel Lawson", date: "01-Jun-2026", effective: "01-Apr-2026", current: "₹3,12,000", next: "₹4,08,000", designation: "Software Engineer", status: "Published" },
  { name: "David Cooper", date: "26-May-2026", effective: "01-Mar-2026", current: "₹5,28,000", next: "—", designation: "Software Engineer", status: "Pending" },
  { name: "Adam Mitchell", date: "26-May-2026", effective: "01-Nov-2025", current: "₹9,00,000", next: "—", designation: "Senior Software Engineer", status: "Pending" },
];

function appraisalStatusClasses(status: string) {
  return status === "Published" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600";
}

function AppraisalsHeroCard() {
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
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[15px] font-bold text-gray-900">Appraisals &amp; Promotions</div>
                <div className="text-[9px] text-gray-400">View and manage all appraisals, promotions, and salary updates</div>
              </div>
              <span className="rounded-lg bg-brand-600 px-2.5 py-1.5 text-[9px] font-semibold text-white">+ Add Appraisal</span>
            </div>

            {/* Status tabs */}
            <div className="flex items-center gap-1.5">
              {["All", "Published", "Pending"].map((t) => (
                <span
                  key={t}
                  className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                    t === "All" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Appraisals table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="grid grid-cols-[1.3fr_1fr_1.4fr_0.9fr_1.5fr] gap-2 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>NAME</span>
                <span>EFFECTIVE</span>
                <span>CURRENT → NEW</span>
                <span>STATUS</span>
                <span>DESIGNATION</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {APPRAISAL_ROWS.map((r) => (
                  <div
                    key={r.name}
                    className="grid grid-cols-[1.3fr_1fr_1.4fr_0.9fr_1.5fr] items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-[9.5px]"
                  >
                    <span className="truncate font-semibold text-gray-900">{r.name}</span>
                    <span className="text-gray-500">{r.effective}</span>
                    <span className="truncate text-gray-600">
                      {r.current} <span className="text-gray-300">→</span>{" "}
                      <span className="font-bold text-green-600">{r.next}</span>
                    </span>
                    <span className={`w-fit rounded-full px-2 py-0.5 text-[8.5px] font-bold ${appraisalStatusClasses(r.status)}`}>
                      {r.status}
                    </span>
                    <span className="truncate text-gray-500">{r.designation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SalaryCompareWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Peter Reynolds — Appraisal</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <div className="text-center">
        <div className="text-[9px] text-white/50">Current</div>
        <div className="text-[13px] font-bold text-white/70">₹3,84,000</div>
      </div>
      <span className="text-white/40">→</span>
      <div className="text-center">
        <div className="text-[9px] text-white/50">New</div>
        <div className="text-[13px] font-bold text-green-400">₹4,86,000</div>
      </div>
    </div>
  </div>
);

const DateWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Daniel Lawson — Timeline"
      rows={[
        { label: "Effective", pct: 60, value: "01-Apr-2026", color: "blue" },
        { label: "Recorded", pct: 90, value: "01-Jun-2026", color: "brand" },
      ]}
    />
  </div>
);

const WorkflowWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={2}
      kicker="This Cycle"
      stats={[
        { label: "Published", value: "2" },
        { label: "Pending", value: "8" },
      ]}
    />
  </div>
);

const HistoryWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "Appraisal recorded — 01-Jun-2026", done: true },
        { label: "Prior appraisal retained in history", done: true },
        { label: "Anything ever overwritten", done: false },
      ]}
    />
  </div>
);

const DesignationWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Adam Mitchell — Designation History</div>
    <div className="space-y-1.5">
      {["Software Engineer", "Senior Software Engineer"].map((d, i) => (
        <div key={d} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5 text-[10px]">
          <span className="text-white/80">{d}</span>
          {i === 1 && <span className="font-bold text-green-400">Current</span>}
        </div>
      ))}
    </div>
  </div>
);

const VISUALS: FeaturePageVisuals = {
  hero: <AppraisalsHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "45% 25%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Peter Reynolds</div>
          <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[8px] font-bold text-green-600">Published</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[13px] font-bold text-gray-900">
          <span className="text-gray-400 line-through">₹3,84,000</span>
          <span>→</span>
          <span className="text-green-600">₹4,86,000</span>
        </div>
        <div className="mt-1 text-[9.5px] text-gray-500">Effective 01-Jun-2026</div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">This Cycle</div>
        <div className="mt-1 text-[20px] font-bold text-gray-900">10</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Appraisals recorded, 2 published</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <SalaryCompareWidget key="salary-compare" />,
    <DateWidget key="date" />,
    <WorkflowWidget key="workflow" />,
    <HistoryWidget key="history" />,
    <DesignationWidget key="designation" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 35%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Daniel Lawson</div>
        <div className="mt-2 flex items-center gap-2 text-[13px] font-bold text-gray-900">
          <span className="text-gray-400 line-through">₹3,12,000</span>
          <span>→</span>
          <span className="text-green-600">₹4,08,000</span>
        </div>
        <div className="mt-1 text-[9.5px] text-gray-500">Effective 01-Apr-2026 · Published</div>
      </div>
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <TrendUp className="h-6 w-6" strokeWidth={1.8} />
        <span className="text-[10px] font-semibold leading-tight">
          Feeds
          <br />
          Payroll
        </span>
      </div>
    </div>
  ),
  dark2: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "60% 55%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Access</div>
        <div className="mt-3 space-y-2">
          {[{ r: "HR & Admin", v: "Full Access" }, { r: "Managers", v: "View Only" }].map((a) => (
            <div key={a.r} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[9.5px] font-medium text-gray-600">{a.r}</span>
              <span className="text-[9.5px] font-bold text-brand-600">{a.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Total Records</div>
        <div className="mt-1 text-[20px] font-bold text-gray-900">10</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Appraisals &amp; promotions, all time</div>
      </div>
    </div>
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function AppraisalsPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
