import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import PageBuilder from "@/components/pagebuilder/PageBuilder";
import { Clock } from "@/components/icons";
import { getPageBuilderPage } from "@/lib/pages";

const FALLBACK = {
  title: "Changelog — TrackDots",
  description: "A running log of product updates is coming soon.",
};

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBuilderPage("changelog");
  return {
    title: wpPage?.seo.title || FALLBACK.title,
    description: wpPage?.seo.description || FALLBACK.description,
  };
}

export default async function ChangelogPage() {
  const wpPage = await getPageBuilderPage("changelog");

  if (wpPage) {
    return (
      <main className="flex-1 bg-white">
        <Navbar />
        <PageBuilder sections={wpPage.sections} />
      </main>
    );
  }

  return (
    <ComingSoonPage
      icon={Clock}
      kicker="CHANGELOG"
      heading="A Public Changelog Is Coming Soon"
      description="In the meantime, product updates and what we've shipped are covered on the blog under Product Updates."
    />
  );
}
