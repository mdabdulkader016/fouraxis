import { AboutHero } from "@/components/about-hero";
import { AboutValueSections } from "@/components/about-values";
import { AwardsSection } from "@/components/awards-section";
import { ToolsSection } from "@/components/tools-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-x-clip w-full max-w-full">
      {/* Bottom Viewport Fade-to-Darkness Overlay */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-50 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/80 to-transparent" 
      />

      <AboutHero />
      <AboutValueSections />
      <AwardsSection />
      <ToolsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
