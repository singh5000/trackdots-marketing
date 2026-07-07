type Fact = { value: string; label: string };

/**
 * Dark gradient facts band — deliberately uses real, verifiable PRODUCT
 * facts (feature count, platforms, scoring range) rather than business
 * metrics like customer count or revenue, since TrackDots has no real
 * customers yet and none of that may be fabricated.
 */
export default function FactsBand({ facts }: { facts: Fact[] }) {
  return (
    <section className="w-full px-5 py-16 md:px-8 lg:px-[80px]">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-gradient-to-br from-gray-950 via-gray-900 to-brand-800 px-8 py-12 sm:px-14">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl"
        />

        <div className="relative grid grid-cols-2 gap-y-10 text-center lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <div className="text-[38px] font-extrabold leading-none text-white sm:text-[44px]">{f.value}</div>
              <div className="mt-2.5 text-[13px] font-medium uppercase tracking-wide text-white/50">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
