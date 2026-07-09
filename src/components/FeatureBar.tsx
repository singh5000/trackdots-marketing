import { pick, type HomepageACF } from "@/lib/homepage";
import { resolveIcon } from "./pagebuilder/iconMap";

const FALLBACK = [
  { icon: "Activity", title: "Real-time Monitoring", desc: "Live insights into activity, apps, and productivity." },
  { icon: "SlidersChart", title: "Smart Analytics", desc: "Data-driven reports to optimize team performance." },
  { icon: "CalendarCheck", title: "Automatic Time Tracking", desc: "Accurate time logs with idle time detection." },
  { icon: "Lock", title: "Privacy First", desc: "Secure, GDPR-compliant, and built on trust." },
];

export default function FeatureBar({ content }: { content?: HomepageACF["feature_bar"] }) {
  const items = FALLBACK.map((fb, i) => {
    const n = i + 1;
    return {
      icon: pick(content?.[`fb_item_${n}_icon`], fb.icon),
      title: pick(content?.[`fb_item_${n}_title`], fb.title),
      desc: pick(content?.[`fb_item_${n}_desc`], fb.desc),
    };
  });

  return (
    <section className="relative w-full px-5 pb-20 pt-6 md:px-8 lg:px-[80px]">
      <div className="grid gap-8 rounded-2xl border border-gray-100 bg-white/80 px-8 py-9 shadow-[0_20px_60px_-30px_rgba(80,63,205,0.25)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
        {items.map((f) => {
          const Icon = resolveIcon(f.icon);
          return (
            <div key={f.title} className="flex items-start gap-4">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <div className="text-[16px] font-bold text-gray-900">{f.title}</div>
                <p className="mt-1 text-[13.5px] leading-snug text-gray-500">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
