import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import FeatureHero from "./FeatureHero";
import FeatureProblemSolution from "./FeatureProblemSolution";
import FeatureGrid from "./FeatureGrid";
import FeatureDarkHighlight from "./FeatureDarkHighlight";
import FeatureStickyShowcase, { type StickyCard } from "./FeatureStickyShowcase";
import FeatureHighlightPanel from "./FeatureHighlightPanel";
import FeatureStatsRow from "./FeatureStatsRow";
import FeatureComparison from "./FeatureComparison";
import FeatureFAQ from "./FeatureFAQ";
import { resolveIcon } from "@/components/pagebuilder/iconMap";
import type { FeaturePageContent } from "@/lib/featurepage";

export type FeaturePageVisuals = {
  hero: ReactNode;
  /** Optional visual beside the problem/solution split (only time-tracking uses one). */
  problemSolution?: ReactNode;
  dark1: ReactNode;
  /** One widget per sticky card, same order as content.sticky.cards. */
  stickyWidgets: ReactNode[];
  panel: ReactNode;
  dark2: ReactNode;
  /** Photo per stats card, same order as content.stats. */
  statsPhotos: { photoSrc: string; photoPosition?: string }[];
};

/** The locked 10-section feature-page template. All copy comes from `content`
 *  (WP-merged with hardcoded fallback); all visuals stay in page code. */
export default function FeaturePageSections({
  content,
  visuals,
}: {
  content: FeaturePageContent;
  visuals: FeaturePageVisuals;
}) {
  const stickyCards: StickyCard[] = content.sticky.cards.map((c, i) => ({
    tone: c.tone,
    icon: resolveIcon(c.icon),
    title: c.title,
    desc: c.desc,
    checks: c.checks,
    widget: visuals.stickyWidgets[i],
  }));

  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <FeatureHero
        eyebrow={content.hero.eyebrow}
        heading={content.hero.heading}
        highlight={content.hero.highlight}
        description={content.hero.description}
        visual={visuals.hero}
      />

      <FeatureProblemSolution
        eyebrow={content.problemSolution.eyebrow}
        heading={content.problemSolution.heading}
        subheading={content.problemSolution.subheading}
        problems={content.problemSolution.problems}
        benefits={content.problemSolution.benefits}
        visual={visuals.problemSolution}
      />

      <FeatureGrid
        eyebrow={content.grid.eyebrow}
        heading={content.grid.heading}
        subheading={content.grid.subheading}
        items={content.grid.items.map((it) => ({
          icon: resolveIcon(it.icon),
          title: it.title,
          desc: it.desc,
        }))}
      />

      <FeatureDarkHighlight
        eyebrow={content.dark1.eyebrow}
        blocks={content.dark1.blocks.map((b, i) => ({ ...b, highlighted: i === 0 }))}
        linkLabel={content.dark1.linkLabel}
        visual={visuals.dark1}
      />

      <FeatureStickyShowcase
        eyebrow={content.sticky.eyebrow}
        heading={content.sticky.heading}
        desc={content.sticky.desc}
        cards={stickyCards}
      />

      <FeatureHighlightPanel
        reverse
        heading={content.panel.heading}
        desc={content.panel.desc}
        checklist={content.panel.checklist}
        linkLabel={content.panel.linkLabel}
        visual={visuals.panel}
      />

      <FeatureStatsRow
        stats={content.stats.map((s, i) => ({
          icon: resolveIcon(s.icon),
          value: s.value,
          label: s.label,
          desc: s.desc,
          photoSrc: visuals.statsPhotos[i]?.photoSrc,
          photoPosition: visuals.statsPhotos[i]?.photoPosition,
        }))}
      />

      <FeatureDarkHighlight
        reverse
        eyebrow={content.dark2.eyebrow}
        blocks={content.dark2.blocks.map((b, i) => ({ ...b, highlighted: i === 0 }))}
        linkLabel={content.dark2.linkLabel}
        visual={visuals.dark2}
      />

      <FeatureComparison
        heading={content.comparison.heading}
        subheading={content.comparison.subheading}
        columns={content.comparison.columns}
        rows={content.comparison.rows}
      />

      <FeatureFAQ heading={content.faq.heading} items={content.faq.items} />

      <FinalCTA />
    </main>
  );
}
