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
import { BarRows, StatGrid, ChecklistRows, Kicker } from "@/components/features/widgets";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import {
  Activity,
  BarChart,
  Bell,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  DotsLogo,
  Eye,
  FileText,
  Filter,
  Folder,
  ImageIcon,
  Inbox,
  LayoutGrid,
  Lock,
  Monitor,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Screenshot Monitoring — TrackDots",
  description:
    "Optional, privacy-conscious screenshot capture that gives managers visual context without turning monitoring into surveillance.",
};

const CAPABILITIES = [
  { icon: ImageIcon, title: "Configurable Capture", desc: "Set capture frequency per organization — as frequent or as light-touch as your team needs." },
  { icon: Filter, title: "Low-Quality Filter", desc: "Instantly filter the grid to only the screenshots tied to low-confidence or idle activity blocks." },
  { icon: Activity, title: "Linked to Activity Blocks", desc: "Every screenshot is tied directly to the activity block that captured it — full context, not a random image." },
  { icon: BarChart, title: "Employee & Date Grid", desc: "Browse by employee and date with a single bulk-loaded grid — no per-image loading delay." },
  { icon: Lock, title: "Access-Controlled Storage", desc: "Screenshots are stored securely and only accessible to authorized managers and HR staff." },
  { icon: Eye, title: "Transparent by Default", desc: "Employees know screenshots are part of their plan — nothing is captured secretly." },
];

const PROBLEMS = [
  "No visual context for what \"active\" actually looked like",
  "Managers left guessing during disputed time entries",
  "Screenshot tools that feel like covert surveillance",
];
const BENEFITS = [
  "Screenshots tied directly to real activity blocks",
  "Clear evidence when time entries are questioned",
  "Configurable, transparent, and never secretive",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Screenshots linked to activity blocks", statuses: ["yes", "no", "no"] },
  { capability: "Configurable capture frequency", statuses: ["yes", "partial", "no"] },
  { capability: "Low-quality-only filtering", statuses: ["yes", "no", "no"] },
  { capability: "Bulk employee + date grid view", statuses: ["yes", "partial", "no"] },
  { capability: "Access-controlled storage", statuses: ["yes", "yes", "no"] },
  { capability: "Employee self-view of captures", statuses: ["yes", "no", "no"] },
];

const FAQS = [
  { q: "Are screenshots mandatory to use TrackDots?", a: "No. Screenshot capture is a configurable feature — organizations can enable, disable, or tune the frequency to match their comfort level." },
  { q: "Who can view captured screenshots?", a: "Only authorized managers and HR staff on plans with screenshot access. Access is controlled at the organization and role level." },
  { q: "Can employees see their own screenshots?", a: "Yes, on plans with the employee self-view portal enabled, employees can see the same captures managers do." },
  { q: "How are screenshots connected to productivity scoring?", a: "Each screenshot is linked to the activity block that triggered it, so you always see the context behind a productivity score." },
  { q: "Can I filter to just the screenshots that matter?", a: "Yes. The viewer supports a \"Low Quality only\" filter to jump straight to blocks worth reviewing." },
  { q: "Is screenshot storage secure?", a: "Yes, files are stored with restricted access and are never exposed publicly." },
];

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

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: ImageIcon,
    title: "Captured at the Right Moments",
    desc: "Screenshots trigger alongside real activity blocks, not on a blind arbitrary timer.",
    checks: ["Tied to real activity blocks", "No blind, fixed-interval spam", "Org-level frequency control"],
    widget: <ActivityWidget />,
  },
  {
    tone: "dark",
    icon: Filter,
    title: "Find What Matters, Fast",
    desc: "Filter straight to the low-confidence captures worth a manager's attention.",
    checks: ["Low-Quality-only filter", "Employee + date grid", "Single bulk-loaded view"],
    widget: <StatGrid dark cols={4} kicker="Today's Capture Summary" stats={[{ label: "Captured", value: "25" }, { label: "Flagged", value: "3", accent: true }, { label: "Employees", value: "1" }, { label: "Reviewed", value: "22" }]} />,
  },
  {
    tone: "purple",
    icon: Lock,
    title: "Access, Strictly Controlled",
    desc: "Only the roles you authorize can ever open the screenshot viewer.",
    checks: ["Role-based access", "Org-scoped storage", "No public exposure, ever"],
    widget: <AccessWidget />,
  },
  {
    tone: "dark",
    icon: Eye,
    title: "Transparent, Not Secret",
    desc: "Employees on self-view plans see exactly what their manager sees.",
    checks: ["Self-view portal support", "No hidden captures", "Builds trust, not suspicion"],
    widget: <SelfViewWidget />,
  },
  {
    tone: "purple",
    icon: Sparkles,
    title: "Context, Not Just an Image",
    desc: "Every capture shows the window title and app alongside the timestamp.",
    checks: ["Window title captured", "App name tagged", "Duration shown per capture"],
    widget: <StatGrid dark cols={4} kicker="Capture Detail — 10:23 AM" stats={[{ label: "App", value: "Chrome" }, { label: "Duration", value: "10m" }, { label: "Confidence", value: "94" }, { label: "Blocks", value: "3" }]} />,
  },
];

export default function ScreenshotsPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — SCREENSHOT MONITORING"
        heading="See the Context Behind"
        highlight="Every Activity Block."
        description="Optional, configurable screenshot capture gives managers visual context — without turning monitoring into surveillance."
        visual={<ScreenshotsHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE CONTEXT GAP"
        heading="Stop Guessing What 'Active' Meant"
        subheading="A score without context is just a number. Screenshots close that gap."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="Visual Context, On Your Terms"
        subheading="Configurable, linked to real activity, and never a black box."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="CAPTURE VIEWER"
        blocks={[
          {
            highlighted: true,
            heading: "Every Capture, Organized by Employee",
            desc: "Browse the full grid by employee and date, loaded in a single request — no waiting per image.",
            checklist: ["Employee + date grid view", "Single bulk-loaded query"],
          },
          {
            heading: "Jump Straight to What Matters",
            desc: "The Low-Quality filter surfaces only the captures tied to flagged or idle activity.",
            checklist: ["Low-Quality-only filter", "Window title & app shown per capture"],
          },
        ]}
        linkLabel="Explore the Screenshot Viewer"
        visual={
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
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Screenshot Capture"
        desc="From capture triggers to access control — TrackDots keeps screenshots useful and never intrusive."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Built With Privacy at the Core"
        desc="Screenshot access is role-gated and configurable — your organization decides how visual monitoring works."
        checklist={["Role-based access control", "Configurable capture frequency", "Never captured or shown secretly"]}
        linkLabel="See Our Privacy Principles"
        visual={<AccessControlMock />}
      />

      <FeatureStatsRow
        stats={[
          { icon: ImageIcon, value: "1-Click", label: "Filter to Flagged", desc: "Jump straight to low-quality captures worth reviewing.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: Clock, value: "Per-Block", label: "Capture Linking", desc: "Every screenshot ties to the exact activity block that triggered it.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Lock, value: "Role-Gated", label: "Access Control", desc: "Only authorized managers and HR staff can ever open the viewer.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="TRANSPARENCY"
        blocks={[
          {
            highlighted: true,
            heading: "Nothing Captured in Secret",
            desc: "Employees on self-view plans see the exact same captures their manager does.",
            checklist: ["Self-view portal support", "No hidden captures, ever"],
          },
          {
            heading: "Configurable to Your Culture",
            desc: "Turn capture frequency up for high-security roles, or down for a lighter touch elsewhere.",
            checklist: ["Per-organization configuration", "Works alongside all other features"],
          },
        ]}
        linkLabel="See Configuration Options"
        visual={<TransparencyMock />}
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' screenshot capture compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Screenshot Monitoring, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
