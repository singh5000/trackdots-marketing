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
  Search,
  Settings,
  ShieldCheck,
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Anomaly Detection — TrackDots",
  description:
    "Automatically flags unusual work patterns — no-activity streaks, sudden hour drops, erratic hours — ranked by severity so nothing gets missed.",
};

const CAPABILITIES = [
  { icon: Activity, title: "No-Activity Streak Detection", desc: "Flags employees with multiple consecutive weekdays of zero tracked activity." },
  { icon: TrendUp, title: "Sudden Hour-Drop Alerts", desc: "Surfaces days where tracked hours fall sharply below an employee's own personal average." },
  { icon: Clock, title: "Erratic Start-Time Detection", desc: "Flags when a daily start time swings widely across an employee's recent active days." },
  { icon: Monitor, title: "Unusual Working-Hours Flags", desc: "Surfaces work logged unusually early or late relative to normal hours." },
  { icon: ShieldCheck, title: "Severity-Ranked Flags", desc: "Every anomaly is ranked Critical, Warning, or Info, so managers know what needs attention first." },
  { icon: Users, title: "Team-Wide Clear vs. Flagged View", desc: "See every employee's status at a glance — flagged or all clear — across the whole team." },
];

const PROBLEMS = [
  "Disengagement and burnout going unnoticed until it's a crisis",
  "No early warning when someone's work pattern changes",
  "Manually eyeballing dashboards to spot who needs a check-in",
];
const BENEFITS = [
  "No-activity streaks and sudden drops flagged automatically",
  "Erratic hours and unusual patterns surfaced early",
  "Every flag ranked by severity, so nothing gets missed",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Automatic no-activity streak detection", statuses: ["yes", "no", "no"] },
  { capability: "Sudden hour-drop alerts", statuses: ["yes", "no", "no"] },
  { capability: "Erratic start-time detection", statuses: ["yes", "no", "no"] },
  { capability: "Unusual working-hours flags", statuses: ["yes", "no", "no"] },
  { capability: "Severity-ranked flags (Critical/Warning/Info)", statuses: ["yes", "no", "no"] },
  { capability: "Team-wide flagged vs. clear view", statuses: ["yes", "partial", "no"] },
];

const FAQS = [
  { q: "What counts as a \"no-activity streak\"?", a: "Ten or more consecutive weekdays with zero tracked activity for an employee triggers a flag." },
  { q: "What is a \"sudden hour drop\"?", a: "A day where an employee's tracked hours fall sharply below their own personal average is flagged for review." },
  { q: "What does \"erratic start times\" mean?", a: "It flags when an employee's daily start time swings widely across their recent active days, which can signal disengagement or scheduling issues." },
  { q: "How are anomalies prioritized?", a: "Every flag is ranked Critical, Warning, or Info, so managers can focus on what needs attention first." },
  { q: "Does this replace a manager's judgment?", a: "No. Anomaly Detection surfaces patterns worth a look — every flag can be reviewed against the employee's actual activity diary before any conversation happens." },
  { q: "Can employees see their own flags?", a: "Yes, on plans with the employee self-view portal enabled." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Anomaly Detection layout
 * (severity stat tiles, per-employee flagged/clear list). */
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

const ANOMALY_STATS = [
  { label: "CRITICAL", value: "0" },
  { label: "WARNING", value: "7", amber: true },
  { label: "TOTAL FLAGS", value: "9" },
  { label: "ALL CLEAR", value: "12", green: true },
];

const ANOMALY_EMPLOYEES = [
  { name: "Amit Chawla", role: "CEO", emoji: "💤", flag: "No-activity streak", detail: "10 consecutive weekdays with zero tracked activity", date: "Jul 6, 2026", tone: "warning" },
  { name: "Prabhjot Kaur", role: "Quality Analyst", emoji: "📉", flag: "Sudden hour drop", detail: "3h 53m logged — 47% below personal average (7h 17m)", date: "Jun 30, 2026", tone: "warning" },
  { name: "Nihar Ranjan Mohanta", role: "Software Engineer", emoji: "🔀", flag: "Erratic start times", detail: "Start times vary by 9h 20m across last 14 active days", date: "Jul 6, 2026", tone: "warning" },
  { name: "Akansha Dogra", role: "SEO Executive", emoji: "✓", flag: "All clear", detail: "No anomalies in the last 30 days", date: "", tone: "clear" },
];

function AnomalyHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Anomaly Detection</div>
              <div className="text-[9px] text-gray-400">Unusual patterns flagged over the last 30 days</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {ANOMALY_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div
                    className={`mt-1 text-[15px] font-bold ${
                      s.amber ? "text-amber-500" : s.green ? "text-green-500" : "text-gray-900"
                    }`}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Employee flag list */}
            <div className="space-y-2">
              {ANOMALY_EMPLOYEES.map((e) => (
                <div key={e.name} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                  <div className="w-[150px] shrink-0">
                    <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                    <div className="text-[8px] text-gray-400">{e.role}</div>
                  </div>
                  <span className="text-[13px]">{e.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-[10px] font-bold ${
                        e.tone === "clear" ? "text-green-600" : "text-amber-600"
                      }`}
                    >
                      {e.flag}
                    </div>
                    <div className="truncate text-[8.5px] text-gray-400">{e.detail}</div>
                  </div>
                  {e.date && <span className="shrink-0 text-[8.5px] text-gray-400">{e.date}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SeverityWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Flags — Last 30 Days"
      stats={[
        { label: "Critical", value: "0" },
        { label: "Warning", value: "7" },
        { label: "Total", value: "9" },
        { label: "All Clear", value: "12" },
      ]}
    />
  </div>
);

const StreakWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">💤 No-Activity Streak</div>
    <div className="rounded-lg bg-white/10 p-3">
      <div className="text-[10.5px] font-semibold text-white/90">Amit Chawla</div>
      <div className="mt-1 text-[10px] text-white/60">10 consecutive weekdays, zero tracked activity</div>
    </div>
  </div>
);

const HourDropWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="📉 Sudden Hour Drop — Prabhjot Kaur"
      rows={[
        { label: "Average", pct: 100, value: "7h 17m", color: "blue" },
        { label: "Jun 30", pct: 53, value: "3h 53m", color: "amber" },
      ]}
    />
  </div>
);

const ErraticWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "🔀 Erratic start times — Nihar R. Mohanta", done: false },
        { label: "🌙 Unusual working hours — same employee", done: false },
        { label: "✓ All clear — Akansha Dogra", done: true },
      ]}
    />
  </div>
);

const ClearWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Team Status — Today"
      stats={[
        { label: "Flagged", value: "9" },
        { label: "Clear", value: "12" },
        { label: "Reviewed", value: "9" },
      ]}
    />
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: ShieldCheck,
    title: "Every Flag, Ranked by Severity",
    desc: "Critical, Warning, or Info — so managers always know what deserves attention first.",
    checks: ["0 Critical, 7 Warning today", "9 total flags across the team", "Updated automatically, daily"],
    widget: <SeverityWidget />,
  },
  {
    tone: "dark",
    icon: Activity,
    title: "Silence Doesn't Go Unnoticed",
    desc: "Ten or more consecutive weekdays of zero tracked activity is flagged the moment it happens.",
    checks: ["Consecutive-weekday detection", "Flagged automatically", "No manual monitoring needed"],
    widget: <StreakWidget />,
  },
  {
    tone: "purple",
    icon: TrendUp,
    title: "Drops From the Norm, Caught Early",
    desc: "Every employee's hours are compared against their own personal average, not a generic benchmark.",
    checks: ["Personal-average comparison", "Percentage drop shown", "Flagged same day"],
    widget: <HourDropWidget />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Pattern Changes, Not Just Numbers",
    desc: "Erratic start times and unusual working hours are surfaced even when total hours look normal.",
    checks: ["Start-time variance detection", "Unusual-hours detection", "Multiple flags per employee, when relevant"],
    widget: <ErraticWidget />,
  },
  {
    tone: "purple",
    icon: Users,
    title: "The Whole Team, One Glance",
    desc: "Every employee shows as flagged or all-clear, so reviewing the team takes minutes, not hours.",
    checks: ["Team-wide flagged vs. clear view", "Per-employee 30-day activity chart", "Links straight to the activity diary"],
    widget: <ClearWidget />,
  },
];

export default function AnomalyDetectionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — ANOMALY DETECTION"
        heading="Catch Unusual Patterns"
        highlight="Before They Become a Crisis."
        description="No-activity streaks, sudden hour drops, and erratic hours are flagged automatically — ranked by severity, so nothing gets missed."
        visual={<AnomalyHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE EARLY-WARNING GAP"
        heading="Don't Wait for a Crisis to Notice"
        subheading="By the time disengagement is obvious, it's already cost you weeks. Anomaly Detection catches it early."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="Patterns Surfaced Automatically"
        subheading="No dashboard-watching required — anomalies are flagged and ranked for you."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="FLAGGED PATTERNS"
        blocks={[
          {
            highlighted: true,
            heading: "Four Kinds of Anomalies, Detected Automatically",
            desc: "No-activity streaks, sudden hour drops, erratic start times, and unusual working hours are all flagged without setup.",
            checklist: ["No-activity streak detection", "Sudden hour-drop alerts"],
          },
          {
            heading: "Every Flag Links to the Evidence",
            desc: "Jump straight from any flag to the employee's activity diary or profile to see the full picture.",
            checklist: ["One click to activity diary", "One click to employee profile"],
          },
        ]}
        linkLabel="Explore Anomaly Detection"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "40% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Amit Chawla</div>
                <span className="rounded-full bg-amber-50 px-1.5 py-0.5 text-[8px] font-bold text-amber-600">Warning</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[12px] font-bold text-gray-900">
                <span>💤</span> No-activity streak
              </div>
              <div className="mt-1 text-[9.5px] text-gray-500">10 consecutive weekdays, zero tracked activity</div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Total Flags — 30 Days</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">9</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">0 critical · 7 warning · 12 all clear</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Anomaly Detection"
        desc="From silent streaks to erratic hours — TrackDots surfaces what deserves a manager's attention."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Signals, Not Snap Judgments"
        desc="Every anomaly is a pattern worth a look, backed by the employee's real activity diary — never an automated verdict."
        checklist={["Every flag links to real activity data", "Severity-ranked, never one-size-fits-all", "Built to start conversations, not replace them"]}
        linkLabel="See How Flags Are Reviewed"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 35%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Prabhjot Kaur</div>
              <div className="mt-2 flex items-center gap-1.5 text-[12px] font-bold text-gray-900">
                <span>📉</span> Sudden hour drop
              </div>
              <div className="mt-1 text-[9.5px] text-gray-500">3h 53m logged — 47% below average</div>
              <div className="mt-3 flex gap-2">
                <span className="flex-1 rounded-lg bg-gray-100 py-1.5 text-center text-[9.5px] font-bold text-gray-600">📋 Diary</span>
                <span className="flex-1 rounded-lg bg-gray-100 py-1.5 text-center text-[9.5px] font-bold text-gray-600">👤 Profile</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Evidence
                <br />
                Linked
              </span>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: ShieldCheck, value: "3-Tier", label: "Severity Ranking", desc: "Every flag is ranked Critical, Warning, or Info.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: Activity, value: "4", label: "Anomaly Types Detected", desc: "No-activity streaks, hour drops, erratic starts, and unusual hours.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Users, value: "12 of 21", label: "All Clear Today", desc: "The rest of the team flagged nothing unusual in the last 30 days.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="CONNECTED TO THE BIGGER PICTURE"
        blocks={[
          {
            highlighted: true,
            heading: "One Signal Among Many",
            desc: "Anomaly flags sit alongside burnout risk and productivity trends for a complete view of team health.",
            checklist: ["Feeds into Burnout Risk", "Feeds into Productivity Intelligence"],
          },
          {
            heading: "Reviewed by People, Not Just Algorithms",
            desc: "Every flag exists to prompt a manager conversation — not to make an automated decision about anyone.",
            checklist: ["Always paired with real activity evidence", "Never used for automated penalties"],
          },
        ]}
        linkLabel="See Burnout Detection"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "60% 50%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Nihar Ranjan Mohanta</div>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-700">
                  <span>🔀</span> Erratic start times
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-700">
                  <span>🌙</span> Unusual working hours
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
                <BarChart className="h-3.5 w-3.5" strokeWidth={1.8} />
                30-Day Activity
              </div>
              <div className="mt-2 text-[13px] font-bold text-white">2 flags, same employee</div>
              <div className="mt-2 text-[9px] text-white/40">Reviewed alongside their activity diary</div>
            </div>
          </div>
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' anomaly detection compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Anomaly Detection, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
