"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-40 pb-20 relative bg-[#0b0514] overflow-hidden">
      {/* Brand SVG Reflections — Precision-positioned to frame the header text */}
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
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[15px] font-light text-white mb-8 overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
            <div className="w-8 h-4 bg-blue-600 rounded-md flex items-center justify-center text-[10px] font-bold mr-1">ABOUT</div>
            <span className="tracking-tight relative z-10 text-white/90">Learn About Us</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.5rem] md:text-[4.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8 max-w-5xl"
          >
            <span className="text-white block">Learn More About Fouraxis</span>
            <span className="text-white/90 block">Let&apos;s Deep Dive!</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-[16px] md:text-[18px] max-w-2xl mx-auto font-light leading-relaxed mb-16"
          >
            We are a design-led agency focused on transforming your ideas <br className="hidden md:block" /> into premium digital products that people love.
          </motion.p>
          
          {/* Video / Visual Placeholder Matching Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-5xl aspect-[21/10] rounded-[3rem] overflow-hidden border border-white/10 group cursor-pointer shadow-3xl"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#0a0a14]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)]" />
            
            {/* Animated Blue Shape / Symbol from Image */}
            <div className="absolute inset-0 flex items-center justify-center">
                 <Image 
                    src="/GroupGradiant.svg" 
                    alt="Abstract Visual" 
                    width={400} 
                    height={400} 
                    unoptimized
                    className="object-contain opacity-80 filter blur-xl animate-pulse"
                 />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:bg-white group-hover:text-black transition-all">
                    <Play className="w-8 h-8 fill-current" />
                </div>
            </div>

            {/* Premium Edges */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />
    </section>
  );
}
