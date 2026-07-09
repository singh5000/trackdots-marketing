import type { Metadata } from "next";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import { Clock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Changelog — TrackDots",
  description: "A running log of product updates is coming soon.",
};

export default function ChangelogPage() {
  return (
    <ComingSoonPage
      icon={Clock}
      kicker="CHANGELOG"
      heading="A Public Changelog Is Coming Soon"
      description="In the meantime, product updates and what we've shipped are covered on the blog under Product Updates."
    />
  );
}
