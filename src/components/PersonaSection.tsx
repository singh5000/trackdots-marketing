"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight } from "./icons";
import { pick, type HomepageACF } from "@/lib/homepage";

type Tab = "All" | "Executives" | "Managers" | "Project Managers" | "HR & Finance" | "Employees";

const TABS: Tab[] = ["All", "Executives", "Managers", "Project Managers", "HR & Finance", "Employees"];

type CardData = {
  tag: string;
  title: string;
  bullets: string[];
  visual: ReactNode;
};

/* ── Small realistic dashboard-style widgets — same visual language and
   real numbers as the actual TrackDots product dashboard. ── */

const COLORS: Record<string, string> = {
  brand: "bg-brand-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  amber: "bg-amber-500",
  gray: "bg-gray-300",
};

function Kicker({ children }: { children: ReactNode }) {
  return <div className="mb-1.5 text-[8.5px] font-bold uppercase tracking-wider text-gray-500">{children}</div>;
}

function StatTilesRowMock({ tiles, kicker }: { tiles: { label: string; value: string; delta: string }[]; kicker?: string }) {
  return (
    <div className="w-full">
      {kicker && <Kicker>{kicker}</Kicker>}
      <div className={`grid w-full gap-2 ${tiles.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
        {tiles.map((t) => (
          <div key={t.label} className="rounded-lg bg-white p-2 ring-1 ring-gray-100">
            <div className="truncate text-[7.5px] font-semibold uppercase tracking-wide text-gray-500">{t.label}</div>
            <div className="mt-0.5 text-[14px] font-bold text-gray-900">{t.value}</div>
            <div className="truncate text-[8.5px] font-semibold text-green-500">{t.delta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarRowsMock({ rows, kicker }: { rows: { label: string; pct: number; value: string; color: string }[]; kicker?: string }) {
  return (
    <div className="w-full">
      {kicker && <Kicker>{kicker}</Kicker>}
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-2 text-[10px]">
            <span className="w-16 shrink-0 truncate text-gray-600">{r.label}</span>
            <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-gray-100">
              <div className={`h-full rounded-full ${COLORS[r.color]}`} style={{ width: `${r.pct}%` }} />
            </div>
            <span className="w-12 shrink-0 text-right font-medium text-gray-600">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DotRowsMock({ rows, kicker }: { rows: { label: string; value: string; color: string }[]; kicker?: string }) {
  return (
    <div className="w-full">
      {kicker && <Kicker>{kicker}</Kicker>}
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-2 text-[10.5px]">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${COLORS[r.color]}`} />
            <span className="flex-1 truncate text-gray-600">{r.label}</span>
            <span className="font-semibold text-gray-500">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Real employee-row style: avatar, name, colored role chip, status dot — matches the live Employees list. */
function PersonRowMock({ name, role, roleColor, status }: { name: string; role: string; roleColor: string; status: string }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const roleClasses: Record<string, string> = {
    pink: "bg-pink-50 text-pink-600",
    amber: "bg-amber-50 text-amber-600",
    violet: "bg-violet-50 text-violet-600",
    brand: "bg-brand-50 text-brand-600",
  };
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[9.5px] font-bold text-white">
          {initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[11.5px] font-semibold text-gray-900">{name}</div>
          <span className={`mt-0.5 inline-block rounded px-1.5 py-px text-[8.5px] font-bold ${roleClasses[roleColor]}`}>
            {role}
          </span>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-[9px] font-semibold text-green-500">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          {status}
        </span>
      </div>
    </div>
  );
}

function KanbanColsMock() {
  const cols = [
    { label: "To Do", color: "bg-gray-300", tasks: ["Landing page copy", "Fix login bug"] },
    { label: "In Progress", color: "bg-brand-500", tasks: ["API integration", "Payslip PDF export", "QA pass"] },
    { label: "Done", color: "bg-green-500", tasks: ["Client onboarding"] },
  ];
  return (
    <div className="flex w-full gap-2.5">
      {cols.map((c) => (
        <div key={c.label} className="flex-1 space-y-1.5">
          <div className="flex items-center gap-1 truncate text-[8.5px] font-bold uppercase tracking-wide text-gray-600">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.color}`} />
            {c.label}
          </div>
          {c.tasks.map((t) => (
            <div
              key={t}
              className="truncate rounded-md bg-white px-1.5 py-1 text-[8px] font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
            >
              {t}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function UsageBarMock({ used, total, label, sub }: { used: number; total: number; label: string; sub?: string }) {
  const pct = Math.round((used / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[10.5px]">
        <span className="font-semibold text-gray-600">{label}</span>
        <span className="font-bold text-brand-600">
          {used}
          <span className="font-normal text-gray-500">/{total}</span>
        </span>
      </div>
      <div className="mt-2 h-[8px] w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-400" style={{ width: `${pct}%` }} />
      </div>
      {sub && <div className="mt-1.5 text-[9px] text-gray-500">{sub}</div>}
    </div>
  );
}

function ExportMock({ files, variant = "download", caption }: { files: string[]; variant?: "download" | "upload"; caption?: string }) {
  return (
    <div className="w-full space-y-2">
      {caption && <Kicker>{caption}</Kicker>}
      {files.map((f) => (
        <div key={f} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-gray-100">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-50 text-[8px] font-bold text-brand-600">
            {f.split(".").pop()?.toUpperCase()}
          </span>
          <span className="flex-1 truncate text-[10.5px] font-medium text-gray-600">{f}</span>
          <span className="text-[11px] text-brand-500">{variant === "upload" ? "↑" : "↓"}</span>
        </div>
      ))}
    </div>
  );
}

function LineChartMock({ caption }: { caption?: string }) {
  const pts = [
    [0, 50],
    [25, 40],
    [50, 45],
    [75, 25],
    [100, 30],
    [125, 10],
    [150, 15],
  ];
  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-[10px] text-gray-500">
        <span>{caption ?? "Last 30 days"}</span>
        <span className="font-bold text-green-500">+18%</span>
      </div>
      <svg viewBox="0 0 150 45" className="h-11 w-full">
        <polyline
          points={pts.map((p) => p.join(",")).join(" ")}
          fill="none"
          stroke="#6d5ef4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[pts[0], pts[3], pts[6]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="#5a4bf0" />
        ))}
      </svg>
    </div>
  );
}

function TimelineMock() {
  const segs = [
    { w: 20, c: "bg-green-400" },
    { w: 8, c: "bg-gray-200" },
    { w: 28, c: "bg-green-400" },
    { w: 6, c: "bg-amber-300" },
    { w: 22, c: "bg-brand-400" },
    { w: 16, c: "bg-gray-200" },
  ];
  return (
    <div className="w-full">
      <Kicker>Today&apos;s Day Journey</Kicker>
      <div className="flex h-4 w-full overflow-hidden rounded-md">
        {segs.map((s, i) => (
          <div key={i} className={`h-full ${s.c}`} style={{ width: `${s.w}%` }} />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[8.5px] font-medium text-gray-500">
        <span>9:00 AM</span>
        <span>6:00 PM</span>
      </div>
    </div>
  );
}

function CalendarMiniMock({ highlight, caption }: { highlight: number[]; caption?: string }) {
  const days = Array.from({ length: 7 });
  return (
    <div className="w-full">
      {caption && <Kicker>{caption}</Kicker>}
      <div className="grid grid-cols-7 gap-1">
        {days.map((_, i) => (
          <div
            key={i}
            className={`flex h-6 items-center justify-center rounded-md text-[9px] font-semibold ${
              highlight.includes(i) ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-500"
            }`}
          >
            {i + 4}
          </div>
        ))}
      </div>
      <div className="mt-1.5 text-[9.5px] font-medium text-brand-600">
        {highlight.length} day{highlight.length > 1 ? "s" : ""} marked
      </div>
    </div>
  );
}

function DocIconsMock({ docs }: { docs: string[] }) {
  return (
    <div className="w-full">
      <Kicker>Employee Documents</Kicker>
      <div className="flex w-full items-center justify-center gap-3">
        {docs.map((d) => (
          <div key={d} className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-7 items-center justify-center rounded-md bg-white ring-1 ring-gray-200">
              <span className="h-4 w-4 rounded-full bg-green-100 text-center text-[9px] font-bold leading-4 text-green-600">
                ✓
              </span>
            </div>
            <span className="text-[8.5px] font-medium text-gray-500">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PayslipMock({ amount, label }: { amount: string; label: string }) {
  return (
    <div className="w-full rounded-lg bg-white p-3 ring-1 ring-gray-100">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">{label}</span>
        <span className="rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-600">Paid</span>
      </div>
      <div className="mt-1 text-[18px] font-bold text-gray-900">{amount}</div>
      <div className="mt-2 flex h-[6px] w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-4/5 bg-brand-500" />
      </div>
    </div>
  );
}

function ChatMock({ caption }: { caption?: string }) {
  return (
    <div className="w-full">
      {caption && <Kicker>{caption}</Kicker>}
      <div className="space-y-1.5">
        <div className="w-2/3 rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-1.5 text-[10px] text-gray-600">
          Any update on this?
        </div>
        <div className="ml-auto w-3/5 rounded-2xl rounded-br-sm bg-brand-500 px-3 py-1.5 text-[10px] text-white">
          Resolved — thank you!
        </div>
      </div>
    </div>
  );
}

const HEATMAP_PATTERN = [
  1, 2, 0, 3, 1, 4, 2, 0, 1, 3, 2, 4, 1, 0, 2, 3, 1, 0, 4, 2, 1, 3, 0, 2, 4, 1, 3, 2,
];

function HeatmapMiniMock() {
  const shades = ["bg-gray-100", "bg-brand-200", "bg-brand-400", "bg-brand-600", "bg-violet-700"];
  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-center justify-between text-[9.5px]">
        <span className="font-semibold text-gray-600">Team avg score</span>
        <span className="font-bold text-green-500">96%</span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {HEATMAP_PATTERN.map((v, i) => (
          <span key={i} className={`h-3 w-3 rounded-sm ${shades[v]}`} />
        ))}
      </div>
      <div className="mt-1.5 text-[9px] font-medium text-gray-500">90-day activity · best streak 13 days</div>
    </div>
  );
}

/* Enriched profile card — avatar, name, role chip, status pill, streak line (5 elements). */
function ProfileCardMock({ name, role, streak }: { name: string; role: string; streak: string }) {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[12.5px] font-bold text-gray-900">{name}</div>
          <div className="truncate text-[9.5px] text-gray-500">{role}</div>
        </div>
        <span className="shrink-0 rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-600 ring-1 ring-green-100">
          Active
        </span>
      </div>
      <div className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5 ring-1 ring-gray-100">
        <span className="text-[9px] font-semibold text-gray-500">Streak</span>
        <span className="text-[9.5px] font-bold text-brand-600">{streak}</span>
      </div>
    </div>
  );
}

/* Burnout-style signal tags — risk badge + wrapped pills, matches the real "SIGNALS" row. */
function SignalTagsMock({ risk, riskColor, signals }: { risk: string; riskColor: string; signals: string[] }) {
  const riskClasses: Record<string, string> = {
    red: "bg-red-50 text-red-600 ring-red-100",
    amber: "bg-amber-50 text-amber-600 ring-amber-100",
  };
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <Kicker>14-Day Signals</Kicker>
        <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ring-1 ${riskClasses[riskColor]}`}>{risk}</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {signals.map((s) => (
          <span key={s} className="rounded-md bg-white px-1.5 py-1 text-[8.5px] font-medium text-gray-600 ring-1 ring-gray-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Meeting-approval row — name, time range, duration, Approve/Reject pills (matches real Meeting Approvals table). */
function MeetingApprovalMock() {
  const rows = [
    { name: "Akansha Dogra", time: "12:44 – 12:51", dur: "7m" },
    { name: "Satyajit Singh", time: "12:42 – 12:52", dur: "9m" },
  ];
  return (
    <div className="w-full">
      <Kicker>Meeting Approvals · Pending (2)</Kicker>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-2 rounded-md bg-white px-2 py-1.5 ring-1 ring-gray-100 text-[9px]">
            <span className="flex-1 truncate font-semibold text-gray-700">{r.name}</span>
            <span className="shrink-0 text-gray-500">{r.time}</span>
            <span className="shrink-0 rounded bg-green-50 px-1.5 py-0.5 font-bold text-green-600">✓</span>
            <span className="shrink-0 rounded bg-red-50 px-1.5 py-0.5 font-bold text-red-500">✕</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Active-vs-idle split bar — matches the real Idle Time Breakdown card. */
function IdleSplitMock() {
  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-center justify-between text-[10px]">
        <span className="font-semibold text-gray-600">Team efficiency</span>
        <span className="font-bold text-green-500">100% efficient</span>
      </div>
      <div className="flex h-[10px] w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-[99%] bg-green-500" />
      </div>
      <div className="mt-1.5 flex justify-between text-[9px] font-medium text-gray-500">
        <span>Active 51h 50m</span>
        <span>Idle 11m</span>
      </div>
    </div>
  );
}

/* ── Card sets — 6 per tab, grounded in the real TrackDots product screenshots ── */

const TAB_CARDS: Record<Tab, CardData[]> = {
  All: [
    {
      tag: "FOR EXECUTIVES",
      title: "Executive Analytics",
      bullets: ["Org-wide productivity score", "Burnout & anomaly risk flags", "Cross-team performance trends"],
      visual: (
        <StatTilesRowMock
          kicker="This Week"
          tiles={[
            { label: "Team Score", value: "96%", delta: "↑ 2%" },
            { label: "Billed Hrs", value: "51.7h", delta: "19 staff" },
            { label: "Active Now", value: "13", delta: "● Live" },
          ]}
        />
      ),
    },
    {
      tag: "FOR MANAGERS",
      title: "Real-Time Monitoring",
      bullets: ["Live app & activity tracking", "Idle & focus-time detection", "Screenshot capture on demand"],
      visual: (
        <BarRowsMock
          kicker="Top Apps — Today"
          rows={[
            { label: "Chrome", pct: 85, value: "19h 54m", color: "green" },
            { label: "Code", pct: 25, value: "5h 15m", color: "brand" },
          ]}
        />
      ),
    },
    {
      tag: "FOR HR & FINANCE",
      title: "HR & Payroll Suite",
      bullets: ["Documents, bank & salary records", "Auto-generated payslips", "Appraisals & compliance history"],
      visual: <PersonRowMock name="Akansha Dogra" role="SEO Executive" roleColor="pink" status="Active" />,
    },
    {
      tag: "FOR PROJECT MANAGERS",
      title: "Project & Task Management",
      bullets: ["Kanban boards per project", "Task sessions tied to real time", "Client & milestone tracking"],
      visual: <KanbanColsMock />,
    },
    {
      tag: "FOR TEAM LEADS",
      title: "Attendance & Meetings",
      bullets: ["Daily attendance at a glance", "Meeting-aware idle exclusion", "Leave & holiday calendars"],
      visual: (
        <BarRowsMock
          kicker="Attendance — This Week"
          rows={[
            { label: "Mon 06", pct: 68, value: "13/19", color: "blue" },
            { label: "Tue 07", pct: 0, value: "0/19", color: "blue" },
          ]}
        />
      ),
    },
    {
      tag: "FOR EMPLOYEES",
      title: "Employee Self-Service",
      bullets: ["My profile, leaves & payslips", "Daily reports & my tasks", "Raise a suggestion or complaint"],
      visual: <UsageBarMock used={12} total={20} label="Leave balance" sub="6 short leave · 1 full day used" />,
    },
  ],

  Executives: [
    {
      tag: "COMPANY OVERVIEW",
      title: "Executive Dashboard",
      bullets: ["Org-wide KPIs: hours, productivity, alerts", "Week, month or today period toggle", "Live active-now headcount"],
      visual: (
        <StatTilesRowMock
          kicker="Monday, Jul 6"
          tiles={[
            { label: "Employees", value: "19", delta: "13 active" },
            { label: "Active Now", value: "13", delta: "● Live" },
            { label: "Alerts Today", value: "6", delta: "Needs attention" },
          ]}
        />
      ),
    },
    {
      tag: "RISK & WELLBEING",
      title: "Burnout Detection",
      bullets: ["14-day rolling burnout risk score", "Flags long hours, no breaks & late nights", "Thresholds configurable per organization"],
      visual: <SignalTagsMock risk="High" riskColor="red" signals={["Long hours 5d", "No breaks", "Late nights", "Weekly hrs over limit"]} />,
    },
    {
      tag: "FRAUD & ANOMALIES",
      title: "Anomaly Detection",
      bullets: ["7 anomaly types, incl. sudden hour drops", "Flags erratic schedules & app-usage spikes", "Even catches mouse-jiggler-style gaming"],
      visual: (
        <StatTilesRowMock
          kicker="Last 30 Days"
          tiles={[
            { label: "Critical", value: "0", delta: "clear" },
            { label: "Warning", value: "11", delta: "review" },
            { label: "All Clear", value: "8", delta: "safe" },
          ]}
        />
      ),
    },
    {
      tag: "BENCHMARKING",
      title: "Compare & Productivity Heatmap",
      bullets: ["Side-by-side 2-employee comparison", "GitHub-style 90-day activity heatmap", "Spot patterns across the whole team"],
      visual: <HeatmapMiniMock />,
    },
    {
      tag: "BILLING",
      title: "Plans, Seats & Subscription",
      bullets: ["Free, Pro & Business feature tiers", "Stripe-powered billing & seat limits", "Upgrade or downgrade anytime"],
      visual: <UsageBarMock used={18} total={25} label="Seats used" sub="Business plan · 90-day data retention" />,
    },
    {
      tag: "REPORTING",
      title: "Automated Report Schedules",
      bullets: ["Weekly, biweekly or monthly delivery", "Org Weekly Pulse & burnout-alert emails", "Sent straight to stakeholder inboxes"],
      visual: <ExportMock caption="Reports — Jul 6-12" files={["Weekly-Report.csv", "Weekly-Report.xlsx"]} />,
    },
  ],

  Managers: [
    {
      tag: "LIVE TRACKING",
      title: "Real-Time Activity Feed",
      bullets: ["Live app & window-level tracking", "Confidence-scored activity blocks", "Instant visibility, zero delay"],
      visual: (
        <BarRowsMock
          kicker="Today's Tracked Hours"
          rows={[
            { label: "Vivek Bharti", pct: 90, value: "4.4h", color: "blue" },
            { label: "Mohsin Khan", pct: 75, value: "3.2h", color: "blue" },
          ]}
        />
      ),
    },
    {
      tag: "MEETINGS",
      title: "Meeting Mode",
      bullets: ["Employees declare their meeting sessions", "Approved meetings count as 100% productive", "One-tap staff approval queue"],
      visual: <MeetingApprovalMock />,
    },
    {
      tag: "ANTI-GAMING",
      title: "Idle & Integrity Detection",
      bullets: ["Detects burst-then-idle gaming attempts", "Flags clock-tampering as suspicious", "Manual approve or revoke on any block"],
      visual: <IdleSplitMock />,
    },
    {
      tag: "DAY VIEW",
      title: "Day Journey Timeline",
      bullets: ["Chronological view of work, idle & pauses", "Auto-merges sessions across small gaps", "Per-app time breakdown for the day"],
      visual: <TimelineMock />,
    },
    {
      tag: "TEAM HEALTH",
      title: "Daily Attendance Overview",
      bullets: ["Attendance grid with manual overrides", "Half-day & short-leave cutoff windows", "Weekly attendance rate at a glance"],
      visual: (
        <BarRowsMock
          kicker="Attendance — This Week"
          rows={[
            { label: "Mon 06", pct: 68, value: "13/19", color: "blue" },
            { label: "Tue 07", pct: 42, value: "8/19", color: "blue" },
          ]}
        />
      ),
    },
    {
      tag: "ALERTS",
      title: "Smart Employee Alerts",
      bullets: ["Custom thresholds: late start, low hours", "Email + in-app notifications", "CC alerts to any stakeholder"],
      visual: (
        <StatTilesRowMock
          kicker="Monday, Jul 6"
          tiles={[
            { label: "Late Starts", value: "0", delta: "clear" },
            { label: "Early Stops", value: "0", delta: "clear" },
            { label: "No Activity", value: "6", delta: "review" },
          ]}
        />
      ),
    },
  ],

  "Project Managers": [
    {
      tag: "PLANNING",
      title: "Kanban Project Boards",
      bullets: ["Drag-and-drop task boards", "Priority, deadline & status tracking", "Budget hours & phase visibility"],
      visual: <KanbanColsMock />,
    },
    {
      tag: "TIME ROLL-UP",
      title: "Task-Linked Time Sessions",
      bullets: ["Tracked activity rolls up into task hours", "Automatic overdue-task detection", "Accurate project time reporting"],
      visual: (
        <BarRowsMock
          kicker="This Week"
          rows={[
            { label: "Design Review", pct: 70, value: "1.4h", color: "brand" },
            { label: "API Integration", pct: 45, value: "0.9h", color: "brand" },
          ]}
        />
      ),
    },
    {
      tag: "CLIENTS",
      title: "Client & Project Management",
      bullets: ["Organize every project by client", "Status from planning to completed", "Centralized project notes"],
      visual: <PersonRowMock name="Acme Corp" role="Website Revamp" roleColor="violet" status="On Track" />,
    },
    {
      tag: "COLLABORATION",
      title: "Task Comments & Notes",
      bullets: ["Threaded comments on any task", "Project-level notes for context", "Full task activity history"],
      visual: <ChatMock caption="Task #128 · Homepage redesign" />,
    },
    {
      tag: "BULK TOOLS",
      title: "Bulk Task Import & Export",
      bullets: ["Import tasks straight from spreadsheets", "Export any project's task list", "Save hours on manual setup"],
      visual: <ExportMock caption="Projects → Website Revamp" files={["tasks.csv"]} variant="upload" />,
    },
    {
      tag: "WORKLOAD",
      title: "PM Dashboard & Workload View",
      bullets: ["Per-project dashboard at a glance", "Team workload distribution", "A dedicated \"My Tasks\" view"],
      visual: (
        <StatTilesRowMock
          kicker="Active Projects"
          tiles={[
            { label: "In Progress", value: "4", delta: "on track" },
            { label: "Overdue", value: "2", delta: "review" },
            { label: "Team Load", value: "78%", delta: "balanced" },
          ]}
        />
      ),
    },
  ],

  "HR & Finance": [
    {
      tag: "RECORDS",
      title: "Employee Documents & HR Profile",
      bullets: ["Aadhaar, PAN, passport & bank details", "Multiple reporting managers supported", "Department & designation management"],
      visual: <DocIconsMock docs={["ID", "PAN", "Photo"]} />,
    },
    {
      tag: "PAYROLL",
      title: "Full Indian Payroll Engine",
      bullets: ["Attendance-prorated gross, PF & gratuity", "One-click payslips, PDF & Excel export", "Auto-generated bank salary letters"],
      visual: <PayslipMock amount="₹42,500" label="Net Pay — June" />,
    },
    {
      tag: "LEAVE",
      title: "Leave & Holiday Management",
      bullets: ["Short leave, half-day & full-day types", "Automatic sandwich-day detection", "Company holiday calendar built in"],
      visual: <CalendarMiniMock caption="Leave Management" highlight={[2, 3]} />,
    },
    {
      tag: "PERFORMANCE",
      title: "Appraisals & Promotions",
      bullets: ["Structured appraisal & promotion cycles", "Automatic salary & designation updates", "Arrears settlement tracked to closure"],
      visual: <LineChartMock caption="Salary growth — 12 months" />,
    },
    {
      tag: "EMPLOYEE RELATIONS",
      title: "Suggestions & Complaints",
      bullets: ["SLA-backed acknowledgement & resolution", "4-level escalation when overdue", "Post-resolution feedback rating"],
      visual: <ChatMock caption="Ticket #482 · Pending" />,
    },
    {
      tag: "FINANCE",
      title: "Passbook",
      bullets: ["Track expenses & deposits by category", "Attach receipts to every transaction", "Full organization-wide ledger history"],
      visual: (
        <BarRowsMock
          kicker="This Month"
          rows={[
            { label: "Travel", pct: 60, value: "₹4,200", color: "brand" },
            { label: "Meals", pct: 30, value: "₹1,050", color: "green" },
          ]}
        />
      ),
    },
  ],

  Employees: [
    {
      tag: "MY PROFILE",
      title: "My Profile & Edit Requests",
      bullets: ["View your full HR profile anytime", "Two-step, HR-approved edit workflow", "Upload documents securely"],
      visual: <ProfileCardMock name="Mohsin Khan" role="Head of Technology" streak="21 active days" />,
    },
    {
      tag: "TIME OFF",
      title: "Leave Requests & Balance",
      bullets: ["Apply for short, half or full-day leave", "Real-time balance tracking", "Instant manager approval status"],
      visual: <UsageBarMock used={12} total={20} label="Leave balance" sub="No leave requests pending" />,
    },
    {
      tag: "DAILY REPORTING",
      title: "Daily Reports",
      bullets: ["Log your daily plan and EOD summary", "Track mood alongside daily output", "Share progress with your manager"],
      visual: (
        <DotRowsMock
          kicker="This Week"
          rows={[
            { label: "Monday report", value: "Submitted", color: "green" },
            { label: "Tuesday report", value: "Submitted", color: "green" },
            { label: "Wednesday report", value: "Pending", color: "amber" },
          ]}
        />
      ),
    },
    {
      tag: "TASKS",
      title: "My Tasks",
      bullets: ["See everything assigned to you", "Track task status in real time", "Comment directly on any task"],
      visual: <KanbanColsMock />,
    },
    {
      tag: "EARNINGS",
      title: "Payslips & Salary History",
      bullets: ["Download every past payslip", "Full salary revision history", "Transparent monthly breakdown"],
      visual: <PayslipMock amount="₹42,500" label="Net Pay — June" />,
    },
    {
      tag: "SUPPORT",
      title: "Suggestions & Complaints",
      bullets: ["Submit concerns confidentially", "Track your ticket status live", "Rate the resolution when closed"],
      visual: <ChatMock caption="Ticket #482 · Pending" />,
    },
  ],
};

export default function PersonaSection({ content }: { content?: HomepageACF["persona"] }) {
  const [active, setActive] = useState<Tab>("All");

  const badge = pick(content?.persona_badge, "FIND YOUR FIT");
  const heading = pick(content?.persona_heading, "Built for every role on your team.");
  const paragraph = pick(
    content?.persona_paragraph,
    "One platform, purpose-built dashboards — whoever you are, TrackDots has the tools you came here for."
  );

  const tabLabels = TABS.map((t, i) => pick(content?.[`persona_tab_${i + 1}_label`], t));

  const activeIndex = TABS.indexOf(active);
  const cards = TAB_CARDS[active].map((card, ci) => {
    const p = `persona_tab_${activeIndex + 1}_card_${ci + 1}`;
    return {
      ...card,
      tag: pick(content?.[p]?.[`${p}_tag`], card.tag),
      title: pick(content?.[p]?.[`${p}_title`], card.title),
      bullets: [1, 2, 3].map((b) => pick(content?.[p]?.[`${p}_bullet_${b}`], card.bullets[b - 1] ?? "")),
    };
  });

  return (
    <section className="relative w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {badge}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{paragraph}</p>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-gray-100/70 p-1.5 sm:mx-auto sm:w-fit sm:rounded-full">
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-[14px] font-semibold transition-colors ${
              active === t
                ? "bg-white text-brand-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tabLabels[i]}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, ci) => (
          <div
            key={ci}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10"
          >
            <div className="flex min-h-[128px] w-full items-center border-b border-gray-100 bg-[#f9fafc] px-5 py-4">
              {card.visual}
            </div>

            <div className="flex flex-1 flex-col p-7">
              <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-600 ring-1 ring-brand-100">
                {card.tag}
              </span>

              <h3 className="mt-4 border-b border-gray-100 pb-4 text-[17px] font-bold text-gray-900">
                {card.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {card.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-[14px] text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-brand-600 transition-all hover:gap-2.5"
              >
                Explore More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
