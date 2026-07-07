import { ArrowRight, Calendar, CheckCircle, Eye, ImageIcon, Lock, TrendUp } from "../icons";

/**
 * About page hero — deliberately different from FeatureHero's two-column
 * dashboard-visual layout. Centered, editorial, no dashboard mockup — but a
 * handful of small floating "proof point" cards keep it from feeling like
 * bare text, each grounded in a real, already-shipped product decision.
 */
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.20), transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-24 md:px-8 lg:pt-32">
        {/* ── Floating proof-point cards ── */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            className="pointer-events-auto absolute left-0 top-6 w-[190px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
            style={{ animation: "float 6s ease-in-out infinite", animationDelay: "0s" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Eye className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div className="mt-2.5 text-[12.5px] font-bold text-gray-900">Self-View Portal</div>
            <div className="mt-1 flex items-center gap-1.5 text-[10.5px] font-semibold text-green-600">
              <CheckCircle className="h-3.5 w-3.5" strokeWidth={2} />
              Enabled by default
            </div>
          </div>

          <div
            className="pointer-events-auto absolute right-0 top-16 w-[200px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
            style={{ animation: "float 7s ease-in-out infinite", animationDelay: "0.8s" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <ImageIcon className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div className="mt-2.5 text-[12.5px] font-bold text-gray-900">Screenshot Capture</div>
            <div className="mt-1 text-[10.5px] font-semibold text-gray-500">Optional · Configurable</div>
          </div>

          <div
            className="pointer-events-auto absolute bottom-2 left-6 w-[170px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
            style={{ animation: "float 6.5s ease-in-out infinite", animationDelay: "1.6s" }}
          >
            <div className="text-[9px] font-bold uppercase tracking-wide text-gray-400">Scoring Range</div>
            <div className="mt-1 text-[22px] font-extrabold text-gray-900">0–100</div>
            <div className="mt-0.5 text-[10.5px] text-gray-500">From real activity, always</div>
          </div>

          <div
            className="pointer-events-auto absolute bottom-6 right-6 w-[190px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
            style={{ animation: "float 7.5s ease-in-out infinite", animationDelay: "0.4s" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Lock className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div className="mt-2.5 text-[12.5px] font-bold text-gray-900">Idle Rules</div>
            <div className="mt-1 flex items-center gap-1.5 text-[10.5px] font-semibold text-green-600">
              <TrendUp className="h-3.5 w-3.5" strokeWidth={2} />
              Never retroactive
            </div>
          </div>
        </div>

        {/* ── Copy ── */}
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
            ABOUT TRACKDOTS
          </span>

          <h1 className="mt-7 text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-[64px]">
            Monitoring Software Built to{" "}
            <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
              Earn Trust,
            </span>{" "}
            Not Break It.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            Most workplace monitoring tools treat employees like suspects. We think visibility and
            trust aren&apos;t opposites — so every feature we build has to hold up to being seen by
            the person it&apos;s about.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
            >
              Start Free Trial
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <a
              href="/book-demo"
              className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-7 py-4 text-[16px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <Calendar className="h-4.5 w-4.5 text-gray-400" />
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
