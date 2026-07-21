const WP_API_URL = process.env.WP_API_URL ?? "https://cms.trackdots.net/wp-json/wp/v2";

/** Raw ACF field values are always present as strings (possibly empty) once the field group is attached — loosely typed since it's ~580 flat fields. */
export type HomepageACF = Record<string, any>;

/** Fetches the Homepage Content ACF data. Returns null on any failure so callers fall back to hardcoded content. */
export async function getHomepageContent(): Promise<HomepageACF | null> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=home`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const raw = await res.json();
    if (!Array.isArray(raw) || raw.length === 0 || !raw[0].acf) return null;
    return raw[0].acf as HomepageACF;
  } catch {
    return null;
  }
}

/** Returns the WP value if it's a non-empty string, otherwise the fallback. */
export function pick(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() !== "" ? value : fallback;
}

export type HeadingLine = { prefix: string; highlight?: string; suffix?: string };

/** Splits a heading string on "\n" (line breaks) and "{{...}}" (gradient-highlight) markers. */
export function parseHeading(text: string): HeadingLine[] {
  return text.split("\n").map((line) => {
    const m = line.match(/^(.*?)\{\{(.*?)\}\}(.*)$/);
    if (m) return { prefix: m[1], highlight: m[2], suffix: m[3] };
    return { prefix: line };
  });
}
