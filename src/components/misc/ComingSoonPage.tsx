import type { ComponentType, SVGProps } from "react";
import Navbar from "@/components/Navbar";
import { ArrowRight, Calendar, Mail } from "@/components/icons";

export default function ComingSoonPage({
  icon: Icon,
  kicker,
  heading,
  description,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  kicker: string;
  heading: string;
  description: string;
}) {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-15%] h-[720px] w-[720px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.22), transparent)" }}
        />

        <div className="relative mx-auto max-w-2xl px-5 py-28 text-center md:px-8">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <Icon className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <span className="mt-6 inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
            {kicker}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            {heading}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gray-600">{description}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@trackdots.net"
              className="flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
            >
              <Mail className="h-4.5 w-4.5" />
              Email Us
            </a>
            <a
              href="/book-demo"
              className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-7 py-4 text-[16px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <Calendar className="h-4.5 w-4.5 text-gray-400" />
              Book a Demo
            </a>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand-600 hover:text-brand-700"
          >
            Or send us a message
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
