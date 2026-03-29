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
      {/* Page Header (Matches Homepage Hero Section) */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[75vh] pt-32 pb-12 z-10 w-full px-4 overflow-hidden">
        
        {/* Exact Match Background Layers (Scoped to Hero Section) */}
        <div className="absolute inset-0 pointer-events-none -z-30 overflow-hidden flex justify-center items-start">
          <Image 
            src="/BG.svg" 
            alt="Hero Background" 
            fill
            className="object-cover object-top opacity-90 mix-blend-screen"
            priority
          />
        </div>
        
        {/* Bottom fade for seamless blending into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0514] to-transparent pointer-events-none -z-20" />

        {/* Brand SVG Reflections — framing the header */}
        <div className="absolute top-0 left-0 -translate-x-[30%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-20 lg:opacity-40 z-0">
          <Image 
            src="/Rectangle 19.svg" 
            alt="" 
            fill
            className="object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
            style={{ 
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}
          />
        </div>

        <div className="absolute top-0 right-0 translate-x-[30%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-20 lg:opacity-40 -scale-x-100 z-0">
          <Image 
            src="/Rectangle 19.svg" 
            alt="" 
            fill
            className="object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
            style={{ 
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}
          />
        </div>

        <div className="flex flex-col items-center w-full relative z-10">
          
          {/* Top Pill with Lines - Matching Homepage */}
          <div className="flex items-center gap-4 mb-6 w-full max-w-3xl mx-auto px-4 relative z-10">
            <div className="h-px bg-gradient-to-r from-transparent via-[#581c87] to-[#d8b4fe] flex-1 opacity-50" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-[#a855f7]/40 bg-[#160f24]/80 backdrop-blur-md shrink-0"
            >
              <Star className="w-4 h-4 text-white" fill="currentColor" />
              <span className="text-[16px] font-light tracking-wide text-white">Our Elite Services Portfolio</span>
            </motion.div>
            <div className="h-px bg-gradient-to-l from-transparent via-[#581c87] to-[#d8b4fe] flex-1 opacity-50" />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.6rem] lg:text-[4.5rem] font-display font-medium leading-[1.05] tracking-tight text-white relative z-10 mx-auto px-4 shadow-black drop-shadow-md flex flex-col items-center w-full"
          >
            <span className="text-center block">
              We provide the <span className="italic text-[rgb(204,255,56)]">best service</span>
            </span>
            <span className="text-center block" style={{ marginTop: '-0.1em' }}>
              for your business growth.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] md:text-[1.1rem] text-white/50 mt-6 mb-10 max-w-[600px] mx-auto px-4 font-normal leading-relaxed tracking-wide z-10 text-center"
          >
            Transforming ideas into high-end digital realities with precision engineering and strategic visual design.
          </motion.p>
        </div>
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
