import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, ChecklistRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  CheckCircle,
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
  title: "Leave Management — TrackDots",
  description:
    "Employee self-service leave requests — Short Leave, Half Day, or Full Day, tagged Paid or LWP — approved in one place and synced straight into attendance and payroll.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Leave Management layout
 * (status tabs, type/employee filters, leave request table). */
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

const LEAVE_ROWS = [
  { name: "Rajesh Kumar", type: "Half Day", date: "Jul 8, 2026", cat: "Leave (Paid)", status: "Pending" },
  { name: "Piyush Rajput", type: "Short Leave (2h)", date: "Jul 7, 2026", cat: "Leave (Paid)", status: "Approved" },
  { name: "Kulbir Singh", type: "Full Day", date: "Jul 10, 2026", cat: "LWP (Unpaid)", status: "Approved" },
  { name: "Sia Chandan", type: "Full Day", date: "Jul 12, 2026", cat: "Leave (Paid)", status: "Rejected" },
];

function leaveStatusClasses(status: string) {
  if (status === "Approved") return "bg-green-50 text-green-600";
  if (status === "Rejected") return "bg-red-50 text-red-500";
  return "bg-amber-50 text-amber-600";
}

function LeavesHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Leave Management</div>
              <div className="text-[9px] text-gray-400">Review and approve employee leave requests</div>
            </div>

            {/* Status tabs + type filter */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {["Pending", "Approved", "Rejected", "All"].map((t) => (
                  <span
                    key={t}
                    className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                      t === "Pending" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="rounded-md bg-gray-50 px-2 py-1 text-[9px] font-medium text-gray-500 ring-1 ring-gray-100">All types ▾</span>
            </div>

            {/* Leave requests table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="grid grid-cols-[1.4fr_1.3fr_1fr_1.1fr_0.9fr] gap-2 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>EMPLOYEE</span>
                <span>TYPE</span>
                <span>DATE</span>
                <span>CATEGORY</span>
                <span>STATUS</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {LEAVE_ROWS.map((r) => (
                  <div
                    key={r.name + r.date}
                    className="grid grid-cols-[1.4fr_1.3fr_1fr_1.1fr_0.9fr] items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-[9.5px]"
                  >
                    <span className="truncate font-semibold text-gray-900">{r.name}</span>
                    <span className="text-gray-600">{r.type}</span>
                    <span className="text-gray-500">{r.date}</span>
                    <span className="text-gray-500">{r.cat}</span>
                    <span className={`w-fit rounded-full px-2 py-0.5 text-[8.5px] font-bold ${leaveStatusClasses(r.status)}`}>
                      {r.status}
                    </span>
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

const TypesWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Leave Types</div>
    <div className="grid grid-cols-3 gap-2 text-center">
      {["Short Leave (2h)", "Half Day", "Full Day"].map((t) => (
        <div key={t} className="rounded-lg bg-white/10 px-2 py-2.5 text-[9.5px] font-semibold text-white/85">
          {t}
        </div>
      ))}
    </div>
  </div>
);

const CategoryWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="This Month — By Category"
      rows={[
        { label: "Leave (Paid)", pct: 80, value: "12 requests", color: "green" },
        { label: "LWP (Unpaid)", pct: 20, value: "3 requests", color: "amber" },
      ]}
    />
  </div>
);

const PipelineWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Status Pipeline — This Month"
      stats={[
        { label: "Pending", value: "1" },
        { label: "Approved", value: "12" },
        { label: "Rejected", value: "1" },
        { label: "Cancelled", value: "1" },
      ]}
    />
  </div>
);

const RegenWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "Date range changed — Jul 8 to Jul 10", done: true },
        { label: "Per-day records regenerated", done: true },
        { label: "Prior day decisions kept unreviewed", done: false },
      ]}
    />
  </div>
);

const SyncWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Approved → Synced</div>
    <div className="space-y-1.5">
      {[
        { l: "Attendance grid", v: "Updated" },
        { l: "Payroll run", v: "Updated" },
      ].map((s) => (
        <div key={s.l} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5 text-[10px]">
          <span className="text-white/80">{s.l}</span>
          <span className="font-bold text-green-400">{s.v}</span>
        </div>
      ))}
    </div>
  </div>
);

const VISUALS: FeaturePageVisuals = {
  hero: <LeavesHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "40% 25%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Rajesh Kumar</div>
          <span className="rounded-full bg-amber-50 px-1.5 py-0.5 text-[8px] font-bold text-amber-600">Pending</span>
        </div>
        <div className="mt-2 text-[12px] font-bold text-gray-900">Half Day · Jul 8, 2026</div>
        <div className="text-[9.5px] text-gray-500">Leave (Paid)</div>
        <div className="mt-3 flex gap-2">
          <span className="flex-1 rounded-lg bg-green-600 py-1.5 text-center text-[10px] font-bold text-white">Approve</span>
          <span className="flex-1 rounded-lg bg-gray-100 py-1.5 text-center text-[10px] font-bold text-gray-600">Reject</span>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">This Month</div>
        <div className="mt-1 text-[20px] font-bold text-gray-900">15</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Leave requests processed</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <TypesWidget key="types" />,
    <CategoryWidget key="category" />,
    <PipelineWidget key="pipeline" />,
    <RegenWidget key="regen" />,
    <SyncWidget key="sync" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 40%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Kulbir Singh — Approved</div>
        <div className="mt-2 text-[12px] font-bold text-gray-900">Full Day · Jul 10, 2026</div>
        <div className="text-[9.5px] text-gray-500">LWP (Unpaid)</div>
      </div>
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <TrendUp className="h-6 w-6" strokeWidth={1.8} />
        <span className="text-[10px] font-semibold leading-tight">
          Synced,
          <br />
          Instantly
        </span>
      </div>
    </div>
  ),
  dark2: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "50% 55%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">My Leaves</div>
        <div className="mt-3 space-y-2">
          {[{ l: "Jul 7 · Short Leave", v: "Approved", c: "text-green-600" }, { l: "Jul 12 · Full Day", v: "Rejected", c: "text-red-500" }].map((r) => (
            <div key={r.l} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[9.5px] font-medium text-gray-600">{r.l}</span>
              <span className={`text-[9.5px] font-bold ${r.c}`}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <CheckCircle className="h-3.5 w-3.5" strokeWidth={1.8} />
          Always Visible
        </div>
        <div className="mt-2 text-[13px] font-bold text-white">No status is a secret</div>
        <div className="mt-2 text-[9px] text-white/40">Every employee sees their own history</div>
      </div>
    </div>
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function LeavesPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
