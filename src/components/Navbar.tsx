import { ArrowRight, ChevronDown, DotsLogo } from "./icons";

const NAV_ITEMS = [
  { label: "Product", dropdown: true },
  { label: "Features", dropdown: true },
  { label: "Solutions", dropdown: true },
  { label: "Resources", dropdown: true },
  { label: "Pricing", dropdown: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="flex h-[72px] w-full items-center justify-between px-5 md:px-8 lg:px-[80px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <DotsLogo />
          <span className="text-[22px] font-bold tracking-tight">
            <span className="text-gray-900">Track</span>
            <span className="text-brand-600">Dots</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-1.5 text-[15px] font-medium text-gray-800 transition-colors hover:text-brand-600"
            >
              {item.label}
              {item.dropdown && (
                <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-[15px] font-medium text-gray-800 transition-colors hover:text-brand-600 sm:block"
          >
            Log in
          </a>
          <a
            href="#"
            className="hidden rounded-lg border border-gray-200 px-5 py-2.5 text-[15px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50 sm:block"
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
      </div>
    </header>
  );
}
