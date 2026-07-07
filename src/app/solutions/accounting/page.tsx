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
import { BarRows, ChecklistRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  Activity,
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
  Search,
  Settings,
  ShieldCheck,
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "TrackDots for Accounting & Finance Firms",
  description:
    "Every billable hour tied to the client engagement it was spent on, with role-based access control and payroll you can audit.",
};

const CAPABILITIES = [
  { icon: Folder, title: "Client Engagement Tracking", desc: "Every audit or filing hour ties back to the client engagement it was spent on.", href: "/features/project-tracking" },
  { icon: CalendarCheck, title: "Deadline-Ready Attendance", desc: "Automatic attendance, critical during month-end close and filing season.", href: "/features/attendance" },
  { icon: Clock, title: "Focus Sessions for Deep Reconciliation", desc: "Uninterrupted reconciliation and prep work surfaced separately from calls.", href: "/features/focus-sessions" },
  { icon: ShieldCheck, title: "Role-Based Access Control", desc: "Sensitive client work stays visible only to the roles you authorize.", href: "/features/screenshots" },
  { icon: FileText, title: "Payroll You Can Audit", desc: "PF, professional tax, and net pay calculated automatically, always itemized.", href: "/features/payroll" },
  { icon: TrendUp, title: "Productivity Intelligence", desc: "Compare utilization across staff and engagements, fairly.", href: "/features/productivity-intelligence" },
];

const JOURNEY_STEPS = [
  { time: "9:42 AM", icon: Activity, title: "Clock-In, Automatically", desc: "Activity tracking starts the moment work begins — no engagement code to select." },
  { time: "9:42 AM – 1:46 PM", icon: Clock, title: "Deep Reconciliation Work", desc: "A 3h 55m focus session on the Q3 Statutory Audit is detected and logged." },
  { time: "1:46 – 2:00 PM", icon: Calendar, title: "Client Call, Declared", desc: "The call is logged via Meeting Mode, approved, and counted as productive." },
  { time: "2:29 – 6:31 PM", icon: Monitor, title: "Back to Filing Work", desc: "The afternoon session is tracked and tied to the same engagement automatically." },
  { time: "6:45 PM", icon: CheckCircle, title: "Hours Roll Up, Ready to Bill", desc: "Billable hours are ready for the client invoice — no reconstruction needed." },
];

const PROBLEMS = [
  "Billable hours reconstructed by hand during the busiest filing weeks",
  "No clear audit trail between hours logged and hours billed",
  "Sensitive client financial work with no real access control",
];
const BENEFITS = [
  "Every hour automatically tied to the client engagement",
  "A defensible, auditable record — not a rounded estimate",
  "Access restricted to exactly the roles you authorize",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Client engagement-level time allocation", statuses: ["yes", "partial", "no"] },
  { capability: "Deadline-critical attendance tracking", statuses: ["yes", "partial", "no"] },
  { capability: "Role-based access to sensitive work", statuses: ["yes", "no", "no"] },
  { capability: "Itemized, automatic payroll deductions", statuses: ["yes", "no", "no"] },
  { capability: "Cross-engagement productivity comparison", statuses: ["yes", "no", "no"] },
  { capability: "Full audit trail on every change", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "Can I track time per client engagement?", a: "Yes. Project Tracking ties every tracked hour to the engagement it was spent on, so per-client billing is accurate and auditable." },
  { q: "Does this help during month-end close or filing season?", a: "Yes. Automatic attendance and payroll integration keep the busiest weeks accurate without extra manual reconciliation." },
  { q: "Can we restrict access to sensitive client work?", a: "Yes. Screenshot access, employee data, and reports are all role-gated — only the roles you authorize can view them." },
  { q: "Does payroll handle PF and professional tax automatically?", a: "Yes. Both are calculated and deducted per employee as part of every payroll run, fully itemized." },
  { q: "Can we compare utilization across staff fairly?", a: "Yes. Productivity Intelligence and Compare use the same scoring engine for every staff member." },
  { q: "Can staff see their own tracked time?", a: "Yes, on plans with the employee self-view portal enabled, every staff member sees the exact same data a manager would." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * solution/feature page — content recombines real Focus Sessions, Payroll,
 * and Project Tracking data already fetched from the live product, framed
 * around a generic invented client engagement. */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true },
  { label: "Analytics", icon: Activity },
  { label: "Reports", icon: FileText, active: true },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings },
];

const ENGAGEMENT_STATS = [
  { label: "ACTIVE STAFF", value: "4" },
  { label: "BILLABLE HOURS TODAY", value: "28h" },
  { label: "AVG FOCUS SESSION", value: "4h 02m" },
  { label: "FILING DEADLINE", value: "12 Days", amber: true },
];

const STAFF_ROWS = [
  { name: "Deepak Chauhan", role: "Software Engineer", tool: "ms-teams · 50m", focus: "Focus 4h 01m" },
  { name: "Dheeraj Lakhera", role: "Software Engineer", tool: "chrome · 3h 52m", focus: "Focus 4h 09m" },
  { name: "Anchal Sahi", role: "SEO Executive", tool: "chrome · 4h 12m", focus: "Focus 4h 12m" },
  { name: "Satyajit Singh", role: "Software Engineer", tool: "Code · 2h 54m", focus: "Focus 4h 09m" },
];

function FinanceHeroCard() {
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
              <div className="text-[15px] font-bold text-gray-900">Engagement Overview — Today</div>
              <div className="text-[9px] text-gray-400">Q3 Statutory Audit · Ridgeway Holdings</div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {ENGAGEMENT_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div className={`mt-1 text-[15px] font-bold ${s.amber ? "text-amber-500" : "text-gray-900"}`}>{s.value}</div>
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
      {[{ l: "Staff", v: "4" }, { l: "Manual Timers", v: "0" }, { l: "Billable Hrs", v: "28h" }].map((s) => (
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
        { label: "Dheeraj", pct: 92, value: "4h 09m", color: "green" },
        { label: "Satyajit", pct: 91, value: "4h 09m", color: "green" },
        { label: "Anchal", pct: 90, value: "4h 12m", color: "green" },
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
        { label: "Engagement staff — assigned clients only", done: true },
        { label: "Public / unauthenticated", done: false },
      ]}
    />
  </div>
);

const ProjectHoursWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Q3 Statutory Audit — This Week"
      rows={[
        { label: "Prabhjot", pct: 70, value: "14h", color: "brand" },
        { label: "Dheeraj", pct: 60, value: "12h", color: "blue" },
        { label: "Satyajit", pct: 55, value: "11h", color: "violet" },
      ]}
    />
  </div>
);

const PayrollWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="July Payroll — Projected"
      stats={[
        { label: "Gross", value: "₹9,01,262" },
        { label: "Deductions", value: "₹10,999" },
        { label: "Net", value: "₹8,90,263" },
      ]}
    />
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Activity,
    title: "Tracking That Respects Filing Season",
    desc: "No manual timers to start per engagement — activity is captured automatically the moment work begins.",
    checks: ["Zero-setup, zero manual timers", "Works across every engagement", "Runs quietly in the background"],
    widget: <AutoTrackWidget />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Deep Work, Made Visible",
    desc: "Uninterrupted reconciliation and prep sessions are surfaced separately from client calls.",
    checks: ["30-minute minimum, configurable", "Separate from meeting time", "Per-staff focus trends"],
    widget: <FocusWidget />,
  },
  {
    tone: "purple",
    icon: ShieldCheck,
    title: "Access, Strictly Controlled",
    desc: "Sensitive client financial work is visible only to the roles you authorize, never by default.",
    checks: ["Role-based access control", "Engagement-scoped visibility", "No public exposure, ever"],
    widget: <AccessWidget />,
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
    icon: FileText,
    title: "Payroll You Can Audit",
    desc: "Gross, deductions, and net pay are all itemized — never a single opaque number.",
    checks: ["PF calculated automatically", "Professional tax calculated automatically", "Fully itemized, every run"],
    widget: <PayrollWidget />,
  },
];

export default function AccountingFinanceSolutionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="SOLUTION — ACCOUNTING & FINANCE"
        heading="Every Billable Hour,"
        highlight="Fully Defensible."
        description="Every hour tied to the client engagement it was spent on, with role-based access control and payroll you can audit."
        visual={<FinanceHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE AUDIT-TRAIL GAP"
        heading="Stop Reconstructing Timesheets Mid-Filing-Season"
        subheading="Billable hours estimated during the busiest weeks rarely survive an audit. TrackDots keeps the real record."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <SolutionFeatureLinks
        eyebrow="BUILT FROM REAL TRACKDOTS FEATURES"
        heading="Everything Your Firm Needs"
        subheading="Automatic tracking, controlled access, and engagement-level reporting — explore each capability in depth."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="DEEP WORK, PROTECTED"
        blocks={[
          {
            highlighted: true,
            heading: "Focus Time, Surfaced Automatically",
            desc: "Long, uninterrupted reconciliation and prep work is called out separately from client calls.",
            checklist: ["Focus sessions detected automatically", "Separate from meeting time"],
          },
          {
            heading: "Never Confused With Idle Time",
            desc: "Deep, quiet analytical work is never mistaken for being unproductive.",
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
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Dheeraj Lakhera</div>
              <div className="mt-2 text-[16px] font-bold text-gray-900">4h 09m</div>
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
        heading="Every Angle of Firm Visibility"
        desc="From engagement tracking to auditable payroll — TrackDots gives finance leaders a complete, defensible picture."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Access, Scoped to the Engagement"
        desc="Only partners and assigned engagement staff can see a given client's work — nothing is visible by default."
        checklist={["Role-based access control", "Engagement-scoped visibility", "Full audit trail on every change"]}
        linkLabel="See Access Controls"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "60% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Access — Q3 Statutory Audit</div>
              <div className="mt-2 flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                <span className="text-[9.5px] font-medium text-gray-600">Partners</span>
                <span className="text-[9.5px] font-bold text-brand-600">Full Access</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                <span className="text-[9.5px] font-medium text-gray-600">Engagement Staff</span>
                <span className="text-[9.5px] font-bold text-brand-600">Assigned Only</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Scoped,
                <br />
                Not Shared
              </span>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: Folder, value: "100%", label: "Engagement-Linked Hours", desc: "Every tracked hour ties back to the client engagement it was spent on.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: FileText, value: "PF + Tax", label: "Auditable Payroll", desc: "Provident Fund and professional tax itemized on every run.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: ShieldCheck, value: "Role-Gated", label: "Client Confidentiality", desc: "Only partners and assigned staff can ever see a client's work.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <SolutionJourney
        eyebrow="A DAY IN THE LIFE"
        heading="How TrackDots Fits a Finance Team's Actual Day"
        subheading="No extra steps, no reconstructed timesheets — just an accurate, per-engagement picture of how the day really went."
        steps={JOURNEY_STEPS}
      />

      <FeatureComparison
        heading="Get The Right Tool for Accounting & Finance"
        subheading="See how TrackDots compares to tracking client engagements the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="TrackDots for Accounting & Finance Firms, Answered" items={FAQS} />

      <SolutionCTA
        heading="Make Every Billable Hour Defensible"
        description="Automatic tracking, controlled access, and engagement-level hours your partners — and your auditors — will actually trust."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "45% 25%" }} loading="lazy" />
            </div>
            <span className="absolute left-[210px] top-[40px] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-bold text-white shadow-lg">
              DC
            </span>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Q3 Statutory Audit</div>
              <div className="mt-2 space-y-1.5">
                {[
                  { l: "Hours This Week", v: "37h" },
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
