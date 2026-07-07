import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeatureFAQ from "@/components/features/FeatureFAQ";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import AboutHero from "@/components/about/AboutHero";
import ValueGrid from "@/components/about/ValueGrid";
import PhilosophyBanner from "@/components/about/PhilosophyBanner";
import FactsBand from "@/components/about/FactsBand";
import { BarChart, Eye, Lock, ShieldCheck, TrendUp } from "@/components/icons";
import { TEAM_MEETING_IMAGE } from "@/lib/media";

export const metadata: Metadata = {
  title: "About TrackDots",
  description:
    "TrackDots builds monitoring software designed to earn trust, not break it — transparent by default, fair by design, and grounded in real data.",
};

const VALUES = [
  { icon: Eye, title: "Transparency by Default", desc: "Employees see the same data managers do. Nothing tracked is ever hidden from the person it's about." },
  { icon: ShieldCheck, title: "Fairness, Built In", desc: "Thresholds are configurable, and changes only ever apply going forward — history is never rewritten." },
  { icon: Lock, title: "Privacy by Design", desc: "Screenshot capture is optional, keystroke content is never logged, and access is always role-gated." },
  { icon: BarChart, title: "Real Data Over Guesswork", desc: "Every score comes from real activity signals — never a manager's assumption or a rounded estimate." },
];

const FACTS = [
  { value: "16", label: "Product Features" },
  { value: "2", label: "Native Platforms" },
  { value: "0–100", label: "Honest Scoring Range" },
  { value: "6", label: "Overwork Signals Tracked" },
];

const FAQS = [
  { q: "Is TrackDots surveillance software?", a: "No. TrackDots is built around transparency — employees get the same self-view data managers do, and nothing is captured or scored in secret." },
  { q: "Does TrackDots log what employees type?", a: "No. Keystroke and mouse activity is counted for scoring, but the actual content of what's typed is never logged or stored." },
  { q: "Can employees see their own tracked data?", a: "Yes, on plans with the employee self-view portal enabled, every employee sees the exact same dashboard a manager would." },
  { q: "Can a manager change the rules after the fact?", a: "No. Threshold and rule changes only ever apply going forward — historical data always keeps the rules it was originally scored under." },
  { q: "Are screenshots mandatory?", a: "No. Screenshot capture is optional and configurable per organization, and is never used without an organization choosing to enable it." },
  { q: "Who can see my organization's monitoring data?", a: "Access is role-gated throughout the platform — only the roles you authorize can ever view a given piece of data." },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <AboutHero />

      {/* ── Mission pull-quote ── */}
      <section className="w-full px-5 py-16 md:px-8 lg:px-[80px]">
        <div className="relative mx-auto max-w-3xl text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 select-none font-serif text-[130px] leading-none text-brand-100"
          >
            &ldquo;
          </span>
          <p className="relative text-[26px] font-bold leading-snug text-gray-900 sm:text-[32px]">
            We started TrackDots because most monitoring tools ask employees to trust a system
            they can&apos;t see. We think a tool your team can see through is the only kind worth
            building.
          </p>
          <div className="mt-6 text-[14px] font-semibold text-gray-500">— The TrackDots Team</div>
        </div>
      </section>

      <ValueGrid
        eyebrow="WHAT WE BELIEVE"
        heading="Four Rules We Never Break"
        subheading="Every feature we ship has to hold up to these — not just to a sales pitch."
        values={VALUES}
      />

      <PhilosophyBanner />

      <FactsBand facts={FACTS} />

      <FeatureFAQ heading="About TrackDots, Answered" items={FAQS} />

      <SolutionCTA
        heading="See TrackDots for Yourself"
        description="No hidden rules, no secret scoring, no surprises — just a clear, honest picture of how your team's work actually happens."
        visual={
          <div className="relative h-[320px] w-[420px]">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TEAM_MEETING_IMAGE} alt="" className="h-full w-full object-cover" style={{ objectPosition: "45% 30%" }} loading="lazy" />
            </div>
            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">Self-View Portal</div>
              <div className="mt-2 space-y-1.5">
                {[{ l: "Data Hidden From You", v: "0" }, { l: "Same View as Manager", v: "Always" }].map((s) => (
                  <div key={s.l} className="flex items-center justify-between text-[9px]">
                    <span className="text-gray-600">{s.l}</span>
                    <span className="font-bold text-gray-900">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 w-[170px] rounded-xl bg-white p-3.5 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-500">Transparency</span>
                <TrendUp className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[22px] font-bold text-gray-900">100</span>
                <span className="text-[12px] font-bold text-gray-400">%</span>
              </div>
            </div>
          </div>
        }
      />
    </main>
  );
}
