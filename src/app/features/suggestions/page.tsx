import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, ChecklistRows, StatGrid } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  ChevronDown,
  Clock,
  DotsLogo,
  Eye,
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
  title: "Suggestions & Complaints — TrackDots",
  description:
    "A ticketed system for employee suggestions and complaints — categorized, assignable, and tracked from submission to resolution.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Suggestions & Complaints
 * layout (view tabs, search, ticket table). */
const HERO_SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true },
  { label: "Analytics", icon: BarChart },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings, active: true },
];

const TICKET_ROWS = [
  { id: "GRV-2026-0007", date: "2 Jul 2026", subject: "Standing Desks for Dev Team", type: "Suggestion", category: "Workplace", status: "Open" },
  { id: "GRV-2026-0005", date: "28 Jun 2026", subject: "Slow Office WiFi", type: "Complaint", category: "Infrastructure", status: "In Progress" },
  { id: "GRV-2026-0002", date: "18 May 2026", subject: "Abuse of Office Property", type: "Complaint", category: "Infrastructure", status: "Resolved" },
];

function ticketStatusClasses(status: string) {
  if (status === "Resolved") return "bg-green-50 text-green-600";
  if (status === "In Progress") return "bg-amber-50 text-amber-600";
  return "bg-blue-50 text-blue-600";
}

function SuggestionsHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">Suggestions &amp; Complaints</div>
                <div className="text-[9px] text-gray-400">Submit and track suggestions and complaints</div>
              </div>
              <span className="rounded-lg bg-brand-600 px-2.5 py-1.5 text-[9px] font-semibold text-white">+ Add</span>
            </div>

            {/* View tabs */}
            <div className="flex items-center gap-1.5">
              {["Company Wide", "Assigned To Me", "My Submissions"].map((t) => (
                <span
                  key={t}
                  className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                    t === "Company Wide" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Ticket table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="grid grid-cols-[1.1fr_2fr_0.9fr_1.1fr_0.9fr] gap-2 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>TICKET #</span>
                <span>SUBJECT</span>
                <span>TYPE</span>
                <span>CATEGORY</span>
                <span>STATUS</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {TICKET_ROWS.map((t) => (
                  <div
                    key={t.id}
                    className="grid grid-cols-[1.1fr_2fr_0.9fr_1.1fr_0.9fr] items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-[9.5px]"
                  >
                    <span className="truncate font-mono text-[8.5px] font-semibold text-gray-500">{t.id}</span>
                    <span className="truncate font-semibold text-gray-900">{t.subject}</span>
                    <span className="text-gray-600">{t.type}</span>
                    <span className="truncate text-gray-500">{t.category}</span>
                    <span className={`w-fit rounded-full px-2 py-0.5 text-[8.5px] font-bold ${ticketStatusClasses(t.status)}`}>
                      {t.status}
                    </span>
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

const TicketWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">GRV-2026-0007</div>
    <div className="rounded-lg bg-white/10 p-3">
      <div className="text-[10.5px] font-semibold text-white/90">Standing Desks for Dev Team</div>
      <div className="mt-1 text-[9px] text-white/50">Suggestion · Workplace</div>
    </div>
  </div>
);

const ViewsWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={3}
      kicker="Your Views"
      stats={[
        { label: "Company Wide", value: "18" },
        { label: "Assigned", value: "3" },
        { label: "My Submissions", value: "2" },
      ]}
    />
  </div>
);

const StatusWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="This Quarter — By Status"
      rows={[
        { label: "Resolved", pct: 70, value: "13", color: "green" },
        { label: "In Progress", pct: 20, value: "4", color: "amber" },
        { label: "Open", pct: 10, value: "1", color: "blue" },
      ]}
    />
  </div>
);

const AssignmentWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "GRV-2026-0005 assigned to IT", done: true },
        { label: "Due date set", done: true },
        { label: "Left unowned", done: false },
      ]}
    />
  </div>
);

const SearchWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Search — &ldquo;wifi&rdquo;</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">GRV-2026-0005 · Slow Office WiFi</span>
      <span className="text-[9px] font-bold text-amber-400">In Progress</span>
    </div>
  </div>
);

const VISUALS: FeaturePageVisuals = {
  hero: <SuggestionsHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "40% 25%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[9px] font-bold text-gray-500">GRV-2026-0002</div>
          <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[8px] font-bold text-green-600">Resolved</span>
        </div>
        <div className="mt-2 text-[12px] font-bold text-gray-900">Abuse of Office Property</div>
        <div className="mt-1 text-[9.5px] text-gray-500">Complaint · Infrastructure</div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">This Quarter</div>
        <div className="mt-1 text-[20px] font-bold text-gray-900">18</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Tickets submitted, 13 resolved</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <TicketWidget key="ticket" />,
    <ViewsWidget key="views" />,
    <StatusWidget key="status" />,
    <AssignmentWidget key="assignment" />,
    <SearchWidget key="search" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 35%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">My Submissions</div>
        <div className="mt-3 space-y-2">
          {[{ l: "GRV-2026-0007", v: "Open" }, { l: "GRV-2026-0003", v: "Resolved" }].map((s) => (
            <div key={s.l} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="font-mono text-[9px] font-medium text-gray-500">{s.l}</span>
              <span className="text-[9.5px] font-bold text-brand-600">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <Eye className="h-6 w-6" strokeWidth={1.8} />
        <span className="text-[10px] font-semibold leading-tight">
          Private,
          <br />
          By Default
        </span>
      </div>
    </div>
  ),
  dark2: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "50% 55%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">By Category — This Quarter</div>
        <div className="mt-3 space-y-2">
          {[{ c: "Infrastructure", v: "11" }, { c: "Workplace", v: "5" }, { c: "HR Related", v: "2" }].map((c) => (
            <div key={c.c} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[9.5px] font-medium text-gray-600">{c.c}</span>
              <span className="text-[9.5px] font-bold text-brand-600">{c.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
          Avg. Resolution
        </div>
        <div className="mt-2 text-[13.5px] font-bold text-white">6 days</div>
        <div className="mt-2 text-[9px] text-white/40">From submission to resolved</div>
      </div>
    </div>
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function SuggestionsPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
