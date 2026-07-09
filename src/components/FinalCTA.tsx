import { ArrowRight, Calendar } from "./icons";
import { pick, type HomepageACF } from "@/lib/homepage";

export default function FinalCTA({ content }: { content?: HomepageACF["final_cta"] }) {
  const heading = pick(content?.fc_heading, "See What Your Team's Work Actually Delivers");
  const paragraph = pick(
    content?.fc_paragraph,
    "Real-time visibility into productivity, projects, attendance, and payroll — so nothing about your team's work stays hidden."
  );
  const primaryLabel = pick(content?.fc_primary_label, "Book A Demo");
  const primarySub = pick(content?.fc_primary_sub, "Get answers from our team");
  const primaryUrl = pick(content?.fc_primary_url, "/book-demo");
  const secondaryLabel = pick(content?.fc_secondary_label, "Start Free Trial");
  const secondarySub = pick(content?.fc_secondary_sub, "No credit card required");
  const secondaryUrl = pick(content?.fc_secondary_url, "#");

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-violet-500 px-5 py-20 md:px-8 lg:px-[80px]">
      {/* decorative glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">{heading}</h2>
        <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/75">{paragraph}</p>

        <div className="mt-9 flex flex-wrap items-start justify-center gap-6">
          <div className="flex flex-col items-center">
            <a
              href={primaryUrl}
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-gray-900 shadow-lg transition-colors hover:bg-gray-50"
            >
              <Calendar className="h-4.5 w-4.5" />
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="mt-2.5 text-[12.5px] text-white/60">{primarySub}</span>
          </div>

          <div className="flex flex-col items-center">
            <a
              href={secondaryUrl}
              className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="mt-2.5 text-[12.5px] text-white/60">{secondarySub}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
