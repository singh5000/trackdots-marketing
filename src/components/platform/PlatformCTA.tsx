import { ArrowRight, Calendar } from "../icons";

export default function PlatformCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-violet-600 px-5 py-24 text-center md:px-8 lg:px-[80px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          One Platform. Every Signal. No Guesswork.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/75">
          Start with Time Tracking and Attendance today — add Payroll, Projects, or the rest of the
          platform whenever your team is ready.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-gray-900 shadow-lg transition-colors hover:bg-gray-50"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/book-demo"
            className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            <Calendar className="h-4 w-4" />
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
