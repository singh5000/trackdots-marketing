import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import PageBuilder from "@/components/pagebuilder/PageBuilder";
import { Activity } from "@/components/icons";
import { getPageBuilderPage } from "@/lib/pages";

const FALLBACK = {
  title: "System Status — TrackDots",
  description: "A live, automated status page is coming soon.",
};

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBuilderPage("status");
  return {
    title: wpPage?.seo.title || FALLBACK.title,
    description: wpPage?.seo.description || FALLBACK.description,
  };
}

export default async function StatusPage() {
  const wpPage = await getPageBuilderPage("status");

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
      icon={Activity}
      kicker="SYSTEM STATUS"
      heading="A Live Status Page Is Coming Soon"
      description="For any urgent issue affecting your team right now, contact us directly and we'll get back to you as fast as possible."
    />
  );
}
