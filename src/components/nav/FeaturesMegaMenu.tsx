import { ArrowRight } from "../icons";
import { FEATURE_GROUPS, type NavLink, type Tone } from "./navData";

const TONE_CLASSES: Record<Tone, string> = {
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
  violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-100",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
};

const DOT_CLASSES: Record<Tone, string> = {
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  amber: "bg-amber-500",
};

function LinkColumn({ title, links, tone }: { title: string; links: NavLink[]; tone: Tone }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${DOT_CLASSES[tone]}`} />
        <div className="text-[12.5px] font-bold uppercase tracking-wider text-gray-400">{title}</div>
      </div>
      <ul className="mt-4 space-y-0.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="group flex items-start gap-3.5 rounded-xl px-2.5 py-3 transition-colors hover:bg-gray-50">
              <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${TONE_CLASSES[tone]}`}>
                <l.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="text-[15px] font-semibold text-gray-900">{l.label}</div>
                <div className="mt-0.5 text-[13px] leading-snug text-gray-500">{l.desc}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeaturesMegaMenu() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-12 divide-x divide-gray-100 p-9">
        {FEATURE_GROUPS.map((g) => (
          <LinkColumn key={g.title} title={g.title} links={g.links} tone={g.tone} />
        ))}
      </div>

      {/* ── Footer strip ── */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-9 py-4">
        <span className="text-[13px] text-gray-500">16 real features. One honest product.</span>
        <a href="/about" className="flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-600">
          Why we build it this way
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
