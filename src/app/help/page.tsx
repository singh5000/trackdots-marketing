import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeatureFAQ from "@/components/features/FeatureFAQ";
import PageBuilder from "@/components/pagebuilder/PageBuilder";
import { ArrowRight, Calendar, FileText, Mail } from "@/components/icons";
import { getPageBuilderPage } from "@/lib/pages";

const HELP_TOPICS = [
  {
    icon: Mail,
    title: "Contact Support",
    desc: "Questions about your account or setup — reach us directly.",
    action: "Email hello@trackdots.net",
    href: "mailto:hello@trackdots.net",
  },
  {
    icon: Calendar,
    title: "Book a Demo",
    desc: "See TrackDots live, walked through by our team.",
    action: "Find a time →",
    href: "/book-demo",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    desc: "Detailed setup guides and API reference.",
    action: "Coming soon →",
    href: "/docs",
  },
];

const FAQS = [
  { q: "How do I get my team set up?", a: "Every plan includes guided onboarding — our team helps get tracking configured correctly for your organization from day one." },
  { q: "Can employees see their own data?", a: "Yes. Self-view is included on every plan — employees see the exact same dashboard a manager sees for them, never a stripped-down version." },
  { q: "How does the free trial work?", a: "The 14-day free trial needs no credit card. You get full access to try TrackDots with your actual team before deciding on a plan." },
  { q: "What if I need to change plans later?", a: "You can upgrade or downgrade at any time — reach out to our team and we'll help you move to the right plan for your team's size." },
  { q: "I have a technical question not covered here.", a: "Email us directly or book a demo — a real person from our team will help, not a support queue." },
];

const FALLBACK = {
  title: "Help Center — TrackDots",
  description: "Answers to common setup and account questions, and how to reach the TrackDots team.",
};

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBuilderPage("help");
  return {
    title: wpPage?.seo.title || FALLBACK.title,
    description: wpPage?.seo.description || FALLBACK.description,
  };
}

export default async function HelpCenterPage() {
  const wpPage = await getPageBuilderPage("help");

  if (wpPage) {
    return (
      <main className="flex-1 bg-white">
        <Navbar />
        <PageBuilder sections={wpPage.sections} />
      </main>
    );
  }

  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-15%] h-[720px] w-[720px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.22), transparent)" }}
        />

        <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-20 text-center md:px-8 lg:pt-24">
          <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
            HELP CENTER
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl">
            How Can We{" "}
            <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
              Help?
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Full self-serve documentation is on the way. Until then, a real person from our team
            answers every question directly.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl gap-5 px-5 pb-20 sm:grid-cols-3 md:px-8">
          {HELP_TOPICS.map((t) => (
            <a
              key={t.title}
              href={t.href}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <t.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
              </span>
              <div className="mt-3.5 text-[15.5px] font-bold text-gray-900">{t.title}</div>
              <div className="mt-1 flex-1 text-[13.5px] text-gray-500">{t.desc}</div>
              <span className="mt-4 flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                {t.action.replace(" →", "")}
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <FeatureFAQ heading="Common Questions" items={FAQS} />
    </main>
  );
}
