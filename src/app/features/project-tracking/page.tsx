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
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Project Tracking — TrackDots",
  description:
    "Every project, team member, client, budget, and deadline in one place — with a status pipeline from Planning through Archived.",
};

const CAPABILITIES = [
  { icon: Folder, title: "Full Project Roster", desc: "Every project in one place, with team members, client, budget, and deadline at a glance." },
  { icon: TrendUp, title: "Status Pipeline", desc: "Track projects through Planning, Active, On Hold, Completed, or Archived." },
  { icon: Users, title: "Team Assignment", desc: "Assign any number of employees to a project, and see every assignment in one view." },
  { icon: FileText, title: "Phase & Description Tracking", desc: "Keep a short phase or description current for every project, right in the list." },
  { icon: Monitor, title: "Client Association", desc: "Tag projects to a client for easy filtering and reporting." },
  { icon: Settings, title: "One-Click Profile & Edit", desc: "Open a full project profile or edit any detail without leaving the list." },
];

const PROBLEMS = [
  "Project status scattered across spreadsheets and chat threads",
  "No single view of who's actually assigned to what",
  "Deadlines and budgets tracked nowhere central",
];
const BENEFITS = [
  "Every project, member, and deadline in one list",
  "A clear status pipeline from Planning to Archived",
  "Assign, edit, and review projects without leaving the page",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Centralized project roster", statuses: ["yes", "partial", "no"] },
  { capability: "Status pipeline (Planning → Archived)", statuses: ["yes", "no", "no"] },
  { capability: "Team member assignment per project", statuses: ["yes", "partial", "no"] },
  { capability: "Client association per project", statuses: ["yes", "no", "no"] },
  { capability: "Direct link to time-tracking data", statuses: ["yes", "no", "no"] },
  { capability: "Budget & deadline tracking", statuses: ["yes", "partial", "partial"] },
];

const FAQS = [
  { q: "Can I assign multiple employees to a project?", a: "Yes. Any number of employees can be assigned to a project, and every assignment shows in the project list." },
  { q: "What statuses can a project have?", a: "Planning, Active, On Hold, Completed, or Archived — filterable with a single click." },
  { q: "Can I track a budget and deadline per project?", a: "Yes. Both are optional fields shown directly in the project list." },
  { q: "Can I associate a project with a client?", a: "Yes. Projects can be tagged to a client for easy filtering and reporting." },
  { q: "Does project tracking connect to time tracking?", a: "Yes. Time tracked while working on a project rolls up into that project's reporting." },
  { q: "Can I edit a project after creating it?", a: "Yes. Every project can be edited in place — name, description, members, client, budget, and deadline." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Projects layout
 * (status tabs, project table with members/deadline/status/phase). */
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

const PROJECT_ROWS = [
  { name: "Client Portal Redesign", client: "Acme Retail", members: ["Mohsin Khan", "Prabhjot Kaur", "Ankur Mishra"], deadline: "Dec 31, 2026", status: "Active", phase: "Development Phase" },
  { name: "Mobile App Revamp", client: "Internal", members: ["Piyush Rajput", "Nihar Ranjan Mohanta"], deadline: "—", status: "Active", phase: "Ongoing Development" },
  { name: "Q3 Marketing Push", client: "Northwind Digital", members: ["Sia Chandan", "Akansha Dogra", "Anchal Sahi", "Vivek Bharti"], deadline: "Dec 31, 2026", status: "Active", phase: "Digital Marketing" },
  { name: "Internal Tooling", client: "Internal", members: ["Mohsin Khan", "Amit Chawla"], deadline: "—", status: "Planning", phase: "—" },
];

function projectStatusClasses(status: string) {
  if (status === "Active") return "bg-green-50 text-green-600";
  if (status === "Planning") return "bg-blue-50 text-blue-600";
  if (status === "On Hold") return "bg-amber-50 text-amber-600";
  return "bg-gray-100 text-gray-500";
}

function ProjectTrackingHeroCard() {
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
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[15px] font-bold text-gray-900">Projects</div>
                <div className="text-[9px] text-gray-400">Manage projects and assign team members</div>
              </div>
              <span className="rounded-lg bg-brand-600 px-2.5 py-1.5 text-[9px] font-semibold text-white">+ New Project</span>
            </div>

            {/* Status tabs */}
            <div className="flex items-center gap-1.5">
              {["All", "Planning", "Active", "On Hold", "Completed"].map((t) => (
                <span
                  key={t}
                  className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                    t === "All" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Project table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="grid grid-cols-[1.4fr_1.6fr_1fr_0.8fr_1.3fr] gap-2 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>PROJECT</span>
                <span>MEMBERS</span>
                <span>DEADLINE</span>
                <span>STATUS</span>
                <span>PHASE</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {PROJECT_ROWS.map((p) => (
                  <div
                    key={p.name}
                    className="grid grid-cols-[1.4fr_1.6fr_1fr_0.8fr_1.3fr] items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-[9.5px]"
                  >
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-gray-900">{p.name}</div>
                      <div className="truncate text-[8px] text-gray-400">{p.client}</div>
                    </div>
                    <div className="flex -space-x-1.5">
                      {p.members.slice(0, 4).map((m) => (
                        <span
                          key={m}
                          title={m}
                          className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-50 bg-gradient-to-br from-amber-400 to-orange-500 text-[6.5px] font-bold text-white"
                        >
                          {m.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500">{p.deadline}</span>
                    <span className={`w-fit rounded-full px-2 py-0.5 text-[8.5px] font-bold ${projectStatusClasses(p.status)}`}>
                      {p.status}
                    </span>
                    <span className="truncate text-gray-500">{p.phase}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-[8.5px] text-gray-400">Showing 4 of 15 projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PipelineWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Status Pipeline</div>
    <div className="grid grid-cols-3 gap-2 text-center">
      {[{ s: "Planning", v: "1" }, { s: "Active", v: "13" }, { s: "Completed", v: "1" }].map((p) => (
        <div key={p.s} className="rounded-lg bg-white/10 px-2.5 py-2.5">
          <div className="text-[15px] font-extrabold text-white">{p.v}</div>
          <div className="text-[7.5px] font-semibold uppercase tracking-wide text-white/50">{p.s}</div>
        </div>
      ))}
    </div>
  </div>
);

const MembersWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Client Portal Redesign — Team</div>
    <div className="space-y-1.5">
      {["Mohsin Khan", "Prabhjot Kaur", "Ankur Mishra"].map((m) => (
        <div key={m} className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-[10px] text-white/85">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[7px] font-bold text-white">
            {m.split(" ").map((w) => w[0]).join("")}
          </span>
          {m}
        </div>
      ))}
    </div>
  </div>
);

const DeadlinesWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Upcoming Deadlines"
      rows={[
        { label: "Portal", pct: 80, value: "Dec 31, '26", color: "brand" },
        { label: "Q3 Push", pct: 80, value: "Dec 31, '26", color: "violet" },
      ]}
    />
  </div>
);

const PhaseWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "Client Portal — Development Phase", done: true },
        { label: "Mobile App — Ongoing Development", done: true },
        { label: "Internal Tooling — not yet started", done: false },
      ]}
    />
  </div>
);

const TimeLinkWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Client Portal Redesign — This Week"
      stats={[
        { label: "Hours Logged", value: "38h" },
        { label: "Contributors", value: "3" },
        { label: "Top App", value: "Code" },
      ]}
    />
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: TrendUp,
    title: "Every Project, One Pipeline",
    desc: "Planning, Active, On Hold, Completed, or Archived — every project's status is always current.",
    checks: ["Five-stage status pipeline", "Filter by status in one click", "Never a stale spreadsheet"],
    widget: <PipelineWidget />,
  },
  {
    tone: "dark",
    icon: Users,
    title: "Who's On What, Instantly",
    desc: "Every project shows exactly which employees are assigned, at a glance.",
    checks: ["Any number of members per project", "Avatars shown directly in the list", "Assign or remove in seconds"],
    widget: <MembersWidget />,
  },
  {
    tone: "purple",
    icon: Clock,
    title: "Deadlines That Don't Get Lost",
    desc: "Every project's deadline is visible right in the roster — no separate calendar to check.",
    checks: ["Deadline shown per project", "Optional budget field", "Sortable by due date"],
    widget: <DeadlinesWidget />,
  },
  {
    tone: "dark",
    icon: FileText,
    title: "Phase & Context, Always Current",
    desc: "A short phase or description keeps everyone aligned on where a project actually stands.",
    checks: ["Editable phase per project", "Visible directly in the list", "No separate status meeting needed"],
    widget: <PhaseWidget />,
  },
  {
    tone: "purple",
    icon: BarChart,
    title: "Connected to Real Time Data",
    desc: "Hours logged against a project roll up automatically from the same activity tracking used everywhere else.",
    checks: ["Hours logged per project", "Top contributors surfaced", "Same data as Time Tracking"],
    widget: <TimeLinkWidget />,
  },
];

export default function ProjectTrackingPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — PROJECT TRACKING"
        heading="Every Project, Every Member,"
        highlight="One Clear View."
        description="Projects, team assignments, clients, budgets, and deadlines — all in one roster, with a status pipeline from Planning through Archived."
        visual={<ProjectTrackingHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE ORGANIZATION GAP"
        heading="Stop Managing Projects in Spreadsheets"
        subheading="Status updates scattered across chats and sheets never stay current. Project Tracking keeps one source of truth."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="A Roster That Stays Current"
        subheading="Every project, member, and deadline, kept in one place."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="PROJECT ROSTER"
        blocks={[
          {
            highlighted: true,
            heading: "Every Project, One List",
            desc: "Name, client, members, budget, deadline, status, and phase — all visible without opening a single project.",
            checklist: ["Full project roster in one table", "Filterable by status"],
          },
          {
            heading: "Open Full Detail in One Click",
            desc: "Jump into a project's full profile or edit any field directly from the list.",
            checklist: ["One-click project profile", "Inline edit for any field"],
          },
        ]}
        linkLabel="Explore Project Tracking"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "40% 30%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Client Portal Redesign</div>
              <div className="mt-1 text-[9.5px] text-gray-400">Acme Retail · Development Phase</div>
              <span className="mt-2 inline-block rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-600">Active</span>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Total Projects</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">15</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">13 active, 1 planning, 1 completed</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Project Tracking"
        desc="From team assignment to real logged hours — TrackDots keeps every project's status honest."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Built to Connect With Everything Else"
        desc="Projects aren't an island — assigned employees, tracked time, and reporting all reference the same roster."
        checklist={["Shared employee roster across the platform", "Time tracked rolls up per project", "No duplicate data entry"]}
        linkLabel="See How Time Rolls Up"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 40%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Q3 Marketing Push — Team</div>
              <div className="mt-3 flex -space-x-1.5">
                {["Sia Chandan", "Akansha Dogra", "Anchal Sahi", "Vivek Bharti"].map((m) => (
                  <span
                    key={m}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-400 to-brand-600 text-[8px] font-bold text-white"
                  >
                    {m.split(" ").map((w) => w[0]).join("")}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Members Assigned</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">4</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">Across this one project</div>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: Folder, value: "15", label: "Projects Tracked", desc: "Every active, planning, and completed project in one roster.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: TrendUp, value: "5-Stage", label: "Status Pipeline", desc: "Planning, Active, On Hold, Completed, or Archived.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Users, value: "Unlimited", label: "Team Members", desc: "Assign any number of employees to any project.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="CLIENT-READY"
        blocks={[
          {
            highlighted: true,
            heading: "Every Project, Tied to a Client",
            desc: "Tag any project to a client for cleaner filtering, reporting, and billing conversations.",
            checklist: ["Optional client association", "Filterable by client"],
          },
          {
            heading: "Budgets & Deadlines, Front and Center",
            desc: "Optional budget and deadline fields keep commercial context visible without a separate spreadsheet.",
            checklist: ["Optional budget field", "Deadline shown in the roster"],
          },
        ]}
        linkLabel="See Client Reporting"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "65% 55%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Client — Acme Retail</div>
              <div className="mt-2 text-[13px] font-bold text-gray-900">1 active project</div>
              <div className="mt-1 text-[9.5px] text-gray-400">Deadline: Dec 31, 2026</div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
                <Folder className="h-3.5 w-3.5" strokeWidth={1.8} />
                Reporting
              </div>
              <div className="mt-2 text-[13px] font-bold text-white">Ready per client</div>
              <div className="mt-2 text-[9px] text-white/40">No extra setup required</div>
            </div>
          </div>
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' project tracking compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Project Tracking, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
