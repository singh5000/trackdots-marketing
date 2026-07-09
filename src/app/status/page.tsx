import type { Metadata } from "next";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import { Activity } from "@/components/icons";

export const metadata: Metadata = {
  title: "System Status — TrackDots",
  description: "A live, automated status page is coming soon.",
};

export default function StatusPage() {
  return (
    <ComingSoonPage
      icon={Activity}
      kicker="SYSTEM STATUS"
      heading="A Live Status Page Is Coming Soon"
      description="For any urgent issue affecting your team right now, contact us directly and we'll get back to you as fast as possible."
    />
  );
}
