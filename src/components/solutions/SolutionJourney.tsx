import type { ComponentType, SVGProps } from "react";

type Step = {
  time: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

/**
 * A horizontal "day in the life" timeline — the one section that's genuinely
 * new to Solution pages rather than reused from the feature-page template.
 * Collapses to a vertical list on mobile.
 */
export default function SolutionJourney({
  eyebrow,
  heading,
  subheading,
  steps,
}: {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: Step[];
}) {
  return (
    <section className="w-full bg-gray-50/60 px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {eyebrow}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">{subheading}</p>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1180px]">
        <span
          aria-hidden="true"
          className="absolute left-[9%] right-[9%] top-[22px] hidden h-[2px] bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 lg:block"
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
          {steps.map((s) => (
            <div key={s.title} className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 ring-4 ring-gray-50/60">
                <s.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="lg:mt-4">
                <div className="text-[11.5px] font-bold uppercase tracking-wide text-brand-600">{s.time}</div>
                <div className="mt-1 text-[15px] font-bold text-gray-900">{s.title}</div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
