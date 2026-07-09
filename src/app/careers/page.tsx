import type { Metadata } from "next";
import ComingSoonPage from "@/components/misc/ComingSoonPage";
import { Users } from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers — TrackDots",
  description: "We're not actively hiring right now, but we're always interested in hearing from good people.",
};

export default function CareersPage() {
  return (
    <ComingSoonPage
      icon={Users}
      kicker="CAREERS"
      heading="We're Not Actively Hiring Right Now"
      description="But we're always interested in hearing from people who care about building monitoring software the right way. Reach out and tell us a bit about yourself."
    />
  );
}
