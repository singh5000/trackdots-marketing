"use client";

import { useState } from "react";
import { ChevronDown } from "./icons";
import { pick, type HomepageACF } from "@/lib/homepage";

const FALLBACK_FAQS = [
  { q: "How does TrackDots track my team's activity?", a: "TrackDots runs a lightweight desktop agent that automatically tracks apps, websites, and activity in the background. Every activity block gets a confidence score based on real input signals — no manual timers needed." },
  { q: "Can employees see their own data?", a: "Yes. On Pro and Business plans, every employee gets a self-view dashboard and work diary, so monitoring stays transparent rather than something done behind their back." },
  { q: "Do you track keystrokes or passwords?", a: "No. TrackDots counts keystroke activity to help score productivity, but it never logs or stores what you actually type — and it never has access to your passwords." },
  { q: "What happens after my free trial ends?", a: "If you don't upgrade, your account simply drops to the Free plan — no surprise charges, no card required to start. You keep your core data within that plan's retention window." },
  { q: "Can I change or cancel my plan anytime?", a: "Yes. Billing is handled through Stripe, and you can upgrade, downgrade, or cancel whenever you like — changes apply immediately, with no long-term lock-in." },
  { q: "Does TrackDots work for remote and hybrid teams?", a: "Yes. The agent works on macOS and Windows anywhere there's an internet connection, so distributed and hybrid teams get the same visibility as an in-office team." },
  { q: "How is payroll calculated?", a: "TrackDots' payroll engine prorates gross pay, PF, and gratuity directly from attendance data, then generates payslips and bank salary letters automatically — no spreadsheets required." },
];

const MAX_ITEMS = 10;

export default function FAQSection({ content }: { content?: HomepageACF["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  const badge = pick(content?.faq_badge, "GOT QUESTIONS?");
  const heading = pick(content?.faq_heading, "Frequently Asked Questions");
  const paragraph = pick(content?.faq_paragraph, "Everything you need to know before bringing TrackDots to your team.");

  const items = FALLBACK_FAQS.map((fb, i) => {
    const n = i + 1;
    return { q: pick(content?.[`faq_item_${n}_q`], fb.q), a: pick(content?.[`faq_item_${n}_a`], fb.a) };
  });
  for (let n = FALLBACK_FAQS.length + 1; n <= MAX_ITEMS; n++) {
    const q = content?.[`faq_item_${n}_q`];
    if (typeof q === "string" && q.trim() !== "") {
      items.push({ q, a: pick(content?.[`faq_item_${n}_a`], "") });
    }
  }

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {badge}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">{paragraph}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1280px] gap-4 sm:grid-cols-2">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`self-start overflow-hidden rounded-2xl border bg-white transition-colors ${
                isOpen ? "border-brand-200 shadow-md shadow-brand-600/5" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[16px] font-bold text-gray-900">{item.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                    isOpen ? "rotate-180 bg-brand-600 text-white" : "bg-gray-50 text-gray-500"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-gray-600">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
