import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformBento from "@/components/platform/PlatformBento";
import PlatformFlow from "@/components/platform/PlatformFlow";
import PlatformFAQ from "@/components/platform/PlatformFAQ";
import PlatformCTA from "@/components/platform/PlatformCTA";

export const metadata: Metadata = {
  title: "Platform Overview — TrackDots",
  description:
    "One platform for time tracking, monitoring, workforce management, and payroll — every feature built on the same honest, real-activity scoring engine.",
};

const FAQS = [
  { q: "Do I have to use all 16 features?", a: "No. Every feature can be enabled or disabled per organization — start with Time Tracking and Attendance, and add Payroll, Projects, or the rest whenever you're ready." },
  { q: "Is this several products bundled together, or one platform?", a: "One platform. Every feature — from Time Tracking to Payroll — is built on the same real-activity data and the same scoring engine, not stitched together from separate tools." },
  { q: "Can I start small and grow into it?", a: "Yes. Most teams start with Time Tracking, Attendance, and Focus Sessions, then add Payroll, Project Tracking, or HR features like Leaves and Appraisals as they need them." },
  { q: "Does pricing scale with how many features I use?", a: "Plans are organized by feature tier, so you only pay for the parts of the platform your team actually uses." },
  { q: "Can I see the whole platform live before deciding?", a: "Yes — book a demo and we'll walk through whichever parts of the platform matter most to your team." },
  { q: "Does every feature work for remote and hybrid teams?", a: "Yes. The agent runs natively on macOS and Windows, so the entire platform works the same for in-office, remote, and hybrid employees." },
];

export default function PlatformOverviewPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />
      <PlatformHero />
      <PlatformBento />
      <PlatformFlow />
      <PlatformFAQ items={FAQS} />
      <PlatformCTA />
    </main>
  );
}
