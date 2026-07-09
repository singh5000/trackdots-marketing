import { pick, type HomepageACF } from "@/lib/homepage";
import { resolveIcon } from "./pagebuilder/iconMap";

const FACTS = [
  { icon: "Eye", stat: "0–100", label: "Confidence-Scored Activity", desc: "Every activity block is scored from real keystroke and mouse signals — never assumed from hours logged." },
  { icon: "Users", stat: "Same View", label: "Manager & Employee", desc: "Self-view is included on every plan — employees see the exact same dashboard a manager sees for them." },
  { icon: "Clock", stat: "14 Days", label: "Rolling Burnout Score", desc: "Six real activity signals, recalculated daily — never a stale flag from weeks ago." },
  { icon: "LayoutGrid", stat: "16 Features", label: "One Platform", desc: "Time tracking, payroll, projects, and more — all in a single dashboard, not a patchwork of tools." },
];

export default function WhyTrackDotsSection({ content }: { content?: HomepageACF["why_trackdots"] }) {
  const badge = pick(content?.wtd_badge, "WHY TRACKDOTS");
  const heading = pick(content?.wtd_heading, "Built With Teams Like Yours in Mind");
  const paragraph = pick(content?.wtd_paragraph, "Managing your workforce, projects, and payroll gets simple and effective.");

  const facts = FACTS.map((fb, i) => {
    const n = i + 1;
    return {
      icon: pick(content?.[`wtd_fact_${n}_icon`], fb.icon),
      stat: pick(content?.[`wtd_fact_${n}_stat`], fb.stat),
      label: pick(content?.[`wtd_fact_${n}_label`], fb.label),
      desc: pick(content?.[`wtd_fact_${n}_desc`], fb.desc),
    };
  });

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2c1e8a] via-brand-600 to-violet-500 py-20 lg:py-24">
      {/* decorative glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-300/10 blur-3xl"
      />

      {/* dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-[80px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold tracking-wide text-white ring-1 ring-white/20 backdrop-blur-sm">
            {badge}
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-[44px]">{heading}</h2>
          <p className="mt-4 text-lg text-white/70">{paragraph}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => {
            const Icon = resolveIcon(f.icon);
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] p-7 text-center shadow-2xl backdrop-blur-xl"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
                  <Icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                </span>
                <div className="mt-4 text-[26px] font-extrabold text-white">{f.stat}</div>
                <div className="mt-1 text-[14.5px] font-bold text-white/90">{f.label}</div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/60">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
