import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { ApproachSection } from "@/components/approach-section";
import { ResultsSection } from "@/components/results-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CapabilitiesGrid } from "@/components/capabilities-grid";
import { WhyChooseSection } from "@/components/why-choose-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";
import { ScrollFocusWrapper } from "@/components/scroll-focus-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 bg-[#0b0514]">
      {/* Bottom Viewport Fade-to-Darkness Overlay */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-50 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/80 to-transparent" 
      />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ResultsSection />
      <BlogSection />
      <PortfolioPreview />
      <ApproachSection />
      <ServicesSection />
      <TestimonialsSection />
      <CapabilitiesGrid />
      <WhyChooseSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
