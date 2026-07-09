import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, ChecklistRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  ChevronDown,
  DotsLogo,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Monitor,
  Search,
  Settings,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Project Tracking — TrackDots",
  description:
    "Every project, team member, client, budget, and deadline in one place — with a status pipeline from Planning through Archived.",
};

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

const VISUALS: FeaturePageVisuals = {
  hero: <ProjectTrackingHeroCard />,
  dark1: (
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
  ),
  stickyWidgets: [
    <PipelineWidget key="pipeline" />,
    <MembersWidget key="members" />,
    <DeadlinesWidget key="deadlines" />,
    <PhaseWidget key="phase" />,
    <TimeLinkWidget key="time-link" />,
  ],
  panel: (
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
  ),
  dark2: (
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
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function ProjectTrackingPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
