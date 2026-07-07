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
  Cloud,
  DotsLogo,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Lock,
  Monitor,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "ERP Integration — TrackDots",
  description:
    "A read-only REST API for pulling time and productivity data into external ERP, payroll, and HR systems — secured with organization-scoped API keys.",
};

const CAPABILITIES = [
  { icon: Server, title: "Read-Only REST API", desc: "A dedicated, read-only endpoint for pulling time and productivity data into external systems." },
  { icon: BarChart, title: "Per-Employee, Per-Day Detail", desc: "Total, productive, idle, and low-quality hours, broken down by employee and by day." },
  { icon: Lock, title: "Secure API Key Authentication", desc: "Every request is authenticated with an organization-scoped API key — no shared credentials." },
  { icon: Cloud, title: "Built for ERP, Payroll & HR Systems", desc: "Designed to feed time data into the external systems your organization already runs." },
  { icon: Clock, title: "Flexible Date Ranges", desc: "Query a single day or a custom range of up to 90 days." },
  { icon: ShieldCheck, title: "Org-Scoped & Access-Controlled", desc: "Every API key is scoped to a single organization — no cross-tenant access, ever." },
];

const PROBLEMS = [
  "Time and productivity data trapped inside one dashboard",
  "Manually re-entering hours into payroll or ERP systems",
  "No safe way to let an external system pull tracked-time data",
];
const BENEFITS = [
  "A dedicated, read-only API for time and productivity data",
  "Secure, organization-scoped API key authentication",
  "Built specifically for ERP, payroll, and HR system integration",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "Dedicated read-only time-data API", statuses: ["yes", "no", "no"] },
  { capability: "Per-employee, per-day hour breakdown", statuses: ["yes", "no", "no"] },
  { capability: "Organization-scoped API key auth", statuses: ["yes", "no", "no"] },
  { capability: "Custom date-range queries (up to 90 days)", statuses: ["yes", "no", "no"] },
  { capability: "Built for ERP / payroll / HR integration", statuses: ["yes", "no", "no"] },
  { capability: "No manual CSV re-entry required", statuses: ["yes", "partial", "no"] },
];

const FAQS = [
  { q: "What does the ERP API actually return?", a: "For each employee and day, it returns total, productive, idle, and low-quality hours, along with productivity percentage, pause counts, and first/last-seen times." },
  { q: "Is this a two-way sync with my ERP system?", a: "No. It's a one-way, read-only API — your ERP, payroll, or HR system pulls data from TrackDots; nothing is written back." },
  { q: "How is the API authenticated?", a: "Every request requires an organization-scoped API key sent in the X-ERP-API-KEY header." },
  { q: "What date ranges can I query?", a: "A single day, or a custom range of up to 90 days, using date_from and date_to parameters." },
  { q: "Can I query multiple employees at once?", a: "Yes. Up to 50 employee email addresses can be included in a single request." },
  { q: "Who can generate an API key?", a: "API keys are issued and managed by TrackDots on a per-organization basis — reach out to support to get one provisioned." },
];

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — but since ERP Integration is a developer-facing REST API,
 * not a dashboard page, the content area shows the real endpoint, auth
 * header, and response shape instead of a data table. */
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

function ErpHeroCard() {
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
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-bold text-gray-900">ERP API</span>
                  <span className="rounded-full bg-brand-100 px-1.5 py-0.5 text-[8px] font-bold text-brand-600">NEW</span>
                </div>
                <div className="text-[9px] text-gray-400">Read-only REST API for ERP, payroll, and HR systems</div>
              </div>
              <span className="flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-[9px] font-bold text-green-600">
                ● Active
              </span>
            </div>

            {/* API key card */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-[10.5px] font-bold text-gray-900">Payroll Sync — Zoho ERP</div>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[8.5px] font-semibold text-gray-500">Created Jun 12, 2026</span>
              </div>
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 font-mono text-[10px] text-gray-500 ring-1 ring-gray-100">
                <Lock className="h-3 w-3 text-gray-400" />
                ••••••••••••••••••••••••7f3a
              </div>
            </div>

            {/* Endpoint card */}
            <div className="rounded-xl bg-gray-950 p-3">
              <div className="flex items-center gap-2 text-[9px] font-semibold text-white/50">
                <span className="rounded bg-green-500/20 px-1.5 py-0.5 font-bold text-green-400">GET</span>
                /api/erp/hours/
              </div>
              <div className="mt-2 space-y-1 font-mono text-[9.5px] text-white/70">
                <div>X-ERP-API-KEY: your-api-key</div>
                <div className="text-white/40">?emails=akansha@co.com,vivek@co.com&amp;date=2026-07-06</div>
              </div>
            </div>

            {/* Sample response */}
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">Sample Response</div>
              <div className="mt-1.5 space-y-1 font-mono text-[9.5px] text-gray-600">
                <div>{"{ \"email\": \"akansha@co.com\", \"date\": \"2026-07-06\","}</div>
                <div className="pl-3">{"\"total_hours\": 8.18, \"productive_hours\": 7.9,"}</div>
                <div className="pl-3">{"\"idle_hours\": 0.0, \"productivity_pct\": 96.6 }"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const EndpointWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">The Endpoint</div>
    <div className="rounded-lg bg-white/10 p-3 font-mono text-[10.5px] text-white/85">
      <span className="rounded bg-green-500/20 px-1.5 py-0.5 font-bold text-green-400">GET</span> /api/erp/hours/
    </div>
  </div>
);

const AuthWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "X-ERP-API-KEY header required", done: true },
        { label: "Organization-scoped key", done: true },
        { label: "Shared or global credentials", done: false },
      ]}
    />
  </div>
);

const DetailWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Returned Per Employee, Per Day"
      stats={[
        { label: "Total Hrs", value: "8.18" },
        { label: "Productive", value: "7.9" },
        { label: "Idle", value: "0.0" },
        { label: "Score", value: "96.6%" },
      ]}
    />
  </div>
);

const RangeWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Query Window"
      rows={[
        { label: "Single day", pct: 30, value: "date=", color: "blue" },
        { label: "Custom range", pct: 90, value: "≤ 90 days", color: "brand" },
      ]}
    />
  </div>
);

const ScopeWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Access Scope</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">This key can access</span>
      <span className="text-[10.5px] font-bold text-white">1 organization only</span>
    </div>
  </div>
);

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: Server,
    title: "One Endpoint, Purpose-Built",
    desc: "A single, dedicated REST endpoint returns exactly the time and productivity data external systems need.",
    checks: ["GET /api/erp/hours/", "JSON response, no proprietary format", "No SDK required"],
    widget: <EndpointWidget />,
  },
  {
    tone: "dark",
    icon: Lock,
    title: "Authenticated, Every Request",
    desc: "Every call requires a valid, organization-scoped API key — there's no anonymous access.",
    checks: ["X-ERP-API-KEY header required", "Key tied to one organization", "Revocable at any time"],
    widget: <AuthWidget />,
  },
  {
    tone: "purple",
    icon: BarChart,
    title: "Real Detail, Not a Summary",
    desc: "Total, productive, idle, and low-quality hours, plus a productivity percentage — per employee, per day.",
    checks: ["Per-employee, per-day granularity", "Pause counts & durations included", "First/last-seen timestamps included"],
    widget: <DetailWidget />,
  },
  {
    tone: "dark",
    icon: Clock,
    title: "Query What You Need",
    desc: "Pull a single day or a custom window of up to 90 days in one request.",
    checks: ["Single-day or ranged queries", "Up to 90 days per request", "Up to 50 employees per request"],
    widget: <RangeWidget />,
  },
  {
    tone: "purple",
    icon: ShieldCheck,
    title: "Never Crosses Organizations",
    desc: "Every API key is strictly scoped — there is no way for one organization's key to see another's data.",
    checks: ["Strict organization scoping", "No cross-tenant access, ever", "Read-only, nothing is ever written back"],
    widget: <ScopeWidget />,
  },
];

export default function ErpIntegrationPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — ERP INTEGRATION"
        heading="Your Time Data,"
        highlight="Anywhere You Need It."
        description="A read-only REST API for pulling time and productivity data into external ERP, payroll, and HR systems — secured with organization-scoped API keys."
        visual={<ErpHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE SILOED-DATA GAP"
        heading="Stop Re-Typing Hours Into Another System"
        subheading="Time data that only lives in one dashboard means someone, somewhere, is re-entering it by hand. The API removes that step."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="One API, Built for Integration"
        subheading="Read-only, organization-scoped, and designed specifically for ERP, payroll, and HR systems."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="THE ENDPOINT"
        blocks={[
          {
            highlighted: true,
            heading: "A Single, Purpose-Built Endpoint",
            desc: "One GET request returns per-employee, per-day time data — no proprietary SDK, just JSON over HTTPS.",
            checklist: ["GET /api/erp/hours/", "Plain JSON response"],
          },
          {
            heading: "Authenticated by Design",
            desc: "Every request must include a valid organization-scoped API key in the request header.",
            checklist: ["X-ERP-API-KEY header required", "Keys issued per organization"],
          },
        ]}
        linkLabel="Read the API Documentation"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "45% 25%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[250px] rounded-2xl bg-gray-950 p-4 shadow-2xl">
              <div className="flex items-center gap-2 text-[9px] font-semibold text-white/50">
                <span className="rounded bg-green-500/20 px-1.5 py-0.5 font-bold text-green-400">GET</span>
                /api/erp/hours/
              </div>
              <div className="mt-2 font-mono text-[9.5px] text-white/70">X-ERP-API-KEY: ••••7f3a</div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Response Format</div>
              <div className="mt-1 text-[15px] font-bold text-gray-900">JSON</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">Per employee, per day</div>
            </div>
          </div>
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of the ERP API"
        desc="From authentication to response detail — TrackDots' API is built to be a good citizen in your existing stack."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Read-Only, On Purpose"
        desc="The API only ever sends data out — it never writes back to TrackDots, and it never touches another organization's data."
        checklist={["Strictly one-way, read-only", "Organization-scoped API keys", "No shared or global credentials"]}
        linkLabel="See Security Details"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "55% 35%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Direction</div>
              <div className="mt-2 flex items-center gap-2 text-[13px] font-bold text-gray-900">
                TrackDots <span className="text-brand-600">→</span> Your ERP
              </div>
              <div className="mt-1 text-[9.5px] text-gray-500">Never the other way around</div>
            </div>
            <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
              <Lock className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[10px] font-semibold leading-tight">
                Read-Only,
                <br />
                Always
              </span>
            </div>
          </div>
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: Server, value: "1", label: "Dedicated Endpoint", desc: "GET /api/erp/hours/ — one endpoint, purpose-built for time data.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: Clock, value: "90-Day", label: "Max Query Range", desc: "Query a single day or a custom range of up to 90 days.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: Users, value: "50", label: "Employees Per Request", desc: "Query up to 50 employee email addresses in a single call.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="BUILT FOR YOUR STACK"
        blocks={[
          {
            highlighted: true,
            heading: "Payroll, HR, or ERP — Any of Them",
            desc: "The API doesn't assume which system you're feeding — the response is generic enough to fit any of them.",
            checklist: ["Works with payroll platforms", "Works with ERP and HR systems"],
          },
          {
            heading: "Provisioned When You Need It",
            desc: "Reach out to TrackDots support and an organization-scoped key is issued for your integration.",
            checklist: ["Issued per organization", "Revocable at any time"],
          },
        ]}
        linkLabel="Request API Access"
        visual={
          <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "60% 55%" }} loading="lazy" />
            </div>
            <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Works Well With</div>
              <div className="mt-3 space-y-2">
                {["ERP systems", "Payroll platforms", "HR information systems"].map((f) => (
                  <div key={f} className="rounded-lg bg-gray-50 px-2.5 py-2 text-[10px] font-medium text-gray-700">
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Setup Time</div>
              <div className="mt-1 text-[20px] font-bold text-gray-900">Minutes</div>
              <div className="mt-1.5 text-[9.5px] text-gray-400">Once your key is provisioned</div>
            </div>
          </div>
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' ERP API compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="ERP Integration, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
