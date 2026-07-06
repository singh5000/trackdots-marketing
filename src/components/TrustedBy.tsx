/* Grayscale text wordmarks for the social-proof strip. */

const LOGOS = [
  { name: "Microsoft", mark: "squares", className: "font-semibold" },
  { name: "Google", mark: null, className: "font-medium tracking-tight" },
  { name: "amazon", mark: null, className: "font-bold lowercase" },
  { name: "airbnb", mark: "circle", className: "font-bold lowercase" },
  { name: "stripe", mark: null, className: "font-bold lowercase" },
  { name: "slack", mark: "hash", className: "font-bold lowercase" },
];

function Mark({ type }: { type: string | null }) {
  if (type === "squares") {
    return (
      <span className="grid grid-cols-2 gap-[2px]" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-[9px] w-[9px] bg-gray-400" />
        ))}
      </span>
    );
  }
  if (type === "circle") {
    return (
      <span
        aria-hidden="true"
        className="h-5 w-5 rounded-full border-[2.5px] border-gray-400"
        style={{ borderRadius: "50% 50% 45% 45%" }}
      />
    );
  }
  if (type === "hash") {
    return (
      <span
        aria-hidden="true"
        className="grid grid-cols-2 gap-[2px] rotate-45"
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-[8px] w-[8px] rounded-[3px] bg-gray-400" />
        ))}
      </span>
    );
  }
  return null;
}

export default function TrustedBy() {
  return (
    <section className="relative w-full px-5 pb-14 pt-4 md:px-8 lg:px-[80px]">
      <p className="text-center text-[13px] font-semibold tracking-[0.2em] text-gray-500">
        TRUSTED BY HIGH-PERFORMING TEAMS
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
        {LOGOS.map((logo) => (
          <span
            key={logo.name}
            className={`flex items-center gap-2 text-[26px] text-gray-400 ${logo.className}`}
          >
            <Mark type={logo.mark} />
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  );
}
