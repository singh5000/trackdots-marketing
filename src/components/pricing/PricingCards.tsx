"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "../icons";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  limitLabel: string;
  cta: string;
  popular?: boolean;
  everythingIn?: string;
  features: string[];
  notIncluded: string[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "Forever free · no credit card",
    monthly: 0,
    annual: 0,
    limitLabel: "Up to 3 members · 7-day retention",
    cta: "Get Started Free",
    features: ["Time tracking", "Screenshots", "Work diary", "Attendance calendar"],
    notIncluded: ["Employee portal (self-view)", "Team overview dashboard", "Alerts (late / early / short)"],
  },
  {
    name: "Pro",
    tagline: "For growing teams that need real visibility",
    monthly: 8,
    annual: 6,
    limitLabel: "Up to 25 members · 1-month retention",
    cta: "Start 14-Day Free Trial",
    popular: true,
    everythingIn: "Free",
    features: [
      "Employee portal (self-view)",
      "Team overview dashboard",
      "Alerts (late / early / short)",
      "Focus sessions",
      "Idle time breakdown",
      "App usage report",
      "Projects & task tracking",
      "CSV export",
      "Custom roles",
    ],
    notIncluded: ["Executive dashboard", "Burnout detection", "Anomaly detection"],
  },
  {
    name: "Business",
    tagline: "For organizations that need the full picture",
    monthly: 15,
    annual: 12,
    limitLabel: "Unlimited members · 3-month retention",
    cta: "Start 14-Day Free Trial",
    everythingIn: "Pro",
    features: [
      "Executive dashboard",
      "Burnout detection",
      "Anomaly detection",
      "Productivity trends",
      "Activity heatmap",
      "Employee comparison",
      "Automated email reports",
      "Device logs",
      "Project budget & burn rate",
    ],
    notIncluded: [],
  },
];

export default function PricingCards() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <div>
      {/* ── Billing toggle ── */}
      <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-gray-100 p-1">
        {(["monthly", "annual"] as const).map((b) => (
          <button
            key={b}
            onClick={() => setBilling(b)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors ${
              billing === b ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            }`}
          >
            {b === "monthly" ? "Monthly" : "Annual"}
            {b === "annual" && (
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">
                Save 25%
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Cards ── */}
      <div className="mx-auto mt-12 grid max-w-[1180px] gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border bg-white p-8 transition-all ${
              plan.popular
                ? "border-2 border-brand-500 shadow-[0_30px_70px_-20px_rgba(80,63,205,0.35)] lg:-translate-y-3"
                : "border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-600/30">
                Most Popular
              </span>
            )}

            <div className="text-[13px] font-bold uppercase tracking-wide text-brand-600">{plan.name}</div>
            <p className="mt-1.5 text-[13.5px] text-gray-500">{plan.tagline}</p>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-[15px] font-bold text-gray-400">$</span>
              <span className="text-[44px] font-extrabold leading-none tracking-tight text-gray-900">
                {billing === "annual" ? plan.annual : plan.monthly}
              </span>
              <span className="text-[14.5px] font-medium text-gray-400">/ user / mo</span>
            </div>
            {plan.monthly > 0 && (
              <div className="mt-1.5 text-[12.5px] text-gray-400">
                {billing === "annual" ? `Billed annually · $${plan.monthly}/mo billed monthly` : "Billed monthly"}
              </div>
            )}

            <div className="mt-5 rounded-xl bg-gray-50 px-4 py-3 text-[13px] font-semibold text-gray-600">
              {plan.limitLabel}
            </div>

            <a
              href="#"
              className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[15px] font-semibold transition-colors ${
                plan.popular
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700"
                  : "border border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {plan.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-2.5 text-center text-[12px] text-gray-400">
              {plan.monthly === 0 ? "No credit card required" : "No credit card charged for 14 days"}
            </div>

            <div className="mt-7 border-t border-gray-100 pt-6">
              <div className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                {plan.everythingIn ? `Everything in ${plan.everythingIn}, plus` : "What's included"}
              </div>
              <ul className="mt-4 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-gray-700">
                    <CheckCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-green-500" strokeWidth={1.8} />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-gray-300">
                    <span className="mt-2 flex h-4.5 w-4.5 shrink-0 items-center justify-center">
                      <span className="h-px w-2.5 bg-gray-300" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
