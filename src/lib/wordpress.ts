import { FileText, Monitor, Sparkles, TrendUp, Users } from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

const WP_API_URL = process.env.WP_API_URL ?? "https://cms.trackdots.net/wp-json/wp/v2";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  category: string;
  date: string;
  readTime: string;
  featuredImageUrl?: string;
  seo: { title?: string; description?: string; ogImage?: string };
};

export type Heading = { id: string; text: string };

const HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  "#8216": "‘",
  "#8217": "’",
  "#8220": "“",
  "#8221": "”",
  "#8211": "–",
  "#8212": "—",
  "#8230": "…",
  "#038": "&",
  "#039": "'",
};

function decodeEntities(html: string): string {
  return html.replace(/&([#\w]+);/g, (match, code) => HTML_ENTITIES[code] ?? match);
}

function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

function estimateReadTime(html: string): string {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

type WPRawPost = {
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:term"?: { name: string }[][];
    "wp:featuredmedia"?: { source_url: string }[];
  };
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: { url: string }[];
  };
};

function mapPost(raw: WPRawPost): Post {
  const yoast = raw.yoast_head_json;
  return {
    slug: raw.slug,
    title: stripHtml(raw.title.rendered),
    excerpt: stripHtml(raw.excerpt.rendered),
    contentHtml: raw.content.rendered,
    category: decodeEntities(raw._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "General"),
    date: formatDate(raw.date),
    readTime: estimateReadTime(raw.content.rendered),
    featuredImageUrl: raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    seo: {
      title: yoast?.title,
      description: yoast?.description,
      ogImage: yoast?.og_image?.[0]?.url,
    },
  };
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=100&orderby=date&order=desc`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const raw: WPRawPost[] = await res.json();
    return raw.map(mapPost);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const raw: WPRawPost[] = await res.json();
    if (raw.length === 0) return null;
    return mapPost(raw[0]);
  } catch {
    return null;
  }
}

/** Adds a slugified `id` + scroll-anchor class to every h2 in the HTML, and returns the extracted TOC. */
export function processContent(html: string): { html: string; headings: Heading[] } {
  const seen = new Map<string, number>();
  const headings: Heading[] = [];

  const processedHtml = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (_match, attrs: string, inner: string) => {
    const text = stripHtml(inner);
    const base = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = count > 0 ? `${base}-${count}` : base;
    headings.push({ id, text });

    let newAttrs = /\bid=/.test(attrs) ? attrs : `${attrs} id="${id}"`;
    newAttrs = /\bclass=/.test(newAttrs)
      ? newAttrs.replace(/class="([^"]*)"/, `class="$1 scroll-mt-28"`)
      : `${newAttrs} class="scroll-mt-28"`;

    return `<h2${newAttrs}>${inner}</h2>`;
  });

  return { html: processedHtml, headings };
}

type CategoryStyle = { icon: ComponentType<SVGProps<SVGSVGElement>>; badge: string; grad: string };

const KNOWN_CATEGORY_STYLES: Record<string, CategoryStyle> = {
  "Product Updates": { icon: Sparkles, badge: "bg-blue-50 text-blue-700", grad: "from-blue-500 to-blue-400" },
  "Remote Work": { icon: Monitor, badge: "bg-violet-50 text-violet-700", grad: "from-violet-500 to-violet-400" },
  Productivity: { icon: TrendUp, badge: "bg-green-50 text-green-700", grad: "from-green-500 to-emerald-400" },
  "Payroll & Compliance": { icon: FileText, badge: "bg-amber-50 text-amber-700", grad: "from-amber-500 to-orange-400" },
  Company: { icon: Users, badge: "bg-pink-50 text-pink-700", grad: "from-pink-500 to-rose-400" },
};

const FALLBACK_PALETTE: CategoryStyle[] = Object.values(KNOWN_CATEGORY_STYLES);

/** Any category coming from WP gets a stable style — known categories use the fixed palette, unknown ones hash into it. */
export function getCategoryStyle(category: string): CategoryStyle {
  if (KNOWN_CATEGORY_STYLES[category]) return KNOWN_CATEGORY_STYLES[category];
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return FALLBACK_PALETTE[hash % FALLBACK_PALETTE.length];
}
