import { ArrowRight } from "@/components/icons";
import type { PBSection } from "@/lib/pages";
import { resolveIcon } from "./iconMap";

/** Heading supports an optional "plain text|gradient text" split, matching the site's recurring highlighted-headline pattern. */
function Heading({ text }: { text: string }) {
  const [plain, highlight] = text.split("|");
  return (
    <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
      {plain}
      {highlight && (
        <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      )}
    </h1>
  );
}

export default function PBHero({ section }: { section: PBSection }) {
  const Icon = resolveIcon(section.icon);
  const hasIcon = Boolean(section.icon);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-15%] h-[720px] w-[720px] rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.22), transparent)" }}
      />

      <div className="relative mx-auto max-w-2xl px-5 py-28 text-center md:px-8">
        {hasIcon && (
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <Icon className="h-7 w-7" strokeWidth={1.8} />
          </span>
        )}
        {section.eyebrow && (
          <span className="mt-6 inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
            {section.eyebrow}
          </span>
        )}

        <Heading text={section.heading} />

        {section.description && (
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gray-600">{section.description}</p>
        )}

        {(section.primary_cta_label || section.secondary_cta_label) && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {section.primary_cta_label && (
              <a
                href={section.primary_cta_url || "#"}
                className="flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
              >
                {section.primary_cta_label}
              </a>
            )}
            {section.secondary_cta_label && (
              <a
                href={section.secondary_cta_url || "#"}
                className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-7 py-4 text-[16px] font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                {section.secondary_cta_label}
              </a>
            )}
          </div>
        )}

        {section.tertiary_link_label && (
          <a
            href={section.tertiary_link_url || "#"}
            className="mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand-600 hover:text-brand-700"
          >
            {section.tertiary_link_label}
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </section>
  );
}
