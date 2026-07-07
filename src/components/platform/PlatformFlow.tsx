import type { ComponentType, SVGProps } from "react";
import { Activity, BarChart, CheckCircle, FileText } from "../icons";

type Step = { label: string; desc: string; icon: ComponentType<SVGProps<SVGSVGElement>> };

const STEPS: Step[] = [
  { label: "Real Activity Captured", desc: "Apps, keystrokes, and mouse signals — tracked automatically", icon: Activity },
  { label: "Scored for Confidence", desc: "Every block rated 0–100 from real input, not a guess", icon: BarChart },
  { label: "Rolled Into Every Report", desc: "Attendance, trends, burnout risk — same data, every view", icon: FileText },
  { label: "Feeds Payroll & Reviews", desc: "Hours and scores flow straight to payslips and appraisals", icon: CheckCircle },
];

export default function PlatformFlow() {
  return (
    <section className="w-full bg-gray-950 px-5 py-24 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold tracking-wide text-white/80 ring-1 ring-white/10">
          HOW IT ACTUALLY WORKS
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-[44px]">
          Raw Activity In. Decisions Out.
        </h2>
        <p className="mt-4 text-lg text-white/60">One pipeline, from the first keystroke to the final payslip.</p>
      </div>

      {/* ── Single elevated surface, same language as the homepage FeatureBar ── */}
      <div className="relative mx-auto mt-16 max-w-[1180px] overflow-hidden rounded-3xl bg-white/[0.04] px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 backdrop-blur sm:px-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl"
        />

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <div key={s.label} className="relative flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20">
                <s.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-white/30">{String(i + 1).padStart(2, "0")}</span>
                  <div className="text-[15px] font-bold text-white">{s.label}</div>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{s.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-5 hidden h-px w-8 bg-gradient-to-r from-white/20 to-transparent lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
