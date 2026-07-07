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
import { BarRows, ChecklistRows } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  Activity,
  Bell,
  Calendar,
  CheckCircle,
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
  title: "TrackDots for Legal Services",
  description:
    "Every billable minute tied to the matter it was spent on, with strict role-based access to privileged work and no more manual time entries.",
};

const CAPABILITIES = [
  { icon: Folder, title: "Matter-Level Time Tracking", desc: "Every hour ties back to the legal matter it was spent on, ready for billing.", href: "/features/project-tracking" },
  { icon: Clock, title: "Focus Sessions for Deep Research & Drafting", desc: "Uninterrupted research and drafting work surfaced separately from calls.", href: "/features/focus-sessions" },
  { icon: ShieldCheck, title: "Strict, Role-Based Access", desc: "Privileged work stays visible only to the roles you authorize — never by default.", href: "/features/screenshots" },
  { icon: Activity, title: "Automatic Time Tracking", desc: "No manual six-minute increments — billable time is captured automatically.", href: "/features/time-tracking" },
  { icon: TrendUp, title: "Productivity Intelligence", desc: "Compare utilization and output across attorneys and matters.", href: "/features/productivity-intelligence" },
  { icon: FileText, title: "Payroll & Compliance", desc: "Attendance-based payroll with PF and professional tax handled automatically.", href: "/features/payroll" },
];

const JOURNEY_STEPS = [
  { time: "9:15 AM", icon: Activity, title: "Clock-In, Automatically", desc: "Activity tracking starts the moment work begins — no matter code to select manually." },
  { time: "9:15 AM – 1:50 PM", icon: Clock, title: "Deep Research & Drafting", desc: "A 4h 34m focus session on the Vendor Contract Dispute matter is detected and logged." },
  { time: "1:50 – 2:00 PM", icon: Calendar, title: "Client Call, Declared", desc: "The call is logged via Meeting Mode, approved, and counted as productive." },
  { time: "2:35 – 6:07 PM", icon: Monitor, title: "Back to Drafting Work", desc: "The afternoon session is tracked and tied to the same matter automatically." },
  { time: "6:15 PM", icon: CheckCircle, title: "Time Entries Roll Up, Ready to Bill", desc: "Billable time is ready for the client invoice — no six-minute-increment guesswork." },
];

const PROBLEMS = [
  "Billable minutes reconstructed from memory at the end of the day",
  "No real confidentiality boundary around privileged client work",
  "Realization rates guessed at, not measured",
];
const BENEFITS = [
  "Every hour automatically tied to the matter it was spent on",
  "Privileged work restricted to exactly the roles you authorize",
  "Real utilization data, not a guess at month-end",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Matter-level time allocation", statuses: ["yes", "partial", "no"] },
  { capability: "Automatic, zero-setup time capture", statuses: ["yes", "yes", "no"] },
  { capability: "Strict role-based access to privileged work", statuses: ["yes", "no", "no"] },
  { capability: "Focus-session detection for drafting & research", statuses: ["yes", "no", "no"] },
  { capability: "Cross-matter utilization comparison", statuses: ["yes", "no", "no"] },
  { capability: "Direct payroll integration", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "Can I track time per legal matter?", a: "Yes. Project Tracking ties every tracked hour to the matter it was spent on, so per-matter billing is accurate and defensible." },
  { q: "How is confidentiality protected for privileged work?", a: "Access is role-gated by default, and Screenshot Monitoring is entirely optional and configurable — never on without your organization choosing it." },
  { q: "Does this replace manual time entries?", a: "Yes. Billable time is captured automatically from real tracked activity, removing the need to reconstruct entries after the fact." },
  { q: "Can I measure realization rate?", a: "Time tracked per matter combined with billing data gives you a real basis for realization, rather than an end-of-quarter estimate." },
  { q: "Does payroll integrate with attendance?", a: "Yes. Attendance and tracked hours feed directly into the payroll run, including PF and professional tax." },
  { q: "Can attorneys see their own tracked time?", a: "Yes, on plans with the employee self-view portal enabled, every attorney sees the exact same data a partner would." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * solution/feature page — content recombines real Focus Sessions and
 * Project Tracking data already fetched from the live product, framed
 * around a generic invented legal matter (never a real client name). */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true },
  { label: "Analytics", icon: Activity },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings, active: true },
];

const MATTER_STATS = [
  { label: "ACTIVE MATTERS", value: "3" },
  { label: "BILLABLE HOURS TODAY", value: "26h" },
  { label: "AVG FOCUS SESSION", value: "4h 05m" },
  { label: "REALIZATION RATE", value: "94%", green: true },
];

const STAFF_ROWS = [
  { name: "Piyush Rajput", role: "Software Engineer", tool: "chrome · 4h 34m", focus: "Focus 4h 34m" },
  { name: "Rajesh Kumar", role: "Senior Software Engineer", tool: "chrome · 2h 41m", focus: "Focus 4h 32m" },
  { name: "Nihar Ranjan Mohanta", role: "Software Engineer", tool: "chrome · 20m", focus: "Focus 4h 21m" },
  { name: "Prabhjot Kaur", role: "Quality Analyst", tool: "chrome · 7h 37m", focus: "Focus 4h 05m" },
];

function LegalHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Matter Overview — Today</div>
              <div className="text-[9px] text-gray-400">Vendor Contract Dispute · Harlow Industries</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {MATTER_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div className={`mt-1 text-[15px] font-bold ${s.green ? "text-green-500" : "text-gray-900"}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Staff rows */}
            <div className="space-y-2">
              {STAFF_ROWS.map((e) => (
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
      {[{ l: "Matters", v: "3" }, { l: "Manual Entries", v: "0" }, { l: "Billable Hrs", v: "26h" }].map((s) => (
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
        { label: "Piyush", pct: 95, value: "4h 34m", color: "green" },
        { label: "Rajesh", pct: 94, value: "4h 32m", color: "green" },
        { label: "Nihar", pct: 90, value: "4h 21m", color: "green" },
      ]}
    />
  </div>
);

const AccessWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "Partners — full access", done: true },
        { label: "Assigned attorneys — matter-scoped access", done: true },
        { label: "Public / unauthenticated", done: false },
      ]}
    />
  </div>
);

const ProjectHoursWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Vendor Contract Dispute — This Week"
      rows={[
        { label: "Piyush", pct: 72, value: "14h", color: "brand" },
        { label: "Rajesh", pct: 60, value: "12h", color: "blue" },
        { label: "Nihar", pct: 50, value: "10h", color: "violet" },
      ]}
    />
  </div>
);

const RealizationWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Realization — This Month</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Firm average</span>
      <span className="text-[13px] font-bold text-green-400">94%</span>
    </div>
    <div className="mt-1.5 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Top realization</span>
      <span className="text-[10.5px] font-bold text-white">Piyush Rajput</span>
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Activity,
    title: "Tracking That Respects Privileged Work",
    desc: "No manual entries to log per matter — activity is captured automatically the moment work begins.",
    checks: ["Zero-setup, zero manual entries", "Works across every matter", "Runs quietly in the background"],
    widget: <AutoTrackWidget />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Deep Work, Made Visible",
    desc: "Uninterrupted research and drafting sessions are surfaced separately from client calls.",
    checks: ["30-minute minimum, configurable", "Separate from meeting time", "Per-attorney focus trends"],
    widget: <FocusWidget />,
  },
  {
    tone: "purple",
    icon: ShieldCheck,
    title: "Access, Strictly Controlled",
    desc: "Privileged matter work is visible only to the roles you authorize, never by default.",
    checks: ["Role-based access control", "Matter-scoped visibility", "No public exposure, ever"],
    widget: <AccessWidget />,
  },
  {
    tone: "dark",
    icon: Folder,
    title: "Hours That Map to Matters",
    desc: "Every tracked hour ties back to the matter it was spent on — ready for the next invoice.",
    checks: ["Matter-level time allocation", "Per-contributor breakdown", "Feeds directly into billing"],
    widget: <ProjectHoursWidget />,
  },
  {
    tone: "purple",
    icon: TrendUp,
    title: "Realization You Can Measure",
    desc: "Real tracked time against billed time gives you an actual realization figure, not a guess.",
    checks: ["Firm-wide and per-attorney realization", "Fair, side-by-side comparison", "Exportable for partner reviews"],
    widget: <RealizationWidget />,
  },
];

export default function LegalServicesSolutionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="SOLUTION — LEGAL SERVICES"
        heading="Every Billable Minute,"
        highlight="On the Record."
        description="Every hour tied to the legal matter it was spent on, with strict role-based access to privileged work and no more manual time entries."
        visual={<LegalHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE BILLABLE-MINUTE GAP"
        heading="Stop Reconstructing Time Entries at Day's End"
        subheading="Six-minute increments guessed at from memory rarely hold up to a client's bill review. TrackDots keeps the real record."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <SolutionFeatureLinks
        eyebrow="BUILT FROM REAL TRACKDOTS FEATURES"
        heading="Everything Your Practice Needs"
        subheading="Automatic tracking, strict access control, and matter-level reporting — explore each capability in depth."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="DEEP WORK, PROTECTED"
        blocks={[
          {
            highlighted: true,
            heading: "Focus Time, Surfaced Automatically",
            desc: "Long, uninterrupted research and drafting sessions are called out separately from client calls.",
            checklist: ["Focus sessions detected automatically", "Separate from meeting time"],
          },
          {
            heading: "Never Confused With Idle Time",
            desc: "Deep, quiet drafting work is never mistaken for being unproductive.",
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
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Piyush Rajput</div>
              <div className="mt-2 text-[16px] font-bold text-gray-900">4h 34m</div>
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
        heading="Every Angle of Practice Visibility"
        desc="From matter tracking to auditable realization — TrackDots gives firm leaders a complete, defensible picture."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Privilege, Protected by Design"
        desc="Only partners and assigned attorneys can ever see a given matter's work — nothing is visible by default, and nothing captured secretly."
        checklist={["Role-based, matter-scoped access", "Screenshot capture entirely optional", "Full audit trail on every change"]}
        linkLabel="See Access Controls"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Access — Vendor Contract Dispute</div>
              <div className="mt-2 flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                <span className="text-[9.5px] font-medium text-gray-600">Partners</span>
                <span className="text-[9.5px] font-bold text-brand-600">Full Access</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                <span className="text-[9.5px] font-medium text-gray-600">Assigned Attorneys</span>
                <span className="text-[9.5px] font-bold text-brand-600">Matter Only</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Privileged,
                <br />
                Protected
              </span>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: Folder, value: "100%", label: "Matter-Linked Hours", desc: "Every tracked hour ties back to the matter it was spent on.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: ShieldCheck, value: "Role-Gated", label: "Privileged Access", desc: "Only partners and assigned attorneys can ever see a matter's work.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: TrendUp, value: "94%", label: "Realization Rate", desc: "Real tracked-vs-billed time, measured — not estimated.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <SolutionJourney
        eyebrow="A DAY IN THE LIFE"
        heading="How TrackDots Fits an Attorney's Actual Day"
        subheading="No extra steps, no reconstructed time entries — just an accurate, per-matter picture of how the day really went."
        steps={JOURNEY_STEPS}
      />

      <FeatureComparison
        heading="Get The Right Tool for Legal Services"
        subheading="See how TrackDots compares to tracking billable time the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="TrackDots for Legal Services, Answered" items={FAQS} />

      <SolutionCTA
        heading="Put Every Billable Minute on the Record"
        description="Automatic tracking, strict privileged-work access, and matter-level hours your partners — and your clients — will actually trust."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "50% 30%" }} loading="lazy" />
            </div>
            <span className="absolute left-[210px] top-[40px] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-bold text-white shadow-lg">
              PR
            </span>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Vendor Contract Dispute</div>
              <div className="mt-2 space-y-1.5">
                {[
                  { l: "Hours This Week", v: "36h" },
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
                <span className="text-[10px] font-bold text-gray-500">Realization</span>
                <TrendUp className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[22px] font-bold text-gray-900">94</span>
                <span className="text-[12px] font-bold text-gray-400">%</span>
              </div>
            </div>
          </div>
        }
      />
    </main>
  );
}
