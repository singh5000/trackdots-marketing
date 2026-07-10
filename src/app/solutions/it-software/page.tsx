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
  PieChart,
  Search,
  Settings,
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "TrackDots for IT & Software Teams",
  description:
    "Automatic time tracking, protected focus sessions, and project-level hours built for distributed engineering teams — without the micromanagement.",
};

const CAPABILITIES = [
  { icon: Activity, title: "Automatic Time Tracking", desc: "No manual timers — engineers' work is tracked automatically in the background, exactly like it should be.", href: "/features/time-tracking" },
  { icon: Clock, title: "Focus Sessions for Deep Work", desc: "Uninterrupted coding sessions are surfaced separately from meetings and context-switching.", href: "/features/focus-sessions" },
  { icon: Monitor, title: "IDE & Tool Usage Insight", desc: "See exactly which tools — IDEs, browsers, terminals — your engineers spend their time in.", href: "/features/app-usage" },
  { icon: Folder, title: "Project-Level Time Allocation", desc: "Every hour ties back to the project it was spent on, ready for client billing or sprint reporting.", href: "/features/project-tracking" },
  { icon: PieChart, title: "Fair, Configurable Idle Detection", desc: "Idle thresholds you control, never applied retroactively — no punishing normal thinking time.", href: "/features/idle-time" },
  { icon: ImageIcon, title: "Privacy-Conscious Screenshots", desc: "Optional, configurable screenshot capture — never surveillance, always transparent.", href: "/features/screenshots" },
];

const JOURNEY_STEPS = [
  { time: "9:16 AM", icon: Activity, title: "Clock-In, Automatically", desc: "Activity tracking starts the moment work begins — no timer to remember." },
  { time: "11:00 AM – 1:45 PM", icon: Clock, title: "Deep Work, Protected", desc: "A 2h 45m focus session on Client Portal Redesign is detected and logged." },
  { time: "1:45 – 2:00 PM", icon: Calendar, title: "Standup, Declared", desc: "A quick meeting is logged via Meeting Mode, approved, and counted as productive." },
  { time: "2:00 – 6:00 PM", icon: Monitor, title: "Back to Focused Work", desc: "The afternoon coding session is tracked and tied to the same project." },
  { time: "6:15 PM", icon: CheckCircle, title: "Day Rolls Up, Automatically", desc: "Hours, focus time, and project allocation are ready — no EOD timesheet needed." },
];

const PROBLEMS = [
  "No visibility into whether distributed engineers are actually unblocked",
  "Manual timesheets that engineers forget, fudge, or resent",
  "Client billing based on guesswork instead of real project hours",
];
const BENEFITS = [
  "Automatic tracking that respects how engineers actually work",
  "Real project-level hours, ready for accurate client billing",
  "Deep work protected and visible, not punished",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Zero-setup automatic tracking", statuses: ["yes", "yes", "no"] },
  { capability: "Focus-session detection for deep work", statuses: ["yes", "no", "no"] },
  { capability: "IDE / tool-level usage breakdown", statuses: ["yes", "partial", "no"] },
  { capability: "Project-level time allocation", statuses: ["yes", "partial", "no"] },
  { capability: "Configurable, forward-only idle rules", statuses: ["yes", "no", "no"] },
  { capability: "Optional, transparent screenshot capture", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "Does TrackDots track the code my engineers write?", a: "No. TrackDots tracks app and window usage, keystroke activity for scoring, and time — never the actual content of code, messages, or documents." },
  { q: "Will this feel like surveillance to my engineering team?", a: "It's built not to. Screenshot capture is optional and configurable, employees get the same self-view data managers do, and idle rules are never applied retroactively." },
  { q: "Can we see time spent per project or sprint?", a: "Yes. Project Tracking ties tracked hours directly to a project, so sprint and client billing reporting is accurate without extra timesheets." },
  { q: "Does it work for remote and hybrid engineering teams?", a: "Yes. The agent runs natively on macOS and Windows, so distributed teams get the same visibility as an in-office team." },
  { q: "Can we compare focus time across engineers fairly?", a: "Yes. Productivity Intelligence and Compare let you view trends and side-by-side comparisons using the same scoring engine for everyone." },
  { q: "Can engineers see their own tracked data?", a: "Yes, on plans with the employee self-view portal enabled, every engineer sees the exact same dashboard a manager would." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across the
 * feature pages — content area recombines real App Usage + Focus Sessions
 * data already fetched from the live product, framed for an engineering team. */
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

const ENGINEERING_STATS = [
  { label: "ACTIVE ENGINEERS", value: "8" },
  { label: "CODE EDITOR TIME", value: "13h 08m" },
  { label: "AVG FOCUS SESSION", value: "4h 12m" },
  { label: "DEEP WORK TODAY", value: "68%", green: true },
];

const ENGINEER_ROWS = [
  { name: "Peter Reynolds", role: "Software Engineer", tool: "Code · 5h 55m", focus: "Focus 4h 34m" },
  { name: "Adam Mitchell", role: "Senior Software Engineer", tool: "Antigravity · 50m", focus: "Focus 3h 45m" },
  { name: "Daniel Lawson", role: "Software Engineer", tool: "Antigravity IDE · 1h 30m", focus: "Focus 4h 26m" },
  { name: "Samuel Stone", role: "Software Engineer", tool: "Code · 2h 54m", focus: "Focus 4h 09m" },
];

function EngineeringHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Engineering Team — Today</div>
              <div className="text-[9px] text-gray-400">Time, focus, and tools in one view</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {ENGINEERING_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div className={`mt-1 text-[15px] font-bold ${s.green ? "text-green-500" : "text-gray-900"}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Engineer rows */}
            <div className="space-y-2">
              {ENGINEER_ROWS.map((e) => (
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
      {[{ l: "Engineers", v: "8" }, { l: "Manual Timers", v: "0" }, { l: "Tracked Hrs", v: "58h" }].map((s) => (
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
        { label: "Michael", pct: 92, value: "4h 40m", color: "green" },
        { label: "Peter", pct: 84, value: "4h 03m", color: "green" },
        { label: "Samuel", pct: 85, value: "4h 05m", color: "green" },
      ]}
    />
  </div>
);

const ToolsWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Top Dev Tools — This Week"
      stats={[
        { label: "Code", value: "13h 08m" },
        { label: "Antigravity", value: "1h 40m" },
        { label: "Terminal", value: "3h 20m" },
      ]}
    />
  </div>
);

const ProjectHoursWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Client Portal Redesign — This Week"
      rows={[
        { label: "Michael", pct: 70, value: "14h", color: "brand" },
        { label: "Paula", pct: 55, value: "11h", color: "blue" },
        { label: "Adam", pct: 65, value: "13h", color: "violet" },
      ]}
    />
  </div>
);

const FairIdleWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Idle Rule Change</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Jun 1 – Jun 30: old threshold</span>
      <span className="text-[9px] font-bold text-green-400">Unchanged</span>
    </div>
    <div className="mt-1.5 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Jul 1 onward: new threshold</span>
      <span className="text-[9px] font-bold text-green-400">Applied</span>
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Activity,
    title: "Tracking That Respects Engineers",
    desc: "No manual timers to start or forget — activity is captured automatically the moment work begins.",
    checks: ["Zero-setup, zero manual timers", "Works across every IDE and tool", "Runs quietly in the background"],
    widget: <AutoTrackWidget />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Deep Work, Made Visible",
    desc: "Uninterrupted coding sessions are surfaced separately from meetings and Slack pings.",
    checks: ["30-minute minimum, configurable", "Separate from meeting time", "Per-engineer focus trends"],
    widget: <FocusWidget />,
  },
  {
    tone: "purple",
    icon: Monitor,
    title: "Know the Real Toolchain",
    desc: "See exactly how much time goes into the editor, terminal, or browser — team-wide or per engineer.",
    checks: ["IDE & tool-level breakdown", "Team-wide and per-engineer views", "Configurable productive/neutral tagging"],
    widget: <ToolsWidget />,
  },
  {
    tone: "dark",
    icon: Folder,
    title: "Hours That Map to Projects",
    desc: "Every tracked hour ties back to the project it was spent on — ready for sprint reviews or client invoices.",
    checks: ["Project-level time allocation", "Per-contributor breakdown", "Feeds directly into billing"],
    widget: <ProjectHoursWidget />,
  },
  {
    tone: "purple",
    icon: PieChart,
    title: "Rules That Never Look Backward",
    desc: "Change your idle or focus thresholds any time — history keeps the rules it was originally scored under.",
    checks: ["Forward-only threshold changes", "Old data never rewritten", "Fully auditable"],
    widget: <FairIdleWidget />,
  },
];

export default function ItSoftwareSolutionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="SOLUTION — IT & SOFTWARE TEAMS"
        heading="Built for How Software Teams"
        highlight="Actually Get Work Done."
        description="Automatic time tracking, protected focus sessions, and project-level hours — built for distributed engineering teams, without the micromanagement."
        visual={<EngineeringHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE ENGINEERING VISIBILITY GAP"
        heading="Stop Guessing Where Sprint Hours Go"
        subheading="Manual timesheets and status-meeting guesswork don't scale across a distributed engineering team. TrackDots does."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <SolutionFeatureLinks
        eyebrow="BUILT FROM REAL TRACKDOTS FEATURES"
        heading="Everything Your Engineering Org Needs"
        subheading="Automatic tracking, protected deep work, and project-level reporting — explore each capability in depth."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="DEEP WORK, PROTECTED"
        blocks={[
          {
            highlighted: true,
            heading: "Focus Time, Surfaced Automatically",
            desc: "Long, uninterrupted coding sessions are called out separately from meetings and routine activity.",
            checklist: ["Focus sessions detected automatically", "Separate from meeting time"],
          },
          {
            heading: "Never Confused With Idle Time",
            desc: "Deep work that looks quiet on the surface is never mistaken for being unproductive.",
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
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Michael King</div>
              <div className="mt-2 text-[16px] font-bold text-gray-900">4h 40m</div>
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
        heading="Every Angle of Engineering Visibility"
        desc="From automatic tracking to project-level billing — TrackDots gives engineering leaders a complete, honest picture."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Works Wherever Your Engineers Do"
        desc="The TrackDots agent runs natively on macOS and Windows, so remote, hybrid, and in-office engineers all show up in the same dashboard."
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
                {[{ n: "Michael's MacBook Pro", s: "Tracking now" }, { n: "Adam's Windows Laptop", s: "Tracking now" }].map((d) => (
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
          { icon: Clock, value: "0", label: "Manual Timers", desc: "Every hour tracked automatically — nothing for engineers to start or stop.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: TrendUp, value: "4h+", label: "Avg. Focus Session", desc: "Uninterrupted deep-work blocks, tracked and protected.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Folder, value: "100%", label: "Project-Linked Hours", desc: "Every tracked hour ties back to the project it was spent on.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <SolutionJourney
        eyebrow="A DAY IN THE LIFE"
        heading="How TrackDots Fits an Engineer's Actual Day"
        subheading="No extra steps, no EOD timesheet — just an accurate picture of how the day really went."
        steps={JOURNEY_STEPS}
      />

      <FeatureComparison
        heading="Get The Right Tool for Engineering Teams"
        subheading="See how TrackDots compares to tracking engineering time the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="TrackDots for IT & Software Teams, Answered" items={FAQS} />

      <SolutionCTA
        heading="Give Your Engineering Org Real Visibility"
        description="Automatic tracking, protected focus time, and project-level hours your team will actually trust — set up in minutes, not sprints."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "45% 30%" }} loading="lazy" />
            </div>
            <span className="absolute left-[210px] top-[40px] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-bold text-white shadow-lg">
              MK
            </span>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Engineering Team</div>
              <div className="mt-2 space-y-1.5">
                {[
                  { l: "Focus Sessions", v: "26" },
                  { l: "Avg. Length", v: "3h 56m" },
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
                <span className="text-[10px] font-bold text-gray-500">Deep Work</span>
                <TrendUp className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[22px] font-bold text-gray-900">68</span>
                <span className="text-[12px] font-bold text-gray-400">%</span>
                <span className="text-[10px] font-semibold text-green-500">of tracked time</span>
              </div>
            </div>
          </div>
        }
      />
    </main>
  );
}
