import { ArrowRight, Calendar } from "../icons";
import type { Heading } from "@/lib/wordpress";

export default function ArticleSidebar({ headings }: { headings: Heading[] }) {
  return (
    <div className="sticky top-24 space-y-5">
      {headings.length > 0 && (
        <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-5">
          <div className="text-[11.5px] font-bold uppercase tracking-wider text-gray-500">On This Page</div>
          <nav className="mt-3 space-y-2.5">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className="block text-[13.5px] font-medium leading-snug text-gray-600 hover:text-brand-600"
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      )}

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-brand-900 p-6">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/20 blur-2xl"
        />
        <div className="relative text-[15.5px] font-bold text-white">See This in Your Own Dashboard</div>
        <ul className="relative mt-4 space-y-2.5">
          {["No manual timers, ever", "Same view for managers & employees", "Set up in under 10 minutes"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-[12.5px] leading-snug text-white/70">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
              {t}
            </li>
          ))}
        </ul>
        <div className="relative mt-5 space-y-2.5">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-[13.5px] font-bold text-gray-900 transition-colors hover:bg-gray-100"
          >
            Start Free Trial
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="/book-demo"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-[13.5px] font-bold text-white transition-colors hover:bg-white/10"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book a Demo
          </a>
        </div>
      </div>
    </div>
  );
}
