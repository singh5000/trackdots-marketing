import type { Metadata } from "next";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import { Code } from "@/components/icons";

export const metadata: Metadata = {
  title: "API Reference — TrackDots",
  description: "Full API documentation is coming soon.",
};

export default function ApiDocsPage() {
  return (
    <ComingSoonPage
      icon={Code}
      kicker="API REFERENCE"
      heading="Full API Reference Is Coming Soon"
      description="TrackDots already exposes a REST endpoint for ERP integrations (see the ERP Integration feature). A complete public API reference for all endpoints is on the way — reach out if you need API access now."
    />
  );
}
