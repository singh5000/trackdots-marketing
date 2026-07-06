import type { ReactNode } from "react";
import { ArrowRight, CheckCircle } from "../icons";

type Block = {
  heading: string;
  desc: string;
  checklist: string[];
  highlighted?: boolean;
};

export default function FeatureDarkHighlight({
  eyebrow,
  blocks,
  linkLabel,
  visual,
  reverse = false,
  bgPhotoId,
}: {
  eyebrow: string;
  blocks: Block[];
  linkLabel: string;
  visual: ReactNode;
  reverse?: boolean;
  /** Optional Lorem Picsum photo id, shown as a dimmed ambient backdrop. */
  bgPhotoId?: number;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-violet-500 px-5 py-20 md:px-8 lg:px-[80px]">
      {bgPhotoId !== undefined && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://picsum.photos/id/${bgPhotoId}/1600/900`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-luminosity"
          loading="lazy"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-700/95 via-brand-600/90 to-violet-500/90"
      />

      {/* decorative glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className={`grid gap-12 lg:items-center ${reverse ? "lg:grid-cols-[0.85fr_1fr]" : "lg:grid-cols-[1fr_0.85fr]"}`}>
          <div className={reverse ? "lg:order-2" : ""}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold tracking-wide text-white ring-1 ring-white/20">
              {eyebrow}
            </span>

            <div className="mt-7 space-y-7">
              {blocks.map((b) => (
                <div
                  key={b.heading}
                  className={b.highlighted ? "rounded-3xl bg-white/10 p-7 ring-1 ring-white/15" : ""}
                >
                  <h3 className="text-[24px] font-extrabold leading-snug text-white sm:text-[28px]">{b.heading}</h3>
                  <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-white/75">{b.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {b.checklist.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-[14.5px] font-medium text-white/90">
                        <CheckCircle className="h-4.5 w-4.5 shrink-0 text-white" strokeWidth={1.8} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 flex w-fit items-center gap-2 text-[14.5px] font-semibold text-white transition-all hover:gap-3"
            >
              {linkLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className={`flex w-full justify-center ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
        </div>
      </div>
    </section>
  );
}
