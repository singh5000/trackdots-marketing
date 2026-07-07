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
import { BarRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  ChevronDown,
  DotsLogo,
  Eye,
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
  title: "Productivity Intelligence — TrackDots",
  description:
    "Daily 0–100 productivity scores, trend direction, team averages, and side-by-side employee comparison — all built on one shared scoring engine.",
};

const CAPABILITIES = [
  { icon: BarChart, title: "Daily Productivity Scoring", desc: "Every employee gets a 0–100 productivity score each day, built from real activity, not guesswork." },
  { icon: ShieldCheck, title: "Four Clear Rating Bands", desc: "Excellent, Good, Fair, or Low — every score rolls up into a rating anyone can understand at a glance." },
  { icon: TrendUp, title: "Trend Direction, Not Just a Number", desc: "See whether an employee's productivity is rising, steady, or declining over the period." },
  { icon: Users, title: "Team Averages & Top Performer", desc: "Team-wide average score and the current top performer, surfaced automatically." },
  { icon: Bell, title: "Needs-Attention Callouts", desc: "Employees whose scores warrant a closer look are called out automatically." },
  { icon: Eye, title: "Side-by-Side Compare", desc: "Compare any two employees head-to-head across active time, focus sessions, and top apps." },
];

const PROBLEMS = [
  "Productivity buried in scattered reports across separate pages",
  "No simple way to compare two employees fairly",
  "\"Who's doing well?\" answered by gut feeling, not data",
];
const BENEFITS = [
  "One daily score per employee, rated Excellent to Low",
  "Any two employees compared side-by-side in seconds",
  "Team averages and top performers surfaced automatically",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Daily 0–100 productivity scoring", statuses: ["yes", "no", "no"] },
  { capability: "Four-tier rating bands", statuses: ["yes", "no", "no"] },
  { capability: "Trend direction (rising/steady/declining)", statuses: ["yes", "no", "no"] },
  { capability: "Automatic needs-attention callouts", statuses: ["yes", "no", "no"] },
  { capability: "Side-by-side employee comparison", statuses: ["yes", "no", "no"] },
  { capability: "Configurable time windows (14/30/60 days)", statuses: ["yes", "partial", "no"] },
];

const FAQS = [
  { q: "How is the productivity score calculated?", a: "Each activity block is scored from 0–100 based on real input signals, then rolled up into a daily productivity score per employee." },
  { q: "What do the rating bands mean?", a: "Excellent (80+), Good (65+), Fair (45+), or Low (below 45) — giving every score an at-a-glance meaning." },
  { q: "What does the trend arrow show?", a: "Whether an employee's score is rising, holding steady, or declining, comparing the two halves of the selected period." },
  { q: "How does Compare work?", a: "Pick any two employees and a time period to see their active time, productivity score, focus sessions, and top app side-by-side." },
  { q: "What triggers a \"needs attention\" callout?", a: "Employees whose average score falls into the Fair or Low band for the selected period are surfaced for a closer look." },
  { q: "Can employees see their own productivity trend?", a: "Yes, on plans with the employee self-view portal enabled." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Productivity Trends
 * layout (period pills, team summary, per-employee trend cards). */
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

const TRENDS_EMPLOYEES = [
  { name: "Piyush Rajput", role: "Software Engineer", days: "21 active days", trend: "→ steady", avg: "98%", best: "100%", rating: "Excellent" },
  { name: "Vivek Bharti", role: "SEO Executive", days: "19 active days", trend: "↓ -2%", avg: "98%", best: "100%", rating: "Excellent" },
  { name: "Sia Chandan", role: "HR Manager", days: "20 active days", trend: "↑ +3%", avg: "94%", best: "99%", rating: "Excellent" },
];

function ratingClasses(rating: string) {
  if (rating === "Excellent") return "bg-green-50 text-green-600";
  if (rating === "Good") return "bg-blue-50 text-blue-600";
  if (rating === "Fair") return "bg-amber-50 text-amber-600";
  return "bg-red-50 text-red-500";
}

function ProductivityHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">Productivity Trends</div>
                <div className="text-[9px] text-gray-400">Daily productivity scores over the last 30 days</div>
              </div>
              <div className="flex items-center gap-1.5">
                {["14 days", "30 days", "60 days"].map((r) => (
                  <span
                    key={r}
                    className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                      r === "30 days" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Team summary tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">TEAM AVG SCORE</div>
                <div className="mt-1 text-[15px] font-bold text-green-600">95%</div>
                <div className="text-[7.5px] text-gray-400">Excellent</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">TOP PERFORMER</div>
                <div className="mt-1 truncate text-[12px] font-bold text-gray-900">Piyush Rajput</div>
                <div className="text-[7.5px] text-gray-400">98% avg</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">NEEDS ATTENTION</div>
                <div className="mt-1 text-[15px] font-bold text-gray-900">None</div>
              </div>
              <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                <div className="text-[7px] font-semibold tracking-wider text-gray-400">ACTIVE EMPLOYEES</div>
                <div className="mt-1 text-[15px] font-bold text-gray-900">13</div>
                <div className="text-[7.5px] text-gray-400">of 19 total</div>
              </div>
            </div>

            {/* Employee trend rows */}
            <div className="space-y-2">
              {TRENDS_EMPLOYEES.map((e) => (
                <div key={e.name} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                  <div className="w-[150px] shrink-0">
                    <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                    <div className="text-[8px] text-gray-400">
                      {e.days} · {e.trend}
                    </div>
                  </div>
                  <div className="flex flex-1 gap-4">
                    <div>
                      <div className="text-[13px] font-bold text-gray-900">{e.avg}</div>
                      <div className="text-[7px] text-gray-400">avg</div>
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900">{e.best}</div>
                      <div className="text-[7px] text-gray-400">best</div>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold ${ratingClasses(e.rating)}`}>
                    {e.rating}
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

const ScoreEngineWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Rating Bands</div>
    <div className="space-y-1.5">
      {[
        { r: "Excellent", v: "80–100", c: "text-green-400" },
        { r: "Good", v: "65–79", c: "text-blue-400" },
        { r: "Fair", v: "45–64", c: "text-amber-400" },
        { r: "Low", v: "0–44", c: "text-red-400" },
      ].map((b) => (
        <div key={b.r} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5 text-[10px]">
          <span className="text-white/80">{b.r}</span>
          <span className={`font-bold ${b.c}`}>{b.v}</span>
        </div>
      ))}
    </div>
  </div>
);

const TrendWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Piyush Rajput — Daily Score"
      rows={[
        { label: "Week 1", pct: 96, value: "96%", color: "green" },
        { label: "Week 2", pct: 97, value: "97%", color: "green" },
        { label: "Week 3", pct: 98, value: "98%", color: "green" },
      ]}
    />
  </div>
);

const TeamSummaryWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Team Summary — 30 Days"
      stats={[
        { label: "Team Avg", value: "95%" },
        { label: "Top Score", value: "98%" },
        { label: "Active", value: "13" },
        { label: "Total Team", value: "19" },
      ]}
    />
  </div>
);

const AttentionWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Needs Attention — 30 Days</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Employees in Fair or Low band</span>
      <span className="text-[13px] font-bold text-green-400">None</span>
    </div>
  </div>
);

const CompareWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Compare — Last 7 Days</div>
    <div className="grid grid-cols-2 gap-2">
      {[
        { n: "Piyush Rajput", s: "8h 06m focus" },
        { n: "Vivek Bharti", s: "8h 32m focus" },
      ].map((p) => (
        <div key={p.n} className="rounded-lg bg-white/10 p-2.5 text-center">
          <div className="truncate text-[10px] font-semibold text-white/90">{p.n}</div>
          <div className="text-[9px] text-white/50">{p.s}</div>
        </div>
      ))}
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: BarChart,
    title: "One Score, Four Bands",
    desc: "Every activity block rolls up into a 0–100 daily score, rated Excellent, Good, Fair, or Low.",
    checks: ["0–100 score per employee, per day", "Four clear rating bands", "Same engine across the whole platform"],
    widget: <ScoreEngineWidget />,
  },
  {
    tone: "dark",
    icon: TrendUp,
    title: "Direction, Not Just a Snapshot",
    desc: "Every employee's trend arrow compares the two halves of the period — rising, steady, or declining.",
    checks: ["Rising / steady / declining", "14, 30, or 60-day windows", "Per-employee daily chart"],
    widget: <TrendWidget />,
  },
  {
    tone: "purple",
    icon: Users,
    title: "The Team, Summarized",
    desc: "Team average score and active-employee count are calculated automatically for any period.",
    checks: ["Team-wide average score", "Active vs. total employee count", "Top performer surfaced automatically"],
    widget: <TeamSummaryWidget />,
  },
  {
    tone: "dark",
    icon: Bell,
    title: "Nothing Falls Through the Cracks",
    desc: "Employees whose scores drop into Fair or Low are called out — without anyone having to go looking.",
    checks: ["Automatic needs-attention callout", "Based on the selected period", "Zero manual review required"],
    widget: <AttentionWidget />,
  },
  {
    tone: "purple",
    icon: Eye,
    title: "Any Two Employees, Side by Side",
    desc: "Pick any two employees and a time window to compare active time, score, and focus sessions directly.",
    checks: ["Side-by-side comparison", "Active time, score, and focus sessions", "Any time window"],
    widget: <CompareWidget />,
  },
];

export default function ProductivityIntelligencePage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — PRODUCTIVITY INTELLIGENCE"
        heading="One Score. One Team."
        highlight="Complete Clarity."
        description="Daily 0–100 productivity scores, trend direction, team averages, and side-by-side employee comparison — all built on one shared scoring engine."
        visual={<ProductivityHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE CLARITY GAP"
        heading="Stop Piecing Together the Picture"
        subheading="Productivity data scattered across five different reports never adds up to a clear answer. Productivity Intelligence does."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="One Engine, Every Answer"
        subheading="Daily scores, team trends, and head-to-head comparison, all from the same real activity data."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="PRODUCTIVITY TRENDS"
        blocks={[
          {
            highlighted: true,
            heading: "Every Employee, Scored Daily",
            desc: "A 0–100 score rolls up into Excellent, Good, Fair, or Low — with average, best, and trend direction shown per employee.",
            checklist: ["Daily 0–100 productivity score", "Four-tier rating band"],
          },
          {
            heading: "The Team, at a Glance",
            desc: "Team average score, top performer, and active-employee count are surfaced automatically for any period.",
            checklist: ["Team average & top performer", "14 / 30 / 60-day windows"],
          },
        ]}
        linkLabel="Explore Productivity Trends"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "45% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Piyush Rajput</div>
              <div className="mt-2 flex gap-4">
                <div>
                  <div className="text-[16px] font-bold text-gray-900">98%</div>
                  <div className="text-[8px] text-gray-400">avg</div>
                </div>
                <div>
                  <div className="text-[16px] font-bold text-gray-900">100%</div>
                  <div className="text-[8px] text-gray-400">best</div>
                </div>
              </div>
              <span className="mt-2 inline-block rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-600">Excellent · → steady</span>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Team Avg — 30 Days</div>
              <div className="mt-1 text-[20px] font-bold text-green-600">95%</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">13 of 19 employees active</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Productivity Intelligence"
        desc="From daily scores to head-to-head comparisons — TrackDots turns raw activity into a complete, honest read on performance."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="One Scoring Engine, Everywhere"
        desc="The same confidence-scored activity blocks that power Time Tracking also drive Productivity Trends and Compare — one honest signal, reused everywhere."
        checklist={["Same engine as confidence-scored blocks", "Consistent across every report", "No separate configuration needed"]}
        linkLabel="See How Scoring Works"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "60% 40%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Powers</div>
              <div className="mt-3 space-y-2">
                {["Time Tracking confidence scores", "Productivity Trends", "Compare Employees"].map((f) => (
                  <div key={f} className="rounded-lg bg-gray-50 px-2.5 py-2 text-[10px] font-medium text-gray-700">
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Engines</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">1</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">Powering every productivity view</div>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: BarChart, value: "0–100", label: "Daily Score", desc: "Every employee gets a daily productivity score built from real activity.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: ShieldCheck, value: "4", label: "Rating Bands", desc: "Excellent, Good, Fair, or Low — a clear read on every score.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Eye, value: "2-Way", label: "Employee Compare", desc: "Any two employees, compared side-by-side across any time window.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="COMPARE EMPLOYEES"
        blocks={[
          {
            highlighted: true,
            heading: "Pick Two, See Everything",
            desc: "Select any two employees and a time window to compare active time, score, and focus sessions side-by-side.",
            checklist: ["Side-by-side active time & score", "Focus sessions & top app compared"],
          },
          {
            heading: "Fair Comparisons, Same Standard",
            desc: "Both employees are measured against the exact same scoring engine and thresholds — no double standard.",
            checklist: ["Same scoring engine for both", "This week / 7-day / 30-day windows"],
          },
        ]}
        linkLabel="Try Compare Employees"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "50% 50%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Compare — Last 7 Days</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-gray-50 px-2.5 py-2 text-center ring-1 ring-gray-100">
                  <div className="truncate text-[9.5px] font-semibold text-gray-900">Piyush Rajput</div>
                  <div className="text-[13px] font-bold text-green-600">98%</div>
                  <div className="text-[8px] text-gray-400">8h 06m focus</div>
                </div>
                <div className="rounded-lg bg-gray-50 px-2.5 py-2 text-center ring-1 ring-gray-100">
                  <div className="truncate text-[9.5px] font-semibold text-gray-900">Vivek Bharti</div>
                  <div className="text-[13px] font-bold text-green-600">98%</div>
                  <div className="text-[8px] text-gray-400">8h 32m focus</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <Eye className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Side by Side,
                <br />
                Instantly
              </span>
            </div>
          </div>
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' productivity intelligence compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Productivity Intelligence, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
