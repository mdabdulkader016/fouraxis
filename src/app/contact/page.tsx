import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fouraxis",
  description: "Get in touch with Fouraxis for your next digital project. We're here to help you with web, app, and UX/UI design solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-x-clip w-full max-w-full">
      {/* Bottom Viewport Fade-to-Darkness Overlay */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-50 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/80 to-transparent" 
      />

      <ContactHero />
      <ContactForm />
      <FaqSection />
      <div className="py-12" /> {/* Subtle spacing */}
      <CtaSection />
    </main>
  );
}
