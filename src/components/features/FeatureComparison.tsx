import { CheckCircle, XCircle } from "../icons";

type Status = "yes" | "partial" | "no";

function StatusIcon({ status }: { status: Status }) {
  if (status === "yes") return <CheckCircle className="h-5 w-5 text-green-500" strokeWidth={1.8} />;
  if (status === "partial")
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[11px] font-bold text-amber-600">
        ~
      </span>
    );
  return <XCircle className="h-5 w-5 text-gray-300" strokeWidth={1.8} />;
}

export default function FeatureComparison({
  heading,
  subheading,
  columns,
  rows,
}: {
  heading: string;
  subheading: string;
  /** Column labels after "Capability" — first is always TrackDots. */
  columns: string[];
  rows: { capability: string; statuses: Status[] }[];
}) {
  const gridTemplate = `1.4fr repeat(${columns.length}, 0.8fr)`;

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          THE RIGHT TOOL
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">{subheading}</p>
      </div>

      <div className="mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
        <div
          className="grid items-center gap-4 bg-gray-50 px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-gray-500"
          style={{ gridTemplateColumns: gridTemplate }}
        >
          <span>Capability</span>
          {columns.map((c, i) => (
            <span key={c} className={`text-center ${i === 0 ? "text-brand-600" : ""}`}>
              {c}
            </span>
          ))}
        </div>
        {rows.map((r, i) => (
          <div
            key={r.capability}
            className={`grid items-center gap-4 px-6 py-4 text-[14.5px] text-gray-700 ${
              i % 2 === 1 ? "bg-gray-50/50" : "bg-white"
            }`}
            style={{ gridTemplateColumns: gridTemplate }}
          >
            <span>{r.capability}</span>
            {r.statuses.map((s, j) => (
              <span key={j} className="flex justify-center">
                <StatusIcon status={s} />
              </span>
            ))}
          </div>
        ))}
        <div className="flex items-center gap-5 border-t border-gray-100 bg-gray-50/70 px-6 py-3 text-[11.5px] text-gray-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-3.5 w-3.5 text-green-500" /> Fully supported
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-100 text-[8px] font-bold text-amber-600">
              ~
            </span>
            Partial / manual workaround
          </span>
          <span className="flex items-center gap-1.5">
            <XCircle className="h-3.5 w-3.5 text-gray-300" /> Not supported
          </span>
        </div>
      </div>
    </section>
  );
}
