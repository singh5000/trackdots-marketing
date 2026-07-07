import { ArrowRight } from "../icons";
import { SOLUTION_LINKS } from "./navData";
import { TEAM_MEETING_IMAGE } from "@/lib/media";

const TONES = ["blue", "violet", "amber", "blue", "violet", "amber"] as const;
const TONE_CLASSES: Record<(typeof TONES)[number], string> = {
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
  violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-100",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
};

export default function SolutionsMegaMenu() {
  return (
    <div>
      <div className="flex gap-10 p-9">
        <div className="grid min-w-0 flex-1 grid-cols-2 gap-x-8 gap-y-1">
          {SOLUTION_LINKS.map((s, i) => (
            <a key={s.label} href={s.href} className="group flex items-start gap-3.5 rounded-xl px-2.5 py-3 transition-colors hover:bg-gray-50">
              <span className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${TONE_CLASSES[TONES[i]]}`}>
                <s.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="text-[15px] font-semibold text-gray-900">{s.label}</div>
                <div className="mt-0.5 text-[13px] leading-snug text-gray-500">{s.desc}</div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Promo card ── */}
        <div className="flex w-[250px] shrink-0 flex-col overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(17,12,46,0.4)]">
          <div className="relative h-[150px] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "55% 30%" }} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white px-3 py-2 shadow-lg">
              <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Industries Served</div>
              <div className="text-[13px] font-bold text-gray-900">6 real use cases</div>
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-brand-800 p-5 text-white">
            <h4 className="text-[17px] font-bold leading-snug">Not Sure Which Fits?</h4>
            <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-white/70">
              Tell us about your team on a quick call.
            </p>
            <a href="/book-demo" className="mt-4 flex items-center gap-1.5 text-[14px] font-semibold text-white">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-9 py-4">
        <span className="text-[13px] text-gray-500">One platform, tuned to how your industry actually works.</span>
        <a href="/contact" className="flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-600">
          Talk to our team
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
