"use client";

import { motion } from "framer-motion";
import { ServiceShowcase } from "@/components/service-showcase";
import { TrendyServices } from "@/components/trendy-services";
import { Star } from "lucide-react";

const detailedServices = [
  {
    title: "Next-Gen Web Development",
    description: "We build high-performance, scalable web applications using the latest modern stacks. From complex enterprise platforms to high-converting landing pages, our web solutions are engineered for growth, speed, and seamless user experiences.",
    features: ["React & Next.js Experts", "Node.js Backend Systems", "Cloud Integration (AWS/GCP)", "Performance Optimization", "SEO-Friendly Architecture", "API Design & Development"],
    image: "/web-dev-demo.png",
  },
  {
    title: "Cross-Platform App Development",
    description: "Expand your reach with stunning mobile applications for both iOS and Android. We specialize in cross-platform development that feels native, performs flawlessly, and keeps your users engaged from the first tap.",
    features: ["Flutter & React Native", "Native Performance", "Secure Payment Gateways", "Push Notification Systems", "App Store Optimization", "Offline-First Capability"],
    image: "/app-dev-demo.png",
    isReversed: true,
  },
  {
    title: "Human-Centric UX/UI Design",
    description: "Design is more than just looks; it's about how it works. Our UX/UI experts craft intuitive digital journeys that guide your users effortlessly toward conversion, blending aesthetic beauty with strategic functionality.",
    features: ["Interactive Prototyping", "User Behavior Analysis", "Visual Identity Design", "Wireframing & Workflows", "Accessibility Standards", "Multi-Device Optimization"],
    image: "/ux-ui-demo.png",
  },
  {
    title: "Elite Graphics & Branding",
    description: "Transform your brand's visual presence with high-end graphic design. We create bold, memorable visual identities and marketing assets that tell your story and leave a lasting impression on your audience.",
    features: ["Custom Logo & Branding", "Social Media Graphics", "Marketing Collateral", "Premium Illustrations", "Visual Style Guides", "Print-Ready Assets"],
    image: "/graphics-design-demo.png",
    isReversed: true,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-x-clip w-full max-w-full">
      {/* Exact Match Background Layers (Same as Home Page Hero) */}
      <div className="absolute inset-x-0 top-0 min-h-[75vh] pointer-events-none -z-50 overflow-hidden flex justify-center items-start">
        {/* Exact Match SVG Background */}
        <img 
          src="/BG.svg" 
          alt="Home Page Background Style" 
          className="w-full h-full object-cover object-top opacity-90 mix-blend-screen"
        />
        
        {/* Bottom fade for seamless blending into the next section (solid black) */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0514] to-transparent" />
      </div>

      {/* Page Header */}
      <section className="relative z-10 pt-32 mb-20 text-center px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-primary/40 bg-primary/5 backdrop-blur-md mb-8"
          >
            <Star className="w-4 h-4 text-white" fill="currentColor" />
            <span className="text-[16px] font-light tracking-wide text-white">Our Elite Services Portfolio</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[3rem] md:text-[4.5rem] font-display font-medium leading-[1.05] tracking-tight text-white mb-6"
          >
            We provide the <span className="text-primary italic">best service</span><br />
            for your business growth.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-[18px] max-w-2xl font-light leading-relaxed"
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
