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
  BarChart,
  Bell,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  DotsLogo,
  FileText,
  Folder,
  ImageIcon,
  Inbox,
  LayoutGrid,
  Monitor,
  Search,
  Settings,
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "TrackDots for Digital Agencies",
  description:
    "Every client hour automatically tied to the project it was spent on — accurate billing, real proof of work, and no more end-of-week guesswork.",
};

const CAPABILITIES = [
  { icon: Folder, title: "Client-Level Project Tracking", desc: "Every hour ties back to the client project it was spent on, ready for invoicing.", href: "/features/project-tracking" },
  { icon: Activity, title: "Automatic Time Tracking", desc: "No manual timers — billable hours are captured automatically as work happens.", href: "/features/time-tracking" },
  { icon: Monitor, title: "App & Tool Usage Reports", desc: "See exactly which tools your content and creative team lives in, per client.", href: "/features/app-usage" },
  { icon: Clock, title: "Focus Sessions for Deep Work", desc: "Uninterrupted content and campaign work surfaced separately from meetings.", href: "/features/focus-sessions" },
  { icon: ImageIcon, title: "Optional Screenshot Monitoring", desc: "Configurable visual proof of work for clients who want to see it.", href: "/features/screenshots" },
  { icon: TrendUp, title: "Productivity Intelligence", desc: "Team and per-client productivity trends, with side-by-side comparison.", href: "/features/productivity-intelligence" },
];

const JOURNEY_STEPS = [
  { time: "9:12 AM", icon: Activity, title: "Clock-In, Automatically", desc: "Activity tracking starts the moment work begins — no timer, no client code to select." },
  { time: "9:12 AM – 1:42 PM", icon: Clock, title: "Deep Client Work", desc: "A 4h 29m focus session on the Q3 Marketing Push campaign is detected and logged." },
  { time: "1:42 – 2:00 PM", icon: Calendar, title: "Client Check-In, Declared", desc: "A quick client call is logged via Meeting Mode, approved, and counted as productive." },
  { time: "2:25 – 6:06 PM", icon: Monitor, title: "Back to Content & Campaigns", desc: "The afternoon session is tracked and tied to the same client project automatically." },
  { time: "6:15 PM", icon: CheckCircle, title: "Hours Roll Up, Per Client", desc: "Billable hours are ready for invoicing — no spreadsheet reconstruction needed." },
];

const PROBLEMS = [
  "Billable hours estimated from memory at the end of the week",
  "No clear picture of which client is eating the most team time",
  "A client asks for proof of work, and all you have is a guess",
];
const BENEFITS = [
  "Every hour automatically tied to the client project it was spent on",
  "Real, defensible time data ready for any invoice",
  "Optional screenshots for clients who want visual proof",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Client / project-level time allocation", statuses: ["yes", "partial", "no"] },
  { capability: "Zero-setup automatic tracking", statuses: ["yes", "yes", "no"] },
  { capability: "Per-client app & tool usage breakdown", statuses: ["yes", "no", "no"] },
  { capability: "Focus-session detection for deep work", statuses: ["yes", "no", "no"] },
  { capability: "Optional visual proof of work", statuses: ["yes", "no", "no"] },
  { capability: "Team-wide productivity comparison", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "Can I see how much time was spent on a specific client?", a: "Yes. Project Tracking ties every tracked hour to the client project it was spent on, so per-client reporting is automatic." },
  { q: "Does this work for a mostly-remote content or creative team?", a: "Yes. The agent runs natively on macOS and Windows, so remote and hybrid team members show up in the same dashboard." },
  { q: "Can I show a client proof of work?", a: "Yes, if you choose to enable it. Screenshot Monitoring is optional and configurable — never on by default, never secret." },
  { q: "Can I separate billable from non-billable time?", a: "Yes. Time can be associated with a specific client project, and internal work stays clearly separate." },
  { q: "Can I compare productivity across team members fairly?", a: "Yes. Productivity Intelligence and Compare use the same scoring engine for everyone, so comparisons are apples-to-apples." },
  { q: "Can my team see their own tracked time?", a: "Yes, on plans with the employee self-view portal enabled, every team member sees the exact same dashboard a manager would." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * solution/feature page — content recombines real Project Tracking, Focus
 * Sessions, and App Usage data already fetched from the live product,
 * framed around the real "Q3 Marketing Push" client project team. */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true },
  { label: "Analytics", icon: BarChart },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder, active: true },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings },
];

const AGENCY_STATS = [
  { label: "ACTIVE CLIENTS", value: "3" },
  { label: "BILLABLE HOURS TODAY", value: "24h" },
  { label: "AVG FOCUS SESSION", value: "4h 04m" },
  { label: "TOP TOOL", value: "google docs" },
];

const AGENCY_ROWS = [
  { name: "Alice Dawson", role: "SEO Executive", tool: "google docs · 1h 10m", focus: "Focus 4h 29m" },
  { name: "Anna Shaw", role: "SEO Executive", tool: "chrome · 4h 12m", focus: "Focus 4h 12m" },
  { name: "Victor Bennett", role: "SEO Executive", tool: "chrome · 4h 43m", focus: "Focus 4h 43m" },
  { name: "Sophie Carter", role: "HR Manager", tool: "google sheets · 30m", focus: "Focus 4h 31m" },
];

function AgencyHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Client Work — Today</div>
              <div className="text-[9px] text-gray-400">Q3 Marketing Push · Northwind Digital</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {AGENCY_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div className="mt-1 truncate text-[15px] font-bold text-gray-900">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Team rows */}
            <div className="space-y-2">
              {AGENCY_ROWS.map((e) => (
                <div key={e.name} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                  <div className="w-[150px] shrink-0">
                    <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                    <div className="text-[8px] text-gray-400">{e.role}</div>
                  </div>
                  <span className="rounded-md bg-gray-50 px-2 py-1 text-[8.5px] font-medium text-gray-600 ring-1 ring-gray-100">
                    {e.tool}
                  </span>
                  <span className="rounded-md bg-green-50 px-2 py-1 text-[8.5px] font-bold text-green-600">{e.focus}</span>
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
      {[{ l: "Clients", v: "3" }, { l: "Manual Timers", v: "0" }, { l: "Billable Hrs", v: "24h" }].map((s) => (
        <div key={s.l} className="rounded-lg bg-white/10 px-2.5 py-2.5">
          <div className="text-[15px] font-extrabold text-white">{s.v}</div>
          <div className="text-[7.5px] font-semibold uppercase tracking-wide text-white/50">{s.l}</div>
        </div>
      ))}
    </div>
  </div>
);

const FocusWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Focus Sessions — Today"
      rows={[
        { label: "Victor", pct: 95, value: "4h 43m", color: "green" },
        { label: "Alice", pct: 88, value: "4h 29m", color: "green" },
        { label: "Anna", pct: 82, value: "4h 12m", color: "green" },
      ]}
    />
  </div>
);

const ToolsWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Top Tools — This Week"
      stats={[
        { label: "chrome", value: "16h 30m" },
        { label: "google docs", value: "4h 40m" },
        { label: "google sheets", value: "1h 38m" },
      ]}
    />
  </div>
);

const ProjectHoursWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Q3 Marketing Push — This Week"
      rows={[
        { label: "Victor", pct: 75, value: "15h", color: "brand" },
        { label: "Alice", pct: 70, value: "14h", color: "blue" },
        { label: "Anna", pct: 65, value: "13h", color: "violet" },
      ]}
    />
  </div>
);

const TrendsWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Team Score — 30 Days</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Team average</span>
      <span className="text-[13px] font-bold text-green-400">95%</span>
    </div>
    <div className="mt-1.5 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Top performer</span>
      <span className="text-[10.5px] font-bold text-white">Peter Reynolds</span>
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Activity,
    title: "Tracking That Respects the Work",
    desc: "No manual timers to start per client — activity is captured automatically the moment work begins.",
    checks: ["Zero-setup, zero manual timers", "Works across every client project", "Runs quietly in the background"],
    widget: <AutoTrackWidget />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Deep Work, Made Visible",
    desc: "Uninterrupted content and campaign sessions are surfaced separately from meetings and messages.",
    checks: ["30-minute minimum, configurable", "Separate from meeting time", "Per-person focus trends"],
    widget: <FocusWidget />,
  },
  {
    tone: "purple",
    icon: Monitor,
    title: "Know the Real Toolchain",
    desc: "See exactly how much time goes into docs, sheets, or the browser — team-wide or per client.",
    checks: ["Tool-level usage breakdown", "Team-wide and per-client views", "Configurable productive/neutral tagging"],
    widget: <ToolsWidget />,
  },
  {
    tone: "dark",
    icon: Folder,
    title: "Hours That Map to Clients",
    desc: "Every tracked hour ties back to the client project it was spent on — ready for the next invoice.",
    checks: ["Client-level time allocation", "Per-contributor breakdown", "Feeds directly into billing"],
    widget: <ProjectHoursWidget />,
  },
  {
    tone: "purple",
    icon: TrendUp,
    title: "Trends You Can Show a Client",
    desc: "Team-wide productivity trends and top performers, backed by the same scoring engine for everyone.",
    checks: ["Team average & top performer", "Fair, side-by-side comparison", "Exportable for reporting"],
    widget: <TrendsWidget />,
  },
];

export default function DigitalAgenciesSolutionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="SOLUTION — DIGITAL AGENCIES"
        heading="Every Client Hour,"
        highlight="Accounted For."
        description="Automatic time tracking tied to the client project it was spent on — accurate billing, real proof of work, and no more end-of-week guesswork."
        visual={<AgencyHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE BILLING VISIBILITY GAP"
        heading="Stop Reconstructing Invoices From Memory"
        subheading="Billable hours estimated at the end of the week rarely hold up when a client asks questions. TrackDots keeps the real record."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <SolutionFeatureLinks
        eyebrow="BUILT FROM REAL TRACKDOTS FEATURES"
        heading="Everything Your Agency Needs"
        subheading="Automatic tracking, protected deep work, and client-level reporting — explore each capability in depth."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="DEEP WORK, PROTECTED"
        blocks={[
          {
            highlighted: true,
            heading: "Focus Time, Surfaced Automatically",
            desc: "Long, uninterrupted content and campaign sessions are called out separately from meetings and routine activity.",
            checklist: ["Focus sessions detected automatically", "Separate from meeting time"],
          },
          {
            heading: "Never Confused With Idle Time",
            desc: "Deep creative or content work that looks quiet on the surface is never mistaken for being unproductive.",
            checklist: ["Keystroke & mouse signals scored fairly", "Configurable idle thresholds"],
          },
        ]}
        linkLabel="See Focus Sessions"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "40% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Victor Bennett</div>
              <div className="mt-2 text-[16px] font-bold text-gray-900">4h 43m</div>
              <div className="text-[10px] font-semibold text-green-600">Longest focus session today</div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Team Focus Time</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">26 sessions</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">102h 16m this week</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Agency Visibility"
        desc="From automatic tracking to client-level billing — TrackDots gives agency leaders a complete, honest picture."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Works Wherever Your Team Does"
        desc="The TrackDots agent runs natively on macOS and Windows, so remote, hybrid, and in-office team members all show up in the same dashboard."
        checklist={["Native macOS & Windows agent", "Works anywhere with an internet connection", "Auto-updates, verified before install"]}
        linkLabel="See Supported Platforms"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "70% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Connected Devices</div>
              <div className="mt-2 space-y-1.5">
                {[{ n: "Victor's MacBook Air", s: "Tracking now" }, { n: "Alice's Windows Laptop", s: "Tracking now" }].map((d) => (
                  <div key={d.n} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                    <span className="truncate text-[9.5px] font-medium text-gray-600">{d.n}</span>
                    <span className="text-[8.5px] font-bold text-green-600">{d.s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <span className="text-2xl font-extrabold leading-none">2</span>
              <span className="text-[10px] font-semibold leading-tight">
                Native
                <br />
                Platforms
              </span>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: Clock, value: "0", label: "Manual Timers", desc: "Every hour tracked automatically — nothing for your team to start or stop.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: TrendUp, value: "4h+", label: "Avg. Focus Session", desc: "Uninterrupted deep-work blocks, tracked and protected.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Folder, value: "100%", label: "Client-Linked Hours", desc: "Every tracked hour ties back to the client project it was spent on.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <SolutionJourney
        eyebrow="A DAY IN THE LIFE"
        heading="How TrackDots Fits a Content Team's Actual Day"
        subheading="No extra steps, no EOD timesheet — just an accurate, per-client picture of how the day really went."
        steps={JOURNEY_STEPS}
      />

      <FeatureComparison
        heading="Get The Right Tool for Agencies"
        subheading="See how TrackDots compares to tracking client time the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="TrackDots for Digital Agencies, Answered" items={FAQS} />

      <SolutionCTA
        heading="Turn Tracked Hours Into Defensible Invoices"
        description="Automatic tracking, protected focus time, and client-level hours your finance team — and your clients — will actually trust."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "50% 30%" }} loading="lazy" />
            </div>
            <span className="absolute left-[210px] top-[40px] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-bold text-white shadow-lg">
              VB
            </span>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Q3 Marketing Push</div>
              <div className="mt-2 space-y-1.5">
                {[
                  { l: "Hours This Week", v: "51h" },
                  { l: "Contributors", v: "4" },
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
                <span className="text-[10px] font-bold text-gray-500">Billing Confidence</span>
                <TrendUp className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[18px] font-bold text-green-600">High</span>
              </div>
            </div>
          </div>
        }
      />
    </main>
  );
}
