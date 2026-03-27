import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustedBy } from "@/components/trusted-by";
import { ServicesSection } from "@/components/services-section";
import { ProcessShowcase } from "@/components/process-showcase";
import { WhyChooseSection } from "@/components/why-choose-section";
import { CapabilitiesGrid } from "@/components/capabilities-grid";
import { StatsSection } from "@/components/stats-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { WorkflowSection } from "@/components/workflow-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 dark:opacity-30 pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] opacity-40 dark:opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay z-10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <HeroSection />
        </div>
      </section>

      <TrustedBy />
      <ServicesSection />
      <ProcessShowcase />
      <WhyChooseSection />
      <CapabilitiesGrid />
      <StatsSection />
      <PortfolioPreview />
      <WorkflowSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      
    </main>
  );
}
