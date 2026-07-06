import type { ReactNode } from "react";
import { ArrowRight, CheckCircle } from "../icons";

export default function FeatureHighlightPanel({
  heading,
  desc,
  checklist,
  linkLabel,
  visual,
  reverse = false,
}: {
  heading: string;
  desc: string;
  checklist: string[];
  linkLabel: string;
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="w-full px-5 pb-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-brand-50/40 p-8 lg:p-12">
        <div
          className={`grid gap-10 lg:items-center ${
            reverse ? "lg:grid-cols-[0.85fr_1fr]" : "lg:grid-cols-[1fr_0.85fr]"
          }`}
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <h3 className="text-[26px] font-extrabold leading-snug text-gray-900 sm:text-[30px]">{heading}</h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">{desc}</p>
            <ul className="mt-6 space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[14.5px] font-medium text-gray-700">
                  <CheckCircle className="h-4.5 w-4.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                  {c}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-7 flex w-fit items-center gap-2 text-[14.5px] font-semibold text-brand-600 transition-all hover:gap-3"
            >
              {linkLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className={`flex w-full justify-center ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
        </div>
      </div>
    </section>
  );
}
