import type { Metadata } from "next";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { BarRows, StatGrid, ChecklistRows, Kicker } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  BarChart,
  Bell,
  Calendar,
  CheckCircle,
  ChevronDown,
  DotsLogo,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Lock,
  Monitor,
  Search,
  Settings,
  ShieldCheck,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Screenshot Monitoring — TrackDots",
  description:
    "Optional, privacy-conscious screenshot capture that gives managers visual context without turning monitoring into surveillance.",
};

/* ── Hero visual: a real "dashboard chrome" list, not placeholder tiles ── */
/** Abstract stand-in for a captured screenshot — never a real employee's
 * actual screen content, just a generic browser-chrome shape. */
function MockShot({ tint, size = "sm" }: { tint: string; size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <div className="overflow-hidden rounded-lg ring-1 ring-gray-200">
        <div className={`h-2.5 w-full ${tint}`} />
        <div className="space-y-1.5 bg-gray-50 p-2">
          <div className="h-1.5 w-3/4 rounded-full bg-gray-200" />
          <div className="h-1.5 w-1/2 rounded-full bg-gray-200" />
          <div className="h-8 w-full rounded-sm bg-white ring-1 ring-gray-100" />
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-md ring-1 ring-gray-200">
      <div className={`h-1.5 w-full ${tint}`} />
      <div className="space-y-1 bg-gray-50 p-1.5">
        <div className="h-1 w-3/4 rounded-full bg-gray-200" />
        <div className="h-1 w-1/2 rounded-full bg-gray-200" />
        <div className="h-3 w-full rounded-sm bg-white ring-1 ring-gray-100" />
      </div>
    </div>
  );
}

/** Same 820×540 sidebar+topbar "dashboard chrome" shell as DashboardPreview,
 * so every feature hero reads as one product — content area swapped for the
 * real Screenshots viewer layout (filter row, employee header, capture grid). */
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

const HERO_SHOTS = [
  { time: "09:12", app: "chrome", title: "ERP | Staff Dashboard", tint: "bg-blue-400" },
  { time: "09:22", app: "chrome", title: "Analytics | Traffic acquisition", tint: "bg-green-400" },
  { time: "09:42", app: "google docs", title: "Stage-Wised Modernization", tint: "bg-amber-400" },
  { time: "10:02", app: "chrome", title: "New Incognito Tab", tint: "bg-violet-400" },
  { time: "10:24", app: "vs code", title: "screenshots / page.tsx", tint: "bg-blue-400" },
  { time: "10:51", app: "chrome", title: "Gmail | Inbox (14)", tint: "bg-green-400" },
  { time: "11:15", app: "slack", title: "#marketing-team", tint: "bg-violet-400" },
  { time: "11:43", app: "chrome", title: "Figma | Homepage v3", tint: "bg-amber-400" },
];

function ScreenshotsHeroCard() {
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
            {/* Heading + filters */}
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[15px] font-bold text-gray-900">Screenshots</div>
                <div className="text-[9px] text-gray-400">Captured activity by employee, tied to real activity blocks.</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-gray-50 px-2 py-1 text-[9px] font-medium text-gray-500 ring-1 ring-gray-100">
                  All Employees ▾
                </span>
                <span className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-[9px] font-medium text-gray-500 ring-1 ring-gray-100">
                  <Calendar className="h-2.5 w-2.5 text-gray-400" />
                  07/06/2026
                </span>
                <span className="rounded-md bg-gray-50 px-2 py-1 text-[9px] font-medium text-gray-500 ring-1 ring-gray-100">
                  Low Quality only
                </span>
              </div>
            </div>

            {/* Employee header */}
            <div className="flex items-center gap-2.5 rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <span className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
              <div>
                <div className="text-[12.5px] font-bold text-gray-900">Sarah Bennett</div>
                <div className="text-[10px] font-semibold text-pink-500">SEO Executive</div>
              </div>
              <span className="ml-auto rounded-full bg-gray-100 px-2.5 py-1 text-[9.5px] font-bold text-gray-600">
                49 screenshots
              </span>
            </div>

            {/* Capture grid — 4 × 2, matching the real viewer's density */}
            <div className="grid grid-cols-4 gap-3">
              {HERO_SHOTS.map((s) => (
                <div key={s.time}>
                  <MockShot tint={s.tint} size="lg" />
                  <div className="mt-1.5 text-[9.5px] font-bold text-gray-900">{s.time}</div>
                  <div className="truncate text-[8.5px] text-gray-500">
                    {s.app} · {s.title}
                  </div>
                  <div className="text-[8px] text-gray-400">10m</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-2 text-[9px] text-gray-400">
              <span>Showing 8 of 49 screenshots</span>
              <span className="font-semibold text-brand-600">Load more →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityWidget() {
  return (
    <div className="w-full">
      <Kicker dark>Recent Captures — Today</Kicker>
      <BarRows
        dark
        rows={[
          { label: "Chrome", pct: 80, value: "09:12 AM", color: "green" },
          { label: "Figma", pct: 55, value: "09:42 AM", color: "blue" },
          { label: "Code", pct: 68, value: "10:23 AM", color: "violet" },
        ]}
      />
    </div>
  );
}

function AccessWidget() {
  return (
    <div className="w-full">
      <Kicker dark>Who Can View Captures</Kicker>
      <ChecklistRows dark items={[{ label: "Managers", done: true }, { label: "HR Staff", done: true }, { label: "Employees (self-view)", done: true }, { label: "Public / unauthenticated", done: false }]} />
    </div>
  );
}

function SelfViewWidget() {
  return (
    <div className="w-full">
      <Kicker dark>My Captures — Today</Kicker>
      <BarRows
        dark
        rows={[
          { label: "9:12 AM", pct: 60, value: "Chrome · 10m", color: "green" },
          { label: "10:23 AM", pct: 45, value: "Figma · 6m", color: "blue" },
        ]}
      />
    </div>
  );
}

/** Photo + floating cards — same pattern as Time Tracking's CrossPlatformMock,
 * used for the Highlight Panel visual slot. */
function AccessControlMock() {
  const roles = [
    { name: "Managers", access: "Full Access" },
    { name: "HR Staff", access: "Full Access" },
    { name: "Employees", access: "Self-view only" },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[380px] w-full object-cover"
          style={{ objectPosition: "60% 20%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: role access list ── */}
      <div className="absolute -left-2 top-0 w-[250px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Who Can View Captures</div>
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[8.5px] font-bold text-green-600">
            <ShieldCheck className="h-3 w-3" strokeWidth={1.8} />
            Role-Gated
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {roles.map((r) => (
            <div key={r.name} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
              <span className="text-[10.5px] font-semibold text-gray-900">{r.name}</span>
              <span className="text-[9px] font-bold text-brand-600">{r.access}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: storage badge ── */}
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <Lock className="h-6 w-6" strokeWidth={1.8} />
        <span className="text-[10px] font-semibold leading-tight">
          Encrypted
          <br />
          Storage
        </span>
      </div>
    </div>
  );
}

/** Photo + floating cards — same pattern as Time Tracking's PrivacyMock,
 * used for the second (reverse) Dark Highlight visual slot. */
function TransparencyMock() {
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[420px] w-full object-cover sm:h-[460px]"
          style={{ objectPosition: "40% 60%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: employee self-view ── */}
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center gap-2.5">
          <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
          <div>
            <div className="text-[12px] font-bold text-gray-900">Akansha Dogra</div>
            <div className="text-[9.5px] text-gray-400">My Captures — Today</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["bg-blue-400", "bg-green-400", "bg-violet-400"].map((t, i) => (
            <MockShot key={i} tint={t} />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-green-50 px-2.5 py-1.5 text-[9.5px] font-semibold text-green-600">
          <CheckCircle className="h-3 w-3" strokeWidth={2} />
          Fully visible to you
        </div>
      </div>

      {/* ── Floating card: capture frequency ── */}
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <Lock className="h-3.5 w-3.5" strokeWidth={1.8} />
          Capture Frequency
        </div>
        <div className="mt-2 text-[15px] font-bold text-white">Every 10 minutes</div>
        <div className="mt-2 flex items-center justify-between text-[9px] text-white/40">
          <span>Never secret or hidden</span>
          <span className="flex items-center gap-1 font-semibold text-green-400">
            <CheckCircle className="h-3 w-3" strokeWidth={2} />
            Configurable
          </span>
        </div>
      </div>
    </div>
  );
}

const VISUALS: FeaturePageVisuals = {
  hero: <ScreenshotsHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "30% 30%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Akansha Dogra</div>
          <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[8px] font-bold text-green-600">49 shots</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["bg-blue-400", "bg-violet-400", "bg-green-400", "bg-amber-400", "bg-blue-400", "bg-violet-400"].map((t, i) => (
            <MockShot key={i} tint={t} />
          ))}
        </div>
        <div className="mt-2.5 flex justify-between text-[8.5px] font-medium text-gray-400">
          <span>09:12</span>
          <span>11:43</span>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Low Quality Only</div>
        <div className="mt-1 text-[15px] font-bold text-gray-900">3 of 25 flagged</div>
        <div className="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[12%] rounded-full bg-amber-400" />
        </div>
        <div className="mt-1.5 text-[9px] text-gray-400">Filtered view, updated live</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <ActivityWidget key="activity" />,
    <StatGrid key="capture-summary" dark cols={4} kicker="Today's Capture Summary" stats={[{ label: "Captured", value: "25" }, { label: "Flagged", value: "3", accent: true }, { label: "Employees", value: "1" }, { label: "Reviewed", value: "22" }]} />,
    <AccessWidget key="access" />,
    <SelfViewWidget key="self-view" />,
    <StatGrid key="capture-detail" dark cols={4} kicker="Capture Detail — 10:23 AM" stats={[{ label: "App", value: "Chrome" }, { label: "Duration", value: "10m" }, { label: "Confidence", value: "94" }, { label: "Blocks", value: "3" }]} />,
  ],
  panel: <AccessControlMock />,
  dark2: <TransparencyMock />,
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function ScreenshotsPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
