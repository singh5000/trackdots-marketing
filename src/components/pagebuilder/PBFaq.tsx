"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";
import type { PBSection } from "@/lib/pages";

export default function PBFaq({ section }: { section: PBSection }) {
  const [open, setOpen] = useState<number | null>(0);

  const items = [section.item_1, section.item_2, section.item_3, section.item_4, section.item_5, section.item_6].filter(
    (it) => it && it.title
  );
  if (items.length === 0) return null;

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {section.eyebrow || "FAQ"}
        </span>
        {section.heading && (
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{section.heading}</h2>
        )}
        {section.subheading && <p className="mt-4 text-lg text-gray-500">{section.subheading}</p>}
      </div>

      <div className="mx-auto mt-12 grid max-w-[1180px] gap-4 sm:grid-cols-2">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.title}
              className={`self-start overflow-hidden rounded-2xl border bg-white transition-colors ${
                isOpen ? "border-brand-200 shadow-md shadow-brand-600/5" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[16px] font-bold text-gray-900">{item.title}</span>
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
                  <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
