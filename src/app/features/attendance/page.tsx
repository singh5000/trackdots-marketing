import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, StatGrid, ChecklistRows } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  Calendar,
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
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Attendance Tracking — TrackDots",
  description:
    "Automatic daily attendance built from real activity data — with manual overrides, sandwich-day handling, and configurable cutoffs.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Attendance grid layout
 * (month selector, legend, condensed week view, P/A/SL/HD/L/LWP roll-up). */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true, active: true },
  { label: "Analytics", icon: BarChart },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings },
];

const ATTENDANCE_DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const ATTENDANCE_ROWS = [
  { name: "Alice Dawson", avg: "8.1h avg", cells: ["8h", "8h", "8h", "8h", "8h", "—", "—"], rollup: [22, 0, 0, 0, 0, 0] },
  { name: "Peter Reynolds", avg: "8.0h avg", cells: ["9h", "9h", "SL", "9h", "8h", "—", "—"], rollup: [21, 0, 1, 0, 0, 0] },
  { name: "Ryan Kennedy", avg: "7.7h avg", cells: ["9h", "8h", "9h", "½", "8h", "—", "—"], rollup: [21, 0, 0, 1, 0, 0] },
  { name: "Victor Bennett", avg: "8.3h avg", cells: ["8h", "8h", "8h", "8h", "8h", "—", "—"], rollup: [22, 0, 0, 0, 0, 0] },
];

function attendanceCellStyle(v: string) {
  if (v === "—") return "bg-gray-50 text-gray-300";
  if (v === "SL" || v === "½") return "bg-amber-50 text-amber-600";
  if (v === "A") return "bg-red-50 text-red-500";
  return "bg-green-50 text-green-600";
}

function AttendanceHeroCard() {
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
            {/* Heading + month selector */}
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[15px] font-bold text-gray-900">Daily Attendance</div>
                <div className="text-[9px] text-gray-400">Calculated automatically from tracked activity.</div>
              </div>
              <span className="flex items-center gap-1 rounded-md bg-gray-50 px-2.5 py-1.5 text-[10px] font-semibold text-gray-600 ring-1 ring-gray-100">
                <Calendar className="h-2.5 w-2.5 text-gray-400" />
                July 2026
                <ChevronDown className="h-2.5 w-2.5 text-gray-400" />
              </span>
            </div>

            {/* Legend — exact terms from the real product */}
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-white p-2.5 text-[8.5px] font-medium text-gray-500 ring-1 ring-gray-100">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm bg-green-400" />
                Full day (6h+)
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm bg-amber-400" />
                Partial (2–6h)
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm bg-red-400" />
                Absent
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm bg-gray-300" />
                Weekend
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm bg-blue-400" />
                LWP
              </span>
            </div>

            {/* Grid */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-wider text-gray-400">
                <span className="w-[130px]">Employee</span>
                <div className="grid flex-1 grid-cols-7 gap-1.5 text-center">
                  {ATTENDANCE_DAYS.map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
                <div className="grid w-[192px] grid-cols-6 gap-1 text-center">
                  {["P", "A", "SL", "HD", "L", "LWP"].map((h) => (
                    <span key={h}>{h}</span>
                  ))}
                </div>
              </div>

              <div className="mt-2 space-y-2">
                {ATTENDANCE_ROWS.map((r) => (
                  <div key={r.name} className="flex items-center gap-2">
                    <div className="w-[130px]">
                      <div className="text-[10px] font-bold text-gray-900">{r.name}</div>
                      <div className="text-[8px] text-gray-400">{r.avg}</div>
                    </div>
                    <div className="grid flex-1 grid-cols-7 gap-1.5">
                      {r.cells.map((c, i) => (
                        <span
                          key={i}
                          className={`rounded py-1.5 text-center text-[8.5px] font-bold ${attendanceCellStyle(c)}`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="grid w-[192px] grid-cols-6 gap-1 text-center text-[9px] font-semibold text-gray-600">
                      {r.rollup.map((n, i) => (
                        <span key={i}>{n}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-2 text-[9px] text-gray-400">
              <span>Hover any cell to see in / out times</span>
              <span className="font-semibold text-brand-600">View Full Month →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Photo + floating cards — same pattern as Time Tracking's CrossPlatformMock,
 * used for the Highlight Panel visual slot. */
function AttendancePolicyMock() {
  const rules = [
    { label: "Attendance Window", value: "7:30 AM" },
    { label: "Half-Day Cutoff", value: "11:00 AM" },
    { label: "Absent Cutoff", value: "2:30 PM" },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[380px] w-full object-cover"
          style={{ objectPosition: "50% 40%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: configured cutoffs ── */}
      <div className="absolute -left-2 top-0 w-[250px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Configured Cutoffs</div>
        <div className="mt-3 space-y-2">
          {rules.map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[10px] font-medium text-gray-500">{r.label}</span>
              <span className="text-[10.5px] font-bold text-gray-900">{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: leave allowance ── */}
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Leave Allowance / Month</div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[9.5px] text-gray-500">Short Leaves</span>
          <span className="text-[13px] font-bold text-gray-900">2</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[9.5px] text-gray-500">Full-Day Leaves</span>
          <span className="text-[13px] font-bold text-gray-900">1</span>
        </div>
      </div>
    </div>
  );
}

/** Photo + floating cards — same pattern as Time Tracking's PrivacyMock,
 * used for the second (reverse) Dark Highlight visual slot. */
function PayrollReadyMock() {
  const stats = [
    { l: "P", v: "22" },
    { l: "A", v: "0" },
    { l: "L", v: "4" },
    { l: "LWP", v: "0" },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[420px] w-full object-cover sm:h-[460px]"
          style={{ objectPosition: "70% 45%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: monthly roll-up ── */}
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">July Roll-Up</div>
        <div className="mt-3 grid grid-cols-4 gap-2 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-[14px] font-bold text-gray-900">{s.v}</div>
              <div className="text-[7.5px] font-semibold uppercase tracking-wide text-gray-400">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-green-50 px-2.5 py-1.5 text-[9.5px] font-semibold text-green-600">
          <CheckCircle className="h-3 w-3" strokeWidth={2} />
          Synced to payroll
        </div>
      </div>

      {/* ── Floating card: export ── */}
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <FileText className="h-3.5 w-3.5" strokeWidth={1.8} />
          Export
        </div>
        <div className="mt-2 text-[13.5px] font-bold text-white">Excel · PDF · CSV</div>
        <div className="mt-2 text-[9px] text-white/40">One click, any date range</div>
      </div>
    </div>
  );
}

const VISUALS: FeaturePageVisuals = {
  hero: <AttendanceHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "60% 30%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">July 2026 — Week 2</div>
        <div className="mt-3 grid grid-cols-5 gap-1">
          {["8h", "8h", "4h", "0h", "8h"].map((v, i) => (
            <div key={i} className={`rounded-md py-2 text-center text-[9px] font-bold ${v === "0h" ? "bg-red-50 text-red-500" : v === "4h" ? "bg-amber-50 text-amber-600" : "bg-green-50 text-green-600"}`}>
              {v}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Overall Rate</div>
        <div className="mt-1 text-[20px] font-bold text-green-600">96%</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">19 of 20 tracked present today</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <StatGrid key="today-attendance" dark cols={4} kicker="Today's Attendance" stats={[{ label: "Full Day", value: "14" }, { label: "Half Day", value: "2" }, { label: "Absent", value: "1", accent: false }, { label: "Leave", value: "2" }]} />,
    <StatGrid key="configured-cutoffs" dark cols={3} kicker="Configured Cutoffs" stats={[{ label: "Window Starts", value: "7:30A" }, { label: "Half-Day", value: "11:00A" }, { label: "Absent", value: "2:30P" }]} />,
    <ChecklistRows key="override-log" dark items={[{ label: "Manual entry logged", done: true }, { label: "Approver recorded", done: true }, { label: "Timestamp recorded", done: true }]} />,
    <BarRows key="sandwich-range" dark kicker="Leave Range — Jul 10-14" rows={[{ label: "Fri 10", pct: 100, value: "Leave", color: "brand" }, { label: "Sat-Sun", pct: 50, value: "Sandwich", color: "amber" }, { label: "Mon 13", pct: 100, value: "Leave", color: "brand" }]} />,
    <StatGrid key="monthly-rollup" dark cols={4} kicker="Monthly Roll-Up" stats={[{ label: "Present", value: "22" }, { label: "Absent", value: "0" }, { label: "Leave", value: "4" }, { label: "LWP", value: "0" }]} />,
  ],
  panel: <AttendancePolicyMock />,
  dark2: <PayrollReadyMock />,
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function AttendancePage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
