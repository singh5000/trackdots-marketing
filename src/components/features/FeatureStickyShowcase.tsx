import type { ComponentType, ReactNode, SVGProps } from "react";
import { CheckCircle } from "../icons";

export type StickyCard = {
  tone: "purple" | "dark";
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  checks: string[];
  widget: ReactNode;
};

/**
 * The homepage's "lock and scroll" pattern (see WorkVisibilitySection),
 * generalized so every feature page can reuse it. Pure CSS sticky — no
 * scroll listeners. The left column pins to the viewport center for as
 * long as the right column's stacked cards are taller than the viewport,
 * then releases naturally once the cards run out.
 */
export default function FeatureStickyShowcase({
  eyebrow,
  heading,
  desc,
  cards,
}: {
  eyebrow: string;
  heading: string;
  desc: string;
  cards: StickyCard[];
}) {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-[1180px] grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ── Left: sticky intro, vertically centered in the viewport ── */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
              {eyebrow}
            </span>
            <h2 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl lg:text-[46px]">
              {heading}
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-600">{desc}</p>
          </div>
        </div>

        {/* ── Right: stacked cards ── */}
        <div className="space-y-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`overflow-hidden rounded-3xl ${
                card.tone === "purple"
                  ? "bg-gradient-to-br from-brand-600 to-violet-700"
                  : "bg-gradient-to-br from-gray-900 to-slate-800"
              }`}
            >
              <div className="flex min-h-[168px] w-full items-center border-b border-white/10 bg-black/10 px-7 py-5">
                {card.widget}
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2.5 text-white">
                  <card.icon className="h-5 w-5" strokeWidth={1.8} />
                  <h3 className="text-[19px] font-bold">{card.title}</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70">{card.desc}</p>
                <ul className="mt-4 space-y-2">
                  {card.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[13.5px] text-white/85">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-400" strokeWidth={1.8} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
