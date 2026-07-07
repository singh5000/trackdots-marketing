import { ArrowRight, Mail } from "../icons";
import { getAllPosts } from "@/lib/wordpress";
import { TEAM_MEETING_IMAGE } from "@/lib/media";

export default async function NewsletterBand() {
  const posts = await getAllPosts();
  const categoryCount = new Set(posts.map((p) => p.category)).size;

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-700 via-brand-600 to-violet-600 px-6 py-14 sm:px-10 lg:px-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* ── Left: copy + form ── */}
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Mail className="h-5.5 w-5.5 text-white" strokeWidth={1.8} />
            </span>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-[44px]">
              One Email a Month. No Fluff.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/75">
              Product updates and honest thinking on remote work, monitoring, and payroll — nothing
              you&apos;ll want to unsubscribe from.
            </p>

            <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-[14.5px] text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14.5px] font-bold text-gray-900 shadow-lg transition-colors hover:bg-gray-50"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* ── Right: real photo + floating stat cards ── */}
          <div className="relative hidden h-[320px] w-[420px] justify-self-center lg:block">
            <div className="absolute left-0 top-0 h-full w-[260px] overflow-hidden rounded-2xl ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={TEAM_MEETING_IMAGE}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "45% 30%" }}
                loading="lazy"
              />
            </div>

            <div className="absolute right-0 top-0 w-[210px] rounded-xl bg-white p-3.5 shadow-2xl">
              <div className="text-[8.5px] font-bold uppercase tracking-wide text-gray-500">The TrackDots Blog</div>
              <div className="mt-2.5 space-y-1.5">
                {[
                  { l: "Articles Published", v: String(posts.length) },
                  { l: "Topics Covered", v: String(categoryCount) },
                ].map((s) => (
                  <div key={s.l} className="flex items-center justify-between text-[10px]">
                    <span className="text-gray-600">{s.l}</span>
                    <span className="font-bold text-gray-900">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 w-[168px] rounded-xl bg-white p-3.5 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-500">Cadence</span>
                <Mail className="h-3.5 w-3.5 text-brand-500" />
              </div>
              <div className="mt-1 text-[16px] font-bold text-gray-900">Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
