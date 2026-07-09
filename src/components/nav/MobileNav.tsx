"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronDown } from "../icons";
import { FEATURE_GROUPS, SOLUTION_LINKS } from "./navData";

function Accordion({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-[16px] font-semibold text-gray-900"
      >
        {label}
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-5">{children}</div>}
    </div>
  );
}

export default function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-5">
      <a href="/platform-overview" onClick={onNavigate} className="border-b border-gray-100 py-4 text-[16px] font-semibold text-gray-900">
        Product
      </a>
      <Accordion label="Features">
        <div className="space-y-5">
          {FEATURE_GROUPS.map((g) => (
            <div key={g.title}>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{g.title}</div>
              <div className="mt-2 space-y-0.5">
                {g.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={onNavigate}
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 active:bg-gray-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                      <l.icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <span className="text-[14.5px] font-medium text-gray-800">{l.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion label="Solutions">
        <div className="space-y-0.5">
          {SOLUTION_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 active:bg-gray-50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                <s.icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <span className="text-[14.5px] font-medium text-gray-800">{s.label}</span>
            </a>
          ))}
        </div>
      </Accordion>

      <Link href="/blog" onClick={onNavigate} className="border-b border-gray-100 py-4 text-[16px] font-semibold text-gray-900">
        Resources
      </Link>
      <a href="/pricing" onClick={onNavigate} className="py-4 text-[16px] font-semibold text-gray-900">
        Pricing
      </a>

      <div className="mt-2 space-y-3 border-t border-gray-100 py-6">
        <a href="#" className="block text-center text-[15px] font-medium text-gray-800">
          Log in
        </a>
        <a
          href="/book-demo"
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3.5 text-[15px] font-semibold text-gray-900"
        >
          <Calendar className="h-4.5 w-4.5 text-gray-400" />
          Book a Demo
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-[15px] font-semibold text-white shadow-sm"
        >
          Start Free Trial
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
