import { CompetitiveSection } from "@/app/components/CompetitiveSection";
import { FaqSection } from "@/app/components/FaqSection";
import { FinalCtaSection } from "@/app/components/FinalCtaSection";
import { Footer } from "@/app/components/Footer";
import { HeroSection } from "@/app/components/HeroSection";
import { HowItStartsSection } from "@/app/components/HowItStartsSection";
import { Navbar } from "@/app/components/Navbar";
import { PlatformSection } from "@/app/components/PlatformSection";
import { ProblemSection } from "@/app/components/ProblemSection";
import { SignalStrip } from "@/app/components/SignalStrip";
import { UseCasesSection } from "@/app/components/UseCasesSection";
import { WhoItsForSection } from "@/app/components/WhoItsForSection";
import CaptureSection from "./components/CaptureSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <CaptureSection/>
        <SignalStrip />
        <ProblemSection />
        <PlatformSection />
        <UseCasesSection />
        <WhoItsForSection />
        <CompetitiveSection />
        <HowItStartsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
