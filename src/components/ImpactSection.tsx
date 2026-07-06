import { ArrowRight, Bell, Clock, TrendUp } from "./icons";

const PHOTO = (id: number) => `https://picsum.photos/id/${id}/500/380`;

const STAT_CARDS = [
  {
    photo: PHOTO(20),
    icon: Bell,
    stat: "7",
    label: "ANOMALY SIGNALS, DETECTED AUTOMATICALLY",
    desc: "From sudden hour drops to input flatlines, TrackDots flags unusual patterns before they become problems.",
    link: "See Anomaly Detection",
  },
  {
    photo: PHOTO(26),
    icon: Clock,
    stat: "14-Day",
    label: "ROLLING BURNOUT RISK WINDOW",
    desc: "Six weighted signals — long hours, no breaks, late nights and more — surface burnout risk early.",
    link: "See Burnout Detection",
  },
];

export default function ImpactSection() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          BUILT TO MOVE THE METRICS THAT MATTER
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">
          Real Capability, Not Just Dashboards
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Every number below is a real, built-in feature of TrackDots — ready
          the day you sign up.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1180px] gap-6 lg:grid-cols-3">
        {/* ── Intro card ── */}
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50/60 p-8">
          <h3 className="text-[22px] font-bold leading-snug text-gray-900">
            Achieve More: Time Tracking &amp; Workforce Coordination
          </h3>

          <div className="relative mt-8 flex flex-1 items-center justify-center">
            <TrendUp
              className="absolute right-2 top-2 h-16 w-16 text-brand-300/70"
              strokeWidth={1.5}
            />
            <div className="relative h-[150px] w-[150px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTO(22)}
                alt=""
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
                width={150}
                height={150}
              />
              <span className="absolute -right-3 top-6 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-amber-400 to-orange-500 text-[10px] font-bold text-white shadow-lg">
                MK
              </span>
              <div className="absolute -bottom-5 -right-6 w-[130px] rounded-xl bg-white p-2.5 shadow-xl">
                <div className="flex items-center justify-between text-[9px] font-semibold text-gray-500">
                  Productivity
                  <TrendUp className="h-3 w-3 text-green-500" />
                </div>
                <div className="mt-0.5 flex items-baseline gap-1">
                  <span className="text-[15px] font-bold text-gray-900">93.5</span>
                  <span className="text-[9px] font-semibold text-green-500">▲ 2.4%</span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="mt-8 flex w-fit items-center gap-1.5 text-[14px] font-semibold text-brand-600 transition-all hover:gap-2.5"
          >
            Explore All Features
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* ── Stat cards ── */}
        {STAT_CARDS.map((card) => (
          <div
            key={card.stat + card.label}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.photo}
              alt=""
              className="h-44 w-full object-cover"
              loading="lazy"
              width={500}
              height={380}
            />
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-2 text-brand-600">
                <card.icon className="h-4 w-4" strokeWidth={2} />
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">{card.stat}</span>
              </div>
              <div className="mt-2 text-[12px] font-bold uppercase tracking-wide text-gray-500">
                {card.label}
              </div>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-gray-600">{card.desc}</p>
              <a
                href="#"
                className="mt-5 flex w-fit items-center gap-1.5 text-[14px] font-semibold text-brand-600 transition-all hover:gap-2.5"
              >
                {card.link}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
