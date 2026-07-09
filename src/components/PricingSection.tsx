"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Sparkles, XCircle } from "./icons";
import { pick, type HomepageACF } from "@/lib/homepage";

type Feature = { label: string; included: boolean };

type Plan = {
  name: string;
  tagline: string;
  monthly: string;
  annual: string;
  seats: string;
  retention: string;
  cta: string;
  trialNote: string;
  includedHeader: string;
  features: Feature[];
  highlight?: boolean;
};

const FALLBACK_PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "Forever free · no credit card",
    monthly: "0",
    annual: "0",
    seats: "Up to 3 members",
    retention: "7-day retention",
    cta: "Get started free",
    trialNote: "No credit card charged for 7 days",
    includedHeader: "What's included",
    features: [
      { label: "Time tracking", included: true },
      { label: "Screenshots", included: true },
      { label: "Work diary", included: true },
      { label: "Attendance calendar", included: true },
      { label: "Employee portal (self-view)", included: false },
      { label: "Team overview dashboard", included: false },
      { label: "Alerts (late / early / short)", included: false },
    ],
  },
  {
    name: "Pro",
    tagline: "For growing teams",
    monthly: "8",
    annual: "6",
    seats: "Up to 25 members",
    retention: "1-month retention",
    cta: "Start 14-day free trial",
    trialNote: "No credit card charged for 14 days",
    includedHeader: "Everything in Free, plus",
    highlight: true,
    features: [
      { label: "Employee portal (self-view)", included: true },
      { label: "Team overview dashboard", included: true },
      { label: "Alerts (late / early / short)", included: true },
      { label: "Focus sessions", included: true },
      { label: "Idle time breakdown", included: true },
      { label: "App usage report", included: true },
      { label: "Projects & task tracking", included: true },
      { label: "CSV export", included: true },
      { label: "Custom roles", included: true },
      { label: "Executive dashboard", included: false },
      { label: "Burnout detection", included: false },
      { label: "Anomaly detection", included: false },
    ],
  },
  {
    name: "Business",
    tagline: "For scaling organizations",
    monthly: "15",
    annual: "12",
    seats: "Unlimited members",
    retention: "3-month retention",
    cta: "Start 14-day free trial",
    trialNote: "No credit card charged for 14 days",
    includedHeader: "Everything in Pro, plus",
    features: [
      { label: "Executive dashboard", included: true },
      { label: "Burnout detection", included: true },
      { label: "Anomaly detection", included: true },
      { label: "Productivity trends", included: true },
      { label: "Activity heatmap", included: true },
      { label: "Employee comparison", included: true },
      { label: "Automated email reports", included: true },
      { label: "Device logs", included: true },
      { label: "Project budget & burn rate", included: true },
    ],
  },
];

const MAX_FEATURES = 12;

export default function PricingSection({ content }: { content?: HomepageACF["pricing"] }) {
  const [annual, setAnnual] = useState(true);

  const badge = pick(content?.pr_badge, "PRICING");
  const heading = pick(content?.pr_heading, "Simple, transparent pricing");
  const paragraph = pick(content?.pr_paragraph, "Track your team, understand productivity, and grow — without paying until you need to.");

  const plans: Plan[] = FALLBACK_PLANS.map((fb, i) => {
    const p = i + 1;
    const features = fb.features.map((ffb, fi) => {
      const n = fi + 1;
      return {
        label: pick(content?.[`pr_plan_${p}_feature_${n}_label`], ffb.label),
        included:
          typeof content?.[`pr_plan_${p}_feature_${n}_included`] === "boolean"
            ? content[`pr_plan_${p}_feature_${n}_included`]
            : ffb.included,
      };
    });
    // Any additional WP-only features beyond the fallback count (up to MAX_FEATURES)
    for (let n = fb.features.length + 1; n <= MAX_FEATURES; n++) {
      const label = content?.[`pr_plan_${p}_feature_${n}_label`];
      if (typeof label === "string" && label.trim() !== "") {
        features.push({ label, included: Boolean(content?.[`pr_plan_${p}_feature_${n}_included`]) });
      }
    }

    return {
      name: pick(content?.[`pr_plan_${p}_name`], fb.name),
      tagline: pick(content?.[`pr_plan_${p}_tagline`], fb.tagline),
      monthly: pick(content?.[`pr_plan_${p}_monthly`], fb.monthly),
      annual: pick(content?.[`pr_plan_${p}_annual`], fb.annual),
      seats: pick(content?.[`pr_plan_${p}_seats`], fb.seats),
      retention: pick(content?.[`pr_plan_${p}_retention`], fb.retention),
      cta: pick(content?.[`pr_plan_${p}_cta`], fb.cta),
      trialNote: pick(content?.[`pr_plan_${p}_trial_note`], fb.trialNote),
      includedHeader: pick(content?.[`pr_plan_${p}_included_header`], fb.includedHeader),
      highlight: typeof content?.[`pr_plan_${p}_highlight`] === "boolean" ? content[`pr_plan_${p}_highlight`] : fb.highlight,
      features,
    };
  });

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {badge}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">{paragraph}</p>
      </div>

      {/* Billing toggle */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1 rounded-full bg-gray-100 p-1.5">
          <button
            onClick={() => setAnnual(false)}
            className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-colors ${
              !annual ? "bg-white text-brand-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-semibold transition-colors ${
              annual ? "bg-white text-brand-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Annual
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-600">
              Save 25%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-[1180px] gap-6 lg:grid-cols-3 lg:items-start">
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly;
          const altPrice = annual ? plan.monthly : plan.annual;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl bg-white p-8 ${
                plan.highlight
                  ? "border-2 border-brand-500 shadow-2xl shadow-brand-600/15 lg:-translate-y-3"
                  : "border border-gray-100 shadow-sm"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-600 px-4 py-1.5 text-[13px] font-bold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </span>
              )}

              <div className="text-[19px] font-bold text-gray-900">{plan.name}</div>

              <div className="mt-4 flex items-start gap-1">
                <span className="mt-2 text-[22px] font-bold text-gray-400">$</span>
                <span className="text-6xl font-extrabold tracking-tight text-gray-900">{price}</span>
                <span className="mt-4 text-[15px] font-medium text-gray-500">/ user / mo</span>
              </div>

              <div className="mt-2.5 text-[14.5px] text-gray-500">
                {plan.name === "Free"
                  ? plan.tagline
                  : annual
                    ? `Billed annually · $${altPrice}/mo monthly`
                    : `Billed monthly · save 25% annually`}
              </div>

              <div className="mt-3.5 text-[15px] font-semibold text-gray-700">
                {plan.seats} · {plan.retention}
              </div>

              <a
                href="#"
                className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-[16px] font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700"
                    : "border border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-2.5 text-center text-[13px] text-gray-500">{plan.trialNote}</div>

              <div className="mt-7 border-t border-gray-100 pt-6">
                <div className="text-[13.5px] font-bold uppercase tracking-wide text-gray-500">
                  {plan.includedHeader}
                </div>
                <ul className="mt-4 space-y-3.5">
                  {plan.features.map((f, fi) => (
                    <li
                      key={fi}
                      className={`flex items-start gap-2.5 text-[15px] ${
                        f.included ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {f.included ? (
                        <CheckCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-green-500" strokeWidth={1.8} />
                      ) : (
                        <XCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gray-300" strokeWidth={1.8} />
                      )}
                      {f.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
