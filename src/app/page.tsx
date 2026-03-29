import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { ApproachSection } from "@/components/approach-section";
import { ResultsSection } from "@/components/results-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { BlogSection } from "@/components/blog-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { TrustSection } from "@/components/trust-section";
import { Footer } from "@/components/footer";
import { ScrollFocusWrapper } from "@/components/scroll-focus-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-x-clip w-full max-w-full">
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
      <TrustSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
