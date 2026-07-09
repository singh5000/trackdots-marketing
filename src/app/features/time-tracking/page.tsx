import type { Metadata } from "next";
import DashboardPreview from "@/components/DashboardPreview";
import FeaturePageSections, { type FeaturePageVisuals } from "@/components/features/FeaturePageSections";
import { getFeaturePageContent } from "@/lib/featurepage";
import { TEAM_MEETING_IMAGE } from "@/lib/media";
import { CheckCircle, KeyboardOff, Monitor } from "@/components/icons";
import { FALLBACK, SLUG } from "./content";

export const metadata: Metadata = {
  title: "Time Tracking — TrackDots",
  description:
    "Automatic time tracking for modern teams. TrackDots tracks apps, websites, and activity in the background — every block scored for confidence, so you always know what real work looks like.",
};

/* ── Small visuals, all built from our own design system — no stock photos. ── */

function PhoneMock() {
  const rows = [
    { app: "Figma", pct: 80, color: "from-green-400 to-emerald-400", glow: "shadow-[0_0_10px_rgba(74,222,128,0.6)]" },
    { app: "Chrome", pct: 55, color: "from-sky-400 to-blue-400", glow: "shadow-[0_0_10px_rgba(56,189,248,0.6)]" },
    { app: "Slack", pct: 25, color: "from-fuchsia-400 to-violet-400", glow: "shadow-[0_0_10px_rgba(232,121,249,0.6)]" },
  ];
  return (
    <div className="relative">
      {/* big ambient glow behind the phone */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-brand-500/40 via-fuchsia-400/20 to-transparent blur-3xl"
      />

      <div className="relative w-[220px] rounded-[38px] border-[6px] border-black bg-black p-[3px] shadow-[0_25px_60px_-15px_rgba(109,94,244,0.6)] ring-1 ring-white/10">
        {/* notch */}
        <span className="absolute left-1/2 top-3.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />

        <div
          className="rounded-[32px] p-4 pt-9"
          style={{
            background:
              "radial-gradient(circle at 25% 0%, rgba(139,110,246,0.35), transparent 55%), linear-gradient(180deg, #120c24 0%, #05030c 100%)",
          }}
        >
          {/* status row */}
          <div className="flex items-center justify-between text-[9px] font-semibold text-white/40">
            <span>9:41</span>
            <span className="flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Live
            </span>
          </div>

          {/* header */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-[9px] font-medium text-white/40">Good morning</div>
              <div className="text-[14px] font-bold text-white">Adrian Cole</div>
            </div>
            <span className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-400 to-brand-500 shadow-[0_0_14px_rgba(167,139,250,0.7)] ring-2 ring-white/20" />
          </div>

          {/* confidence ring card */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/[0.08] p-3 ring-1 ring-white/15">
            <div className="relative h-[52px] w-[52px] shrink-0">
              <div
                className="h-full w-full rounded-full drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]"
                style={{ background: "conic-gradient(#4ade80 0% 94%, rgba(255,255,255,0.12) 94% 100%)" }}
              />
              <div className="absolute inset-[4px] flex items-center justify-center rounded-full bg-[#0a0714] text-[12px] font-bold text-white">
                94
              </div>
            </div>
            <div>
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-white/40">Confidence</div>
              <div className="text-[13.5px] font-bold text-white">Excellent</div>
            </div>
          </div>

          {/* app bars */}
          <div className="mt-4 text-[8.5px] font-bold uppercase tracking-wide text-white/40">Today · 4h 12m</div>
          <div className="mt-2.5 space-y-3">
            {rows.map((r) => (
              <div key={r.app}>
                <div className="flex justify-between text-[10.5px] font-semibold text-white/80">
                  <span>{r.app}</span>
                  <span>{r.pct}%</span>
                </div>
                <div className="mt-1.5 h-[6px] w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${r.color} ${r.glow}`}
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* home indicator */}
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** A real photo, tinted into the brand's purple duotone — gives photographic
 *  depth without showing any identifiable third-party logo or brand. */
function DuotonePhoto({ photoId, className }: { photoId: number; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://picsum.photos/id/${photoId}/560/700`}
        alt=""
        className="h-full w-full object-cover"
        style={{ filter: "grayscale(1) contrast(1.15) brightness(0.85)" }}
        loading="lazy"
        width={560}
        height={700}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-violet-700 mix-blend-color" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
    </div>
  );
}

function DayJourneyMock() {
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[420px] w-full object-cover sm:h-[460px]"
          loading="lazy"
        />
      </div>

      {/* ── Floating card: day timeline ── */}
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Day Journey</div>
          <div className="flex gap-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span
                key={i}
                className={`flex h-4 w-4 items-center justify-center rounded text-[7px] font-bold ${
                  i === 0 ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-400"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-4">
          <span className="absolute -top-3.5 left-[54%] -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold text-gray-400">
            ☕ Lunch
          </span>
          <div className="flex h-5 w-full overflow-hidden rounded-md">
            <div className="h-full w-[52%] bg-gradient-to-r from-green-500 to-emerald-500" />
            <div className="h-full w-[5%] bg-gray-200" />
            <div className="h-full w-[43%] bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>
        </div>
        <div className="mt-1.5 flex justify-between text-[9px] font-medium text-gray-400">
          <span>9:16 AM</span>
          <span>6:15 PM</span>
        </div>
      </div>

      {/* ── Floating card: session detail ── */}
      <div className="absolute -bottom-2 -right-4 w-[240px] rounded-xl bg-white p-4 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Session Detail</div>
        <div className="mt-1 text-[13.5px] font-bold text-gray-900">9:16 AM → 1:55 PM</div>
        <div className="text-[11.5px] font-semibold text-green-600">Working · 4h 38m</div>
        <div className="mt-2.5 flex flex-wrap gap-1">
          {["Teams", "Code", "pgAdmin 4"].map((a) => (
            <span key={a} className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[9px] font-medium text-gray-600">
              {a}
            </span>
          ))}
        </div>
        <div className="mt-2.5 text-[9.5px] text-gray-400">28 activity blocks tracked</div>
      </div>
    </div>
  );
}

function PrivacyMock() {
  const rows = [
    { app: "Chrome", pct: 70, c: "bg-green-500" },
    { app: "Figma", pct: 45, c: "bg-blue-500" },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <DuotonePhoto photoId={1005} className="h-[420px] w-full rounded-3xl shadow-2xl sm:h-[460px]" />

      {/* ── Floating card: self-view profile ── */}
      <div className="absolute -left-2 top-0 w-[230px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center gap-2.5">
          <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-brand-600" />
          <div>
            <div className="text-[12px] font-bold text-gray-900">Adrian Cole</div>
            <div className="text-[9.5px] text-gray-400">My Activity — Today</div>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {rows.map((r) => (
            <div key={r.app}>
              <div className="flex justify-between text-[9px] font-medium text-gray-500">
                <span>{r.app}</span>
                <span>{r.pct}%</span>
              </div>
              <div className="mt-1 h-[5px] w-full overflow-hidden rounded-full bg-gray-100">
                <div className={`h-full rounded-full ${r.c}`} style={{ width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-green-50 px-2.5 py-1.5 text-[9.5px] font-semibold text-green-600">
          <CheckCircle className="h-3 w-3" strokeWidth={2} />
          Fully visible to you
        </div>
      </div>

      {/* ── Floating card: keystroke privacy ── */}
      <div className="absolute -bottom-2 -right-4 w-[220px] rounded-xl bg-gray-950 p-4 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-white/50">
          <KeyboardOff className="h-3.5 w-3.5" strokeWidth={1.8} />
          Keystroke Content
        </div>
        <div className="mt-2 font-mono text-[15px] tracking-[0.3em] text-white/70">•••• •• ••••</div>
        <div className="mt-2 flex items-center justify-between text-[9px] text-white/40">
          <span>Never logged</span>
          <span className="flex items-center gap-1 font-semibold text-green-400">
            <CheckCircle className="h-3 w-3" strokeWidth={2} />
            Reviewed
          </span>
        </div>
      </div>
    </div>
  );
}

function CrossPlatformMock() {
  const devices = [
    { name: "Adrian's MacBook Pro", os: "macOS 15", status: "Tracking now", badge: "bg-gray-900" },
    { name: "Sarah's Windows Laptop", os: "Windows 11", status: "Tracking now", badge: "bg-blue-600" },
    { name: "James's MacBook Air", os: "macOS 14", status: "Idle 4m", badge: "bg-gray-900" },
  ];
  return (
    <div className="relative w-full max-w-[440px] pb-10 pl-8 pt-8">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[380px] w-full object-cover"
          style={{ objectPosition: "70% 30%" }}
          loading="lazy"
        />
      </div>

      {/* ── Floating card: connected devices ── */}
      <div className="absolute -left-2 top-0 w-[250px] rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Connected Devices</div>
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[8.5px] font-bold text-green-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Live
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {devices.map((d) => (
            <div key={d.name} className="flex items-center gap-2.5 rounded-lg bg-gray-50 px-2.5 py-2">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white ${d.badge}`}>
                <Monitor className="h-3 w-3" strokeWidth={1.8} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10.5px] font-semibold text-gray-900">{d.name}</div>
                <div className="text-[9px] text-gray-400">{d.os}</div>
              </div>
              <span
                className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8.5px] font-bold ${
                  d.status === "Tracking now" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                }`}
              >
                {d.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: platform-count badge ── */}
      <div className="absolute -bottom-2 -right-4 flex items-center gap-2.5 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl shadow-brand-600/40">
        <span className="text-2xl font-extrabold leading-none">2</span>
        <span className="text-[10px] font-semibold leading-tight">
          Native
          <br />
          Platforms
        </span>
      </div>
    </div>
  );
}

/* Widgets for the sticky "lock and scroll" showcase */
function WidgetKicker({ children }: { children: string }) {
  return <div className="mb-2 text-[9.5px] font-bold uppercase tracking-wider text-white/40">{children}</div>;
}

function MiniTrendBars({ values, color }: { values: number[]; color: string }) {
  return (
    <div className="flex h-8 items-end gap-1">
      {values.map((v, i) => (
        <div key={i} className={`w-2 rounded-t-sm ${color}`} style={{ height: `${v}%` }} />
      ))}
    </div>
  );
}

function LiveBarsWidget() {
  const rows = [
    { l: "Chrome", pct: 53, time: "48h 16m", c: "bg-green-400" },
    { l: "VS Code", pct: 25, time: "22h 40m", c: "bg-blue-400" },
    { l: "Slack", pct: 14, time: "12h 05m", c: "bg-violet-400" },
    { l: "Teams", pct: 8, time: "7h 10m", c: "bg-amber-400" },
  ];
  return (
    <div className="flex w-full items-center gap-6">
      <div className="flex-1">
        <WidgetKicker>Top Apps — This Week</WidgetKicker>
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.l} className="flex items-center gap-3 text-[10.5px] text-white/80">
              <span className="w-14 shrink-0">{r.l}</span>
              <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-white/15">
                <div className={`h-full rounded-full ${r.c}`} style={{ width: `${r.pct}%` }} />
              </div>
              <span className="w-14 shrink-0 text-right text-white/50">{r.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-[100px] shrink-0 border-l border-white/10 pl-6 sm:block">
        <div className="text-[20px] font-extrabold text-white">90h 11m</div>
        <div className="text-[9px] font-semibold uppercase tracking-wide text-white/50">Total Tracked</div>
        <div className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-white/50">4 Apps Used</div>
      </div>
    </div>
  );
}

function FocusStatWidget() {
  const stats = [
    { label: "Total Sessions", value: "13" },
    { label: "Total Focus Time", value: "52h 21m" },
    { label: "Avg. Length", value: "4h 01m" },
    { label: "Longest Session", value: "4h 26m" },
  ];
  return (
    <div className="w-full">
      <WidgetKicker>Focus Sessions — This Week</WidgetKicker>
      <div className="flex items-center gap-6">
        <div className="grid flex-1 grid-cols-4 gap-2.5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg bg-white/10 px-2.5 py-2.5">
              <div className="text-[14px] font-extrabold text-white">{s.value}</div>
              <div className="text-[7.5px] font-semibold uppercase tracking-wide text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="hidden shrink-0 border-l border-white/10 pl-6 sm:block">
          <div className="mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/50">Daily Trend</div>
          <MiniTrendBars values={[40, 65, 50, 90, 70, 30, 20]} color="bg-amber-400" />
        </div>
      </div>
    </div>
  );
}

function IdleSplitWidget() {
  const stats = [
    { label: "Total Tracked", value: "52h 02m" },
    { label: "Active", value: "51h 50m" },
    { label: "Idle", value: "11m" },
    { label: "Efficiency", value: "100%", green: true },
  ];
  return (
    <div className="w-full">
      <WidgetKicker>Idle Time Breakdown — Today</WidgetKicker>
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <div className="flex h-[10px] w-full overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[99%] bg-green-400" />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2.5 text-[10px]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className={`font-bold ${s.green ? "text-green-400" : "text-white"}`}>{s.value}</div>
                <div className="text-[8px] font-semibold uppercase tracking-wide text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden shrink-0 border-l border-white/10 pl-6 sm:block">
          <div className="mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/50">7-Day Efficiency</div>
          <MiniTrendBars values={[85, 92, 88, 95, 100, 60, 40]} color="bg-green-400" />
        </div>
      </div>
    </div>
  );
}

function AppDonutWidget() {
  const legend = [
    { label: "Productive", value: "70%", time: "39h 12m", color: "bg-green-400" },
    { label: "Neutral", value: "22%", time: "12h 20m", color: "bg-blue-400" },
    { label: "Unproductive", value: "8%", time: "4h 30m", color: "bg-red-400" },
  ];
  return (
    <div className="flex w-full items-center gap-6">
      <div className="flex-1">
        <WidgetKicker>Category Breakdown — This Week</WidgetKicker>
        <div className="flex items-center gap-5">
          <div className="relative h-16 w-16 shrink-0">
            <div
              className="h-full w-full rounded-full"
              style={{ background: "conic-gradient(#4ade80 0% 70%, #60a5fa 70% 92%, #f87171 92% 100%)" }}
            />
            <div className="absolute inset-[5px] flex items-center justify-center rounded-full bg-gray-900 text-[11px] font-bold text-white">
              56h
            </div>
          </div>
          <div className="flex-1 space-y-1.5">
            {legend.map((l) => (
              <div key={l.label} className="flex items-center gap-1.5 text-[10px] text-white/80">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-[2px] ${l.color}`} />
                <span className="flex-1 truncate">{l.label}</span>
                <span className="w-12 shrink-0 text-white/50">{l.time}</span>
                <span className="w-8 shrink-0 text-right font-bold text-white">{l.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden shrink-0 border-l border-white/10 pl-6 text-center sm:block">
        <div className="text-[9px] font-semibold uppercase tracking-wide text-white/50">Top App</div>
        <div className="mt-1 text-[14px] font-extrabold text-white">Chrome</div>
        <div className="text-[9px] text-white/50">48h 16m</div>
      </div>
    </div>
  );
}

function MeetingRowWidget() {
  const rows = [
    { name: "Sarah Bennett", time: "12:44 – 12:51 PM", dur: "7m" },
    { name: "Marcus Reyes", time: "12:42 – 12:52 PM", dur: "9m" },
    { name: "James Whitfield", time: "3:05 – 3:18 PM", dur: "13m" },
  ];
  return (
    <div className="flex w-full items-center gap-6">
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <WidgetKicker>Meeting Approvals</WidgetKicker>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold text-white/70">
            3 Pending Today
          </span>
        </div>
        <div className="space-y-1.5">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between rounded-md bg-white/10 px-3 py-1.5">
              <div>
                <div className="text-[10.5px] font-semibold text-white/90">{r.name}</div>
                <div className="text-[8.5px] text-white/50">
                  {r.time} · {r.dur}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-green-500/20 px-1.5 py-0.5 text-[9px] font-bold text-green-400">✓</span>
                <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[9px] font-bold text-red-400">✕</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS: FeaturePageVisuals = {
  hero: <DashboardPreview />,
  problemSolution: <PhoneMock />,
  dark1: <DayJourneyMock />,
  stickyWidgets: [
    <LiveBarsWidget key="live-bars" />,
    <FocusStatWidget key="focus-stat" />,
    <IdleSplitWidget key="idle-split" />,
    <AppDonutWidget key="app-donut" />,
    <MeetingRowWidget key="meeting-row" />,
  ],
  panel: <CrossPlatformMock />,
  dark2: <PrivacyMock />,
  statsPhotos: [
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "20% 30%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "50% 25%" },
    { photoSrc: TEAM_MEETING_IMAGE, photoPosition: "85% 30%" },
  ],
};

export default async function TimeTrackingPage() {
  const content = await getFeaturePageContent(SLUG, FALLBACK);
  return <FeaturePageSections content={content} visuals={VISUALS} />;
}
