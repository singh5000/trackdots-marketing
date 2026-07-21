const WP_API_URL = process.env.WP_API_URL ?? "https://cms.trackdots.net/wp-json/wp/v2";

/** Normalized content shape shared by every feature page. Icons are icon-map
 *  string names (see pagebuilder/iconMap) so WP can override them. */
export type FeaturePageContent = {
  hero: { eyebrow: string; heading: string; highlight: string; description: string };
  problemSolution: { eyebrow: string; heading: string; subheading: string; problems: string[]; benefits: string[] };
  grid: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: { icon: string; title: string; desc: string }[];
  };
  dark1: { eyebrow: string; linkLabel: string; blocks: { heading: string; desc: string; checklist: string[] }[] };
  sticky: {
    eyebrow: string;
    heading: string;
    desc: string;
    cards: { tone: "purple" | "dark"; icon: string; title: string; desc: string; checks: string[] }[];
  };
  panel: { heading: string; desc: string; checklist: string[]; linkLabel: string };
  stats: { icon: string; value: string; label: string; desc: string }[];
  dark2: { eyebrow: string; linkLabel: string; blocks: { heading: string; desc: string; checklist: string[] }[] };
  comparison: {
    heading: string;
    subheading: string;
    columns: string[];
    rows: { capability: string; statuses: ("yes" | "partial" | "no")[] }[];
  };
  faq: { heading: string; items: { q: string; a: string }[] };
};

type ACF = Record<string, any>;

function pick(wp: unknown, fallback: string): string {
  return typeof wp === "string" && wp.trim() !== "" ? wp : fallback;
}

function pickStatus(wp: unknown, fallback: "yes" | "partial" | "no"): "yes" | "partial" | "no" {
  return wp === "yes" || wp === "partial" || wp === "no" ? wp : fallback;
}

/** Index-merges a fallback string list against numbered WP fields (`prefix_1`…),
 *  appending any extra non-empty WP entries beyond the fallback length. */
function mergeList(acf: ACF | undefined, prefix: string, fallback: string[], max: number): string[] {
  const out = fallback.map((fb, i) => pick(acf?.[`${prefix}_${i + 1}`], fb));
  for (let n = fallback.length + 1; n <= max; n++) {
    const v = acf?.[`${prefix}_${n}`];
    if (typeof v === "string" && v.trim() !== "") out.push(v);
  }
  return out;
}

async function fetchFeatureACF(slug: string): Promise<ACF | null> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const raw = await res.json();
    if (!Array.isArray(raw) || raw.length === 0 || !raw[0].acf) return null;
    return raw[0].acf as ACF;
  } catch {
    return null;
  }
}

/** Fetches a feature page's WP content and merges it over the hardcoded
 *  fallback, per field — any missing/empty WP value keeps the original copy. */
export async function getFeaturePageContent(slug: string, fb: FeaturePageContent): Promise<FeaturePageContent> {
  const acf = await fetchFeatureACF(slug);
  if (!acf) return fb;

  const hero: ACF = acf.feat_hero ?? {};
  const ps: ACF = acf.feat_problem_solution ?? {};
  const grid: ACF = acf.feat_grid ?? {};
  const dark1: ACF = acf.feat_dark_1 ?? {};
  const sticky: ACF = acf.feat_sticky ?? {};
  const panel: ACF = acf.feat_panel ?? {};
  const stats: ACF = acf.feat_stats ?? {};
  const dark2: ACF = acf.feat_dark_2 ?? {};
  const comparison: ACF = acf.feat_comparison ?? {};
  const faq: ACF = acf.feat_faq ?? {};

  const mergeDark = (wp: ACF, fbd: FeaturePageContent["dark1"]): FeaturePageContent["dark1"] => ({
    eyebrow: pick(wp.eyebrow, fbd.eyebrow),
    linkLabel: pick(wp.link_label, fbd.linkLabel),
    blocks: fbd.blocks.map((b, i) => {
      const g: ACF = wp[`block_${i + 1}`] ?? {};
      return {
        heading: pick(g.heading, b.heading),
        desc: pick(g.desc, b.desc),
        checklist: b.checklist.map((c, ci) => pick(g[`check_${ci + 1}`], c)),
      };
    }),
  });

  return {
    hero: {
      eyebrow: pick(hero.eyebrow, fb.hero.eyebrow),
      heading: pick(hero.heading, fb.hero.heading),
      highlight: pick(hero.highlight, fb.hero.highlight),
      description: pick(hero.description, fb.hero.description),
    },
    problemSolution: {
      eyebrow: pick(ps.eyebrow, fb.problemSolution.eyebrow),
      heading: pick(ps.heading, fb.problemSolution.heading),
      subheading: pick(ps.subheading, fb.problemSolution.subheading),
      problems: mergeList(ps, "problem", fb.problemSolution.problems, 5),
      benefits: mergeList(ps, "benefit", fb.problemSolution.benefits, 5),
    },
    grid: {
      eyebrow: pick(grid.eyebrow, fb.grid.eyebrow),
      heading: pick(grid.heading, fb.grid.heading),
      subheading: pick(grid.subheading, fb.grid.subheading),
      items: fb.grid.items.map((it, i) => {
        const g: ACF = grid[`item_${i + 1}`] ?? {};
        return {
          icon: pick(g.icon, it.icon),
          title: pick(g.title, it.title),
          desc: pick(g.desc, it.desc),
        };
      }),
    },
    dark1: mergeDark(dark1, fb.dark1),
    sticky: {
      eyebrow: pick(sticky.eyebrow, fb.sticky.eyebrow),
      heading: pick(sticky.heading, fb.sticky.heading),
      desc: pick(sticky.desc, fb.sticky.desc),
      cards: fb.sticky.cards.map((c, i) => {
        const g: ACF = sticky[`card_${i + 1}`] ?? {};
        return {
          tone: g.tone === "purple" || g.tone === "dark" ? g.tone : c.tone,
          icon: pick(g.icon, c.icon),
          title: pick(g.title, c.title),
          desc: pick(g.desc, c.desc),
          checks: c.checks.map((ch, ci) => pick(g[`check_${ci + 1}`], ch)),
        };
      }),
    },
    panel: {
      heading: pick(panel.heading, fb.panel.heading),
      desc: pick(panel.desc, fb.panel.desc),
      checklist: fb.panel.checklist.map((c, i) => pick(panel[`check_${i + 1}`], c)),
      linkLabel: pick(panel.link_label, fb.panel.linkLabel),
    },
    stats: fb.stats.map((s, i) => {
      const g: ACF = stats[`stat_${i + 1}`] ?? {};
      return {
        icon: pick(g.icon, s.icon),
        value: pick(g.value, s.value),
        label: pick(g.label, s.label),
        desc: pick(g.desc, s.desc),
      };
    }),
    dark2: mergeDark(dark2, fb.dark2),
    comparison: {
      heading: pick(comparison.heading, fb.comparison.heading),
      subheading: pick(comparison.subheading, fb.comparison.subheading),
      columns: fb.comparison.columns.map((c, i) => pick(comparison[`col_${i + 1}`], c)),
      rows: (() => {
        const rows = fb.comparison.rows.map((r, i) => {
          const g: ACF = comparison[`row_${i + 1}`] ?? {};
          return {
            capability: pick(g.capability, r.capability),
            statuses: r.statuses.map((s, si) => pickStatus(g[`status_${si + 1}`], s)),
          };
        });
        for (let n = fb.comparison.rows.length + 1; n <= 8; n++) {
          const g: ACF = comparison[`row_${n}`] ?? {};
          if (typeof g.capability === "string" && g.capability.trim() !== "") {
            rows.push({
              capability: g.capability,
              statuses: [1, 2, 3].map((si) => pickStatus(g[`status_${si}`], "no")),
            });
          }
        }
        return rows;
      })(),
    },
    faq: {
      heading: pick(faq.heading, fb.faq.heading),
      items: (() => {
        const items = fb.faq.items.map((it, i) => {
          const g: ACF = faq[`item_${i + 1}`] ?? {};
          return { q: pick(g.q, it.q), a: pick(g.a, it.a) };
        });
        for (let n = fb.faq.items.length + 1; n <= 8; n++) {
          const g: ACF = faq[`item_${n}`] ?? {};
          if (typeof g.q === "string" && g.q.trim() !== "") {
            items.push({ q: g.q, a: typeof g.a === "string" ? g.a : "" });
          }
        }
        return items;
      })(),
    },
  };
}
