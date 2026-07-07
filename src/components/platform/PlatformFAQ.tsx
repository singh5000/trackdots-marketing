"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "../icons";

type FAQItem = { q: string; a: string };

export default function PlatformFAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ── Left: sticky intro + contact ── */}
        <div>
          <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
            QUESTIONS
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-[42px]">
            Still Figuring Out Where to Start?
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-gray-500">
            Most questions about the platform come down to these six — if yours isn&apos;t here, our team will answer it directly.
          </p>
          <a href="/contact" className="mt-6 flex w-fit items-center gap-2 text-[14.5px] font-semibold text-brand-600 hover:gap-3 transition-all">
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* ── Right: numbered accordion ── */}
        <div className="space-y-1">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`border-b ${isOpen ? "border-brand-100" : "border-gray-100"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[13px] font-bold ${isOpen ? "text-brand-600" : "text-gray-300"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[16px] font-bold text-gray-900">{item.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-brand-500" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-5 pl-9 pr-4 text-[14.5px] leading-relaxed text-gray-600">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
