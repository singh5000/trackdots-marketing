"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Users } from "./icons";

/* Placeholder, illustrative quotes — no real customers yet.
   Replace with genuine testimonials once TrackDots has them. */
const QUOTES = [
  {
    quote:
      "TrackDots gave us visibility we never had before — without making the team feel watched.",
    role: "Operations Lead",
    org: "IT Services Company",
  },
  {
    quote:
      "Payroll used to take two full days every month. Now it's done in minutes.",
    role: "HR Manager",
    org: "BPO & Support Team",
  },
  {
    quote:
      "The burnout signals caught a pattern in our team we'd completely missed.",
    role: "Engineering Manager",
    org: "Software Startup",
  },
  {
    quote:
      "Client billing finally matches the hours our team actually worked.",
    role: "Founder",
    org: "Digital Agency",
  },
  {
    quote:
      "Setup took less than ten minutes, and the team adopted it without pushback.",
    role: "Operations Head",
    org: "Consulting Firm",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = QUOTES[index];

  const prev = () => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  const next = () => setIndex((i) => (i + 1) % QUOTES.length);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2c1e8a] via-brand-600 to-violet-500 py-20 lg:py-24">
      {/* decorative glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-300/10 blur-3xl"
      />

      {/* dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-[80px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold tracking-wide text-white ring-1 ring-white/20 backdrop-blur-sm">
            TESTIMONIALS
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-[44px]">
            Built With Teams Like Yours in Mind
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Managing your workforce, projects, and payroll gets simple and
            effective.
          </p>
        </div>

        {/* glass quote card */}
        <div className="mx-auto mt-14 flex max-w-4xl items-center justify-center gap-5">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] px-8 py-12 shadow-2xl backdrop-blur-xl sm:px-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-6 top-2 select-none font-serif text-[110px] leading-none text-white/10"
            >
              &ldquo;
            </span>

            <div className="relative text-center">
              <p className="mx-auto max-w-xl text-[21px] font-medium leading-relaxed text-white sm:text-[24px]">
                {active.quote}
              </p>

              <div className="mt-8 flex flex-col items-center">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white/25 to-white/5 text-white ring-2 ring-white/30">
                  <Users className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div className="mt-3 text-[15px] font-bold text-white">{active.role}</div>
                <div className="text-[13px] font-medium uppercase tracking-wide text-white/55">
                  {active.org}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-9 flex items-center justify-center gap-2">
          {QUOTES.map((q, i) => (
            <button
              key={q.role + i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
