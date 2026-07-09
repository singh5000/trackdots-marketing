import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import PageBuilder from "@/components/pagebuilder/PageBuilder";
import { Users } from "@/components/icons";
import { getPageBuilderPage } from "@/lib/pages";

const FALLBACK = {
  title: "Careers — TrackDots",
  description: "We're not actively hiring right now, but we're always interested in hearing from good people.",
};

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBuilderPage("careers");
  return {
    title: wpPage?.seo.title || FALLBACK.title,
    description: wpPage?.seo.description || FALLBACK.description,
  };
}

export default async function CareersPage() {
  const wpPage = await getPageBuilderPage("careers");

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
      icon={Users}
      kicker="CAREERS"
      heading="We're Not Actively Hiring Right Now"
      description="But we're always interested in hearing from people who care about building monitoring software the right way. Reach out and tell us a bit about yourself."
    />
  );
}
