"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const projects = [
  {
    id: "project-1",
    title: "Way Fields - Smart Ecosystem",
    description: "A comprehensive digital experience for the next generation of smart wearables, focusing on performance metrics and intuitive user interfaces.",
    image: "/portfolio-featured.png",
    color: "from-blue-600/20 to-blue-400/5",
  },
  {
    id: "project-2",
    title: "Horizon Analytics - Data Platform",
    description: "Enterprise-grade data visualization platform that transforms complex datasets into actionable business intelligence for global retailers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    color: "from-purple-600/20 to-purple-400/5",
  },
  {
    id: "project-3",
    title: "Nexus CRM - Business Intelligence",
    description: "Next-gen customer relationship management tool featuring AI-driven lead scoring and automated sales pipelines for high-growth tech firms.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    color: "from-emerald-600/20 to-emerald-400/5",
  },
  {
    id: "project-4",
    title: "Lumina - Creative Portfolio",
    description: "A high-performance aesthetic portfolio for a London-based digital design studio, emphasizing minimalist motion and cinematic presentation.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=80",
    color: "from-orange-600/20 to-orange-400/5",
  },
  {
    id: "project-5",
    title: "Aura - Wellness & Mindset",
    description: "A calming mobile-first web application designed to help users track mental health metrics and practice guided mindfulness exercises.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80",
    color: "from-pink-600/20 to-pink-400/5",
  },
  {
    id: "project-6",
    title: "Vertex - Fintech Dashboard",
    description: "Unified financial dashboard for multi-currency asset management, featuring real-time market updates and low-latency transaction processing.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80",
    color: "from-cyan-600/20 to-cyan-400/5",
  },
];

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Create scroll-linked transform for the "stacking" effect
  // As the user scrolls through the card's range, we scale it down slightly to show depth
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div 
      className="sticky top-32 w-full mb-20 last:mb-0" 
      style={{ 
        zIndex: index + 10,
      }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative max-w-6xl mx-auto rounded-[3.5rem] p-1.5 border border-white/[0.05] bg-white/[0.02] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        <div className="relative w-full h-full rounded-[3.1rem] overflow-hidden bg-[#0a0a14]">
          {/* Elite Top-Edge Inner Highlight */}
          <div className="absolute top-[1.5px] left-1/2 -translate-x-1/2 w-[80%] h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />

          {/* Main Visual Container */}
          <div className="relative aspect-[16/10] md:aspect-[21/11] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            
            {/* Deep Cinematic Overlay for text readability - Darkened as requested */}
            <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 z-20">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
               >
                 <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white mb-2 sm:mb-4 tracking-tight">
                   {project.title}
                 </h3>
                 <p className="text-white/60 text-[14px] sm:text-[15px] md:text-[17px] max-w-2xl leading-relaxed font-light line-clamp-2">
                   {project.description}
                 </p>
               </motion.div>
            </div>
            
            {/* Subtle View Case Study Link - Icon only top right */}
            <div className="absolute top-8 right-8 z-20">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer group">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
          </div>
          
          {/* Subtle Dynamic color accent like Process section */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 -z-10`} />
        </div>
      </motion.div>
    </div>
  );
}

export function PortfolioPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="portfolio" ref={containerRef} className="py-24 relative bg-[#0b0514]">
      {/* Brand SVG Reflections — Precision-positioned to frame the header text */}
      <div className="absolute top-10 left-1/2 -translate-x-[640px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6]">
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

      <div className="absolute top-10 left-1/2 translate-x-[40px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6] -scale-x-100">
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
        
        {/* Header Area */}
        <div className="text-center mb-24 flex flex-col items-center">
          {/* Badge - Standardized Style */}
          <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden shadow-xl z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
            <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
            <span className="tracking-tight relative z-10 text-white">Portfolio</span>
          </div>

          <h2 className="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl">
            <span className="text-white block mb-2">Our Selected Projects</span>
            <span className="text-white/40 block">That Propel Your Website.</span>
          </h2>

          <p className="text-white/50 text-[15px] max-w-xl mx-auto font-light leading-relaxed mb-10">
            Explore our curated work, showcasing collaborations with visionary clients across diverse industries.
          </p>
          
          <Link
            href="#portfolio-all"
            className="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] transition-all shadow-[0_0_20px_rgba(94,0,255,0.4)] relative overflow-hidden active:scale-95 group inline-flex items-center justify-center"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
            <span className="relative z-10">View All Work</span>
          </Link>
        </div>

        {/* Stacking Parallax Cards Container */}
        <div className="relative flex flex-col items-center pb-[10vh]">
          {projects.map((project, index) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>

      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Bottom Divider Line for a cleaner section transition */}
      {/* Removed Bottom Divider Line */}
    </section>
  );
}
