import { ArrowRight, Download } from "./icons";
import HeadingText from "./homepage/HeadingText";
import { pick, type HomepageACF } from "@/lib/homepage";
import { resolveIcon } from "./pagebuilder/iconMap";

/* ── Card-bottom mini widgets — grounded in the real product (Electron
   agent, live activity tracking, productivity donut, trend reports). ── */

function AgentStatusMock() {
  return (
    <div className="w-full rounded-xl bg-white p-3 ring-1 ring-gray-100">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
          <Download className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[11px] font-bold text-gray-900">TrackDots Agent</div>
          <div className="truncate text-[9px] text-gray-500">v2.4.1 · macOS &amp; Windows</div>
        </div>
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
          ✓
        </span>
      </div>
      <div className="mt-2.5 h-[6px] w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-500 to-violet-400" />
      </div>
      <div className="mt-1 text-[8.5px] font-medium text-gray-500">Installed in under 2 minutes</div>
    </div>
  );
}

function LiveActivityMock() {
  const apps = [
    { label: "C", bg: "bg-blue-100", fg: "text-blue-600" },
    { label: "F", bg: "bg-violet-100", fg: "text-violet-600" },
    { label: "S", bg: "bg-green-100", fg: "text-green-600" },
    { label: "T", bg: "bg-amber-100", fg: "text-amber-600" },
  ];
  return (
    <div className="w-full rounded-xl bg-white p-3 ring-1 ring-gray-100">
      <div className="flex items-center justify-between">
        <span className="text-[9.5px] font-bold uppercase tracking-wide text-gray-500">Live Activity</span>
        <span className="flex items-center gap-1 text-[9px] font-bold text-green-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          Live
        </span>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5">
        {apps.map((a) => (
          <span
            key={a.label}
            className={`flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-bold ${a.bg} ${a.fg}`}
          >
            {a.label}
          </span>
        ))}
        <span className="ml-1 text-[8.5px] font-medium text-gray-500">+6</span>
      </div>
      <div className="mt-2 text-[8.5px] font-medium text-gray-500">Tracking activity across all devices…</div>
    </div>
  );
}

function ProductivityDonutMock() {
  const legend = [
    { label: "Productive", value: "75%", color: "bg-green-500" },
    { label: "Neutral", value: "15%", color: "bg-blue-500" },
    { label: "Unproductive", value: "10%", color: "bg-red-500" },
  ];
  return (
    <div className="w-full rounded-xl bg-white p-3 ring-1 ring-gray-100">
      <div className="flex items-center justify-between text-[9.5px]">
        <span className="font-bold uppercase tracking-wide text-gray-500">Productivity — This Week</span>
      </div>
      <div className="mt-2.5 flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0">
          <div
            className="h-full w-full rounded-full"
            style={{ background: "conic-gradient(#22c55e 0% 75%, #3b82f6 75% 90%, #ef4444 90% 100%)" }}
          />
          <div className="absolute inset-[4px] flex items-center justify-center rounded-full bg-white text-[10px] font-bold text-gray-900">
            95%
          </div>
        </div>
        <div className="flex-1 space-y-1">
          {legend.map((l) => (
            <div key={l.label} className="flex items-center gap-1.5 text-[8.5px]">
              <span className={`h-1.5 w-1.5 rounded-[2px] ${l.color}`} />
              <span className="flex-1 truncate text-gray-500">{l.label}</span>
              <span className="font-bold text-gray-700">{l.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamProductivityMock() {
  const bars = [30, 45, 40, 60, 55, 80];
  return (
    <div className="w-full rounded-xl bg-white p-3 ring-1 ring-gray-100">
      <div className="flex items-center justify-between">
        <span className="text-[9.5px] font-bold uppercase tracking-wide text-gray-500">Team Productivity</span>
        <span className="text-[10px] font-bold text-green-500">↑ 24%</span>
      </div>
      <div className="mt-2 flex h-10 items-end justify-between gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-full rounded-t-sm bg-gradient-to-t from-brand-600 to-brand-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-1 text-[8.5px] font-medium text-gray-500">vs last week, across the team</div>
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    icon: "Download",
    title: "Install Agent",
    desc: "Download the lightweight TrackDots agent and install it on your team's devices in just a few clicks.",
    visual: <AgentStatusMock />,
  },
  {
    n: "02",
    icon: "Activity",
    title: "Auto-Track Activity",
    desc: "TrackDots runs quietly in the background, automatically tracking apps, websites and activity in real time.",
    visual: <LiveActivityMock />,
  },
  {
    n: "03",
    icon: "PieChart",
    title: "Get Real-Time Insights",
    desc: "View live dashboards and reports that give you instant visibility into productivity and performance.",
    visual: <ProductivityDonutMock />,
  },
  {
    n: "04",
    icon: "TrendUp",
    title: "Improve Productivity",
    desc: "Use burnout, anomaly and trend reports to optimize workflows and help your team do their best work.",
    visual: <TeamProductivityMock />,
  },
];

export default function HowItWorks({ content }: { content?: HomepageACF["how_it_works"] }) {
  const badge = pick(content?.hiw_badge, "SIMPLE. FAST. POWERFUL.");
  const heading = pick(content?.hiw_heading, "How {{TrackDots}} Works");
  const paragraph = pick(content?.hiw_paragraph, "Get started in minutes and let TrackDots handle the rest.");

  const steps = STEPS.map((fb, i) => {
    const n = i + 1;
    return {
      ...fb,
      icon: pick(content?.[`hiw_step_${n}_icon`], fb.icon),
      title: pick(content?.[`hiw_step_${n}_title`], fb.title),
      desc: pick(content?.[`hiw_step_${n}_desc`], fb.desc),
    };
  });

  return (
    <section className="relative w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {badge}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">
          <HeadingText text={heading} />
        </h2>
        <p className="mt-4 text-lg text-gray-500">{paragraph}</p>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-start lg:gap-0">
        {steps.map((step, i) => {
          const Icon = resolveIcon(step.icon);
          return (
            <div key={step.n} className="relative flex-1 lg:px-3">
              <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 pt-8 shadow-sm">
                <span className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white shadow-md shadow-brand-600/30">
                  {step.n}
                </span>

                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>

                <h3 className="mt-4 text-center text-[16px] font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-center text-[13px] leading-relaxed text-gray-500">{step.desc}</p>

                <div className="mt-5">{step.visual}</div>
              </div>

              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-[76px] z-10 hidden items-center lg:flex">
                  <span className="h-px w-4 border-t-2 border-dashed border-brand-200" />
                  <ArrowRight className="h-3.5 w-3.5 text-brand-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
