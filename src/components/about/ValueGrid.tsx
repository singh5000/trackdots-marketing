import type { ComponentType, SVGProps } from "react";

type Value = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

/**
 * Bigger, bolder value cards than FeatureGrid — a numbered top accent and
 * larger icon badge, since this is the emotional core of the About page
 * rather than a feature list.
 */
export default function ValueGrid({
  eyebrow,
  heading,
  subheading,
  values,
}: {
  eyebrow: string;
  heading: string;
  subheading: string;
  values: Value[];
}) {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {eyebrow}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">{subheading}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1180px] gap-6 sm:grid-cols-2">
        {values.map((v, i) => (
          <div
            key={v.title}
            className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-9 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 select-none text-[110px] font-extrabold leading-none text-gray-50"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-500 text-white shadow-lg shadow-brand-600/30">
              <v.icon className="h-7 w-7" strokeWidth={1.8} />
            </span>
            <h3 className="relative mt-6 text-[21px] font-bold text-gray-900">{v.title}</h3>
            <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-gray-600">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
