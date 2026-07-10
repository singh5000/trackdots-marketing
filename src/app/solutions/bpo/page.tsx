import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureHighlightPanel from "@/components/features/FeatureHighlightPanel";
import FeatureDarkHighlight from "@/components/features/FeatureDarkHighlight";
import FeatureProblemSolution from "@/components/features/FeatureProblemSolution";
import FeatureStickyShowcase, { type StickyCard } from "@/components/features/FeatureStickyShowcase";
import FeatureStatsRow from "@/components/features/FeatureStatsRow";
import FeatureComparison from "@/components/features/FeatureComparison";
import FeatureFAQ from "@/components/features/FeatureFAQ";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import SolutionFeatureLinks from "@/components/solutions/SolutionFeatureLinks";
import SolutionJourney from "@/components/solutions/SolutionJourney";
import { BarRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  Activity,
  Bell,
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
  PieChart,
  Search,
  Settings,
  ShieldCheck,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "TrackDots for BPO & Support Teams",
  description:
    "Shift-based attendance, real-time efficiency, and anomaly detection built to monitor a large, distributed workforce fairly and at scale.",
};

const CAPABILITIES = [
  { icon: CalendarCheck, title: "Shift-Based Attendance Tracking", desc: "Automatic attendance built from real activity, with configurable shift cutoffs.", href: "/features/attendance" },
  { icon: PieChart, title: "Team-Wide Idle & Efficiency", desc: "See active-vs-idle time across the whole floor, updated live.", href: "/features/idle-time" },
  { icon: Activity, title: "Anomaly Detection at Scale", desc: "No-activity streaks and unusual patterns flagged automatically across every agent.", href: "/features/anomaly-detection" },
  { icon: Clock, title: "Automatic Time Tracking", desc: "Every agent's activity tracked automatically — no manual clock-in forms.", href: "/features/time-tracking" },
  { icon: Monitor, title: "App & Tool Usage Reports", desc: "See exactly which tools agents spend their time in, team-wide.", href: "/features/app-usage" },
  { icon: FileText, title: "Payroll, Built From Attendance", desc: "Attendance-based payroll, with PF and professional tax handled automatically.", href: "/features/payroll" },
];

const JOURNEY_STEPS = [
  { time: "9:00 AM", icon: Activity, title: "Shift Start, Clocked In", desc: "Attendance is marked automatically from real activity — no punch card, no manual form." },
  { time: "9:00 AM – 1:00 PM", icon: Clock, title: "Queue Work, Tracked", desc: "Time in support tools and call queues is tracked continuously through the morning shift." },
  { time: "1:00 – 1:30 PM", icon: PieChart, title: "Break, Detected Fairly", desc: "A configured break window is excluded from idle penalties — rest time isn't punished." },
  { time: "1:30 – 6:00 PM", icon: Monitor, title: "Afternoon Shift Continues", desc: "Activity resumes and is tracked the same way through the rest of the shift." },
  { time: "6:00 PM", icon: CheckCircle, title: "Shift Ends, Payroll Updates", desc: "Attendance and hours roll into payroll automatically — no timesheet reconciliation." },
];

const PROBLEMS = [
  "No real-time view of who's actually on the floor and active",
  "Shift adherence tracked manually across hundreds of agents",
  "Idle time silently inflating labor cost reports",
];
const BENEFITS = [
  "Real-time active-vs-idle visibility across the entire floor",
  "Shift-based attendance calculated automatically, at any scale",
  "Idle time detected fairly, never applied retroactively",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Shift-based attendance at scale", statuses: ["yes", "partial", "no"] },
  { capability: "Real-time team-wide efficiency view", statuses: ["yes", "no", "no"] },
  { capability: "Automatic anomaly flagging across the floor", statuses: ["yes", "no", "no"] },
  { capability: "Configurable, forward-only idle rules", statuses: ["yes", "no", "no"] },
  { capability: "Direct payroll integration", statuses: ["yes", "no", "no"] },
  { capability: "Employee self-view for every agent", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "Can this handle hundreds of agents across multiple shifts?", a: "Yes. Attendance windows, half-day, and absent cutoffs are all configurable per organization, and the dashboard scales to any team size." },
  { q: "Does idle time unfairly penalize short breaks?", a: "No. Idle thresholds are fully configurable, and threshold changes only ever apply going forward, never retroactively." },
  { q: "Can we spot agents who've gone quiet across a large floor?", a: "Yes. Anomaly Detection automatically flags no-activity streaks and unusual patterns without anyone needing to watch every dashboard." },
  { q: "Does attendance feed payroll automatically?", a: "Yes. Present, absent, half-day, leave, and LWP totals roll directly into the payroll engine, including PF and professional tax." },
  { q: "Can supervisors see real-time floor status?", a: "Yes. Team-wide active-vs-idle efficiency and attendance are visible live, updated throughout the day." },
  { q: "Can agents see their own attendance and idle data?", a: "Yes, on plans with the employee self-view portal enabled, every agent sees the exact same data a supervisor would." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * solution/feature page — content recombines real Attendance, Idle Time,
 * and Anomaly Detection data already fetched from the live product. */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true, active: true },
  { label: "Analytics", icon: Activity },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings },
];

const FLOOR_STATS = [
  { label: "AGENTS ON SHIFT", value: "19" },
  { label: "TEAM EFFICIENCY", value: "99%", green: true },
  { label: "ATTENDANCE RATE", value: "96%" },
  { label: "FLAGGED TODAY", value: "9", amber: true },
];

const AGENT_ROWS = [
  { name: "Alice Dawson", role: "SEO Executive", active: "8h 11m", idle: "0m", pct: 100 },
  { name: "Sophie Carter", role: "HR Manager", active: "8h 12m", idle: "10m", pct: 98 },
  { name: "Adam Mitchell", role: "Senior Software Engineer", active: "7h 18m", idle: "13m", pct: 97 },
  { name: "Nathan Reed", role: "Software Engineer", active: "7h 14m", idle: "20m", pct: 96 },
];

function FloorHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Floor Overview — Today</div>
              <div className="text-[9px] text-gray-400">Attendance, efficiency, and flags across the whole team</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {FLOOR_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div
                    className={`mt-1 text-[15px] font-bold ${
                      s.green ? "text-green-500" : s.amber ? "text-amber-500" : "text-gray-900"
                    }`}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Agent rows */}
            <div className="space-y-2">
              {AGENT_ROWS.map((e) => (
                <div key={e.name} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                  <div className="w-[150px] shrink-0">
                    <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                    <div className="text-[8px] text-gray-400">{e.role}</div>
                  </div>
                  <div className="flex-1">
                    <div className="h-[6px] w-full overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-green-500" style={{ width: `${e.pct}%` }} />
                    </div>
                    <div className="mt-1 flex justify-between text-[8px] text-gray-400">
                      <span>Active {e.active}</span>
                      <span>Idle {e.idle}</span>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-green-50 px-2 py-1 text-[8.5px] font-bold text-green-600">
                    {e.pct}%
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

const AutoTrackWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Today — Auto-Tracked</div>
    <div className="grid grid-cols-3 gap-2 text-center">
      {[{ l: "Agents", v: "19" }, { l: "Manual Timers", v: "0" }, { l: "Tracked Hrs", v: "101h" }].map((s) => (
        <div key={s.l} className="rounded-lg bg-white/10 px-2.5 py-2.5">
          <div className="text-[15px] font-extrabold text-white">{s.v}</div>
          <div className="text-[7.5px] font-semibold uppercase tracking-wide text-white/50">{s.l}</div>
        </div>
      ))}
    </div>
  </div>
);

const AttendanceWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Today's Attendance"
      stats={[
        { label: "Full Day", value: "17" },
        { label: "Half Day", value: "1" },
        { label: "Absent", value: "0" },
        { label: "Leave", value: "1" },
      ]}
    />
  </div>
);

const IdleWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Active vs. Idle — Today"
      rows={[
        { label: "Active", pct: 99, value: "100h 49m", color: "green" },
        { label: "Idle", pct: 1, value: "44m", color: "gray" },
      ]}
    />
  </div>
);

const AnomalyWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Flags — Last 30 Days"
      stats={[
        { label: "Critical", value: "0" },
        { label: "Warning", value: "7" },
        { label: "Total", value: "9" },
        { label: "Clear", value: "12" },
      ]}
    />
  </div>
);

const PayrollWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">July Payroll — Projected</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Projected net</span>
      <span className="text-[13px] font-bold text-green-400">₹8,90,263</span>
    </div>
    <div className="mt-1.5 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Employees</span>
      <span className="text-[10.5px] font-bold text-white">20</span>
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Activity,
    title: "Tracking That Scales With the Floor",
    desc: "No manual timers or punch cards — every agent's activity is captured automatically, at any headcount.",
    checks: ["Zero-setup, zero manual timers", "Works across every shift", "Runs quietly in the background"],
    widget: <AutoTrackWidget />,
  },
  {
    tone: "dark",
    icon: CalendarCheck,
    title: "Shift Attendance, Automatic",
    desc: "Full day, half day, or absent — calculated from real activity against your configured shift cutoffs.",
    checks: ["Configurable shift cutoffs", "P/A/SL/HD/L/LWP roll-up", "Never a manual sign-in sheet"],
    widget: <AttendanceWidget />,
  },
  {
    tone: "purple",
    icon: PieChart,
    title: "Idle Time, Detected Fairly",
    desc: "Team-wide active-vs-idle time updates live, with thresholds you control and never apply retroactively.",
    checks: ["Live team-wide efficiency", "Configurable idle thresholds", "Forward-only rule changes"],
    widget: <IdleWidget />,
  },
  {
    tone: "dark",
    icon: ShieldCheck,
    title: "Anomalies Flagged at Scale",
    desc: "No-activity streaks and unusual patterns are surfaced automatically, however large the floor gets.",
    checks: ["Automatic anomaly detection", "Severity-ranked flags", "No dashboard-watching required"],
    widget: <AnomalyWidget />,
  },
  {
    tone: "purple",
    icon: FileText,
    title: "Payroll, Built From Attendance",
    desc: "Attendance and hours roll directly into payroll — PF and professional tax calculated automatically.",
    checks: ["Attendance-linked payroll", "Automatic statutory deductions", "No manual re-entry, ever"],
    widget: <PayrollWidget />,
  },
];

export default function BpoSolutionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="SOLUTION — BPO & SUPPORT TEAMS"
        heading="Every Agent, Every Shift,"
        highlight="Fully Accounted For."
        description="Shift-based attendance, real-time efficiency, and anomaly detection built to monitor a large, distributed workforce fairly and at scale."
        visual={<FloorHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE SCALE VISIBILITY GAP"
        heading="Stop Guessing Who's Actually on the Floor"
        subheading="Manual shift logs and spot-checks don't scale past a handful of agents. TrackDots does, automatically."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <SolutionFeatureLinks
        eyebrow="BUILT FROM REAL TRACKDOTS FEATURES"
        heading="Everything Your Floor Needs"
        subheading="Automatic tracking, fair efficiency, and shift-based attendance — explore each capability in depth."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="EFFICIENCY, LIVE"
        blocks={[
          {
            highlighted: true,
            heading: "Active vs. Idle, Updated Live",
            desc: "Team-wide efficiency updates throughout the day, not just in an end-of-shift report.",
            checklist: ["Live team-wide efficiency", "Per-agent active/idle split"],
          },
          {
            heading: "Never Applied Retroactively",
            desc: "Change your idle thresholds any time — history keeps the rules it was originally scored under.",
            checklist: ["Configurable idle thresholds", "Forward-only rule changes"],
          },
        ]}
        linkLabel="See Idle Time Tracking"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "35% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Team Efficiency</div>
              <div className="mt-2 flex h-[10px] w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[99%] bg-green-500" />
              </div>
              <div className="mt-1.5 flex justify-between text-[9px] font-medium text-gray-400">
                <span>Active 100h 49m</span>
                <span>Idle 44m</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Team Efficiency</div>
              <div className="mt-1 text-[20px] font-bold text-green-600">99%</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">Across 19 tracked agents</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Floor Visibility"
        desc="From shift attendance to payroll — TrackDots gives operations leaders a complete, honest picture at any scale."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Fair, Even at Hundreds of Agents"
        desc="Idle and attendance rules apply the same way to every agent, and thresholds are yours to configure — never a one-size-fits-all default."
        checklist={["Same rules for every agent", "Configurable per organization", "Changes apply forward only"]}
        linkLabel="See Anomaly Detection"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "60% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Flags — Last 30 Days</div>
              <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                {[{ l: "Critical", v: "0" }, { l: "Warning", v: "7" }, { l: "Total", v: "9" }, { l: "Clear", v: "12" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-[13px] font-bold text-gray-900">{s.v}</div>
                    <div className="text-[7px] font-semibold uppercase text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Fair at
                <br />
                Any Scale
              </span>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: CalendarCheck, value: "Auto", label: "Shift Attendance", desc: "Attendance status is derived from tracked activity, every shift.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: PieChart, value: "99%", label: "Team Efficiency", desc: "Live active-vs-idle efficiency across the whole floor.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: ShieldCheck, value: "0", label: "Critical Flags", desc: "Anomaly Detection watches every agent, all the time.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <SolutionJourney
        eyebrow="A DAY IN THE LIFE"
        heading="How TrackDots Fits an Agent's Actual Shift"
        subheading="No punch cards, no manual sign-in — just an accurate picture of how the shift really went."
        steps={JOURNEY_STEPS}
      />

      <FeatureComparison
        heading="Get The Right Tool for BPO & Support Teams"
        subheading="See how TrackDots compares to tracking a large floor the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="TrackDots for BPO & Support Teams, Answered" items={FAQS} />

      <SolutionCTA
        heading="See Your Whole Floor, in Real Time"
        description="Shift attendance, live efficiency, and anomaly flags your operations team will actually trust — built to scale past a handful of agents."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "50% 25%" }} loading="lazy" />
            </div>
            <span className="absolute left-[210px] top-[40px] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-bold text-white shadow-lg">
              AD
            </span>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Floor — Today</div>
              <div className="mt-2 space-y-1.5">
                {[
                  { l: "Agents Tracked", v: "19" },
                  { l: "Team Efficiency", v: "99%" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center justify-between text-[9px]">
                    <span className="text-gray-600">{s.l}</span>
                    <span className="font-bold text-gray-900">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 w-[170px] rounded-xl bg-white p-3.5 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-500">Attendance</span>
                <CheckCircle className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[22px] font-bold text-gray-900">96</span>
                <span className="text-[12px] font-bold text-gray-400">%</span>
              </div>
            </div>
          </div>
        }
      />
    </main>
  );
}
