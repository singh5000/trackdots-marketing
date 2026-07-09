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
  ShieldCheck,
  Users,
} from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Burnout Detection — TrackDots",
  description:
    "A 14-day rolling burnout risk score built from real activity — long hours, no breaks, weekend work, late nights, and more — with plain-language recommendations.",
};

/** Same 820×540 sidebar+topbar "dashboard chrome" shell used across every
 * feature hero — content area swapped for the real Burnout Detection layout
 * (risk-tier stat tiles, per-employee risk cards with signals). */
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

const BURNOUT_STATS = [
  { label: "HIGH RISK", value: "1", red: true },
  { label: "MEDIUM RISK", value: "1", amber: true },
  { label: "WATCH", value: "0" },
  { label: "ALL CLEAR", value: "17", green: true },
];

const BURNOUT_EMPLOYEES = [
  {
    name: "Mohsin Khan",
    role: "Head of Technology",
    active: "10/14 days active",
    risk: "High",
    avg: "9.1h",
    peak: "10.4h",
    signals: ["⏰ Long hours · 6d", "🌙 Late nights · 1d", "📊 Over limit · 2w"],
  },
  {
    name: "Nihar Ranjan Mohanta",
    role: "Software Engineer",
    active: "12/14 days active",
    risk: "Medium",
    avg: "6.4h",
    peak: "8.9h",
    signals: ["☕ No breaks · 1d", "📅 Weekend · 2d", "🌙 Late nights · 3d"],
  },
  {
    name: "Akansha Dogra",
    role: "SEO Executive",
    active: "10/14 days active",
    risk: "Clear",
    avg: "7.6h",
    peak: "8.2h",
    signals: [],
  },
];

function burnoutRiskClasses(risk: string) {
  if (risk === "High") return "bg-red-50 text-red-600";
  if (risk === "Medium") return "bg-amber-50 text-amber-600";
  return "bg-green-50 text-green-600";
}

function BurnoutHeroCard() {
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
                <div className="text-[15px] font-bold text-gray-900">Burnout Detection</div>
                <div className="text-[9px] text-gray-400">Monitoring last 14 days — based on your configured thresholds</div>
              </div>
              <span className="flex items-center gap-1 rounded-md bg-gray-50 px-2.5 py-1.5 text-[9.5px] font-semibold text-gray-600 ring-1 ring-gray-100">
                <Settings className="h-2.5 w-2.5 text-gray-400" />
                Adjust thresholds
              </span>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2.5">
              {BURNOUT_STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
                  <div className="text-[7px] font-semibold tracking-wider text-gray-400">{s.label}</div>
                  <div
                    className={`mt-1 text-[15px] font-bold ${
                      s.red ? "text-red-500" : s.amber ? "text-amber-500" : s.green ? "text-green-500" : "text-gray-900"
                    }`}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Employee risk cards */}
            <div className="space-y-2">
              {BURNOUT_EMPLOYEES.map((e) => (
                <div key={e.name} className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
                    <div className="w-[140px] shrink-0">
                      <div className="truncate text-[10.5px] font-bold text-gray-900">{e.name}</div>
                      <div className="text-[8px] text-gray-400">{e.role}</div>
                    </div>
                    <div className="w-[100px] shrink-0">
                      <span className={`rounded-full px-2 py-0.5 text-[8.5px] font-bold ${burnoutRiskClasses(e.risk)}`}>
                        {e.risk}
                      </span>
                      <div className="mt-1 text-[7.5px] text-gray-400">{e.active}</div>
                    </div>
                    <div className="flex w-[110px] shrink-0 gap-3 text-center">
                      <div>
                        <div className="text-[11px] font-bold text-gray-900">{e.avg}</div>
                        <div className="text-[7px] text-gray-400">avg/day</div>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-gray-900">{e.peak}</div>
                        <div className="text-[7px] text-gray-400">peak</div>
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-wrap gap-1">
                      {e.signals.length > 0 ? (
                        e.signals.map((s) => (
                          <span key={s} className="rounded-md bg-gray-50 px-1.5 py-0.5 text-[8px] font-medium text-gray-600 ring-1 ring-gray-100">
                            {s}
                          </span>
                        ))
                      ) : (
                        <span className="rounded-md bg-green-50 px-1.5 py-0.5 text-[8px] font-bold text-green-600">✓ No signals</span>
                      )}
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

const RiskTiersWidget = () => (
  <div className="w-full">
    <StatGrid
      dark
      cols={4}
      kicker="Risk Tiers — Team of 19"
      stats={[
        { label: "High", value: "1" },
        { label: "Medium", value: "1" },
        { label: "Watch", value: "0" },
        { label: "All Clear", value: "17" },
      ]}
    />
  </div>
);

const SignalsWidget = () => (
  <div className="w-full">
    <ChecklistRows
      dark
      items={[
        { label: "⏰ Long hours — 6 days", done: false },
        { label: "🌙 Late nights — 1 day", done: false },
        { label: "📊 Weekly hours over limit — 2 weeks", done: false },
      ]}
    />
  </div>
);

const ThresholdsWidget = () => (
  <div className="w-full">
    <BarRows
      dark
      kicker="Configured Thresholds"
      rows={[
        { label: "Long day", pct: 75, value: "9h+", color: "amber" },
        { label: "Late night", pct: 40, value: "after 9pm", color: "violet" },
        { label: "Weekly cap", pct: 90, value: "45h", color: "brand" },
      ]}
    />
  </div>
);

const RecommendationWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">💡 Recommendation</div>
    <div className="rounded-lg bg-white/10 p-3 text-[10.5px] italic text-white/80">
      &ldquo;Consider checking in — consistent overwork patterns detected.&rdquo;
    </div>
  </div>
);

const ProfileLinkWidget = () => (
  <div className="w-full">
    <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">Mohsin Khan — High Risk</div>
    <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5">
      <span className="text-[10.5px] text-white/80">Full 14-day activity profile</span>
      <span className="text-[10.5px] font-bold text-white">View profile →</span>
    </div>
  </div>
);

const VISUALS: FeaturePageVisuals = {
  hero: <BurnoutHeroCard />,
  dark1: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover" style={{ objectPosition: "35% 25%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Mohsin Khan</div>
          <span className="rounded-full bg-red-50 px-1.5 py-0.5 text-[8px] font-bold text-red-600">High Risk</span>
        </div>
        <div className="mt-2 flex gap-4">
          <div>
            <div className="text-[15px] font-bold text-gray-900">9.1h</div>
            <div className="text-[8px] text-gray-400">avg/day</div>
          </div>
          <div>
            <div className="text-[15px] font-bold text-gray-900">10.4h</div>
            <div className="text-[8px] text-gray-400">peak</div>
          </div>
        </div>
        <div className="mt-2.5 text-[9.5px] italic text-gray-500">&ldquo;Consider checking in.&rdquo;</div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[210px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Team Snapshot</div>
        <div className="mt-1 text-[20px] font-bold text-gray-900">17 of 19</div>
        <div className="mt-1.5 text-[9.5px] text-gray-400">Employees all clear this week</div>
      </div>
    </div>
  ),
  stickyWidgets: [
    <RiskTiersWidget key="risk-tiers" />,
    <SignalsWidget key="signals" />,
    <ThresholdsWidget key="thresholds" />,
    <RecommendationWidget key="recommendation" />,
    <ProfileLinkWidget key="profile-link" />,
  ],
  panel: (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[380px] w-full object-cover" style={{ objectPosition: "50% 40%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Nihar Ranjan Mohanta</div>
        <span className="mt-1.5 inline-block rounded-full bg-amber-50 px-1.5 py-0.5 text-[8px] font-bold text-amber-600">
          Medium Risk
        </span>
        <div className="mt-2 text-[9.5px] italic text-gray-500">&ldquo;Monitor this week — early signs of unsustainable work patterns.&rdquo;</div>
      </div>
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
        <span className="text-[10px] font-semibold leading-tight">
          People First,
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
        <img src={TEAM_MEETING_IMAGE} alt="" className="h-[420px] w-full object-cover sm:h-[460px]" style={{ objectPosition: "55% 55%" }} loading="lazy" />
      </div>
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Team Risk — This Week</div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-center">
          <div className="rounded-lg bg-gray-50 px-2.5 py-2 ring-1 ring-gray-100">
            <div className="text-[15px] font-extrabold text-red-500">1</div>
            <div className="text-[7.5px] font-semibold uppercase text-gray-400">High</div>
          </div>
          <div className="rounded-lg bg-gray-50 px-2.5 py-2 ring-1 ring-gray-100">
            <div className="text-[15px] font-extrabold text-amber-500">1</div>
            <div className="text-[7.5px] font-semibold uppercase text-gray-400">Medium</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <Settings className="h-3.5 w-3.5" strokeWidth={1.8} />
          Thresholds
        </div>
        <div className="mt-2 text-[13px] font-bold text-white">Yours to configure</div>
        <div className="mt-2 text-[9px] text-white/40">Changes apply going forward</div>
      </div>
    </div>
  ),
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function BurnoutDetectionPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
