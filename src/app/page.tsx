import FAQSection from "@/components/FAQSection";
import FeatureBar from "@/components/FeatureBar";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ImpactSection from "@/components/ImpactSection";
import IndustriesSection from "@/components/IndustriesSection";
import Navbar from "@/components/Navbar";
import PersonaSection from "@/components/PersonaSection";
import PricingSection from "@/components/PricingSection";
import PrivacySection from "@/components/PrivacySection";
import VisibilityBanner from "@/components/VisibilityBanner";
import WhyTrackDotsSection from "@/components/WhyTrackDotsSection";
import WorkVisibilitySection from "@/components/WorkVisibilitySection";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />
      <Hero />
      <FeatureBar />
      <PersonaSection />
      <HowItWorks />
      <PrivacySection />
      <WorkVisibilitySection />
      <VisibilityBanner />
      <ImpactSection />
      <IndustriesSection />
      <WhyTrackDotsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
