import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeatureFAQ from "@/components/features/FeatureFAQ";
import ContactForm from "@/components/contact/ContactForm";
import { ArrowRight, Calendar, FileText, Mail } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact TrackDots",
  description: "Get in touch with the TrackDots team — questions, demos, or anything else.",
};

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email Us",
    desc: "For anything else, just email us directly.",
    action: "hello@trackdots.net",
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
    title: "Help Center",
    desc: "Browse setup guides and product docs.",
    action: "Visit Help Center →",
    href: "/help",
  },
];

const FAQS = [
  { q: "How quickly will I hear back?", a: "Our team typically responds to every message within one business day." },
  { q: "Is this form for sales or support?", a: "Both. Tell us what you need in the message, and we'll route it to the right person on our end." },
  { q: "Can I just book a demo instead of filling out the form?", a: "Yes. Use the Book a Demo option above to pick a time that works for you, no form required." },
  { q: "Do you offer help getting set up?", a: "Yes. Every plan includes guided onboarding to get your team tracking correctly from day one." },
  { q: "I'm an existing customer with a product question.", a: "The Help Center has setup guides and documentation, or you can still reach us directly through this form." },
];

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-15%] h-[720px] w-[720px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.22), transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[560px] w-[1400px] -translate-x-1/2 rounded-full opacity-70"
          style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.14), transparent)" }}
        />

        <div className="relative w-full px-5 pb-20 pt-16 md:px-8 lg:px-[80px] lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            {/* ── Left: copy + contact methods ── */}
            <div>
              <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
                CONTACT US
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl">
                Let&apos;s Talk About{" "}
                <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
                  Your Team.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
                Questions about a feature, pricing, or whether TrackDots is the right fit? Send us
                a message, or reach us directly below.
              </p>

              <div className="mt-10 space-y-4">
                {CONTACT_METHODS.map((m) => (
                  <a
                    key={m.title}
                    href={m.href}
                    className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <m.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[15.5px] font-bold text-gray-900">{m.title}</div>
                      <div className="mt-0.5 text-[13.5px] text-gray-500">{m.desc}</div>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 transition-all group-hover:gap-2.5 sm:flex">
                      {m.action.replace(" →", "")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: contact form ── */}
            <div className="lg:mt-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FeatureFAQ heading="Before You Reach Out" items={FAQS} />
    </main>
  );
}
