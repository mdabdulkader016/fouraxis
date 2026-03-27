import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustedBy } from "@/components/trusted-by";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CapabilitiesGrid } from "@/components/capabilities-grid";
import { WhyChooseSection } from "@/components/why-choose-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <TestimonialsSection />
      <CapabilitiesGrid />
      <WhyChooseSection />
      <PortfolioPreview />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
