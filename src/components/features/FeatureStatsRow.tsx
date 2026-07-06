import type { ComponentType, SVGProps } from "react";

type Stat = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
  desc: string;
  photoSrc?: string;
  photoPosition?: string;
};

export default function FeatureStatsRow({ stats }: { stats: Stat[] }) {
  return (
    <section className="w-full bg-brand-50/40 px-5 py-16 md:px-8 lg:px-[80px]">
      <div className="mx-auto grid max-w-[1180px] gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white text-center shadow-sm"
          >
            {s.photoSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={s.photoSrc}
                alt=""
                className="h-40 w-full object-cover"
                style={{ objectPosition: s.photoPosition ?? "center" }}
                loading="lazy"
              />
            )}
            <div className="p-7">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">{s.value}</div>
              <div className="mt-1 text-[13px] font-bold uppercase tracking-wide text-brand-600">{s.label}</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
