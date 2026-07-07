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
import { BarRows, DonutLegend, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
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
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "App Usage Reports — TrackDots",
  description:
    "See exactly which apps and websites drive real work — automatically categorized as productive, neutral, or unproductive, ranked and broken down per employee.",
};

const CAPABILITIES = [
  { icon: PieChart, title: "Productive / Neutral / Unproductive Split", desc: "Every tracked app and website is automatically categorized, so you always know where time actually goes." },
  { icon: BarChart, title: "Top Apps, Ranked by Usage", desc: "See exactly which apps consume the most time across the whole team, ranked from highest to lowest." },
  { icon: Users, title: "Per-App Employee Breakdown", desc: "Click any app in the ranking to see exactly which employees used it, and for how long." },
  { icon: Settings, title: "Configurable App Categories", desc: "Reclassify any app as productive, neutral, or unproductive to match how your organization actually works." },
  { icon: Monitor, title: "Team-Wide & Individual Views", desc: "See usage across the whole organization, or drill into a single employee's app usage." },
  { icon: Clock, title: "Flexible Date Ranges", desc: "View today, this week, last 7 days, or last 30 days with a single click." },
];

const PROBLEMS = [
  "No idea which apps are actually driving productive work",
  "Manually guessing which tools are time sinks",
  "App usage buried in raw logs, never summarized",
];
const BENEFITS = [
  "Every app automatically categorized and ranked by usage",
  "One click to see who's using what, and for how long",
  "A clear, team-wide picture updated every day",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Automatic productive/neutral/unproductive split", statuses: ["yes", "no", "no"] },
  { capability: "Top apps ranked by usage", statuses: ["yes", "partial", "no"] },
  { capability: "Per-app employee drill-down", statuses: ["yes", "no", "no"] },
  { capability: "Configurable app categories", statuses: ["yes", "no", "no"] },
  { capability: "Team-wide and individual views", statuses: ["yes", "partial", "no"] },
  { capability: "Direct feed into productivity scoring", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "How does TrackDots classify apps as productive or not?", a: "Every tracked app and website is categorized as productive, neutral, or unproductive using sensible defaults — and your organization can fully customize the rules." },
  { q: "Can I change how a specific app is categorized?", a: "Yes. Any app's category can be reclassified per organization, and the change applies going forward." },
  { q: "Can I see who used a specific app?", a: "Yes. Clicking any app in the Top Apps table shows exactly which employees used it and for how long." },
  { q: "Does this cover websites as well as desktop apps?", a: "Yes. Browser-based usage and native desktop apps are both tracked and categorized the same way." },
  { q: "Can I view usage for just one employee?", a: "Yes. App usage reports support both team-wide and single-employee views." },
  { q: "Does app usage feed into the productivity score?", a: "Yes. App categorization is one of the signals behind TrackDots' broader productivity scoring." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real App Usage layout
 * (date-range pills, 3 category cards, Top Apps ranking table). */
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

const USAGE_CATEGORIES = [
  { label: "Productive", value: "94h 08m", pct: "92%", color: "bg-green-400" },
  { label: "Neutral", value: "7h 22m", pct: "7%", color: "bg-gray-300" },
  { label: "Unproductive", value: "40m", pct: "1%", color: "bg-red-400" },
];

const TOP_APPS = [
  { app: "chrome", time: "53h 39m", share: "53%", users: "10 users" },
  { app: "Code", time: "13h 08m", share: "13%", users: "6 users" },
  { app: "Google Chrome", time: "10h 56m", share: "11%", users: "3 users" },
  { app: "Microsoft Teams", time: "4h 41m", share: "5%", users: "2 users" },
  { app: "google docs", time: "4h 40m", share: "5%", users: "4 users" },
];

function AppUsageHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">App Usage</div>
                <div className="text-[9px] text-gray-400">Team-wide — Monday, July 06</div>
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

            {/* Category cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {USAGE_CATEGORIES.map((c) => (
                <div key={c.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="flex items-center gap-1.5 text-[8.5px] font-semibold text-gray-500">
                    <span className={`h-2 w-2 rounded-sm ${c.color}`} />
                    {c.label}
                  </div>
                  <div className="mt-1 text-[15px] font-bold text-gray-900">{c.value}</div>
                  <div className="text-[8px] text-gray-400">{c.pct} of tracked time</div>
                </div>
              ))}
            </div>

            {/* Top Apps table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold text-gray-900">Top Apps</div>
                <div className="text-[8.5px] text-gray-400">Click a row to see per-employee breakdown</div>
              </div>
              <div className="mt-2.5 grid grid-cols-[1.6fr_0.9fr_0.6fr_0.9fr] gap-1 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>APP</span>
                <span className="text-right">TIME</span>
                <span className="text-right">SHARE</span>
                <span className="text-right">USERS</span>
              </div>
              <div className="mt-1.5 space-y-1.5">
                {TOP_APPS.map((a) => (
                  <div
                    key={a.app}
                    className="grid grid-cols-[1.6fr_0.9fr_0.6fr_0.9fr] items-center gap-1 rounded-lg bg-gray-50 px-2 py-1.5 text-[9.5px]"
                  >
                    <span className="truncate font-semibold text-gray-900">{a.app}</span>
                    <span className="text-right text-gray-600">{a.time}</span>
                    <span className="text-right font-bold text-brand-600">{a.share}</span>
                    <span className="text-right text-gray-400">{a.users}</span>
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

const ChromeUsersWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">chrome — Top Users Today</div>
    <BarRows
      dark
      rows={[
        { label: "Prabhjot", pct: 100, value: "7h 37m", color: "green" },
        { label: "Nihar", pct: 87, value: "6h 34m", color: "green" },
        { label: "Vivek", pct: 84, value: "6h 23m", color: "green" },
      ]}
    />
  </div>
);

const CategorySplitWidget = () => (
  <div className="w-full">
    <DonutLegend
      dark
      kicker="Team Split — Today"
      value="92%"
      legend={[
        { label: "Productive", value: "92", color: "green" },
        { label: "Neutral", value: "7", color: "gray" },
        { label: "Unproductive", value: "1", color: "red" },
      ]}
    />
  </div>
);

const UniqueAppsWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Team Usage — Today"
      stats={[
        { label: "Unique Apps", value: "10" },
        { label: "Top App", value: "chrome" },
        { label: "Top App Time", value: "53h 39m" },
        { label: "Tracked Total", value: "102h 11m" },
      ]}
    />
  </div>
);

const RangeWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Chrome Usage — Trailing 4 Weeks"
      rows={[
        { label: "Week 1", pct: 70, value: "44h 10m", color: "blue" },
        { label: "Week 2", pct: 82, value: "51h 30m", color: "blue" },
        { label: "Week 3", pct: 86, value: "53h 39m", color: "blue" },
      ]}
    />
  </div>
);

const CategoryRulesWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Category Rules</div>
    <div className="space-y-1.5">
      {[
        { app: "chrome, Code, google docs", cat: "Productive", color: "text-green-400" },
        { app: "google sheets, Firefox", cat: "Neutral", color: "text-white/60" },
        { app: "Games, streaming apps", cat: "Unproductive", color: "text-red-400" },
      ].map((r) => (
        <div key={r.app} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5 text-[10px]">
          <span className="text-white/80">{r.app}</span>
          <span className={`font-bold ${r.color}`}>{r.cat}</span>
        </div>
      ))}
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: PieChart,
    title: "Every App, Categorized Automatically",
    desc: "Productive, neutral, or unproductive — every tracked app is classified without any manual tagging.",
    checks: ["92% of today's time productive", "Updated live through the day", "Team-wide and per-employee"],
    widget: <CategorySplitWidget />,
  },
  {
    tone: "dark",
    icon: BarChart,
    title: "Ranked by Real Usage",
    desc: "Apps are ranked by total time across the team, so the biggest time sinks are impossible to miss.",
    checks: ["Ranked by total tracked time", "Share of total time shown", "Unique-app count included"],
    widget: <UniqueAppsWidget />,
  },
  {
    tone: "purple",
    icon: Users,
    title: "Drill Into Any App",
    desc: "Click chrome, Code, or any app in the ranking to see exactly who used it, and for how long.",
    checks: ["Per-employee time breakdown", "Sorted by usage within the app", "Works for any app in the ranking"],
    widget: <ChromeUsersWidget />,
  },
  {
    tone: "dark",
    icon: Settings,
    title: "Categories That Match Your Team",
    desc: "Default categories are just a starting point — reclassify any app to fit how your organization works.",
    checks: ["Fully configurable per organization", "Applies going forward", "No engineering ticket required"],
    widget: <CategoryRulesWidget />,
  },
  {
    tone: "purple",
    icon: TrendUp,
    title: "Trends, Not Just a Snapshot",
    desc: "See how usage of any single app is trending across the weeks, not just today.",
    checks: ["Multi-week trend view", "Compare week over week", "Spot growing time sinks early"],
    widget: <RangeWidget />,
  },
];

export default function AppUsagePage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — APP USAGE REPORTS"
        heading="See Which Apps Actually"
        highlight="Drive Real Work."
        description="Every tracked app and website is automatically categorized as productive, neutral, or unproductive — ranked and broken down per employee."
        visual={<AppUsageHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE VISIBILITY GAP"
        heading="Stop Guessing Where the Hours Go"
        subheading="Raw activity logs don't tell you what's actually productive. App Usage Reports do."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="A Ranking That Builds Itself"
        subheading="Automatic, configurable, and broken down to the individual employee."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="TOP APPS"
        blocks={[
          {
            highlighted: true,
            heading: "The Whole Team's Usage, Ranked",
            desc: "Every app is ranked by total time across the team, with its share of total tracked time.",
            checklist: ["Ranked by total tracked time", "Share of total time per app"],
          },
          {
            heading: "Ten Apps Tell the Whole Story",
            desc: "Most teams' entire tracked time concentrates in a handful of apps — TrackDots surfaces them instantly.",
            checklist: ["Unique-app count, team-wide", "Updated live, every day"],
          },
        ]}
        linkLabel="Explore App Usage Reports"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "50% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[220px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Top App — Today</div>
              <div className="mt-2 text-[16px] font-bold text-gray-900">chrome</div>
              <div className="text-[11px] font-semibold text-brand-600">53h 39m · 53% share</div>
              <div className="mt-2 text-[9px] text-gray-400">Used by 10 of 13 employees</div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Unique Apps Used</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">10</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">Across the whole team today</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of App Usage"
        desc="From category rules to per-employee drill-downs — TrackDots turns raw app activity into a clear picture."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Categories That Match Your Reality"
        desc="Default productive / neutral / unproductive rules are just a starting point — every app can be reclassified to fit how your team actually works."
        checklist={["Fully configurable app categories", "Changes apply going forward", "Same rules across team and individual views"]}
        linkLabel="See Category Configuration"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 40%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Category Rules</div>
              <div className="mt-3 space-y-2">
                {[
                  { app: "chrome, Code", cat: "Productive", c: "text-green-600" },
                  { app: "google sheets", cat: "Neutral", c: "text-gray-500" },
                ].map((r) => (
                  <div key={r.app} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                    <span className="text-[9.5px] font-medium text-gray-600">{r.app}</span>
                    <span className={`text-[9.5px] font-bold ${r.c}`}>{r.cat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Applies</div>
              <div className="mt-1 text-[15px] font-bold text-gray-900">Org-Wide, Instantly</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">No engineering ticket required</div>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: PieChart, value: "92%", label: "Productive Time", desc: "Today's share of tracked time spent in apps categorized as productive.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: BarChart, value: "10", label: "Unique Apps", desc: "The number of distinct apps and websites used across the team today.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Users, value: "Per-App", label: "Employee Drill-Down", desc: "Click any app in the ranking to see exactly who used it, and for how long.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="PER-EMPLOYEE DETAIL"
        blocks={[
          {
            highlighted: true,
            heading: "Click Through to the Individual",
            desc: "Every app in the ranking expands into a per-employee breakdown, sorted by usage.",
            checklist: ["Per-employee time per app", "Sorted highest to lowest"],
          },
          {
            heading: "Feeds Straight Into Productivity Intelligence",
            desc: "App categorization is one of the signals behind TrackDots' broader productivity scoring.",
            checklist: ["Contributes to productivity scoring", "Available in weekly reports"],
          },
        ]}
        linkLabel="See Productivity Intelligence"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "65% 50%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">chrome — Top Users</div>
              <div className="mt-3 space-y-2">
                {[
                  { name: "Prabhjot Kaur", v: "7h 37m" },
                  { name: "Nihar Ranjan Mohanta", v: "6h 34m" },
                  { name: "Vivek Bharti", v: "6h 23m" },
                ].map((u) => (
                  <div key={u.name} className="flex items-center justify-between">
                    <span className="truncate text-[9.5px] text-gray-600">{u.name}</span>
                    <span className="text-[9.5px] font-bold text-gray-900">{u.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
                <TrendUp className="h-3.5 w-3.5" strokeWidth={1.8} />
                Productivity Intelligence
              </div>
              <div className="mt-2 text-[13px] font-bold text-white">One signal of many</div>
              <div className="mt-2 text-[9px] text-white/40">App usage feeds the broader score</div>
            </div>
          </div>
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' app usage reports compare to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="App Usage Reports, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
