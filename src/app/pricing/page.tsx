import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeatureFAQ from "@/components/features/FeatureFAQ";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import PricingCards from "@/components/pricing/PricingCards";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";
import { TEAM_MEETING_IMAGE } from "@/lib/media";

export const metadata: Metadata = {
  title: "Pricing — TrackDots",
  description:
    "Simple, transparent pricing. Track your team, understand productivity, and grow — without paying until you need to.",
};

const FAQS = [
  { q: "Can I change plans later?", a: "Yes. Upgrade or downgrade at any time — changes take effect on your next billing cycle, and we prorate the difference." },
  { q: "What happens when I exceed the member limit?", a: "You'll be prompted to upgrade before adding more members — we never silently overcharge or cut off tracking for your existing team." },
  { q: "Is there a free trial for paid plans?", a: "Yes. Pro and Business both include a 14-day free trial, no credit card required to start." },
  { q: "Do employees need their own account?", a: "Yes, each tracked employee needs their own login, which is included in every plan's per-member pricing." },
  { q: "Where is data stored?", a: "Your data is stored securely and encrypted, with access fully role-gated to your organization's authorized users." },
  { q: "Can I export my data if I cancel?", a: "Yes. You can export your full data to CSV at any time, even after cancelling, for a limited grace period." },
];

export default function PricingPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.20), transparent)" }}
        />

        <div className="relative mx-auto max-w-3xl px-5 pb-8 pt-20 text-center md:px-8 lg:pt-24">
          <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
            PRICING
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
              Pricing.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Track your team, understand productivity, and grow — without paying until you need to.
          </p>
        </div>

        <div className="relative px-5 pb-20 md:px-8">
          <PricingCards />
        </div>
      </section>

      <PricingComparisonTable />

      <FeatureFAQ heading="Pricing, Answered" items={FAQS} />

      <SolutionCTA
        heading="Start Free, Upgrade When You're Ready"
        description="No credit card for the Free plan, no surprises on the invoice — just pick the tier that matches your team today."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "50% 30%" }} loading="lazy" />
            </div>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Pro Plan</div>
              <div className="mt-2 space-y-1.5">
                {[
                  { l: "Per User / Mo", v: "$6" },
                  { l: "Free Trial", v: "14 days" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center justify-between text-[9px]">
                    <span className="text-gray-600">{s.l}</span>
                    <span className="font-bold text-gray-900">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 w-[170px] rounded-xl bg-white p-3.5 shadow-2xl">
              <div className="text-[10px] font-bold text-gray-500">Credit Card Required</div>
              <div className="mt-1 text-[15px] font-bold text-gray-900">None to start</div>
            </div>
          </div>
        }
      />
    </main>
  );
}
