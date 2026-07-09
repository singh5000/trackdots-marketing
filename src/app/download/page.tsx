import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import PageBuilder from "@/components/pagebuilder/PageBuilder";
import { Download } from "@/components/icons";
import { getPageBuilderPage } from "@/lib/pages";

const FALLBACK = {
  title: "Download Agent — TrackDots",
  description: "Download links for the TrackDots tracking agent are provided during onboarding.",
};

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBuilderPage("download");
  return {
    title: wpPage?.seo.title || FALLBACK.title,
    description: wpPage?.seo.description || FALLBACK.description,
  };
}

export default async function DownloadPage() {
  const wpPage = await getPageBuilderPage("download");

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
      icon={Download}
      kicker="DOWNLOAD AGENT"
      heading="Get the Agent During Onboarding"
      description="The TrackDots tracking agent is provided directly to your team as part of setup, so it's configured correctly from the start. Start a free trial or book a demo and we'll get you set up."
    />
  );
}
