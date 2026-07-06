import type { ReactNode } from "react";
import { ArrowRight, CreditCard, Lock, ShieldCheck } from "../icons";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "14-Day Free Trial" },
  { icon: CreditCard, label: "No Credit Card" },
  { icon: Lock, label: "GDPR Compliant" },
];

export default function FeatureHero({
  eyebrow,
  heading,
  highlight,
  description,
  visual,
}: {
  eyebrow: string;
  heading: string;
  highlight: string;
  description: string;
  visual: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background glows — same treatment as the homepage hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-15%] h-[720px] w-[720px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(closest-side, rgba(109,94,244,0.22), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[560px] w-[1400px] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background: "radial-gradient(closest-side, rgba(109,94,244,0.14), transparent)",
        }}
      />

      <div className="relative w-full px-5 pb-16 pt-16 md:px-8 lg:px-[80px] lg:pt-24">
        <div className="grid items-center gap-[30px] xl:grid-cols-[minmax(0,1fr)_auto]">
          {/* ── Left: copy ── */}
          <div className="max-w-none xl:max-w-[760px]">
            <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
              {eyebrow}
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl lg:text-[52px] xl:text-[64px]">
              {heading}{" "}
              <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">{description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
              >
                Start Free Trial
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-[16px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                Book a Demo
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-7">
              {TRUST_ITEMS.map((t) => (
                <span key={t.label} className="flex items-center gap-2 text-[15px] font-medium text-gray-500">
                  <t.icon className="h-5 w-5 text-gray-400" strokeWidth={1.8} />
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: feature visual ── */}
          <div className="relative hidden justify-end xl:flex">{visual}</div>
        </div>
      </div>
    </section>
  );
}
