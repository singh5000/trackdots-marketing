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
  Activity,
  BarChart,
  Bell,
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
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Idle Time Tracking — TrackDots",
  description:
    "Automatic idle-time detection with configurable thresholds that never apply retroactively — so tracked hours always reflect real work.",
};

const CAPABILITIES = [
  { icon: PieChart, title: "Active vs. Idle Split", desc: "Every employee's tracked time is split cleanly into active and idle, updated live." },
  { icon: Settings, title: "Configurable Thresholds", desc: "Set your own idle score and confidence thresholds — either can be disabled entirely." },
  { icon: Clock, title: "Forward-Only Changes", desc: "Threshold changes only apply going forward — old data keeps the rules it was scored under." },
  { icon: ShieldCheck, title: "Meeting-Aware Exemption", desc: "Idle time inside an approved meeting session is never counted against the employee." },
  { icon: Activity, title: "Anti-Gaming Signals", desc: "Burst-then-idle patterns and long idle gaps inside blocks are flagged automatically." },
  { icon: TrendUp, title: "Team Efficiency Score", desc: "See the whole team's active-vs-idle efficiency at a glance, updated in real time." },
];

const PROBLEMS = [
  "Idle time silently counted as productive hours",
  "No visibility into who's actually active right now",
  "Threshold changes that retroactively rewrite history",
];
const BENEFITS = [
  "Active vs. idle split calculated automatically",
  "Real-time visibility into who's active right now",
  "Threshold changes only ever apply going forward",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Automatic idle detection", statuses: ["yes", "yes", "no"] },
  { capability: "Configurable idle thresholds", statuses: ["yes", "no", "no"] },
  { capability: "Forward-only threshold changes", statuses: ["yes", "no", "no"] },
  { capability: "Meeting-aware idle exemption", statuses: ["yes", "no", "no"] },
  { capability: "Anti-gaming burst detection", statuses: ["yes", "no", "no"] },
  { capability: "Team-wide efficiency score", statuses: ["yes", "partial", "no"] },
];

const FAQS = [
  { q: "How does TrackDots detect idle time?", a: "Idle time is detected from real keystroke, mouse, and click signals against your organization's configured idle and confidence thresholds." },
  { q: "Can I change the idle threshold?", a: "Yes. Both the idle score threshold and confidence threshold are configurable, and either can be disabled entirely." },
  { q: "Does changing the threshold rewrite past data?", a: "No. Threshold changes only apply going forward — historical data keeps the rules it was originally scored under." },
  { q: "What happens to idle time during a meeting?", a: "Idle time inside an approved Meeting Mode session is automatically exempted and never counted against the employee." },
  { q: "Can employees game the idle detection?", a: "TrackDots flags burst-then-idle patterns and unusually long idle gaps inside otherwise-active blocks to catch gaming attempts." },
  { q: "Can I see team-wide idle efficiency?", a: "Yes. A team efficiency score shows active-vs-idle time across the whole organization in real time." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Idle Breakdown layout
 * (date-range pills, 4 team stat tiles, per-employee active/idle bars). */
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

const IDLE_STATS = [
  { label: "TEAM TOTAL TRACKED", value: "101h 33m" },
  { label: "ACTIVE TIME", value: "100h 49m", sub: "99%" },
  { label: "IDLE TIME", value: "44m", sub: "1%" },
  { label: "TEAM EFFICIENCY", value: "99%", green: true },
];

const IDLE_EMPLOYEES = [
  { name: "Nihar Ranjan Mohanta", role: "Software Engineer", pct: 96, active: "7h 14m", idle: "20m" },
  { name: "Ankur Mishra", role: "Senior Software Engineer", pct: 97, active: "7h 18m", idle: "13m" },
  { name: "Sia Chandan", role: "HR Manager", pct: 98, active: "8h 12m", idle: "10m" },
  { name: "Akansha Dogra", role: "SEO Executive", pct: 100, active: "8h 11m", idle: "0m" },
];

function IdleHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">Idle Time Breakdown</div>
                <div className="text-[9px] text-gray-400">Active vs idle time per employee — Monday, July 06</div>
              </div>
              <div className="flex items-center gap-1.5">
                {["Today", "This week", "Last 7 days"].map((r) => (
                  <span
                    key={r}
                    className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                      r === "Today" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Team stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {IDLE_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className={`text-[15px] font-bold ${s.green ? "text-green-500" : "text-gray-900"}`}>
                      {s.value}
                    </span>
                    {s.sub && <span className="text-[8.5px] font-semibold text-gray-400">{s.sub}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Per-employee active/idle bars */}
            <div className="space-y-2">
              {IDLE_EMPLOYEES.map((e) => (
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
                    Efficient — {e.pct}%
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

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: PieChart,
    title: "Active vs. Idle, Split Cleanly",
    desc: "Every tracked hour is classified as active or idle, updated as it happens.",
    checks: ["Live active/idle split", "Per-employee and team-wide", "No manual classification needed"],
    widget: <StatGrid dark cols={4} kicker="Today's Split" stats={[{ label: "Tracked", value: "101h 33m" }, { label: "Active", value: "100h 49m" }, { label: "Idle", value: "44m" }, { label: "Efficiency", value: "99%" }]} />,
  },
  {
    tone: "dark",
    icon: Settings,
    title: "Thresholds, Your Way",
    desc: "Idle score and confidence thresholds are fully configurable — or can be turned off.",
    checks: ["Configurable idle score threshold", "Configurable confidence threshold", "Either can be disabled"],
    widget: <BarRows dark kicker="Configured Thresholds" rows={[{ label: "Idle Score", pct: 15, value: "15", color: "brand" }, { label: "Confidence", pct: 20, value: "20", color: "blue" }]} />,
  },
  {
    tone: "purple",
    icon: Clock,
    title: "History Never Rewritten",
    desc: "Threshold changes apply from the date they're made — never retroactively.",
    checks: ["Forward-only application", "Old data keeps old rules", "Fully auditable"],
    widget: <ChecklistRows dark items={[{ label: "Jun 1 – Jun 30: old threshold", done: true }, { label: "Jul 1 onward: new threshold", done: true }, { label: "History rewritten", done: false }]} />,
  },
  {
    tone: "dark",
    icon: ShieldCheck,
    title: "Meetings Never Penalized",
    desc: "Idle time during an approved meeting session is automatically exempted.",
    checks: ["Meeting Mode exemption", "No unfair idle penalties", "Approved by a manager first"],
    widget: <BarRows dark kicker="Today's Meetings" rows={[{ label: "Standup", pct: 100, value: "Exempt", color: "green" }, { label: "Client Call", pct: 100, value: "Exempt", color: "green" }]} />,
  },
  {
    tone: "purple",
    icon: Activity,
    title: "Built to Catch Gaming",
    desc: "Burst-then-idle patterns and long idle gaps inside blocks are flagged automatically.",
    checks: ["Sub-window burst detection", "Long idle-gap flagging", "Staff can review any flagged block"],
    widget: <StatGrid dark cols={3} kicker="Integrity Signals" stats={[{ label: "Flagged", value: "0" }, { label: "Reviewed", value: "0" }, { label: "Confirmed", value: "0" }]} />,
  },
];

/** Photo + floating cards — same pattern as Time Tracking's CrossPlatformMock,
 * used for the Highlight Panel visual slot. */
function IdleThresholdsMock() {
  const rules = [
    { label: "Idle Score Threshold", value: "15" },
    { label: "Confidence Threshold", value: "20" },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[380px] w-full object-cover"
          style={{ objectPosition: "35% 45%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: configured thresholds ── */}
      <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Configured Thresholds</div>
        <div className="mt-3 space-y-2">
          {rules.map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[10px] font-medium text-gray-500">{r.label}</span>
              <span className="text-[10.5px] font-bold text-gray-900">{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: forward-only badge ── */}
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Changes Apply</div>
        <div className="mt-1 text-[15px] font-bold text-gray-900">Forward Only</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">History keeps its original rules</div>
      </div>
    </div>
  );
}

/** Photo + floating cards — same pattern as Time Tracking's PrivacyMock,
 * used for the second (reverse) Dark Highlight visual slot. */
function IntegrityMock() {
  const signals = [
    { label: "Burst-then-idle pattern", flagged: false },
    { label: "Long idle gap in block", flagged: false },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[420px] w-full object-cover sm:h-[460px]"
          style={{ objectPosition: "60% 55%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: integrity signals ── */}
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Integrity Signals — Today</div>
        <div className="mt-3 space-y-2">
          {signals.map((s) => (
            <div key={s.label} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[9.5px] font-medium text-gray-600">{s.label}</span>
              <span className="text-[9px] font-bold text-gray-400">Clean</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: review status ── */}
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
          Staff Review
        </div>
        <div className="mt-2 text-[13.5px] font-bold text-white">No flags today</div>
        <div className="mt-2 text-[9px] text-white/40">Any block can be manually overridden</div>
      </div>
    </div>
  );
}

export default function IdleTimePage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — IDLE TIME TRACKING"
        heading="Idle Time, Detected"
        highlight="Fairly and Accurately."
        description="Automatic idle-time detection with configurable thresholds that never apply retroactively — so tracked hours always reflect real work."
        visual={<IdleHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE ACCURACY GAP"
        heading="Idle Time Shouldn't Be a Guess"
        subheading="Idle time silently baked into 'active hours' skews every report downstream."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="An Honest Read on Active Time"
        subheading="Configurable, fair, and never applied retroactively."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="LIVE BREAKDOWN"
        blocks={[
          {
            highlighted: true,
            heading: "Every Employee, Split Live",
            desc: "Active vs. idle time updates in real time as the day happens, not after the fact.",
            checklist: ["Live active/idle percentage", "Per-employee efficiency score"],
          },
          {
            heading: "Filterable by Period",
            desc: "View today, this week, last 7 days, or last 30 days with a single click.",
            checklist: ["Today / week / 7-day / 30-day views", "Team and individual views"],
          },
        ]}
        linkLabel="Explore Idle Time Breakdown"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "70% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[220px] rounded-2xl bg-white p-4 shadow-2xl">
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
              <div className="mt-1.5 text-[9.5px] text-gray-400">Across 13 tracked employees</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Idle Time"
        desc="From live detection to anti-gaming signals — TrackDots keeps idle tracking fair and accurate."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Fair by Default, Configurable by Design"
        desc="No org is scored on someone else's assumptions — thresholds are yours to set, and history is never rewritten."
        checklist={["Idle & confidence thresholds configurable", "Either threshold can be disabled", "Changes apply forward only"]}
        linkLabel="See Threshold Configuration"
        visual={<IdleThresholdsMock />}
      />

      <FeatureStatsRow
        stats={[
          { icon: PieChart, value: "99%", label: "Team Efficiency", desc: "Today's active-vs-idle efficiency across the whole organization.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: Clock, value: "Forward-Only", label: "Threshold Changes", desc: "New idle rules never rewrite how past activity was already scored.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: ShieldCheck, value: "Auto-Exempt", label: "Meeting Idle Time", desc: "Idle time inside an approved meeting is never counted against anyone.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="INTEGRITY BUILT IN"
        blocks={[
          {
            highlighted: true,
            heading: "Designed Against Gaming",
            desc: "Burst-then-idle patterns and long idle gaps inside otherwise-active blocks are flagged for review.",
            checklist: ["Sub-window burst detection", "Long idle-gap flagging"],
          },
          {
            heading: "Staff Always Have the Final Say",
            desc: "Any flagged block can be manually reviewed and approved or revoked by staff.",
            checklist: ["Manual review & override", "Full audit trail on every change"],
          },
        ]}
        linkLabel="See Integrity Controls"
        visual={<IntegrityMock />}
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' idle detection compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Idle Time Tracking, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
