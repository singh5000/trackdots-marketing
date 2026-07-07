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
import { BarRows, ChecklistRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  Calendar,
  CalendarCheck,
  ChevronDown,
  DotsLogo,
  Download,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Monitor,
  Search,
  Settings,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Payroll Management — TrackDots",
  description:
    "Attendance-based salary projection with automatic PF and professional-tax deductions, per-employee adjustments, and one-click salary letters and Excel export.",
};

const CAPABILITIES = [
  { icon: CalendarCheck, title: "Attendance-Linked Payroll", desc: "Paid days are calculated directly from attendance — present, leave, half-day, LWP, and absences all roll up automatically." },
  { icon: BarChart, title: "Automatic Gross & Net Projection", desc: "See projected gross and net payroll for the whole organization before the month even closes." },
  { icon: FileText, title: "PF & Professional Tax Deductions", desc: "Provident Fund and professional tax are calculated and deducted automatically, per employee." },
  { icon: Settings, title: "Manual Adjustments", desc: "Add one-off adjustments per employee without touching the underlying attendance data." },
  { icon: Download, title: "Salary Letters & Excel Export", desc: "Generate salary letters or export the full payroll run to Excel in one click." },
  { icon: Calendar, title: "Month-by-Month Payroll Runs", desc: "Navigate month to month, with a clear In Progress or Finalized status for each run." },
];

const PROBLEMS = [
  "Payroll recalculated by hand from attendance spreadsheets every month",
  "PF and professional tax computed manually, per employee",
  "No single source of truth between attendance and what people are actually paid",
];
const BENEFITS = [
  "Paid days calculated automatically from real attendance",
  "PF and professional tax deducted automatically, every run",
  "Gross and net payroll projected before the month even closes",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Attendance-linked paid-days calculation", statuses: ["yes", "no", "no"] },
  { capability: "Automatic PF & professional tax deduction", statuses: ["yes", "no", "no"] },
  { capability: "Projected gross & net before month close", statuses: ["yes", "no", "no"] },
  { capability: "Per-employee manual adjustments", statuses: ["yes", "partial", "partial"] },
  { capability: "One-click salary letters", statuses: ["yes", "no", "no"] },
  { capability: "One-click Excel export", statuses: ["yes", "partial", "partial"] },
];

const FAQS = [
  { q: "How are paid days calculated?", a: "Directly from attendance — present days, full-day leave, half-days, short leaves, LWP, and absences all roll up into a paid-days total automatically." },
  { q: "Does TrackDots calculate PF and professional tax?", a: "Yes. Both are calculated and deducted automatically per employee as part of every payroll run." },
  { q: "Can I make one-off adjustments to an employee's pay?", a: "Yes. Adjustments can be added per employee without changing their underlying attendance record." },
  { q: "Can I see payroll before the month is finished?", a: "Yes. TrackDots projects gross and net payroll for the current month in progress, updated as attendance comes in." },
  { q: "Can I generate salary letters?", a: "Yes. Salary letters can be generated per employee directly from the payroll run." },
  { q: "Can I export payroll data?", a: "Yes. A full payroll run can be exported to Excel in one click." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Payroll layout
 * (month nav, run summary, attendance-linked payroll table). */
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

const PAYROLL_ROWS = [
  { name: "Akansha Dogra", role: "SEO Executive", paid: "19", ded: "−₹200", payable: "₹22,266" },
  { name: "Ankur Mishra", role: "Senior Software Engineer", paid: "19", ded: "−₹2,000", payable: "₹69,397" },
  { name: "Davinder Singh", role: "Senior Software Engineer", paid: "19", ded: "−₹200", payable: "₹63,238" },
  { name: "Anchal Sahi", role: "SEO Executive", paid: "19", ded: "−₹200", payable: "₹22,266" },
];

function PayrollHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">Payroll</div>
                <div className="text-[9px] text-gray-400">Attendance-based salary projection for July 2026</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-600">⏳ In Progress</span>
                <span className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-[9px] font-semibold text-gray-500 ring-1 ring-gray-100">
                  <Download className="h-2.5 w-2.5 text-gray-400" />
                  Export Excel
                </span>
              </div>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-4 gap-2.5">
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">EMPLOYEES</div>
                <div className="mt-1 text-[15px] font-bold text-gray-900">20</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">WORKING DAYS</div>
                <div className="mt-1 text-[15px] font-bold text-gray-900">23</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">PROJECTED GROSS</div>
                <div className="mt-1 text-[13px] font-bold text-gray-900">₹9,01,262</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">PROJECTED NET</div>
                <div className="mt-1 text-[13px] font-bold text-green-600">₹8,90,263</div>
              </div>
            </div>

            {/* Payroll table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="grid grid-cols-[1.6fr_0.8fr_1fr_1.1fr] gap-2 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>EMPLOYEE</span>
                <span className="text-right">PAID DAYS</span>
                <span className="text-right">DEDUCTIONS</span>
                <span className="text-right">PAYABLE</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {PAYROLL_ROWS.map((r) => (
                  <div
                    key={r.name}
                    className="grid grid-cols-[1.6fr_0.8fr_1fr_1.1fr] items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-[9.5px]"
                  >
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-gray-900">{r.name}</div>
                      <div className="truncate text-[8px] text-gray-400">{r.role}</div>
                    </div>
                    <span className="text-right text-gray-600">{r.paid} / 23d</span>
                    <span className="text-right text-red-500">{r.ded}</span>
                    <span className="text-right font-bold text-gray-900">{r.payable}</span>
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

const PaidDaysWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Attendance → Paid Days</div>
    <div className="grid grid-cols-3 gap-2 text-center">
      {[{ l: "Present", v: "19" }, { l: "Leave", v: "0" }, { l: "LWP", v: "0" }].map((s) => (
        <div key={s.l} className="rounded-lg bg-white/10 px-2.5 py-2.5">
          <div className="text-[15px] font-extrabold text-white">{s.v}</div>
          <div className="text-[7.5px] font-semibold uppercase tracking-wide text-white/50">{s.l}</div>
        </div>
      ))}
    </div>
  </div>
);

const ProjectionWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="July 2026 — Projection"
      rows={[
        { label: "Gross", pct: 100, value: "₹9,01,262", color: "blue" },
        { label: "Deductions", pct: 5, value: "₹10,999", color: "red" },
        { label: "Net", pct: 95, value: "₹8,90,263", color: "green" },
      ]}
    />
  </div>
);

const DeductionsWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Ankur Mishra — Deductions"
      stats={[
        { label: "PF", value: "₹1,800" },
        { label: "Prof. Tax", value: "₹200" },
        { label: "Total", value: "₹2,000" },
      ]}
    />
  </div>
);

const AdjustmentWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "Attendance-based net calculated", done: true },
        { label: "Manual adjustment added", done: true },
        { label: "Attendance record modified", done: false },
      ]}
    />
  </div>
);

const ExportWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Run Actions</div>
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg bg-white/10 px-3 py-2.5 text-center text-[10px] font-semibold text-white/85">🏦 Salary Letter</div>
      <div className="rounded-lg bg-white/10 px-3 py-2.5 text-center text-[10px] font-semibold text-white/85">⬇ Export Excel</div>
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: CalendarCheck,
    title: "Attendance Becomes Payroll",
    desc: "Paid days flow straight from the attendance grid — present, leave, half-day, LWP, and absences all counted automatically.",
    checks: ["No manual attendance re-entry", "Same source data as Attendance Tracking", "Recalculated as the month progresses"],
    widget: <PaidDaysWidget />,
  },
  {
    tone: "dark",
    icon: BarChart,
    title: "Projected Before the Month Closes",
    desc: "Gross and net payroll are projected in real time, even while the month is still in progress.",
    checks: ["Live gross & net projection", "Updated as attendance comes in", "No waiting for month-end"],
    widget: <ProjectionWidget />,
  },
  {
    tone: "purple",
    icon: FileText,
    title: "Statutory Deductions, Automated",
    desc: "PF and professional tax are calculated per employee, every run, without a separate spreadsheet.",
    checks: ["Automatic PF calculation", "Automatic professional tax", "Per-employee breakdown"],
    widget: <DeductionsWidget />,
  },
  {
    tone: "dark",
    icon: Settings,
    title: "Adjustments, Without the Mess",
    desc: "Add a one-off bonus or deduction for an employee without ever touching their attendance history.",
    checks: ["Per-employee manual adjustments", "Underlying attendance stays untouched", "Fully visible in the payroll run"],
    widget: <AdjustmentWidget />,
  },
  {
    tone: "purple",
    icon: Download,
    title: "Done in One Click",
    desc: "Generate a salary letter or export the entire run to Excel — no separate finance tool required.",
    checks: ["One-click salary letters", "One-click Excel export", "Per-employee or full run"],
    widget: <ExportWidget />,
  },
];

export default function PayrollPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — PAYROLL MANAGEMENT"
        heading="Payroll That Calculates"
        highlight="Itself From Attendance."
        description="Attendance-based salary projection with automatic PF and professional-tax deductions, per-employee adjustments, and one-click salary letters and Excel export."
        visual={<PayrollHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE RECONCILIATION GAP"
        heading="Stop Rebuilding Payroll From Scratch Every Month"
        subheading="When attendance and payroll live in different systems, someone has to reconcile them by hand. TrackDots doesn't."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="From Attendance to Payable, Automatically"
        subheading="One source of truth, from the first clock-in to the final payslip."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="PAYROLL RUN"
        blocks={[
          {
            highlighted: true,
            heading: "One Run, Every Employee",
            desc: "Paid days, deductions, and payable amount for the whole organization, calculated in a single monthly run.",
            checklist: ["Whole-organization payroll run", "Paid days from real attendance"],
          },
          {
            heading: "In Progress, Not a Black Box",
            desc: "Every run shows its status clearly, and projections update live as the month's attendance comes in.",
            checklist: ["Clear In Progress / Finalized status", "Live projected gross & net"],
          },
        ]}
        linkLabel="Explore Payroll Management"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "45% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">July 2026 Run</div>
              <div className="mt-2 text-[16px] font-bold text-gray-900">₹8,90,263</div>
              <div className="text-[10px] font-semibold text-green-600">Projected net · 20 employees</div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Status</div>
              <div className="mt-1 text-[15px] font-bold text-amber-600">⏳ In Progress</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">23 working days this month</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Payroll Management"
        desc="From attendance to deductions to export — TrackDots keeps payroll accurate and defensible."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Every Deduction, Fully Itemized"
        desc="PF, professional tax, and LWP deductions are all broken out per employee, never a single opaque number."
        checklist={["PF calculated automatically", "Professional tax calculated automatically", "LWP deduction tied to real attendance"]}
        linkLabel="See Deduction Rules"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 35%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Ankur Mishra — July</div>
              <div className="mt-3 space-y-2">
                {[{ l: "PF", v: "−₹1,800" }, { l: "Professional Tax", v: "−₹200" }].map((d) => (
                  <div key={d.l} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                    <span className="text-[9.5px] font-medium text-gray-500">{d.l}</span>
                    <span className="text-[10px] font-bold text-red-500">{d.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Net Payable</div>
              <div className="mt-1 text-[18px] font-bold text-gray-900">₹69,397</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">After all deductions</div>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: CalendarCheck, value: "Auto", label: "Attendance-Linked", desc: "Paid days calculated directly from real attendance, every run.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: FileText, value: "PF + Tax", label: "Statutory Deductions", desc: "Provident Fund and professional tax calculated automatically per employee.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Download, value: "1-Click", label: "Export & Salary Letters", desc: "Generate salary letters or export the full run to Excel instantly.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="AUDIT-READY"
        blocks={[
          {
            highlighted: true,
            heading: "Every Adjustment, Fully Logged",
            desc: "Manual adjustments never overwrite attendance data — they're layered on top, fully visible in the run.",
            checklist: ["Adjustments never modify attendance", "Fully visible per employee"],
          },
          {
            heading: "Payslips, Ready When You Are",
            desc: "Once a run is finalized, payslips are generated and available to every employee.",
            checklist: ["Payslip generation per run", "Available in the employee self-view portal"],
          },
        ]}
        linkLabel="See Payslips"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "60% 55%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">July 2026 Payslips</div>
              <div className="mt-2 text-[13px] font-bold text-gray-900">20 of 20 generated</div>
              <div className="mt-1 text-[9.5px] text-gray-400">Available in self-view portal</div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <Download className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Export
                <br />
                Ready
              </span>
            </div>
          </div>
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' payroll management compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Payroll Management, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
