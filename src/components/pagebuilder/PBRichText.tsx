import ArticleContent from "@/components/blog/ArticleContent";
import type { PBSection } from "@/lib/pages";

export default function PBRichText({ section }: { section: PBSection }) {
  if (!section.content) return null;

  return (
    <section className="w-full px-5 py-16 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-3xl">
        <ArticleContent html={section.content} />
      </div>
    </section>
  );
}
