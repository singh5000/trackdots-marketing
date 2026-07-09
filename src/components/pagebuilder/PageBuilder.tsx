import type { PBSection } from "@/lib/pages";
import PBHero from "./PBHero";
import PBRichText from "./PBRichText";
import PBCardGrid from "./PBCardGrid";
import PBFaq from "./PBFaq";
import PBCtaBand from "./PBCtaBand";

const RENDERERS: Record<string, (props: { section: PBSection }) => React.ReactElement | null> = {
  hero: PBHero,
  rich_text: PBRichText,
  card_grid: PBCardGrid,
  faq: PBFaq,
  cta_band: PBCtaBand,
};

export default function PageBuilder({ sections }: { sections: PBSection[] }) {
  return (
    <>
      {sections.map((section, i) => {
        const Renderer = RENDERERS[section.type];
        if (!Renderer) return null;
        return <Renderer key={i} section={section} />;
      })}
    </>
  );
}
