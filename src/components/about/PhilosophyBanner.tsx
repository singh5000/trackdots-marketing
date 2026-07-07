import { CheckCircle, XCircle } from "../icons";
import { TEAM_MEETING_IMAGE } from "@/lib/media";

const NEVER_DO = [
  "Log the content of keystrokes, messages, or documents",
  "Auto-approve a meeting or override without a human review",
  "Apply a new threshold retroactively to old data",
  "Hide an employee's own tracked data from them",
  "Show a real captured screen publicly, ever",
];

/**
 * Full-width editorial photo with an overlaid "what we'll never do" card —
 * the closest thing to a promise the About page makes, grounded in real,
 * already-shipped product decisions rather than marketing language.
 */
export default function PhilosophyBanner() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[32px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TEAM_MEETING_IMAGE}
          alt=""
          className="h-[420px] w-full object-cover sm:h-[480px]"
          style={{ objectPosition: "50% 35%" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/70 via-gray-950/20 to-transparent" />

        <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
          <div className="max-w-sm">
            <div className="text-[13px] font-bold uppercase tracking-wider text-white/70">Our Promise</div>
            <h3 className="mt-3 text-[26px] font-extrabold leading-snug text-white sm:text-[30px]">
              Five Things We Will Never Do
            </h3>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 w-[300px] rounded-2xl bg-white p-5 shadow-2xl sm:right-10 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2">
          <div className="space-y-3">
            {NEVER_DO.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-[13.5px] text-gray-700">
                <XCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-red-400" strokeWidth={1.8} />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 text-[12.5px] font-semibold text-green-600">
            <CheckCircle className="h-4 w-4" strokeWidth={2} />
            Every feature is built to hold to this
          </div>
        </div>
      </div>
    </section>
  );
}
