import { CheckCircle } from "../icons";

/** Small reusable mini-dashboard building blocks, used across feature-page
 * highlight visuals and sticky-showcase cards. Pass `dark` when placed on a
 * purple/dark card; omit it for white "dashboard chrome" cards. */

const COLORS: Record<string, string> = {
  brand: "bg-brand-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  amber: "bg-amber-500",
  violet: "bg-violet-500",
  gray: "bg-gray-300",
};

export function Kicker({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <div className={`mb-2 text-[9.5px] font-bold uppercase tracking-wider ${dark ? "text-white/40" : "text-gray-400"}`}>
      {children}
    </div>
  );
}

export function BarRows({
  rows,
  dark,
  kicker,
}: {
  rows: { label: string; pct: number; value: string; color: string }[];
  dark?: boolean;
  kicker?: string;
}) {
  return (
    <div className="w-full">
      {kicker && <Kicker dark={dark}>{kicker}</Kicker>}
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className={`flex items-center gap-3 text-[10.5px] ${dark ? "text-white/80" : "text-gray-600"}`}>
            <span className="w-16 shrink-0 truncate">{r.label}</span>
            <div className={`h-[6px] flex-1 overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-gray-100"}`}>
              <div className={`h-full rounded-full ${COLORS[r.color]}`} style={{ width: `${r.pct}%` }} />
            </div>
            <span className={`w-16 shrink-0 text-right ${dark ? "text-white/50" : "text-gray-400"}`}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatGrid({
  stats,
  dark,
  kicker,
  cols = 4,
}: {
  stats: { label: string; value: string; accent?: boolean }[];
  dark?: boolean;
  kicker?: string;
  cols?: number;
}) {
  return (
    <div className="w-full">
      {kicker && <Kicker dark={dark}>{kicker}</Kicker>}
      <div className="grid gap-2.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
        {stats.map((s) => (
          <div key={s.label} className={`rounded-lg px-3 py-2.5 ${dark ? "bg-white/10" : "bg-gray-50 ring-1 ring-gray-100"}`}>
            <div
              className={`text-[15px] font-extrabold ${
                s.accent ? "text-green-500" : dark ? "text-white" : "text-gray-900"
              }`}
            >
              {s.value}
            </div>
            <div className={`text-[8px] font-semibold uppercase tracking-wide ${dark ? "text-white/50" : "text-gray-400"}`}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DonutLegend({
  value,
  legend,
  dark,
  kicker,
}: {
  value: string;
  legend: { label: string; value: string; color: string }[];
  dark?: boolean;
  kicker?: string;
}) {
  const stops = legend
    .reduce<{ from: number; to: number; color: string }[]>((acc, l) => {
      const from = acc.length ? acc[acc.length - 1].to : 0;
      const pct = parseFloat(l.value);
      return [...acc, { from, to: from + (isNaN(pct) ? 0 : pct), color: l.color }];
    }, [])
    .map((s) => {
      const hex: Record<string, string> = {
        green: "#22c55e",
        blue: "#3b82f6",
        red: "#ef4444",
        amber: "#f59e0b",
        brand: "#5a4bf0",
        violet: "#8b5cf6",
        gray: "#d1d5db",
      };
      return `${hex[s.color]} ${s.from}% ${s.to}%`;
    })
    .join(", ");

  return (
    <div className="w-full">
      {kicker && <Kicker dark={dark}>{kicker}</Kicker>}
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0">
          <div className="h-full w-full rounded-full" style={{ background: `conic-gradient(${stops})` }} />
          <div
            className={`absolute inset-[4px] flex items-center justify-center rounded-full text-[11px] font-bold ${
              dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            {value}
          </div>
        </div>
        <div className="flex-1 space-y-1">
          {legend.map((l) => (
            <div key={l.label} className={`flex items-center gap-1.5 text-[10px] ${dark ? "text-white/80" : "text-gray-600"}`}>
              <span className={`h-1.5 w-1.5 shrink-0 rounded-[2px] ${COLORS[l.color]}`} />
              <span className="flex-1 truncate">{l.label}</span>
              <span className={`font-bold ${dark ? "text-white" : "text-gray-900"}`}>{l.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PersonRow({
  name,
  role,
  status,
  statusColor = "green",
  dark,
}: {
  name: string;
  role: string;
  status: string;
  statusColor?: "green" | "amber" | "red";
  dark?: boolean;
}) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const statusClasses = {
    green: "bg-green-50 text-green-600",
    amber: "bg-amber-50 text-amber-600",
    red: "bg-red-50 text-red-600",
  };
  return (
    <div className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 ${dark ? "bg-white/10" : "bg-gray-50 ring-1 ring-gray-100"}`}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[9.5px] font-bold text-white">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className={`truncate text-[11.5px] font-semibold ${dark ? "text-white" : "text-gray-900"}`}>{name}</div>
        <div className={`truncate text-[9.5px] ${dark ? "text-white/50" : "text-gray-400"}`}>{role}</div>
      </div>
      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9.5px] font-bold ${statusClasses[statusColor]}`}>{status}</span>
    </div>
  );
}

export function ChatBubbles({ dark }: { dark?: boolean }) {
  return (
    <div className="w-full space-y-1.5">
      <div className={`w-2/3 rounded-2xl rounded-bl-sm px-3 py-1.5 text-[10px] ${dark ? "bg-white/15 text-white/85" : "bg-gray-100 text-gray-600"}`}>
        Any update on this?
      </div>
      <div className="ml-auto w-3/5 rounded-2xl rounded-br-sm bg-brand-500 px-3 py-1.5 text-[10px] text-white">
        Resolved — thank you!
      </div>
    </div>
  );
}

export function ChecklistRows({ items, dark }: { items: { label: string; done: boolean }[]; dark?: boolean }) {
  return (
    <div className="w-full space-y-2">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-2.5 text-[11px]">
          <CheckCircle
            className={`h-4 w-4 shrink-0 ${it.done ? "text-green-500" : dark ? "text-white/25" : "text-gray-300"}`}
            strokeWidth={1.8}
          />
          <span className={it.done ? (dark ? "text-white/90" : "text-gray-800") : dark ? "text-white/40" : "text-gray-400"}>
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
}
