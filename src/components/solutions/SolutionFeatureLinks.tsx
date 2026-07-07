import type { ComponentType, SVGProps } from "react";
import { ArrowRight } from "../icons";

type LinkItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  href: string;
};

/**
 * Solutions-only variant of FeatureGrid — each card links straight to the
 * real feature page it's describing, so a persona page funnels into the
 * feature pages instead of just listing capabilities.
 */
export default function SolutionFeatureLinks({
  eyebrow,
  heading,
  subheading,
  items,
}: {
  eyebrow: string;
  heading: string;
  subheading: string;
  items: LinkItem[];
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
          <a
            key={item.title}
            href={item.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-violet-500 transition-transform duration-300 group-hover:scale-x-100"
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <item.icon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <h3 className="mt-4 text-[17px] font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 flex-1 text-[14px] leading-relaxed text-gray-500">{item.desc}</p>
            <span className="mt-5 flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 transition-all group-hover:gap-2.5">
              Explore the feature
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
