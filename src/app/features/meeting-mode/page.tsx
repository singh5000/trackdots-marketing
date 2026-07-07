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
  BarChart,
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
  XCircle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Meeting Mode — TrackDots",
  description:
    "Employees declare meeting sessions with a note; once a manager approves, that time counts as fully productive — never a mark against idle time.",
};

const CAPABILITIES = [
  { icon: Calendar, title: "Employee-Declared Sessions", desc: "Employees declare their own meeting sessions with a quick note on what the meeting was." },
  { icon: CheckCircle, title: "One-Tap Manager Approval", desc: "Managers approve or reject every declared meeting from a single pending queue." },
  { icon: TrendUp, title: "Counts as Fully Productive", desc: "Once approved, meeting time counts as 100% productive — no unfair idle penalties." },
  { icon: FileText, title: "Full Status History", desc: "Every request keeps its status — pending, approved, or rejected — with who decided and when." },
  { icon: ShieldCheck, title: "Never Auto-Approved", desc: "Every declared meeting requires explicit manager approval before it affects any score." },
  { icon: Clock, title: "Exempt From Idle Detection", desc: "Approved meeting time is automatically excluded from idle-time calculations." },
];

const PROBLEMS = [
  "Meetings silently counted as idle or unproductive time",
  "No record of why a block of time wasn't at the keyboard",
  "Employees penalized for time spent in real, necessary meetings",
];
const BENEFITS = [
  "Employees declare meetings with a one-line note",
  "Managers approve or reject in a single tap",
  "Approved meetings always count as fully productive",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Employee-declared meeting sessions", statuses: ["yes", "no", "no"] },
  { capability: "Manager approval queue", statuses: ["yes", "no", "no"] },
  { capability: "Approved time counts as productive", statuses: ["yes", "no", "no"] },
  { capability: "Automatic idle-time exemption", statuses: ["yes", "no", "no"] },
  { capability: "Full pending / approved / rejected history", statuses: ["yes", "no", "no"] },
  { capability: "Feeds directly into productivity scoring", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "How does an employee declare a meeting?", a: "From their dashboard, an employee marks a time range as a meeting and adds a short note describing it — no separate app or calendar sync required." },
  { q: "Does a declared meeting count as productive automatically?", a: "No. It stays Pending until a manager explicitly approves it. Only approved meetings count as fully productive time." },
  { q: "What happens if a manager rejects a meeting request?", a: "The time reverts to being scored as regular tracked activity, exactly as if Meeting Mode had never been used." },
  { q: "Does meeting time affect idle-time reporting?", a: "Yes. Approved meeting time is automatically excluded from idle-time calculations, so it never drags down an employee's efficiency score." },
  { q: "Can I see a history of past approvals?", a: "Yes. Every meeting request keeps a permanent status of pending, approved, or rejected, visible to managers and HR." },
  { q: "Can employees see the status of their own requests?", a: "Yes, on plans with the employee self-view portal enabled, employees can track their own pending, approved, and rejected requests." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Meeting Approvals layout
 * (status tabs, approval table with real columns). */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true, active: true },
  { label: "Analytics", icon: BarChart },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings },
];

const MEETING_ROWS = [
  { name: "Vivek Bharti", date: "Jul 06, 2026", time: "5:44 PM – 6:04 PM", dur: "19m", note: "Discussion With HR Ma'am", status: "Pending" },
  { name: "Sia Chandan", date: "Jul 06, 2026", time: "12:44 PM – 12:51 PM", dur: "7m", note: "Standup sync", status: "Approved" },
  { name: "Prabhjot Kaur", date: "Jul 06, 2026", time: "3:05 PM – 3:18 PM", dur: "13m", note: "Client call", status: "Approved" },
  { name: "Rajesh Kumar", date: "Jul 05, 2026", time: "11:20 AM – 11:22 AM", dur: "2m", note: "Quick check-in", status: "Rejected" },
];

function meetingStatusClasses(status: string) {
  if (status === "Approved") return "bg-green-50 text-green-600";
  if (status === "Rejected") return "bg-red-50 text-red-500";
  return "bg-amber-50 text-amber-600";
}

function MeetingHeroCard() {
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
            {HERO_SIDEBAR_ITEMS.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
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
              <div className="text-[15px] font-bold text-gray-900">Meeting Approvals</div>
              <div className="text-[9px] text-gray-400">Review and approve meeting sessions declared by employees</div>
            </div>

            {/* Status tabs */}
            <div className="flex items-center gap-1.5">
              <span className="rounded-md bg-brand-600 px-2.5 py-1 text-[9.5px] font-semibold text-white">Pending (1)</span>
              <span className="rounded-md bg-gray-50 px-2.5 py-1 text-[9.5px] font-semibold text-gray-500 ring-1 ring-gray-100">Approved</span>
              <span className="rounded-md bg-gray-50 px-2.5 py-1 text-[9.5px] font-semibold text-gray-500 ring-1 ring-gray-100">Rejected</span>
            </div>

            {/* Approval table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="grid grid-cols-[1.3fr_1fr_1.6fr_2fr_0.9fr_1.2fr] gap-2 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>EMPLOYEE</span>
                <span>DATE</span>
                <span>TIME</span>
                <span>NOTE</span>
                <span>STATUS</span>
                <span className="text-right">ACTIONS</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {MEETING_ROWS.map((r) => (
                  <div
                    key={r.name + r.time}
                    className="grid grid-cols-[1.3fr_1fr_1.6fr_2fr_0.9fr_1.2fr] items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-[9.5px]"
                  >
                    <span className="truncate font-semibold text-gray-900">{r.name}</span>
                    <span className="text-gray-500">{r.date}</span>
                    <span className="text-gray-500">
                      {r.time} <span className="text-gray-400">· {r.dur}</span>
                    </span>
                    <span className="truncate text-gray-500">&ldquo;{r.note}&rdquo;</span>
                    <span className={`w-fit rounded-full px-2 py-0.5 text-[8.5px] font-bold ${meetingStatusClasses(r.status)}`}>
                      {r.status}
                    </span>
                    {r.status === "Pending" ? (
                      <span className="flex justify-end gap-1">
                        <span className="rounded-md bg-green-50 px-1.5 py-0.5 text-[8.5px] font-bold text-green-600">Approve</span>
                        <span className="rounded-md bg-red-50 px-1.5 py-0.5 text-[8.5px] font-bold text-red-500">Reject</span>
                      </span>
                    ) : (
                      <span className="text-right text-gray-300">—</span>
                    )}
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

const ApprovalQueueWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Pending Approvals — Today</div>
    <div className="space-y-1.5">
      {[{ n: "Vivek Bharti", t: "5:44 PM – 6:04 PM · 19m" }].map((r) => (
        <div key={r.n} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5">
          <div>
            <div className="text-[10.5px] font-semibold text-white/90">{r.n}</div>
            <div className="text-[8.5px] text-white/50">{r.t}</div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded bg-green-500/20 px-1.5 py-0.5 text-[9px] font-bold text-green-400">✓</span>
            <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[9px] font-bold text-red-400">✕</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NoteWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Declared Session</div>
    <div className="rounded-lg bg-white/10 p-3">
      <div className="text-[10.5px] font-semibold text-white/90">Vivek Bharti · 19m</div>
      <div className="mt-1 text-[10px] italic text-white/60">&ldquo;Discussion With HR Ma&apos;am&rdquo;</div>
    </div>
  </div>
);

const ScoringImpactWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Once Approved"
      stats={[
        { label: "Productivity", value: "100%" },
        { label: "Idle Impact", value: "None" },
        { label: "Reversible", value: "No" },
      ]}
    />
  </div>
);

const StatusHistoryWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "Declared by employee, 5:44 PM", done: true },
        { label: "Reviewed by manager", done: true },
        { label: "Auto-approved without review", done: false },
      ]}
    />
  </div>
);

const IdleExemptWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Today — Active vs. Meeting vs. Idle"
      rows={[
        { label: "Active", pct: 88, value: "7h 55m", color: "green" },
        { label: "Meeting", pct: 4, value: "19m", color: "blue" },
        { label: "Idle", pct: 2, value: "9m", color: "gray" },
      ]}
    />
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Calendar,
    title: "Declared in Seconds",
    desc: "Employees mark a time range as a meeting and add a short note — no calendar sync required.",
    checks: ["One-line note per session", "No separate app needed", "Available to every employee"],
    widget: <NoteWidget />,
  },
  {
    tone: "dark",
    icon: CheckCircle,
    title: "One Queue, One Tap",
    desc: "Every declared meeting lands in a single pending queue for a manager to approve or reject.",
    checks: ["Single pending-approvals queue", "Approve or reject in one tap", "Nothing acted on automatically"],
    widget: <ApprovalQueueWidget />,
  },
  {
    tone: "purple",
    icon: TrendUp,
    title: "Counts as Real Work",
    desc: "Once approved, meeting time counts as fully productive — never a mark against an employee.",
    checks: ["100% productive once approved", "No manual score adjustment needed", "Applied instantly"],
    widget: <ScoringImpactWidget />,
  },
  {
    tone: "dark",
    icon: FileText,
    title: "Nothing Happens Silently",
    desc: "Every request keeps a permanent status — pending, approved, or rejected — visible to managers and HR.",
    checks: ["Full status history retained", "Visible to managers and HR", "Never auto-approved"],
    widget: <StatusHistoryWidget />,
  },
  {
    tone: "purple",
    icon: Clock,
    title: "Idle Time, Correctly Excluded",
    desc: "Approved meeting time is automatically carved out of idle-time calculations for the day.",
    checks: ["Automatic idle exemption", "No manual recalculation", "Reflected the same day"],
    widget: <IdleExemptWidget />,
  },
];

export default function MeetingModePage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — MEETING MODE"
        heading="Meetings Are Work."
        highlight="Score Them That Way."
        description="Employees declare meeting sessions with a note; once a manager approves, that time counts as fully productive — never a mark against idle time."
        visual={<MeetingHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE FAIRNESS GAP"
        heading="Stop Penalizing Real Meetings"
        subheading="A block of time away from the keyboard isn't automatically wasted time. Meeting Mode tells the difference."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="Declared, Approved, Counted"
        subheading="A simple, auditable loop from employee to manager to productivity score."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="APPROVAL QUEUE"
        blocks={[
          {
            highlighted: true,
            heading: "Every Request, One Place",
            desc: "Declared meetings land in a single pending queue, with employee, time range, and note all visible at a glance.",
            checklist: ["Single pending-approvals queue", "Employee note shown per request"],
          },
          {
            heading: "Approve or Reject, Instantly",
            desc: "Managers act on each request in one tap — nothing is approved automatically.",
            checklist: ["One-tap approve or reject", "Never auto-approved"],
          },
        ]}
        linkLabel="Explore Meeting Approvals"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "45% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Vivek Bharti</div>
                <span className="rounded-full bg-amber-50 px-1.5 py-0.5 text-[8px] font-bold text-amber-600">Pending</span>
              </div>
              <div className="mt-2 text-[13px] font-bold text-gray-900">5:44 PM – 6:04 PM</div>
              <div className="text-[10.5px] text-gray-500">19m · &ldquo;Discussion With HR Ma&apos;am&rdquo;</div>
              <div className="mt-3 flex gap-2">
                <span className="flex-1 rounded-lg bg-green-600 py-1.5 text-center text-[10px] font-bold text-white">Approve</span>
                <span className="flex-1 rounded-lg bg-gray-100 py-1.5 text-center text-[10px] font-bold text-gray-600">Reject</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Pending Today</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">1</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">Awaiting manager review</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Meeting Mode"
        desc="From declaration to approval to scoring — TrackDots keeps meeting time fair and fully accounted for."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Never Approved Without a Human"
        desc="No meeting counts as productive time until a manager explicitly reviews and approves it — there's no auto-approval to exploit."
        checklist={["Every request reviewed by a manager", "Approve or reject, never automatic", "Full history, always visible"]}
        linkLabel="See How Approvals Work"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "60% 35%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">This Week</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-[15px] font-bold text-gray-900">6</div>
                  <div className="text-[7.5px] font-semibold uppercase text-gray-400">Approved</div>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900">1</div>
                  <div className="text-[7.5px] font-semibold uppercase text-gray-400">Pending</div>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900">1</div>
                  <div className="text-[7.5px] font-semibold uppercase text-gray-400">Rejected</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Manager
                <br />
                Reviewed
              </span>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: CheckCircle, value: "1-Tap", label: "Approve or Reject", desc: "Managers act on every declared meeting from a single pending queue.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: TrendUp, value: "100%", label: "Productive Once Approved", desc: "Approved meeting time always counts as fully productive work.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Clock, value: "Auto", label: "Idle Exemption", desc: "Approved meeting time is automatically excluded from idle calculations.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="CONNECTED TO IDLE TIME"
        blocks={[
          {
            highlighted: true,
            heading: "No Double Penalty",
            desc: "Time spent in an approved meeting is carved out of idle time automatically — employees are never penalized twice.",
            checklist: ["Automatic idle-time exemption", "Reflected the same day"],
          },
          {
            heading: "One Consistent Picture",
            desc: "Meeting time, active time, and idle time all reconcile into a single, honest daily total.",
            checklist: ["Consistent across every report", "No manual reconciliation needed"],
          },
        ]}
        linkLabel="See Idle Time Tracking"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "50% 55%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Today&apos;s Split</div>
              <div className="mt-3 flex h-[10px] w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[88%] bg-green-500" />
                <div className="h-full w-[4%] bg-blue-500" />
                <div className="h-full w-[2%] bg-gray-300" />
              </div>
              <div className="mt-2 flex justify-between text-[8.5px] font-medium text-gray-400">
                <span>Active 7h 55m</span>
                <span>Meeting 19m</span>
                <span>Idle 9m</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
                <XCircle className="h-3.5 w-3.5" strokeWidth={1.8} />
                Never Double-Counted
              </div>
              <div className="mt-2 text-[13.5px] font-bold text-white">Meeting ≠ Idle</div>
              <div className="mt-2 text-[9px] text-white/40">Approved meetings excluded automatically</div>
            </div>
          </div>
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' meeting handling compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Meeting Mode, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
