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
import { getHomepageContent } from "@/lib/homepage";

export default async function Home() {
  const hp = await getHomepageContent();

  return (
    <main className="flex-1 bg-white">
      <Navbar />
      <Hero content={hp?.hero} />
      <FeatureBar content={hp?.feature_bar} />
      <PersonaSection content={hp?.persona} />
      <HowItWorks content={hp?.how_it_works} />
      <PrivacySection content={hp?.privacy} />
      <WorkVisibilitySection content={hp?.work_visibility} />
      <VisibilityBanner content={hp?.visibility_banner} />
      <ImpactSection content={hp?.impact} />
      <IndustriesSection content={hp?.industries} />
      <WhyTrackDotsSection content={hp?.why_trackdots} />
      <PricingSection content={hp?.pricing} />
      <FAQSection content={hp?.faq} />
      <FinalCTA content={hp?.final_cta} />
    </main>
  );
}
