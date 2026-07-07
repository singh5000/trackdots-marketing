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
  Activity,
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
  ShieldCheck,
  Sparkles,
  TrendUp,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Burnout Detection — TrackDots",
  description:
    "A 14-day rolling burnout risk score built from real activity — long hours, no breaks, weekend work, late nights, and more — with plain-language recommendations.",
};

const CAPABILITIES = [
  { icon: TrendUp, title: "14-Day Rolling Risk Score", desc: "Every employee's burnout risk is calculated from the last 14 days of real activity, not a one-off survey." },
  { icon: Activity, title: "Six Real Warning Signals", desc: "Long hours, no breaks, weekend work, late nights, declining productivity, and weekly overload — each tracked individually." },
  { icon: Settings, title: "Configurable Thresholds", desc: "Adjust what counts as \"long hours\" or \"overwork\" to match your organization's culture." },
  { icon: ShieldCheck, title: "Four-Tier Risk Levels", desc: "Every employee lands in High, Medium, Watch, or All Clear, so managers know exactly who needs a check-in." },
  { icon: Sparkles, title: "Actionable Recommendations", desc: "Each at-risk employee gets a plain-language suggestion, not just a score." },
  { icon: Users, title: "One-Click Profile Access", desc: "Jump straight from any flagged employee to their full activity profile." },
];

const PROBLEMS = [
  "Burnout building silently until someone quits or breaks down",
  "No consistent way to spot overwork across a distributed team",
  "Well-being conversations that come too late to matter",
];
const BENEFITS = [
  "Risk calculated automatically from 14 days of real activity",
  "Six distinct overwork signals tracked per employee",
  "A plain-language nudge to check in, before it's a crisis",
];

const COMPARISON_COLUMNS = ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"];
const COMPARISON_ROWS: { capability: string; statuses: ("yes" | "partial" | "no")[] }[] = [
  { capability: "14-day rolling burnout risk score", statuses: ["yes", "no", "no"] },
  { capability: "Six tracked overwork signals", statuses: ["yes", "no", "no"] },
  { capability: "Configurable risk thresholds", statuses: ["yes", "no", "no"] },
  { capability: "Four-tier risk classification", statuses: ["yes", "no", "no"] },
  { capability: "Plain-language recommendations", statuses: ["yes", "no", "no"] },
  { capability: "One-click link to employee profile", statuses: ["yes", "partial", "no"] },
];

const FAQS = [
  { q: "How is burnout risk calculated?", a: "TrackDots looks at the last 14 days of real tracked activity — hours worked, breaks taken, weekend and late-night work, and productivity trend — against your configured thresholds." },
  { q: "What are the risk levels?", a: "Every employee lands in one of four levels — High, Medium, Watch, or All Clear — based on how many overwork signals are triggered." },
  { q: "Can I adjust what counts as overwork?", a: "Yes. Thresholds for long hours, late nights, and weekly limits are all configurable per organization." },
  { q: "What signals does TrackDots track?", a: "Long hours, no breaks, weekend work, late nights, declining productivity, and weekly hours over limit — each shown individually per employee." },
  { q: "Does a High risk flag mean something is definitely wrong?", a: "No. It means the employee's recent pattern matches signals worth a manager check-in — TrackDots gives a plain-language recommendation, not a verdict." },
  { q: "Can employees see their own burnout risk?", a: "Yes, on plans with the employee self-view portal enabled." },
];

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

const STICKY_CARDS: StickyCard[] = [
  {
    tone: "purple",
    icon: TrendUp,
    title: "A Score, Not a Guess",
    desc: "Every employee is placed into a risk tier calculated from 14 real days of activity.",
    checks: ["14-day rolling window", "Four risk tiers", "Recalculated automatically, daily"],
    widget: <RiskTiersWidget />,
  },
  {
    tone: "dark",
    icon: Activity,
    title: "Six Signals, Tracked Individually",
    desc: "Long hours, no breaks, weekend work, late nights, declining productivity, and weekly overload — each shown on its own.",
    checks: ["Long hours & late nights", "Weekend work & missed breaks", "Declining productivity trend"],
    widget: <SignalsWidget />,
  },
  {
    tone: "purple",
    icon: Settings,
    title: "Thresholds You Control",
    desc: "What counts as a \"long day\" or \"late night\" is fully configurable per organization.",
    checks: ["Configurable long-day threshold", "Configurable late-night window", "Configurable weekly cap"],
    widget: <ThresholdsWidget />,
  },
  {
    tone: "dark",
    icon: Sparkles,
    title: "A Recommendation, Not Just a Number",
    desc: "Every at-risk employee comes with a plain-language suggestion for what to do next.",
    checks: ["Plain-language recommendations", "Tuned to the specific signals found", "Written for managers, not analysts"],
    widget: <RecommendationWidget />,
  },
  {
    tone: "purple",
    icon: Users,
    title: "One Click to the Full Picture",
    desc: "Jump straight from any flagged employee to their complete activity profile.",
    checks: ["One-click profile access", "Full 14-day activity history", "Same view for every risk tier"],
    widget: <ProfileLinkWidget />,
  },
];

export default function BurnoutDetectionPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow="FEATURE — BURNOUT DETECTION"
        heading="Spot Overwork Before"
        highlight="It Costs You Someone."
        description="A 14-day rolling burnout risk score built from real activity — long hours, no breaks, weekend work, late nights, and more — with plain-language recommendations."
        visual={<BurnoutHeroCard />}
      />

      <FeatureProblemSolution
        eyebrow="THE WELL-BEING GAP"
        heading="Don't Wait for Someone to Burn Out"
        subheading="By the time overwork is obvious, it's already taken a toll. Burnout Detection catches it 14 days at a time."
        problems={PROBLEMS}
        benefits={BENEFITS}
      />

      <FeatureGrid
        eyebrow="HOW IT WORKS"
        heading="A Risk Score That Builds Itself"
        subheading="Six real signals, four risk tiers, and a plain-language nudge for every manager."
        items={CAPABILITIES}
      />

      <FeatureDarkHighlight
        eyebrow="RISK SIGNALS"
        blocks={[
          {
            highlighted: true,
            heading: "Every Signal, Shown Individually",
            desc: "Long hours, late nights, weekend work, missed breaks, and more — never just one blended score.",
            checklist: ["Six distinct overwork signals", "Shown per employee, per signal"],
          },
          {
            heading: "A Recommendation, Every Time",
            desc: "Each at-risk employee comes with a plain-language suggestion for what a manager should do next.",
            checklist: ["Plain-language recommendations", "Tuned to the exact signals found"],
          },
        ]}
        linkLabel="Explore Burnout Detection"
        visual={
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
        }
      />

      <FeatureStickyShowcase
        eyebrow="GO DEEPER"
        heading="Every Angle of Burnout Detection"
        desc="From individual signals to team-wide risk tiers — TrackDots surfaces overwork before it becomes a resignation."
        cards={STICKY_CARDS}
      />

      <FeatureHighlightPanel
        reverse
        heading="Built for Conversations, Not Verdicts"
        desc="A High risk flag is a prompt to check in — never an automated judgment. Every recommendation is paired with the real activity behind it."
        checklist={["Every flag paired with real evidence", "Written to prompt a conversation", "Never used for automated penalties"]}
        linkLabel="See How Recommendations Work"
        visual={
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
        }
      />

      <FeatureStatsRow
        stats={[
          { icon: Clock, value: "14-Day", label: "Rolling Window", desc: "Risk is calculated from a rolling 14 days of real activity, refreshed daily.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
          { icon: Activity, value: "6", label: "Overwork Signals", desc: "Long hours, no breaks, weekend work, late nights, and more, tracked individually.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
          { icon: ShieldCheck, value: "4-Tier", label: "Risk Classification", desc: "High, Medium, Watch, or All Clear — configurable to your organization's thresholds.", photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
        ]}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow="CONNECTED TO THE BIGGER PICTURE"
        blocks={[
          {
            highlighted: true,
            heading: "One Signal Among Many",
            desc: "Burnout risk sits alongside anomaly flags and productivity trends for a complete view of team health.",
            checklist: ["Shares signals with Anomaly Detection", "Feeds into Productivity Intelligence"],
          },
          {
            heading: "Adjustable as Your Team Grows",
            desc: "Thresholds can be revisited any time as team size, seasons, or workload patterns change.",
            checklist: ["Thresholds configurable anytime", "Applies going forward, not retroactively"],
          },
        ]}
        linkLabel="See Anomaly Detection"
        visual={
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
        }
      />

      <FeatureComparison
        heading="Get The Right Tool"
        subheading="See how TrackDots' burnout detection compares to the old way."
        columns={COMPARISON_COLUMNS}
        rows={COMPARISON_ROWS}
      />

      <FeatureFAQ heading="Burnout Detection, Answered" items={FAQS} />

      <FinalCTA />
    </main>
  );
}
