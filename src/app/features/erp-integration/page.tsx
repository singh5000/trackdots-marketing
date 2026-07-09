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
  Lock,
  Monitor,
  Search,
  Settings,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "ERP Integration — TrackDots",
  description:
    "A read-only REST API for pulling time and productivity data into external ERP, payroll, and HR systems — secured with organization-scoped API keys.",
};

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

const VISUALS: FeaturePageVisuals = {
  hero: <ErpHeroCard />,
  dark1: (
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
  ),
  stickyWidgets: [
    <EndpointWidget key="endpoint" />,
    <AuthWidget key="auth" />,
    <DetailWidget key="detail" />,
    <RangeWidget key="range" />,
    <ScopeWidget key="scope" />,
  ],
  panel: (
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
  ),
  dark2: (
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
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function ErpIntegrationPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
