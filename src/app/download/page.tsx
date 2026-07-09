import type { Metadata } from "next";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import { Download } from "@/components/icons";

export const metadata: Metadata = {
  title: "Download Agent — TrackDots",
  description: "Download links for the TrackDots tracking agent are provided during onboarding.",
};

export default function DownloadPage() {
  return (
    <ComingSoonPage
      icon={Download}
      kicker="DOWNLOAD AGENT"
      heading="Get the Agent During Onboarding"
      description="The TrackDots tracking agent is provided directly to your team as part of setup, so it's configured correctly from the start. Start a free trial or book a demo and we'll get you set up."
    />
  );
}
