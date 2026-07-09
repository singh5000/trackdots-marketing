import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import PageBuilder from "@/components/pagebuilder/PageBuilder";
import { FileText } from "@/components/icons";
import { getPageBuilderPage } from "@/lib/pages";

const FALLBACK = {
  title: "Documentation — TrackDots",
  description: "Setup guides and product documentation are coming soon.",
};

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBuilderPage("docs");
  return {
    title: wpPage?.seo.title || FALLBACK.title,
    description: wpPage?.seo.description || FALLBACK.description,
  };
}

export default async function DocsPage() {
  const wpPage = await getPageBuilderPage("docs");

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
      icon={FileText}
      kicker="DOCUMENTATION"
      heading="Full Documentation Is Coming Soon"
      description="Every plan already includes guided onboarding to get your team set up correctly — reach out and we'll walk you through it directly."
    />
  );
}
