import type { Metadata } from "next";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import { FileText } from "@/components/icons";

export const metadata: Metadata = {
  title: "Documentation — TrackDots",
  description: "Setup guides and product documentation are coming soon.",
};

export default function DocsPage() {
  return (
    <ComingSoonPage
      icon={FileText}
      kicker="DOCUMENTATION"
      heading="Full Documentation Is Coming Soon"
      description="Every plan already includes guided onboarding to get your team set up correctly — reach out and we'll walk you through it directly."
    />
  );
}
