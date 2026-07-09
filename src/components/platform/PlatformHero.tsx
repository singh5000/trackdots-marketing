"use client";

import { useState } from "react";
import { ArrowRight, Calendar } from "../icons";
import { FEATURE_GROUPS } from "../nav/navData";

const PILLAR_TAGLINES = [
  "Every minute of real work, captured automatically.",
  "Context and warning signs, surfaced before they're a problem.",
  "From tracked hours to a finished payslip, without re-entry.",
];

const PILLAR_STATS = [
  [
    { label: "FOCUS SESSIONS THIS WEEK", value: "26" },
    { label: "TOTAL FOCUS TIME", value: "102h 16m" },
  ],
  [
    { label: "FLAGS — LAST 30 DAYS", value: "9" },
    { label: "CRITICAL FLAGS", value: "0" },
  ],
  [
    { label: "PROJECTS TRACKED", value: "15" },
    { label: "JULY PAYROLL, PROJECTED", value: "₹8.9L" },
  ],
];

const TONE_TEXT: Record<string, string> = {
  blue: "text-blue-600",
  violet: "text-violet-600",
  amber: "text-amber-600",
};
const TONE_TAB_ACTIVE: Record<string, string> = {
  blue: "bg-blue-600 text-white shadow-lg shadow-blue-600/25",
  violet: "bg-violet-600 text-white shadow-lg shadow-violet-600/25",
  amber: "bg-amber-500 text-white shadow-lg shadow-amber-500/25",
};
const TONE_CHIP: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  violet: "bg-violet-50 text-violet-700 ring-violet-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
};
const TONE_PANEL: Record<string, string> = {
  blue: "from-blue-600 to-blue-500",
  violet: "from-violet-600 to-violet-500",
  amber: "from-amber-500 to-orange-500",
};

export default function PlatformHero() {
  const [active, setActive] = useState(0);
  const pillar = FEATURE_GROUPS[active];
  const PillarIcon = pillar.links[0].icon;
  const stats = PILLAR_STATS[active];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-50"
        style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.20), transparent)" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 pb-6 pt-24 text-center md:px-8 lg:pt-28">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
          PLATFORM OVERVIEW
        </span>
        <h1 className="mt-7 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl lg:text-[66px]">
          One System, Built to{" "}
          <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
            See the Whole Picture.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
          Sixteen features. One shared scoring engine. Every part of TrackDots reads from the same
          honest, real-activity data — nothing bolted on, nothing counted twice.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
          >
            Start Free Trial
            <ArrowRight className="h-4.5 w-4.5" />
          </a>
          <a
            href="/book-demo"
            className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-7 py-4 text-[16px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <Calendar className="h-4.5 w-4.5 text-gray-400" />
            Book a Demo
          </a>
        </div>
      </div>

      {/* ── Pillar tab switcher ── */}
      <div className="relative mx-auto mt-14 max-w-[1040px] px-5 pb-24 md:px-8">
        <div className="flex flex-col justify-center gap-2 rounded-2xl bg-gray-50 p-2 ring-1 ring-gray-100 sm:flex-row">
          {FEATURE_GROUPS.map((g, i) => {
            const TabIcon = g.links[0].icon;
            return (
              <button
                key={g.title}
                onClick={() => setActive(i)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[14.5px] font-semibold transition-all ${
                  active === i ? TONE_TAB_ACTIVE[g.tone] : "text-gray-500 hover:bg-white hover:text-gray-800"
                }`}
              >
                <TabIcon className="h-4.5 w-4.5" strokeWidth={1.8} />
                {g.title}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_30px_70px_-25px_rgba(80,63,205,0.25)] lg:grid-cols-[1.3fr_1fr]">
          {/* ── Left: description + feature chips ── */}
          <div className="p-8 sm:p-10">
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 ${TONE_TEXT[pillar.tone]}`}>
              <PillarIcon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div className={`mt-5 text-[13px] font-bold uppercase tracking-wide ${TONE_TEXT[pillar.tone]}`}>
              {pillar.title}
            </div>
            <p className="mt-2 text-[20px] font-bold leading-snug text-gray-900">
              {PILLAR_TAGLINES[active]}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {pillar.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium ring-1 transition-transform hover:-translate-y-0.5 ${TONE_CHIP[pillar.tone]}`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: real-data preview panel ── */}
          <div className={`flex flex-col justify-center gap-4 bg-gradient-to-br p-8 sm:p-10 ${TONE_PANEL[pillar.tone]}`}>
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/15 px-5 py-4 ring-1 ring-white/20">
                <div className="text-[10.5px] font-bold uppercase tracking-wide text-white/70">{s.label}</div>
                <div className="mt-1 text-[26px] font-extrabold text-white">{s.value}</div>
              </div>
            ))}
            <div className="text-[12px] text-white/70">Real numbers from a live TrackDots organization.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
