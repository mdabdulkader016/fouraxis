"use client";

import { motion } from "framer-motion";
import { ServiceShowcase } from "@/components/service-showcase";
import { TrendyServices } from "@/components/trendy-services";
import { Star } from "lucide-react";
import Image from "next/image";

const detailedServices = [
  {
    title: "Next-Gen",
    subtitle: "Web Development",
    badge: "Web Development",
    description: "We build high-performance, scalable web applications using the latest modern stacks. From complex enterprise platforms to high-converting landing pages, our web solutions are engineered for growth, speed, and seamless user experiences.",
    features: ["React & Next.js Experts", "Node.js Backend Systems", "Cloud Integration (AWS/GCP)", "Performance Optimization", "SEO-Friendly Architecture", "API Design & Development"],
    image: "/web-dev-demo.png",
  },
  {
    title: "Cross-Platform",
    subtitle: "App Development",
    badge: "App Development",
    description: "Expand your reach with stunning mobile applications for both iOS and Android. We specialize in cross-platform development that feels native, performs flawlessly, and keeps your users engaged from the first tap.",
    features: ["Flutter & React Native", "Native Performance", "Secure Payment Gateways", "Push Notification Systems", "App Store Optimization", "Offline-First Capability"],
    image: "/app-dev-demo.png",
    isReversed: true,
  },
  {
    title: "Human-Centric",
    subtitle: "UX/UI Design",
    badge: "UX/UI Design",
    description: "Design is more than just looks; it's about how it works. Our UX/UI experts craft intuitive digital journeys that guide your users effortlessly toward conversion, blending aesthetic beauty with strategic functionality.",
    features: ["Interactive Prototyping", "User Behavior Analysis", "Visual Identity Design", "Wireframing & Workflows", "Accessibility Standards", "Multi-Device Optimization"],
    image: "/ux-ui-demo.png",
  },
  {
    title: "Elite Graphics",
    subtitle: "& Branding",
    badge: "Graphics & Branding",
    description: "Transform your brand's visual presence with high-end graphic design. We create bold, memorable visual identities and marketing assets that tell your story and leave a lasting impression on your audience.",
    features: ["Custom Logo & Branding", "Social Media Graphics", "Marketing Collateral", "Premium Illustrations", "Visual Style Guides", "Print-Ready Assets"],
    image: "/graphics-design-demo.png",
    isReversed: true,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-x-clip w-full max-w-full">
      {/* Page Header (Matches Portfolio Hero Section exactly) */}
      <section className="pt-40 pb-20 relative bg-[#0b0514] overflow-hidden">
        {/* Brand SVG Reflections — mirroring framing (consistent with site design) */}
        <div className="absolute top-20 left-1/2 -translate-x-[640px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6]">
          <Image 
            src="/rectangle-19.svg" 
            alt="" 
            fill
            unoptimized
            className="object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
            style={{ 
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}
          />
        </div>

        <div className="absolute top-20 left-1/2 translate-x-[40px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6] -scale-x-100">
          <Image 
            src="/rectangle-19.svg" 
            alt="" 
            fill
            unoptimized
            className="object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
            style={{ 
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center flex flex-col items-center">
            {/* Badge - Standardized Style matching Portfolio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[15px] font-light text-white mb-10 overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
              <div className="w-8 h-4 bg-blue-600 rounded-md flex items-center justify-center text-[10px] font-bold mr-1">SERVICES</div>
              <span className="tracking-tight relative z-10 text-white/90">Our Elite Services Portfolio</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[2.5rem] md:text-[4.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8 max-w-5xl"
            >
              <span className="text-white block">We provide the <span className="italic text-[#ccff38]">best service</span></span>
              <span className="text-white/90 block">for your business growth.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 text-[16px] md:text-[18px] max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Transforming ideas into high-end digital realities with precision <br className="hidden md:block" /> engineering and strategic visual design.
            </motion.p>
          </div>
        </div>

        {/* Background Cinematic Glows */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />
      </section>

      {/* Detailed Service Showcases */}
      <div className="relative z-10 space-y-12 pb-24">
        {detailedServices.map((service, index) => (
          <ServiceShowcase 
            key={index}
            {...service}
          />
        ))}
      </div>

      {/* Trendy Services Section - Highly Animated */}
      <div className="relative z-10">
        <TrendyServices />
      </div>

      {/* Bottom Viewport Fade-to-Darkness Overlay */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-50 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/80 to-transparent" 
      />
    </main>
  );
}
