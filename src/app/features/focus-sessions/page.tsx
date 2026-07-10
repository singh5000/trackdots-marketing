import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, StatGrid } from "@/components/features/widgets";
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
  Sparkles,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Focus Sessions — TrackDots",
  description:
    "Automatically surface uninterrupted deep-work blocks, separate from routine activity, with per-employee focus trends.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Focus Sessions layout
 * (date-range pills, 4 stat tiles, per-employee session breakdown). */
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

const FOCUS_STATS = [
  { label: "TOTAL FOCUS SESSIONS", value: "26" },
  { label: "TOTAL FOCUS TIME", value: "102h 16m" },
  { label: "AVG SESSION LENGTH", value: "3h 56m" },
  { label: "LONGEST SESSION", value: "4h 43m" },
];

const FOCUS_EMPLOYEES = [
  {
    name: "Michael King",
    role: "Head of Technology",
    badge: "Some focus",
    summary: "2 sessions · 9h 20m focus time · avg 4h 40m",
    sessions: [
      { dur: "4h 41m", app: "Firefox", time: "2:24 PM – 7:05 PM" },
      { dur: "4h 39m", app: "Microsoft Teams", time: "9:16 AM – 1:55 PM" },
    ],
  },
  {
    name: "Victor Bennett",
    role: "SEO Executive",
    badge: "Some focus",
    summary: "2 sessions · 8h 32m focus time · avg 4h 16m",
    sessions: [{ dur: "4h 43m", app: "chrome", time: "8:52 AM – 1:45 PM" }],
  },
  {
    name: "Alice Dawson",
    role: "SEO Executive",
    badge: "Some focus",
    summary: "2 sessions · 8h 11m focus time · avg 4h 05m",
    sessions: [{ dur: "4h 29m", app: "chrome", time: "9:12 AM – 1:42 PM" }],
  },
];

function FocusHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">Focus Sessions</div>
                <div className="text-[9px] text-gray-400">Uninterrupted deep work blocks — Monday, July 06</div>
              </div>
              <div className="flex items-center gap-1.5">
                {["Today", "This week", "Last 7 days"].map((r) => (
                  <span
                    key={r}
                    className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                      r === "This week" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {FOCUS_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div className="mt-1 text-[15px] font-bold text-gray-900">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Per-employee session breakdown */}
            <div className="space-y-2">
              {FOCUS_EMPLOYEES.map((e) => (
                <div key={e.name} className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <div className="flex items-center gap-2.5">
                    <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-gray-900">{e.name}</span>
                        <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[7.5px] font-bold text-blue-600">
                          {e.badge}
                        </span>
                      </div>
                      <div className="text-[8.5px] text-gray-400">{e.summary}</div>
                    </div>
                    <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
                      {e.sessions.map((s) => (
                        <span
                          key={s.time}
                          className="rounded-md bg-gray-50 px-2 py-1 text-[8.5px] font-medium text-gray-500 ring-1 ring-gray-100"
                        >
                          <span className="font-bold text-gray-900">{s.dur}</span> · {s.app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Photo + floating cards — same pattern as Time Tracking's CrossPlatformMock,
 * used for the Highlight Panel visual slot. */
function MeetingExclusionMock() {
  const rows = [
    { time: "9:12 AM – 1:38 PM", label: "Focus", ok: true },
    { time: "1:38 PM – 2:00 PM", label: "Meeting (excluded)", ok: false },
    { time: "2:00 PM – 5:50 PM", label: "Focus", ok: true },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[380px] w-full object-cover"
          style={{ objectPosition: "45% 35%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: today's timeline ── */}
      <div className="absolute -left-2 top-0 w-[250px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Today&apos;s Timeline</div>
        <div className="mt-3 space-y-2">
          {rows.map((r) => (
            <div key={r.time} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[9.5px] font-medium text-gray-500">{r.time}</span>
              <span className={`text-[9.5px] font-bold ${r.ok ? "text-green-600" : "text-gray-400"}`}>{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: badge ── */}
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <Clock className="h-6 w-6" strokeWidth={1.8} />
        <span className="text-[10px] font-semibold leading-tight">
          Meetings
          <br />
          Never Counted
        </span>
      </div>
    </div>
  );
}

/** Photo + floating cards — same pattern as Time Tracking's PrivacyMock,
 * used for the second (reverse) Dark Highlight visual slot. */
function TeamInsightsMock() {
  const stats = [
    { l: "Top", v: "4h 43m" },
    { l: "Median", v: "3h 56m" },
    { l: "Team Total", v: "102h 16m" },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[420px] w-full object-cover sm:h-[460px]"
          style={{ objectPosition: "55% 50%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: team focus stats ── */}
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Team Focus — This Week</div>
        <div className="mt-3 space-y-2">
          {stats.map((s) => (
            <div key={s.l} className="flex items-center justify-between">
              <span className="text-[9.5px] text-gray-500">{s.l}</span>
              <span className="text-[11px] font-bold text-gray-900">{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: productivity intelligence ── */}
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
          Productivity Intelligence
        </div>
        <div className="mt-2 text-[13px] font-bold text-white">One signal of many</div>
        <div className="mt-2 text-[9px] text-white/40">Focus data feeds the broader score</div>
      </div>
    </div>
  );
}

const VISUALS: FeaturePageVisuals = {
  hero: <FocusHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "40% 30%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[220px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">This Week</div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-gray-50 px-2.5 py-2 ring-1 ring-gray-100">
            <div className="text-[15px] font-extrabold text-gray-900">26</div>
            <div className="text-[8px] font-semibold uppercase text-gray-400">Sessions</div>
          </div>
          <div className="rounded-lg bg-gray-50 px-2.5 py-2 ring-1 ring-gray-100">
            <div className="text-[15px] font-extrabold text-gray-900">102h 16m</div>
            <div className="text-[8px] font-semibold uppercase text-gray-400">Total Time</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Longest Session</div>
        <div className="mt-1 text-[18px] font-bold text-gray-900">4h 43m</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Victor Bennett · Monday</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <StatGrid key="this-week" dark cols={4} kicker="This Week" stats={[{ label: "Sessions", value: "26" }, { label: "Total Time", value: "102h 16m" }, { label: "Avg", value: "3h 56m" }, { label: "Longest", value: "4h 43m" }]} />,
    <BarRows key="thresholds" dark kicker="Session Thresholds" rows={[{ label: "Min. Length", pct: 30, value: "30 min", color: "brand" }, { label: "Gap Tolerance", pct: 20, value: "120 sec", color: "blue" }]} />,
    <BarRows key="trend" dark kicker="4-Week Trend" rows={[{ label: "Week 1", pct: 60, value: "38h", color: "green" }, { label: "Week 2", pct: 75, value: "47h", color: "green" }, { label: "Week 3", pct: 83, value: "52h", color: "green" }]} />,
    <StatGrid key="team-averages" dark cols={3} kicker="Team Averages" stats={[{ label: "Top", value: "4h 43m" }, { label: "Median", value: "3h 56m" }, { label: "Lowest", value: "1h 10m" }]} />,
    <BarRows key="latest-session" dark kicker="Latest Session" rows={[{ label: "9:12 AM", pct: 90, value: "Chrome · 4h 12m", color: "green" }]} />,
  ],
  panel: <MeetingExclusionMock />,
  dark2: <TeamInsightsMock />,
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function FocusSessionsPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
