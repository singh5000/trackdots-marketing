import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, DonutLegend, StatGrid } from "@/components/features/widgets";
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
  TrendUp,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "App Usage Reports — TrackDots",
  description:
    "See exactly which apps and websites drive real work — automatically categorized as productive, neutral, or unproductive, ranked and broken down per employee.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real App Usage layout
 * (date-range pills, 3 category cards, Top Apps ranking table). */
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

const USAGE_CATEGORIES = [
  { label: "Productive", value: "94h 08m", pct: "92%", color: "bg-green-400" },
  { label: "Neutral", value: "7h 22m", pct: "7%", color: "bg-gray-300" },
  { label: "Unproductive", value: "40m", pct: "1%", color: "bg-red-400" },
];

const TOP_APPS = [
  { app: "chrome", time: "53h 39m", share: "53%", users: "10 users" },
  { app: "Code", time: "13h 08m", share: "13%", users: "6 users" },
  { app: "Google Chrome", time: "10h 56m", share: "11%", users: "3 users" },
  { app: "Microsoft Teams", time: "4h 41m", share: "5%", users: "2 users" },
  { app: "google docs", time: "4h 40m", share: "5%", users: "4 users" },
];

function AppUsageHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">App Usage</div>
                <div className="text-[9px] text-gray-400">Team-wide — Monday, July 06</div>
              </div>
              <div className="flex items-center gap-1.5">
                {["Today", "This week", "Last 7 days"].map((r) => (
                  <span
                    key={r}
                    className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                      r === "Today" ? "bg-brand-600 text-white" : "bg-gray-50 text-gray-500 ring-1 ring-gray-100"
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Category cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {USAGE_CATEGORIES.map((c) => (
                <div key={c.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="flex items-center gap-1.5 text-[8.5px] font-semibold text-gray-500">
                    <span className={`h-2 w-2 rounded-sm ${c.color}`} />
                    {c.label}
                  </div>
                  <div className="mt-1 text-[15px] font-bold text-gray-900">{c.value}</div>
                  <div className="text-[8px] text-gray-400">{c.pct} of tracked time</div>
                </div>
              ))}
            </div>

            {/* Top Apps table */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold text-gray-900">Top Apps</div>
                <div className="text-[8.5px] text-gray-400">Click a row to see per-employee breakdown</div>
              </div>
              <div className="mt-2.5 grid grid-cols-[1.6fr_0.9fr_0.6fr_0.9fr] gap-1 text-[7.5px] font-semibold tracking-wider text-gray-400">
                <span>APP</span>
                <span className="text-right">TIME</span>
                <span className="text-right">SHARE</span>
                <span className="text-right">USERS</span>
              </div>
              <div className="mt-1.5 space-y-1.5">
                {TOP_APPS.map((a) => (
                  <div
                    key={a.app}
                    className="grid grid-cols-[1.6fr_0.9fr_0.6fr_0.9fr] items-center gap-1 rounded-lg bg-gray-50 px-2 py-1.5 text-[9.5px]"
                  >
                    <span className="truncate font-semibold text-gray-900">{a.app}</span>
                    <span className="text-right text-gray-600">{a.time}</span>
                    <span className="text-right font-bold text-brand-600">{a.share}</span>
                    <span className="text-right text-gray-400">{a.users}</span>
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

const ChromeUsersWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">chrome — Top Users Today</div>
    <BarRows
      dark
      rows={[
        { label: "Paula", pct: 100, value: "7h 37m", color: "green" },
        { label: "Nathan", pct: 87, value: "6h 34m", color: "green" },
        { label: "Victor", pct: 84, value: "6h 23m", color: "green" },
      ]}
    />
  </div>
);

const CategorySplitWidget = () => (
  <div className="w-full">
    <DonutLegend
      dark
      kicker="Team Split — Today"
      value="92%"
      legend={[
        { label: "Productive", value: "92", color: "green" },
        { label: "Neutral", value: "7", color: "gray" },
        { label: "Unproductive", value: "1", color: "red" },
      ]}
    />
  </div>
);

const UniqueAppsWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Team Usage — Today"
      stats={[
        { label: "Unique Apps", value: "10" },
        { label: "Top App", value: "chrome" },
        { label: "Top App Time", value: "53h 39m" },
        { label: "Tracked Total", value: "102h 11m" },
      ]}
    />
  </div>
);

const RangeWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Chrome Usage — Trailing 4 Weeks"
      rows={[
        { label: "Week 1", pct: 70, value: "44h 10m", color: "blue" },
        { label: "Week 2", pct: 82, value: "51h 30m", color: "blue" },
        { label: "Week 3", pct: 86, value: "53h 39m", color: "blue" },
      ]}
    />
  </div>
);

const CategoryRulesWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Category Rules</div>
    <div className="space-y-1.5">
      {[
        { app: "chrome, Code, google docs", cat: "Productive", color: "text-green-400" },
        { app: "google sheets, Firefox", cat: "Neutral", color: "text-white/60" },
        { app: "Games, streaming apps", cat: "Unproductive", color: "text-red-400" },
      ].map((r) => (
        <div key={r.app} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5 text-[10px]">
          <span className="text-white/80">{r.app}</span>
          <span className={`font-bold ${r.color}`}>{r.cat}</span>
        </div>
      ))}
    </div>
  </div>
);

const VISUALS: FeaturePageVisuals = {
  hero: <AppUsageHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "50% 30%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[220px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Top App — Today</div>
        <div className="mt-2 text-[16px] font-bold text-gray-900">chrome</div>
        <div className="text-[11px] font-semibold text-brand-600">53h 39m · 53% share</div>
        <div className="mt-2 text-[9px] text-gray-400">Used by 10 of 13 employees</div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Unique Apps Used</div>
        <div className="mt-1 text-[20px] font-bold text-gray-900">10</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Across the whole team today</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <CategorySplitWidget key="category-split" />,
    <UniqueAppsWidget key="unique-apps" />,
    <ChromeUsersWidget key="chrome-users" />,
    <CategoryRulesWidget key="category-rules" />,
    <RangeWidget key="range" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 40%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Category Rules</div>
        <div className="mt-3 space-y-2">
          {[
            { app: "chrome, Code", cat: "Productive", c: "text-green-600" },
            { app: "google sheets", cat: "Neutral", c: "text-gray-500" },
          ].map((r) => (
            <div key={r.app} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[9.5px] font-medium text-gray-600">{r.app}</span>
              <span className={`text-[9.5px] font-bold ${r.c}`}>{r.cat}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Applies</div>
        <div className="mt-1 text-[15px] font-bold text-gray-900">Org-Wide, Instantly</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">No engineering ticket required</div>
      </div>
    </div>
  ),
  dark2: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "65% 50%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">chrome — Top Users</div>
        <div className="mt-3 space-y-2">
          {[
            { name: "Paula Knight", v: "7h 37m" },
            { name: "Nathan Reed", v: "6h 34m" },
            { name: "Victor Bennett", v: "6h 23m" },
          ].map((u) => (
            <div key={u.name} className="flex items-center justify-between">
              <span className="truncate text-[9.5px] text-gray-600">{u.name}</span>
              <span className="text-[9.5px] font-bold text-gray-900">{u.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <TrendUp className="h-3.5 w-3.5" strokeWidth={1.8} />
          Productivity Intelligence
        </div>
        <div className="mt-2 text-[13px] font-bold text-white">One signal of many</div>
        <div className="mt-2 text-[9px] text-white/40">App usage feeds the broader score</div>
      </div>
    </div>
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function AppUsagePage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
