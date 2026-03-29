"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Layers, Share2, Sparkles, Binary, CheckSquare, LucideIcon } from "lucide-react";
import Image from "next/image";

interface TrendyService {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  color: string;
  glow: string;
}

const trendyServices = [
  {
    title: "AI & Intelligent Automation",
    tagline: "Future-Proofing with Intelligence",
    description: "Integrating advanced AI models and automated systems to revolutionize your business workflows and decision-making processes.",
    icon: Cpu,
    image: "/ai-service.png",
    color: "from-purple-500/20 to-blue-500/5",
    glow: "bg-purple-500/30",
  },
  {
    title: "Immersive AR/VR Spaces",
    tagline: "Beyond the Digital Screen",
    description: "Crafting spatial computing experiences and 3D web environments that push the boundaries of reality and user interaction.",
    icon: Layers,
    image: "/ar-vr-service.png",
    color: "from-blue-500/20 to-cyan-500/5",
    glow: "bg-blue-500/30",
  },
  {
    title: "Future-Ready Web3 Solutions",
    tagline: "The Decentralized Frontier",
    description: "Building secure, transparent, and scalable blockchain solutions for the next generation of the decentralized web.",
    icon: Share2,
    image: "/web3-service.png",
    color: "from-cyan-500/20 to-emerald-500/5",
    glow: "bg-cyan-500/30",
  },
  {
    title: "A/B Testing & Conversion",
    tagline: "Data-Driven Growth Engine",
    description: "Maximizing ROI through scientific split testing and behavior analysis to ensure every pixel of your interface performs.",
    icon: Binary,
    image: "/ab-testing.png",
    color: "from-orange-500/20 to-red-500/5",
    glow: "bg-orange-500/30",
  },
  {
    title: "Proactive QA Automation",
    tagline: "Bulletproof Digital Assets",
    description: "Implementing rigorous automated testing suites that catch bugs before users do, ensuring 24/7 reliability and performance.",
    icon: CheckSquare,
    image: "/qa-automation.png",
    color: "from-emerald-500/20 to-teal-500/5",
    glow: "bg-emerald-500/30",
  },
];

function TrendyServiceCard({ service, index }: { service: TrendyService; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0b0514] p-8 h-full flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:bg-[#0c051a] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      >
        {/* Premium Top Glow Effect (Matches About Fouraxis pill) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[rgb(0,85,254)]/20 transition-colors duration-500" />

        {/* Animated Glow Background behind icon */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 ${service.glow} blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />
        
        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-start justify-between mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,85,254,0.4)] transition-all duration-500">
              <service.icon className="w-7 h-7" />
            </div>
            <div className="px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#0b0514] text-[12px] font-medium text-white/50 tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 group-hover:animate-pulse" />
              Emerging Tech
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-2 leading-tight">
            {service.title}
          </h3>
          <p className="text-[#5E00FF] group-hover:text-[rgb(0,85,254)] transition-colors text-[14px] font-medium mb-6 tracking-wide italic">
            {service.tagline}
          </p>
          <p className="text-white/60 text-[15px] leading-relaxed font-light mb-8 max-w-[90%]">
            {service.description}
          </p>
        </div>

        {/* Visual Asset with Floating Animation */}
        <motion.div 
          style={{ transform: "translateZ(100px)" }}
          animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-black"
        >
          <Image 
            src={service.image} 
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle inner shadow to blend edges perfectly */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30 opacity-50" />
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t ${service.color} mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity z-20`} />
        </motion.div>
        
      </div>
    </motion.div>
  );
}

export function TrendyServices() {
  return (
    <section className="py-32 relative bg-transparent overflow-visible">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Header - Animated Style */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[14px] font-medium tracking-widest text-white/80 uppercase">Future-Ready Solutions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[4rem] font-display font-medium leading-[1.1] tracking-tight text-white max-w-4xl"
          >
            Stay ahead with <span className="text-primary">Innovative Tech.</span>
          </motion.h2>
          <p className="mt-6 text-white/50 text-lg font-light max-w-2xl">
            We don&apos;t just follow trends; we define them. Our specialized services leverage the most advanced technologies to scale your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trendyServices.map((service, index) => (
            <TrendyServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
