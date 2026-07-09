import DashboardPreview from "./DashboardPreview";
import HeadingText from "./homepage/HeadingText";
import { pick, type HomepageACF } from "@/lib/homepage";
import { resolveIcon } from "./pagebuilder/iconMap";
import { ArrowRight } from "./icons";

const FALLBACK = {
  badge: "All-in-One Employee Monitoring & Productivity Platform",
  heading: "Monitor Smarter.\nWork Better. {{Together.}}",
  paragraph:
    "TrackDots helps modern teams boost productivity, improve accountability, and achieve more — all with complete transparency and trust.",
  primaryLabel: "Start Free Trial",
  primaryUrl: "#",
  secondaryLabel: "Book a Demo",
  secondaryUrl: "/book-demo",
  trust: [
    { icon: "ShieldCheck", label: "14-Day Free Trial" },
    { icon: "CreditCard", label: "No Credit Card" },
    { icon: "Lock", label: "GDPR Compliant" },
  ],
};

export default function Hero({ content }: { content?: HomepageACF["hero"] }) {
  const badge = pick(content?.hero_badge, FALLBACK.badge);
  const heading = pick(content?.hero_heading, FALLBACK.heading);
  const paragraph = pick(content?.hero_paragraph, FALLBACK.paragraph);
  const primaryLabel = pick(content?.hero_primary_label, FALLBACK.primaryLabel);
  const primaryUrl = pick(content?.hero_primary_url, FALLBACK.primaryUrl);
  const secondaryLabel = pick(content?.hero_secondary_label, FALLBACK.secondaryLabel);
  const secondaryUrl = pick(content?.hero_secondary_url, FALLBACK.secondaryUrl);

  const trust = FALLBACK.trust.map((fb, i) => {
    const n = i + 1;
    return {
      icon: pick(content?.[`hero_trust_${n}_icon`], fb.icon),
      label: pick(content?.[`hero_trust_${n}_label`], fb.label),
    };
  });

  return (
    <section className="relative overflow-hidden">
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-15%] h-[720px] w-[720px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(109,94,244,0.22), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[560px] w-[1400px] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(109,94,244,0.14), transparent)",
        }}
      />

      <div className="relative w-full px-5 pb-16 pt-16 md:px-8 lg:px-[80px] lg:pt-24">
        <div className="grid items-center gap-[30px] xl:grid-cols-[minmax(0,1fr)_auto]">
          {/* ── Left: copy ── */}
          <div className="max-w-none xl:max-w-[760px]">
            <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
              {badge}
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl lg:text-[52px] xl:text-[64px]">
              <HeadingText text={heading} />
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">{paragraph}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={primaryUrl}
                className="flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
              >
                {primaryLabel}
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a
                href={secondaryUrl}
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-[16px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                {secondaryLabel}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-7">
              {trust.map((t) => {
                const Icon = resolveIcon(t.icon);
                return (
                  <span
                    key={t.label}
                    className="flex items-center gap-2 text-[15px] font-medium text-gray-500"
                  >
                    <Icon className="h-5 w-5 text-gray-400" strokeWidth={1.8} />
                    {t.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ── Right: dashboard mockup ── */}
          <div className="relative hidden justify-end xl:flex">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
