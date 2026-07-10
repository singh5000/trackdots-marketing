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
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Payroll Management — TrackDots",
  description:
    "Attendance-based salary projection with automatic PF and professional-tax deductions, per-employee adjustments, and one-click salary letters and Excel export.",
};

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
  { name: "Alice Dawson", role: "SEO Executive", paid: "19", ded: "−₹200", payable: "₹22,266" },
  { name: "Adam Mitchell", role: "Senior Software Engineer", paid: "19", ded: "−₹2,000", payable: "₹69,397" },
  { name: "Dylan Scott", role: "Senior Software Engineer", paid: "19", ded: "−₹200", payable: "₹63,238" },
  { name: "Anna Shaw", role: "SEO Executive", paid: "19", ded: "−₹200", payable: "₹22,266" },
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
      kicker="Adam Mitchell — Deductions"
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

const VISUALS: FeaturePageVisuals = {
  hero: <PayrollHeroCard />,
  dark1: (
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
  ),
  stickyWidgets: [
    <PaidDaysWidget key="paid-days" />,
    <ProjectionWidget key="projection" />,
    <DeductionsWidget key="deductions" />,
    <AdjustmentWidget key="adjustment" />,
    <ExportWidget key="export" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 35%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Adam Mitchell — July</div>
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
  ),
  dark2: (
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
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function PayrollPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
