import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureGrid from "@/components/features/FeatureGrid";
import FeatureHighlightPanel from "@/components/features/FeatureHighlightPanel";
import FeatureDarkHighlight from "@/components/features/FeatureDarkHighlight";
import FeatureProblemSolution from "@/components/features/FeatureProblemSolution";
import FeatureStickyShowcase, { type StickyCard } from "@/components/features/FeatureStickyShowcase";
import FeatureStatsRow from "@/components/features/FeatureStatsRow";
import FeatureComparison from "@/components/features/FeatureComparison";
import FeatureFAQ from "@/components/features/FeatureFAQ";
import { BarRows, StatGrid, ChecklistRows } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  Calendar,
  CalendarCheck,
  CheckCircle,
  ChevronDown,
  Clock,
  DotsLogo,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Monitor,
  Search,
  Settings,
  ShieldCheck,
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Attendance Tracking — TrackDots",
  description:
    "Automatic daily attendance built from real activity data — with manual overrides, sandwich-day handling, and configurable cutoffs.",
};

const CAPABILITIES = [
  { icon: CalendarCheck, title: "Automatic Daily Grid", desc: "Attendance is derived from real tracked activity — full day, partial, low, or absent, calculated automatically." },
  { icon: Clock, title: "Configurable Cutoffs", desc: "Set your own attendance window, half-day cutoff, and absent cutoff times per organization." },
  { icon: Settings, title: "Manual Overrides", desc: "Managers can manually mark attendance for exceptions, with a full audit trail." },
  { icon: FileText, title: "Sandwich-Day Detection", desc: "Weekends and holidays between leave days are flagged for an explicit include or exclude decision." },
  { icon: TrendUp, title: "P / A / SL / HD / L / LWP Summary", desc: "Every employee row rolls up to present, absent, short-leave, half-day, leave, and LWP totals." },
  { icon: Users, title: "Team-Wide Overview", desc: "See the whole organization's attendance for the month in one scrollable grid." },
];

const PROBLEMS = [
  "Attendance registers that don't match actual work hours",
  "Manual sign-in sheets nobody can audit",
  "No clear rule for half-days, sandwich days, or LWP",
];
const BENEFITS = [
  "Attendance calculated from real tracked activity",
  "Every override logged with who and when",
  "Clear, configurable rules for every edge case",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Manual Registers"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Activity-based attendance calculation", statuses: ["yes", "no", "no"] },
  { capability: "Configurable half-day / absent cutoffs", statuses: ["yes", "partial", "no"] },
  { capability: "Sandwich-day detection", statuses: ["yes", "no", "no"] },
  { capability: "Manual override with audit trail", statuses: ["yes", "partial", "no"] },
  { capability: "P/A/SL/HD/L/LWP roll-up per employee", statuses: ["yes", "no", "no"] },
  { capability: "Direct payroll integration", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "How is daily attendance calculated?", a: "TrackDots derives attendance from real tracked activity against your configured attendance window, half-day cutoff, and absent cutoff times." },
  { q: "Can managers override attendance manually?", a: "Yes. Manual attendance entries are supported for exceptions, and every override is logged for auditing." },
  { q: "What is a \"sandwich day\"?", a: "When a weekend or holiday falls between two leave days, TrackDots flags it as a sandwich day so HR can explicitly decide whether to include or exclude it." },
  { q: "Can I customize the attendance cutoff times?", a: "Yes. Attendance window start, half-day cutoff, and absent cutoff are all configurable per organization." },
  { q: "Does attendance feed into payroll automatically?", a: "Yes. Present, absent, short-leave, half-day, leave, and LWP totals flow directly into the payroll engine." },
  { q: "Can employees see their own attendance record?", a: "Yes, on plans with the employee self-view portal enabled." },
];

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
  { name: "Akansha Dogra", avg: "8.1h avg", cells: ["8h", "8h", "8h", "8h", "8h", "—", "—"], rollup: [22, 0, 0, 0, 0, 0] },
  { name: "Piyush Rajput", avg: "8.0h avg", cells: ["9h", "9h", "SL", "9h", "8h", "—", "—"], rollup: [21, 0, 1, 0, 0, 0] },
  { name: "Rajesh Kumar", avg: "7.7h avg", cells: ["9h", "8h", "9h", "½", "8h", "—", "—"], rollup: [21, 0, 0, 1, 0, 0] },
  { name: "Vivek Bharti", avg: "8.3h avg", cells: ["8h", "8h", "8h", "8h", "8h", "—", "—"], rollup: [22, 0, 0, 0, 0, 0] },
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

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: CalendarCheck,
    title: "Attendance, Calculated Automatically",
    desc: "No sign-in sheets — attendance is derived directly from tracked activity every day.",
    checks: ["Full day / half day / low / absent", "Calculated from real activity", "Updated live through the day"],
    widget: <StatGrid dark cols={4} kicker="Today's Attendance" stats={[{ label: "Full Day", value: "14" }, { label: "Half Day", value: "2" }, { label: "Absent", value: "1", accent: false }, { label: "Leave", value: "2" }]} />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Cutoffs You Control",
    desc: "Attendance window, half-day cutoff, and absent cutoff are all configurable per organization.",
    checks: ["Custom attendance window", "Configurable half-day cutoff", "Configurable absent cutoff"],
    widget: <StatGrid dark cols={3} kicker="Configured Cutoffs" stats={[{ label: "Window Starts", value: "7:30A" }, { label: "Half-Day", value: "11:00A" }, { label: "Absent", value: "2:30P" }]} />,
  },
  {
    tone: "purple",
    icon: Settings,
    title: "Manual Overrides, Fully Logged",
    desc: "Mark attendance manually for exceptions — every change is tied to who made it and when.",
    checks: ["Manager-initiated overrides", "Full audit trail", "Never silently changes history"],
    widget: <ChecklistRows dark items={[{ label: "Manual entry logged", done: true }, { label: "Approver recorded", done: true }, { label: "Timestamp recorded", done: true }]} />,
  },
  {
    tone: "dark",
    icon: FileText,
    title: "Sandwich Days, Handled Fairly",
    desc: "Weekends between two leave days are flagged, not silently included or excluded.",
    checks: ["Auto-flagged for review", "Explicit include/exclude decision", "Never assumed either way"],
    widget: <BarRows dark kicker="Leave Range — Jul 10-14" rows={[{ label: "Fri 10", pct: 100, value: "Leave", color: "brand" }, { label: "Sat-Sun", pct: 50, value: "Sandwich", color: "amber" }, { label: "Mon 13", pct: 100, value: "Leave", color: "brand" }]} />,
  },
  {
    tone: "purple",
    icon: TrendUp,
    title: "One Roll-Up, Every Month",
    desc: "P/A/SL/HD/L/LWP totals per employee, ready for payroll without a spreadsheet.",
    checks: ["Six-way monthly roll-up", "Feeds payroll directly", "Exportable to Excel"],
    widget: <StatGrid dark cols={4} kicker="Monthly Roll-Up" stats={[{ label: "Present", value: "22" }, { label: "Absent", value: "0" }, { label: "Leave", value: "4" }, { label: "LWP", value: "0" }]} />,
  },
];

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

export default function AttendancePage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — ATTENDANCE TRACKING"
        heading="Attendance That Calculates"
        highlight="Itself, Every Day."
        description="Daily attendance built from real tracked activity — with manual overrides, sandwich-day handling, and cutoffs you control."
        visual={<AttendanceHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE ACCURACY GAP"
        heading="Stop Reconciling Sign-In Sheets"
        subheading="Manual attendance registers never match reality. TrackDots removes the gap."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="A Grid That Builds Itself"
        subheading="Automatic, auditable, and fully configurable to your organization's rules."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="MONTHLY GRID"
        blocks={[
          {
            highlighted: true,
            heading: "The Whole Team, One Screen",
            desc: "See every employee's daily status across the month in a single scrollable grid.",
            checklist: ["Full day / half day / low / absent", "Color-coded for a fast scan"],
          },
          {
            heading: "Rolled Up for Payroll",
            desc: "Present, absent, leave, and LWP totals are calculated automatically per employee.",
            checklist: ["P/A/SL/HD/L/LWP columns", "Feeds directly into payroll"],
          },
        ]}
        linkLabel="Explore the Attendance Grid"
        visual={
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
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Attendance"
        desc="From daily calculation to monthly roll-ups — TrackDots keeps attendance accurate and auditable."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Rules That Match Your Policy"
        desc="Short leave, half day, full day — every leave type maps directly into how attendance is calculated."
        checklist={["2 short leaves per month, configurable", "1 full-day leave per month, configurable", "Paid vs. LWP category tracked separately"]}
        linkLabel="See Leave & Attendance Rules"
        visual={<AttendancePolicyMock />}
      />

      <FeatureStatsRow
        stats={[
          { icon: CalendarCheck, value: "Auto", label: "Daily Calculation", desc: "Attendance status is derived from tracked activity, every single day.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: Settings, value: "3", label: "Configurable Cutoffs", desc: "Attendance window, half-day, and absent cutoffs — all yours to set.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: ShieldCheck, value: "100%", label: "Audited Overrides", desc: "Every manual attendance change is logged with who and when.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="PAYROLL-READY"
        blocks={[
          {
            highlighted: true,
            heading: "From Attendance to Payslip",
            desc: "Attendance totals flow directly into the payroll engine — no manual re-entry, ever.",
            checklist: ["Six-way monthly roll-up", "Feeds payroll automatically"],
          },
          {
            heading: "Exportable, Anytime",
            desc: "Download the full attendance grid to Excel for audits, board reports, or compliance.",
            checklist: ["One-click Excel export", "Filter by department or date range"],
          },
        ]}
        linkLabel="See Payroll Integration"
        visual={<PayrollReadyMock />}
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' attendance compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Attendance Tracking, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
