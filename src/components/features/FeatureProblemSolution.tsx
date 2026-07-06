import type { ReactNode } from "react";
import { ArrowRight, CheckCircle, XCircle } from "../icons";

export default function FeatureProblemSolution({
  eyebrow,
  heading,
  subheading,
  problems,
  benefits,
  visual,
}: {
  eyebrow: string;
  heading: string;
  subheading: string;
  problems: string[];
  benefits: string[];
  visual?: ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden px-5 py-20 md:px-8 lg:px-[80px]">
      {/* ambient background glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-100/40 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {eyebrow}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">{subheading}</p>
      </div>

      <div
        className={`relative mx-auto mt-16 grid max-w-[1180px] items-center gap-6 ${
          visual ? "lg:grid-cols-[1fr_auto_1fr]" : "max-w-[1000px] sm:grid-cols-2"
        }`}
      >
        {/* ── Without TrackDots ── */}
        <div className="rounded-3xl border border-red-100 bg-gradient-to-b from-red-50/50 to-white p-8 shadow-sm">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-500">
            <XCircle className="h-5.5 w-5.5" strokeWidth={1.8} />
          </span>
          <div className="mt-4 text-[13px] font-bold uppercase tracking-wide text-red-500">Without TrackDots</div>
          <ul className="mt-5 space-y-4">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-gray-600">
                <XCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gray-300" strokeWidth={1.8} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Center: visual + transformation arrows ── */}
        {visual && (
          <div className="hidden flex-col items-center gap-3 lg:flex">
            <ArrowRight className="h-6 w-6 text-gray-300" strokeWidth={2} />
            {visual}
            <ArrowRight className="h-6 w-6 text-gray-300" strokeWidth={2} />
          </div>
        )}

        {/* ── With TrackDots ── */}
        <div className="relative rounded-3xl border-2 border-brand-300 bg-gradient-to-b from-brand-50/70 to-white p-8 shadow-xl shadow-brand-600/10">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/40">
            <CheckCircle className="h-5.5 w-5.5" strokeWidth={1.8} />
          </span>
          <div className="mt-4 text-[13px] font-bold uppercase tracking-wide text-brand-600">With TrackDots</div>
          <ul className="mt-5 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[14.5px] font-medium text-gray-800">
                <CheckCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-green-500" strokeWidth={1.8} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
