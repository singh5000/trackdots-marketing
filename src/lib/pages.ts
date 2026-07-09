const WP_API_URL = process.env.WP_API_URL ?? "https://wp-be.trackdots.net/wp-json/wp/v2";

export type PBItem = {
  icon: string;
  title: string;
  description: string;
  link_label: string;
  link_url: string;
};

export type PBSection = {
  type: "none" | "hero" | "rich_text" | "card_grid" | "faq" | "cta_band";
  eyebrow: string;
  heading: string;
  subheading: string;
  icon: string;
  description: string;
  content: string;
  primary_cta_label: string;
  primary_cta_url: string;
  secondary_cta_label: string;
  secondary_cta_url: string;
  tertiary_link_label: string;
  tertiary_link_url: string;
  item_1: PBItem;
  item_2: PBItem;
  item_3: PBItem;
  item_4: PBItem;
  item_5: PBItem;
  item_6: PBItem;
};

export type PageBuilderPage = {
  title: string;
  slug: string;
  sections: PBSection[];
  seo: { title?: string; description?: string };
};

type WPRawPage = {
  slug: string;
  title: { rendered: string };
  acf?: Record<string, PBSection>;
  yoast_head_json?: { title?: string; description?: string };
};

/** Fetches a WP Page's Page Builder sections. Returns null on any failure so callers can fall back to hardcoded content. */
export async function getPageBuilderPage(slug: string): Promise<PageBuilderPage | null> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const raw: WPRawPage[] = await res.json();
    if (raw.length === 0 || !raw[0].acf) return null;

    const acf = raw[0].acf;
    const sections = Object.keys(acf)
      .filter((k) => k.startsWith("section_"))
      .sort((a, b) => Number(a.split("_")[1]) - Number(b.split("_")[1]))
      .map((k) => acf[k])
      .filter((s) => s && s.type && s.type !== "none");

    if (sections.length === 0) return null;

    return {
      title: raw[0].title.rendered,
      slug: raw[0].slug,
      sections,
      seo: {
        title: raw[0].yoast_head_json?.title,
        description: raw[0].yoast_head_json?.description,
      },
    };
  } catch {
    return null;
  }
}
