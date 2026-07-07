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
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "TrackDots for Consulting Firms",
  description:
    "Utilization calculated automatically, billable hours tied to the engagement they were spent on — no more reconstructing timesheets at month-end.",
};

const CAPABILITIES = [
  { icon: Folder, title: "Engagement-Level Project Tracking", desc: "Every hour ties back to the client engagement it was spent on.", href: "/features/project-tracking" },
  { icon: PieChart, title: "Utilization & Idle Insight", desc: "See true active-vs-idle time per consultant, fairly and configurably.", href: "/features/idle-time" },
  { icon: Activity, title: "Automatic Time Tracking", desc: "No manual timesheets — billable hours are captured automatically.", href: "/features/time-tracking" },
  { icon: TrendUp, title: "Productivity Intelligence", desc: "Compare utilization and output across consultants and engagements.", href: "/features/productivity-intelligence" },
  { icon: Clock, title: "Focus Sessions for Deep Work", desc: "Deliverable work surfaced separately from calls and admin.", href: "/features/focus-sessions" },
  { icon: CalendarCheck, title: "Attendance & Payroll Integration", desc: "Attendance and billable hours flow straight into payroll, without re-entry.", href: "/features/payroll" },
];

const JOURNEY_STEPS = [
  { time: "9:41 AM", icon: Activity, title: "Clock-In, Automatically", desc: "Activity tracking starts the moment work begins — no engagement code to select." },
  { time: "9:41 AM – 1:41 PM", icon: Clock, title: "Deep Engagement Work", desc: "A 3h 32m focus session on the ERP Rollout Advisory engagement is detected and logged." },
  { time: "1:41 – 2:00 PM", icon: Calendar, title: "Client Status Call, Declared", desc: "The call is logged via Meeting Mode, approved, and counted as productive." },
  { time: "2:22 – 6:35 PM", icon: Monitor, title: "Back to Deliverable Work", desc: "The afternoon session is tracked and tied to the same engagement automatically." },
  { time: "6:45 PM", icon: CheckCircle, title: "Utilization Rolls Up, Automatically", desc: "Billable hours and utilization are ready — no month-end reconstruction needed." },
];

const PROBLEMS = [
  "Utilization rates calculated from memory at month-end",
  "No clear view of which engagement is actually consuming consultant time",
  "Billable vs. non-billable hours reconstructed after the fact",
];
const BENEFITS = [
  "Utilization calculated automatically, updated daily",
  "Every hour tied to the engagement it was spent on",
  "Billable and non-billable time separated automatically",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Engagement-level time allocation", statuses: ["yes", "partial", "no"] },
  { capability: "Automatic utilization calculation", statuses: ["yes", "no", "no"] },
  { capability: "Zero-setup automatic tracking", statuses: ["yes", "yes", "no"] },
  { capability: "Focus-session detection for deliverable work", statuses: ["yes", "no", "no"] },
  { capability: "Cross-engagement productivity comparison", statuses: ["yes", "no", "no"] },
  { capability: "Direct payroll integration", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "Can I track utilization per consultant?", a: "Yes. Idle Time and Time Tracking data roll up automatically into an active-vs-idle utilization figure for every consultant." },
  { q: "Can I see time spent per client engagement?", a: "Yes. Project Tracking ties every tracked hour to the engagement it was spent on, so per-engagement reporting is automatic." },
  { q: "Does this work for consultants who travel or work onsite?", a: "Yes. The agent runs natively on macOS and Windows and works anywhere there's an internet connection." },
  { q: "Can I separate billable from internal or admin time?", a: "Yes. Time can be associated with a specific client engagement, keeping internal work clearly separate." },
  { q: "Can I compare utilization across the team fairly?", a: "Yes. Productivity Intelligence and Compare use the same scoring engine for every consultant, so comparisons are apples-to-apples." },
  { q: "Does billable time flow into payroll?", a: "Yes. Attendance and tracked hours feed directly into the payroll run, with no manual re-entry." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * solution/feature page — content recombines real Idle Time, Focus Sessions,
 * and App Usage data already fetched from the live product, framed around
 * a generic invented client engagement (never a real external client name). */
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

const ENGAGEMENT_STATS = [
  { label: "ACTIVE CONSULTANTS", value: "4" },
  { label: "TEAM UTILIZATION", value: "97%", green: true },
  { label: "AVG FOCUS SESSION", value: "3h 58m" },
  { label: "BILLABLE HOURS TODAY", value: "30h" },
];

const CONSULTANT_ROWS = [
  { name: "Ankur Mishra", role: "Senior Software Engineer", tool: "Google Chrome · 5h 55m", util: "97% utilized" },
  { name: "Prabhjot Kaur", role: "Quality Analyst", tool: "chrome · 7h 37m", util: "100% utilized" },
  { name: "Rajesh Kumar", role: "Senior Software Engineer", tool: "chrome · 2h 41m", util: "100% utilized" },
  { name: "Mohsin Khan", role: "Head of Technology", tool: "Firefox · 1h 00m", util: "100% utilized" },
];

function ConsultingHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Engagement Utilization — Today</div>
              <div className="text-[9px] text-gray-400">ERP Rollout Advisory · Meridian Manufacturing</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {ENGAGEMENT_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div className={`mt-1 text-[15px] font-bold ${s.green ? "text-green-500" : "text-gray-900"}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Consultant rows */}
            <div className="space-y-2">
              {CONSULTANT_ROWS.map((e) => (
                <div key={e.name} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                  <div className="w-[150px] shrink-0">
                    <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                    <div className="text-[8px] text-gray-400">{e.role}</div>
                  </div>
                  <span className="rounded-md bg-gray-50 px-2 py-1 text-[8.5px] font-medium text-gray-600 ring-1 ring-gray-100">
                    {e.tool}
                  </span>
                  <span className="rounded-md bg-green-50 px-2 py-1 text-[8.5px] font-bold text-green-600">{e.util}</span>
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
      {[{ l: "Engagements", v: "3" }, { l: "Manual Timers", v: "0" }, { l: "Billable Hrs", v: "30h" }].map((s) => (
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
        { label: "Rajesh", pct: 100, value: "4h 32m", color: "green" },
        { label: "Mohsin", pct: 92, value: "4h 41m", color: "green" },
        { label: "Prabhjot", pct: 84, value: "4h 05m", color: "green" },
      ]}
    />
  </div>
);

const UtilizationWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Utilization — This Week"
      stats={[
        { label: "Ankur", value: "97%" },
        { label: "Prabhjot", value: "100%" },
        { label: "Rajesh", value: "100%" },
      ]}
    />
  </div>
);

const ProjectHoursWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="ERP Rollout Advisory — This Week"
      rows={[
        { label: "Ankur", pct: 75, value: "15h", color: "brand" },
        { label: "Rajesh", pct: 65, value: "13h", color: "blue" },
        { label: "Mohsin", pct: 55, value: "11h", color: "violet" },
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
      <span className="text-[10.5px] text-white/80">Top utilization</span>
      <span className="text-[10.5px] font-bold text-white">Prabhjot Kaur</span>
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Activity,
    title: "Tracking That Respects the Engagement",
    desc: "No manual timers to start per engagement — activity is captured automatically the moment work begins.",
    checks: ["Zero-setup, zero manual timers", "Works across every engagement", "Runs quietly in the background"],
    widget: <AutoTrackWidget />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Deep Work, Made Visible",
    desc: "Uninterrupted deliverable work is surfaced separately from calls and internal admin.",
    checks: ["30-minute minimum, configurable", "Separate from meeting time", "Per-consultant focus trends"],
    widget: <FocusWidget />,
  },
  {
    tone: "purple",
    icon: PieChart,
    title: "Utilization, Calculated Fairly",
    desc: "Active-vs-idle time rolls up into a clean utilization figure — no spreadsheet math required.",
    checks: ["Configurable idle thresholds", "Forward-only rule changes", "Per-consultant and team-wide"],
    widget: <UtilizationWidget />,
  },
  {
    tone: "dark",
    icon: Folder,
    title: "Hours That Map to Engagements",
    desc: "Every tracked hour ties back to the engagement it was spent on — ready for the next invoice.",
    checks: ["Engagement-level time allocation", "Per-contributor breakdown", "Feeds directly into billing"],
    widget: <ProjectHoursWidget />,
  },
  {
    tone: "purple",
    icon: TrendUp,
    title: "Utilization You Can Compare",
    desc: "Team-wide utilization and productivity trends, backed by the same scoring engine for everyone.",
    checks: ["Team average & top utilization", "Fair, side-by-side comparison", "Exportable for partner reviews"],
    widget: <TrendsWidget />,
  },
];

export default function ConsultingFirmsSolutionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="SOLUTION — CONSULTING FIRMS"
        heading="Utilization You Can"
        highlight="Actually Prove."
        description="Utilization calculated automatically and billable hours tied to the engagement they were spent on — no more reconstructing timesheets at month-end."
        visual={<ConsultingHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE UTILIZATION GAP"
        heading="Stop Estimating Utilization at Month-End"
        subheading="Billable hours reconstructed from memory rarely hold up in a partner review. TrackDots keeps the real record."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <SolutionFeatureLinks
        eyebrow="BUILT FROM REAL TRACKDOTS FEATURES"
        heading="Everything Your Practice Needs"
        subheading="Automatic tracking, fair utilization, and engagement-level reporting — explore each capability in depth."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="DEEP WORK, PROTECTED"
        blocks={[
          {
            highlighted: true,
            heading: "Focus Time, Surfaced Automatically",
            desc: "Long, uninterrupted deliverable work is called out separately from calls and routine admin.",
            checklist: ["Focus sessions detected automatically", "Separate from meeting time"],
          },
          {
            heading: "Never Confused With Idle Time",
            desc: "Deep analytical or deliverable work that looks quiet on the surface is never mistaken for being unproductive.",
            checklist: ["Keystroke & mouse signals scored fairly", "Configurable idle thresholds"],
          },
        ]}
        linkLabel="See Focus Sessions"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "45% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Rajesh Kumar</div>
              <div className="mt-2 text-[16px] font-bold text-gray-900">4h 32m</div>
              <div className="text-[10px] font-semibold text-green-600">Single-session deep work, today</div>
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
        heading="Every Angle of Practice Visibility"
        desc="From automatic tracking to engagement-level billing — TrackDots gives practice leaders a complete, honest picture."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Works Wherever Your Consultants Do"
        desc="The TrackDots agent runs natively on macOS and Windows, so onsite, remote, and travelling consultants all show up in the same dashboard."
        checklist={["Native macOS & Windows agent", "Works anywhere with an internet connection", "Auto-updates, verified before install"]}
        linkLabel="See Supported Platforms"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "65% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Connected Devices</div>
              <div className="mt-2 space-y-1.5">
                {[{ n: "Ankur's Windows Laptop", s: "Tracking now" }, { n: "Mohsin's MacBook Pro", s: "Tracking now" }].map((d) => (
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
          { icon: PieChart, value: "97%", label: "Team Utilization", desc: "Today's active-vs-idle utilization across the whole practice.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: TrendUp, value: "4h+", label: "Avg. Focus Session", desc: "Uninterrupted deliverable work, tracked and protected.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Folder, value: "100%", label: "Engagement-Linked Hours", desc: "Every tracked hour ties back to the engagement it was spent on.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <SolutionJourney
        eyebrow="A DAY IN THE LIFE"
        heading="How TrackDots Fits a Consultant's Actual Day"
        subheading="No extra steps, no month-end reconstruction — just an accurate, per-engagement picture of how the day really went."
        steps={JOURNEY_STEPS}
      />

      <FeatureComparison
        heading="Get The Right Tool for Consulting Firms"
        subheading="See how TrackDots compares to tracking engagement time the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="TrackDots for Consulting Firms, Answered" items={FAQS} />

      <SolutionCTA
        heading="Turn Utilization Into a Provable Number"
        description="Automatic tracking, fair utilization, and engagement-level hours your partners — and your clients — will actually trust."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "40% 30%" }} loading="lazy" />
            </div>
            <span className="absolute left-[210px] top-[40px] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-bold text-white shadow-lg">
              AM
            </span>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">ERP Rollout Advisory</div>
              <div className="mt-2 space-y-1.5">
                {[
                  { l: "Hours This Week", v: "39h" },
                  { l: "Contributors", v: "3" },
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
                <span className="text-[10px] font-bold text-gray-500">Utilization</span>
                <TrendUp className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[22px] font-bold text-gray-900">97</span>
                <span className="text-[12px] font-bold text-gray-400">%</span>
              </div>
            </div>
          </div>
        }
      />
    </main>
  );
}
