import {
  BarChart,
  Bell,
  Calendar,
  ChevronDown,
  DotsLogo,
  FileText,
  Folder,
  Inbox,
  LayoutGrid,
  Monitor,
  Search,
  Settings,
  Users,
} from "./icons";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Employees", icon: Users },
  { label: "Monitor", icon: Monitor, chevron: true },
  { label: "Analytics", icon: BarChart },
  { label: "Reports", icon: FileText },
  { label: "Projects", icon: Folder },
  { label: "Alerts", icon: Bell, badge: "12" },
  { label: "Settings", icon: Settings },
];

const STATS = [
  { label: "TOTAL EMPLOYEES", value: "19", delta: "13%", green: false },
  { label: "PRODUCTIVE HOURS", value: "21.6h", delta: "8%", green: false },
  { label: "PRODUCTIVITY SCORE", value: "95%", delta: "12%", green: true },
  { label: "ACTIVE RIGHT NOW", value: "13", live: true },
];

const LEGEND = [
  { label: "Excellent", value: "100%", color: "#22c55e" },
  { label: "Good", value: "0%", color: "#3b82f6" },
  { label: "Fair", value: "0%", color: "#f59e0b" },
  { label: "Low/None", value: "0%", color: "#d1d5db" },
];

const ATTENDANCE = [
  { day: "Mon 06", pct: 68, value: "13/19" },
  { day: "Tue 07", pct: 0, value: "0/19" },
  { day: "Wed 08", pct: 0, value: "0/19" },
  { day: "Thu 09", pct: 0, value: "0/19" },
  { day: "Fri 10", pct: 0, value: "0/19" },
];

export default function DashboardPreview() {
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
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-[7px] text-[11px] font-medium ${
                  item.active
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-gray-500"
                }`}
              >
                <item.icon
                  className={`h-3.5 w-3.5 ${
                    item.active ? "text-white" : "text-gray-400"
                  }`}
                />
                <span className="flex-1">{item.label}</span>
                {item.chevron && (
                  <ChevronDown className="h-3 w-3 text-gray-400" />
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
              <span className="text-[10px] text-gray-400">
                Search anything...
              </span>
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
            {/* Heading row */}
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[15px] font-bold text-gray-900">
                  Dashboard
                </div>
                <div className="text-[11px] font-semibold text-gray-800">
                  Welcome back, Mohsin Khan{" "}
                  <span aria-hidden="true">👋</span>
                </div>
                <div className="text-[9px] text-gray-400">
                  Here&apos;s what&apos;s happening with your team today.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-[9px] font-medium text-gray-600 ring-1 ring-gray-200">
                  <Calendar className="h-3 w-3 text-gray-400" />
                  Jul 6 – Jul 12, 2026
                  <ChevronDown className="h-2.5 w-2.5 text-gray-400" />
                </div>
                <div className="rounded-lg bg-brand-600 px-2.5 py-1.5 text-[9px] font-semibold text-white">
                  Export Report
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-2.5">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white p-2.5 ring-1 ring-gray-100"
                >
                  <div className="text-[7.5px] font-semibold tracking-wider text-gray-400">
                    {s.label}
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span
                      className={`text-[17px] font-bold ${
                        s.green ? "text-green-500" : "text-gray-900"
                      }`}
                    >
                      {s.value}
                    </span>
                    {s.live && (
                      <span className="flex items-center gap-1 rounded-full bg-green-50 px-1.5 py-0.5 text-[8px] font-semibold text-green-600">
                        <span className="h-1 w-1 rounded-full bg-green-500" />
                        Live
                      </span>
                    )}
                  </div>
                  {s.delta && (
                    <div className="mt-0.5 text-[8px] text-gray-400">
                      <span className="font-semibold text-green-500">
                        ↑ {s.delta}
                      </span>{" "}
                      vs last week
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Middle row: donut + attendance */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Productivity Distribution */}
              <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
                <div className="text-[10px] font-bold text-gray-900">
                  Productivity Distribution
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <div className="relative h-[104px] w-[104px] shrink-0">
                    <div
                      className="h-full w-full rounded-full"
                      style={{
                        background:
                          "conic-gradient(from 200deg, #34d399, #22c55e 40%, #3b82f6 75%, #8b5cf6 100%)",
                      }}
                    />
                    <div className="absolute inset-[13px] flex flex-col items-center justify-center rounded-full bg-white">
                      <span className="text-[17px] font-bold leading-none text-gray-900">
                        19
                      </span>
                      <span className="text-[8px] text-gray-400">Total</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {LEGEND.map((l) => (
                      <div
                        key={l.label}
                        className="flex items-center gap-1.5 text-[9px]"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-[2px]"
                          style={{ backgroundColor: l.color }}
                        />
                        <span className="flex-1 text-gray-500">{l.label}</span>
                        <span className="font-bold text-gray-900">
                          {l.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Attendance */}
              <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
                <div className="text-[10px] font-bold text-gray-900">
                  Attendance – This Week
                </div>
                <div className="mt-2.5 space-y-2">
                  {ATTENDANCE.map((a) => (
                    <div
                      key={a.day}
                      className="flex items-center gap-2 text-[8.5px]"
                    >
                      <span className="w-[42px] text-gray-500">{a.day}</span>
                      <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-gray-100">
                        {a.pct > 0 && (
                          <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${a.pct}%` }}
                          />
                        )}
                      </div>
                      <span className="w-7 text-right text-gray-500">
                        {a.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 border-t border-gray-100 pt-1.5 text-[9px] font-semibold text-green-500">
                  Overall rate: 14%
                </div>
              </div>
            </div>

            {/* Bottom row: top employees + top apps */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
                <div className="text-[10px] font-bold text-gray-900">
                  Top Employees – This Week
                </div>
                <div className="mt-2 grid grid-cols-[1.6fr_0.7fr_0.7fr_0.6fr_1fr] gap-1 text-[7.5px] font-semibold tracking-wider text-gray-400">
                  <span>EMPLOYEE ↕</span>
                  <span>HOURS ↕</span>
                  <span>SCORE ↕</span>
                  <span>FOCUS ↕</span>
                  <span>STATUS ↕</span>
                </div>
                <div className="mt-2 grid grid-cols-[1.6fr_0.7fr_0.7fr_0.6fr_1fr] items-center gap-1 text-[9px]">
                  <span className="flex items-center gap-1.5 font-semibold text-gray-900">
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[6.5px] font-bold text-white">
                      VB
                    </span>
                    Vivek Bharti
                  </span>
                  <span className="text-gray-600">2.1h</span>
                  <span className="font-bold text-green-500">98%</span>
                  <span className="text-gray-600">2</span>
                  <span className="flex items-center gap-1 font-semibold text-green-500">
                    <span className="h-1 w-1 rounded-full bg-green-500" />
                    Tracking
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-white p-3 ring-1 ring-gray-100">
                <div className="text-[10px] font-bold text-gray-900">
                  Top Apps – This Week
                </div>
                <div className="mt-2.5 space-y-2.5">
                  {[
                    { app: "Chrome", pct: 78, time: "11h 04m" },
                    { app: "Code", pct: 30, time: "2h 44m" },
                  ].map((r) => (
                    <div
                      key={r.app}
                      className="flex items-center gap-2 text-[8.5px]"
                    >
                      <span className="w-[42px] text-gray-600">{r.app}</span>
                      <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-gray-500">
                        {r.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
