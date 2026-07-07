"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, DotsLogo, Menu, X } from "./icons";
import FeaturesMegaMenu from "./nav/FeaturesMegaMenu";
import SolutionsMegaMenu from "./nav/SolutionsMegaMenu";
import MobileNav from "./nav/MobileNav";

const NAV_ITEMS = [
  { label: "Product", dropdown: false, href: "/platform-overview" },
  { label: "Features", dropdown: true, href: "#" },
  { label: "Solutions", dropdown: true, href: "#" },
  { label: "Resources", dropdown: true, href: "#" },
  { label: "Pricing", dropdown: false, href: "/pricing" },
];

const MEGA_MENUS: Record<string, { content: ReactNode; width: number }> = {
  Features: { content: <FeaturesMegaMenu />, width: 1200 },
  Solutions: { content: <SolutionsMegaMenu />, width: 950 },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur"
        onMouseLeave={() => setOpenMenu(null)}
      >
      <div className="flex h-[72px] w-full items-center justify-between px-5 md:px-8 lg:px-[80px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <DotsLogo />
          <span className="text-[22px] font-bold tracking-tight">
            <span className="text-gray-900">Track</span>
            <span className="text-brand-600">Dots</span>
          </span>
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => setOpenMenu(MEGA_MENUS[item.label] ? item.label : null)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-brand-600 ${
                  openMenu === item.label ? "text-brand-600" : "text-gray-800"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu === item.label ? "rotate-180 text-brand-500" : "text-gray-500"
                    }`}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Actions — desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="text-[15px] font-medium text-gray-800 transition-colors hover:text-brand-600"
          >
            Log in
          </a>
          <a
            href="/book-demo"
            className="rounded-lg border border-gray-200 px-5 py-2.5 text-[15px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            Book a Demo
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Hamburger — mobile / tablet */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Desktop mega menu panel ── */}
      {openMenu && MEGA_MENUS[openMenu] && (
        <div className="absolute left-0 right-0 top-full hidden justify-center border-b border-gray-100 bg-white shadow-[0_24px_48px_-12px_rgba(17,12,46,0.18)] lg:flex">
          <div
            className="w-full animate-[fadeIn_0.15s_ease-out] overflow-x-auto"
            style={{ maxWidth: `min(${MEGA_MENUS[openMenu].width}px, calc(100vw - 40px))` }}
          >
            {MEGA_MENUS[openMenu].content}
          </div>
        </div>
      )}

      </header>

      {/* ── Mobile nav panel ── rendered outside <header> because its
          backdrop-blur creates a containing block for fixed descendants,
          which would otherwise anchor this panel to the 72px header box
          instead of the viewport. */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 animate-[fadeIn_0.15s_ease-out] bg-white lg:hidden">
          <MobileNav onNavigate={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
}
