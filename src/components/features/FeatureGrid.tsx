import type { ComponentType, SVGProps } from "react";

type GridItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

export default function FeatureGrid({
  eyebrow,
  heading,
  subheading,
  items,
}: {
  eyebrow: string;
  heading: string;
  subheading: string;
  items: GridItem[];
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

      <div className="mx-auto mt-14 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <item.icon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <h3 className="mt-4 text-[17px] font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
