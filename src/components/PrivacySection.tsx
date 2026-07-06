import {
  CheckSquare,
  Clock,
  Cloud,
  Eye,
  KeyboardOff,
  Lock,
  Server,
  ShieldCheck,
  Users,
} from "./icons";

const FEATURES = [
  {
    icon: Eye,
    title: "Self-Viewable Monitoring",
    desc: "Employees can view their own dashboard and work diary — nothing is hidden from them.",
  },
  {
    icon: KeyboardOff,
    title: "No Keystroke Content Logging",
    desc: "We count keystroke activity for scoring — we never log or store what you actually type.",
  },
  {
    icon: Users,
    title: "Human-Reviewed Oversight",
    desc: "Staff can manually review and override any flagged activity block — not fully automated.",
  },
  {
    icon: Clock,
    title: "Configurable Data Retention",
    desc: "Retention period is set by your plan — data is never held longer than it needs to be.",
  },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "GDPR-Minded", sub: "Data Controls" },
  { icon: Lock, label: "TLS Encrypted", sub: "In Transit" },
  { icon: Users, label: "Role-Based", sub: "Access Control" },
  { icon: CheckSquare, label: "Full Audit", sub: "Trail" },
];

function ShieldGraphic() {
  return (
    <div className="relative mx-auto flex h-[260px] w-[260px] items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-white/15" />
      <span className="absolute inset-8 rounded-full border border-white/10" />

      <span className="absolute left-2 top-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
        <Users className="h-5 w-5 text-brand-600" strokeWidth={1.8} />
      </span>
      <span className="absolute right-0 top-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
        <Cloud className="h-5 w-5 text-brand-600" strokeWidth={1.8} />
      </span>
      <span className="absolute left-0 bottom-12 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
        <Server className="h-5 w-5 text-brand-600" strokeWidth={1.8} />
      </span>
      <span className="absolute right-2 bottom-20 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
        <CheckSquare className="h-5 w-5 text-brand-600" strokeWidth={1.8} />
      </span>

      <ShieldCheck className="h-32 w-32 text-white/90" strokeWidth={1} />
      <Lock className="absolute h-12 w-12 text-white" strokeWidth={1.5} />
    </div>
  );
}

export default function PrivacySection() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-700 via-brand-600 to-violet-500 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        {/* decorative glows */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
        />

        <div className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* ── Left: copy ── */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold text-white ring-1 ring-white/20">
              <Lock className="h-3.5 w-3.5" />
              PRIVACY &amp; TRUST FIRST
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Built With Privacy and Security at Heart
            </h2>

            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/75">
              We believe monitoring should build trust, not break it. TrackDots
              is designed to be transparent, secure, and privacy-focused by
              default.
            </p>

            <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/10">
                    <f.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="text-[15px] font-bold text-white">{f.title}</div>
                    <p className="mt-1 text-[13.5px] leading-snug text-white/65">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: shield graphic ── */}
          <div className="flex flex-col items-center">
            <ShieldGraphic />
            <div className="mt-6 flex items-center gap-2.5 rounded-2xl bg-white px-5 py-3.5 shadow-xl">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </span>
              <span className="text-[14px] font-bold text-gray-900">
                Your data is handled with care at TrackDots
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom: trust badges, clearly separated ── */}
        <div className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TRUST_BADGES.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-4 shadow-lg backdrop-blur"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <b.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="truncate text-[13px] font-bold text-gray-900">{b.label}</div>
                <div className="truncate text-[10.5px] font-medium text-gray-500">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
