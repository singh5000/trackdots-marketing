import { ArrowRight, Calendar } from "./icons";

export default function FinalCTA() {
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
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          See What Your Team&apos;s Work Actually Delivers
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/75">
          Real-time visibility into productivity, projects, attendance, and
          payroll — so nothing about your team&apos;s work stays hidden.
        </p>

        <div className="mt-9 flex flex-wrap items-start justify-center gap-6">
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-gray-900 shadow-lg transition-colors hover:bg-gray-50"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book A Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="mt-2.5 text-[12.5px] text-white/60">Get answers from our team</span>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="mt-2.5 text-[12.5px] text-white/60">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
