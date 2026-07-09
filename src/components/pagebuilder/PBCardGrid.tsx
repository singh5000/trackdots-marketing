import { ArrowRight } from "@/components/icons";
import type { PBSection } from "@/lib/pages";
import { resolveIcon } from "./iconMap";

export default function PBCardGrid({ section }: { section: PBSection }) {
  const items = [section.item_1, section.item_2, section.item_3, section.item_4, section.item_5, section.item_6].filter(
    (it) => it && it.title
  );
  if (items.length === 0) return null;

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      {(section.eyebrow || section.heading || section.subheading) && (
        <div className="mx-auto max-w-2xl text-center">
          {section.eyebrow && (
            <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
              {section.eyebrow}
            </span>
          )}
          {section.heading && (
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{section.heading}</h2>
          )}
          {section.subheading && <p className="mt-4 text-lg text-gray-500">{section.subheading}</p>}
        </div>
      )}

      <div className="relative mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = resolveIcon(item.icon);
          return (
            <a
              key={item.title}
              href={item.link_url || "#"}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5.5 w-5.5" strokeWidth={1.8} />
              </span>
              <div className="mt-3.5 text-[15.5px] font-bold text-gray-900">{item.title}</div>
              <div className="mt-1 flex-1 text-[13.5px] text-gray-500">{item.description}</div>
              {item.link_label && (
                <span className="mt-4 flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                  {item.link_label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
