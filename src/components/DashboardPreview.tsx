import {
  Bell,
  ChevronDown,
  DotsLogo,
  Search,
} from "./icons";

const NAV_ITEMS = ["Overview", "Monitor", "Review", "Analytics", "Reports", "Team"];

const STATS = [
  { label: "TOTAL EMPLOYEES", value: "19", sub: "12 active now" },
  { label: "BILLED HOURS THIS WEEK", value: "211.5h", sub: "across all staff" },
  { label: "VS PREVIOUS PERIOD", value: "↓ 302.4h", sub: "59% change", down: true },
  { label: "TEAM AVG SCORE", value: "96%", sub: "productivity", green: true },
  { label: "ACTIVE RIGHT NOW", value: "12", sub: "0 paused · 7 offline" },
  { label: "ALERTS TODAY", value: "7", sub: "Needs attention", warn: true },
];

const DAILY_HOURS = [
  { day: "Mon 06", value: 102, color: "#22c55e" },
  { day: "Tue 07", value: 70, color: "#3b82f6" },
  { day: "Wed 08", value: 15, color: "#3b82f6" },
  { day: "Thu 09", value: 0, color: "#3b82f6" },
  { day: "Fri 10", value: 0, color: "#3b82f6" },
  { day: "Sat 11", value: 0, color: "#3b82f6" },
  { day: "Sun 12", value: 0, color: "#3b82f6" },
];
const DAILY_MAX = 120;

const LEGEND = [
  { label: "Excellent", value: "100%", color: "#22c55e" },
  { label: "Good", value: "0%", color: "#3b82f6" },
  { label: "Fair", value: "0%", color: "#f59e0b" },
  { label: "Low/None", value: "0%", color: "#d1d5db" },
];

const ATTENDANCE = [
  { day: "Mon 06", value: "13/19", pct: 68 },
  { day: "Tue 07", value: "12/19", pct: 63 },
  { day: "Wed 08", value: "12/19", pct: 63 },
  { day: "Thu 09", value: "0/19", pct: 0 },
  { day: "Fri 10", value: "0/19", pct: 0 },
];

const STATUS_STYLES: Record<string, string> = {
  Tracking: "text-green-500",
  Meeting: "text-violet-500",
};

const EMPLOYEES = [
  { name: "Rio Chase", initials: "RC", grad: "from-blue-400 to-indigo-500", hours: "22.1h", score: "96%", focus: 7, streak: "3d", status: "Tracking" },
  { name: "Marie Johnson", initials: "MJ", grad: "from-pink-400 to-rose-500", hours: "18.8h", score: "97%", focus: 6, streak: "3d", status: "Meeting" },
  { name: "Vincent Blake", initials: "VB", grad: "from-amber-400 to-orange-500", hours: "18.0h", score: "98%", focus: 8, streak: "3d", status: "Tracking" },
  { name: "Patrice Kent", initials: "PK", grad: "from-emerald-400 to-green-500", hours: "16.8h", score: "97%", focus: 5, streak: "3d", status: "Tracking" },
  { name: "Alison Stark", initials: "AS", grad: "from-violet-400 to-purple-500", hours: "16.7h", score: "96%", focus: 6, streak: "3d", status: "Tracking" },
  { name: "Derek Kane", initials: "DK", grad: "from-blue-400 to-indigo-500", hours: "16.7h", score: "94%", focus: 7, streak: "3d", status: "Tracking" },
  { name: "Sonny Chen", initials: "SC", grad: "from-amber-400 to-orange-500", hours: "16.7h", score: "96%", focus: 7, streak: "3d", status: "Tracking" },
  { name: "Nicholas Wayne Bridge", initials: "NB", grad: "from-pink-400 to-rose-500", hours: "16.3h", score: "96%", focus: 8, streak: "3d", status: "Meeting" },
  { name: "Pamela Williams", initials: "PW", grad: "from-emerald-400 to-green-500", hours: "16.3h", score: "97%", focus: 5, streak: "3d", status: "Tracking" },
  { name: "Angela Souness", initials: "AS", grad: "from-violet-400 to-purple-500", hours: "15.9h", score: "94%", focus: 6, streak: "3d", status: "Tracking" },
];

const TOP_APPS = [
  { app: "chrome", time: "107h 31m", pct: 100, productive: true },
  { app: "Code", time: "24h 38m", pct: 23, productive: true },
  { app: "Google Chrome", time: "23h 31m", pct: 22, productive: true },
  { app: "Microsoft Teams", time: "9h 53m", pct: 9, productive: false },
  { app: "google docs", time: "6h 21m", pct: 6, productive: true },
  { app: "Firefox", time: "5h 31m", pct: 5, productive: true },
  { app: "Antigravity", time: "5h 15m", pct: 5, productive: false },
  { app: "ms-teams", time: "5h 03m", pct: 5, productive: false },
];

export default function DashboardPreview() {
  return (
    <div className="w-[900px] overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(80,63,205,0.35)] ring-1 ring-gray-200/70">
      {/* ───────── Top nav ───────── */}
      <div className="flex items-center justify-between bg-[#0b0f19] px-4 py-2.5">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <DotsLogo className="scale-[0.8]" />
            <span className="text-[12px] font-bold tracking-tight text-white">TrackDots</span>
          </div>
          <nav className="flex items-center gap-3.5">
            {NAV_ITEMS.map((item) => (
              <span key={item} className="flex items-center gap-0.5 text-[10px] font-medium text-white/60">
                {item}
                <ChevronDown className="h-2.5 w-2.5 text-white/40" />
              </span>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-[9px] text-white/50">
            <Search className="h-2.5 w-2.5" />
            Employees
          </div>
          <div className="relative">
            <Bell className="h-3.5 w-3.5 text-white/50" />
            <span className="absolute -right-1.5 -top-1.5 rounded-full bg-red-500 px-1 text-[6.5px] font-bold leading-[10px] text-white">
              11
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-[8px] font-bold text-white">
              RC
            </span>
            <span className="text-[9px] font-medium text-white/70">Rio Chase</span>
          </div>
        </div>
      </div>

      {/* ───────── Tabs ───────── */}
      <div className="flex items-center gap-1 border-b border-gray-100 bg-white px-4 py-2">
        <span className="rounded-md bg-gray-900 px-2.5 py-1 text-[9.5px] font-semibold text-white">Dashboard</span>
        <span className="px-2.5 py-1 text-[9.5px] font-medium text-gray-500">Team Overview</span>
      </div>

      {/* ───────── Content ───────── */}
      <div className="space-y-2.5 bg-[#f8f9fd] p-4">
        {/* Heading row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[15px] font-bold text-gray-900">Dashboard</div>
            <div className="text-[9px] text-gray-400">Wednesday, July 8, 2026</div>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-white p-0.5 ring-1 ring-gray-200">
            {["Today", "This week", "This month"].map((t) => (
              <span
                key={t}
                className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                  t === "This week" ? "bg-gray-900 text-white" : "text-gray-500"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-6 gap-2">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl bg-white p-2 ring-1 ring-gray-100">
              <div className="text-[6px] font-semibold uppercase tracking-wider text-gray-400">{s.label}</div>
              <div
                className={`mt-1 text-[14px] font-bold ${
                  s.green ? "text-green-500" : s.down ? "text-red-500" : s.warn ? "text-orange-500" : "text-gray-900"
                }`}
              >
                {s.value}
              </div>
              <div className="mt-0.5 text-[7px] text-gray-400">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Middle row: daily hours + donut + attendance */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Daily Billed Hours */}
          <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
            <div className="text-[9px] font-bold text-gray-900">Daily Billed Hours</div>
            <div className="mt-2 flex h-[70px] items-stretch gap-1.5">
              {DAILY_HOURS.map((d) => (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-sm"
                      style={{ height: `${(d.value / DAILY_MAX) * 100}%`, backgroundColor: d.value > 0 ? d.color : "transparent" }}
                    />
                  </div>
                  <span className="text-[5.5px] text-gray-400">{d.day.split(" ")[1]}</span>
                </div>
              ))}
            </div>
            <div className="mt-1.5 flex justify-between border-t border-gray-100 pt-1.5 text-[6.5px] text-gray-400">
              <span>
                Peak: <span className="font-semibold text-gray-700">Mon 06, 102.3h</span>
              </span>
              <span>
                Avg: <span className="font-semibold text-gray-700">69.9h/day</span>
              </span>
            </div>
          </div>

          {/* Productivity Distribution */}
          <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
            <div className="text-[9px] font-bold text-gray-900">Productivity Distribution</div>
            <div className="mt-2 flex items-center gap-3">
              <div className="relative h-[64px] w-[64px] shrink-0">
                <div
                  className="h-full w-full rounded-full"
                  style={{ background: "conic-gradient(#22c55e 0% 100%)" }}
                />
                <div className="absolute inset-[9px] rounded-full bg-white" />
              </div>
              <div className="flex-1 space-y-1">
                {LEGEND.map((l) => (
                  <div key={l.label} className="flex items-center gap-1 text-[7px]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: l.color }} />
                    <span className="flex-1 text-gray-500">{l.label}</span>
                    <span className="font-bold text-gray-900">{l.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attendance */}
          <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
            <div className="text-[9px] font-bold text-gray-900">Attendance — This Week</div>
            <div className="mt-2 space-y-1.5">
              {ATTENDANCE.map((a) => (
                <div key={a.day} className="flex items-center gap-1.5 text-[6.5px]">
                  <span className="w-[30px] text-gray-500">{a.day}</span>
                  <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-gray-100">
                    {a.pct > 0 && <div className="h-full rounded-full bg-blue-500" style={{ width: `${a.pct}%` }} />}
                  </div>
                  <span className="w-6 text-right text-gray-500">{a.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-1.5 border-t border-gray-100 pt-1.5 text-[7px] font-semibold text-green-500">
              Overall rate: 39%
            </div>
          </div>
        </div>

        {/* Bottom row: employee summary + top apps */}
        <div className="grid grid-cols-[1.6fr_1fr] gap-2.5">
          <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-[9px] font-bold text-gray-900">Employee Summary — This Week</div>
              <span className="text-[6.5px] text-gray-400">1–10 of 19</span>
            </div>
            <div className="mt-1.5 grid grid-cols-[1.5fr_0.6fr_0.6fr_0.6fr_0.6fr_0.9fr] gap-1 text-[6px] font-semibold uppercase tracking-wider text-gray-400">
              <span>Employee</span>
              <span>Hours</span>
              <span>Score</span>
              <span>Focus</span>
              <span>Streak</span>
              <span>Status</span>
            </div>
            <div className="mt-1 space-y-[3px]">
              {EMPLOYEES.map((e) => (
                <div
                  key={e.name}
                  className="grid grid-cols-[1.5fr_0.6fr_0.6fr_0.6fr_0.6fr_0.9fr] items-center gap-1 text-[6.5px]"
                >
                  <span className="flex items-center gap-1 font-semibold text-gray-900">
                    <span
                      className={`flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[4.5px] font-bold text-white ${e.grad}`}
                    >
                      {e.initials}
                    </span>
                    <span className="truncate">{e.name}</span>
                  </span>
                  <span className="text-gray-600">{e.hours}</span>
                  <span className="font-bold text-green-500">{e.score}</span>
                  <span className="text-gray-600">{e.focus}</span>
                  <span className="text-gray-600">{e.streak}</span>
                  <span className={`flex items-center gap-1 font-semibold ${STATUS_STYLES[e.status]}`}>
                    <span className="h-1 w-1 rounded-full bg-current" />
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100">
            <div className="text-[9px] font-bold text-gray-900">Top Apps — This Week</div>
            <div className="mt-2 space-y-1.5">
              {TOP_APPS.map((a) => (
                <div key={a.app} className="flex items-center gap-1.5 text-[6.5px]">
                  <span className="w-[54px] truncate text-gray-600">{a.app}</span>
                  <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${a.productive ? "bg-green-500" : "bg-blue-500"}`}
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                  <span className="w-9 text-right text-gray-500">{a.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2.5 border-t border-gray-100 pt-1.5 text-[6px] text-gray-500">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Productive
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Neutral
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Unproductive
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
