"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PortfolioHero() {
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
          {/* Badge - Standardized Style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[15px] font-light text-white mb-8 overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
            <div className="w-8 h-4 bg-blue-600 rounded-md flex items-center justify-center text-[10px] font-bold mr-1">NEW</div>
            <span className="tracking-tight relative z-10 text-white/90">Explore Our Portfolio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.5rem] md:text-[4.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8 max-w-5xl"
          >
            <span className="text-white block">Check Out Some</span>
            <span className="text-white/90 block">Extra-Ordinary Work.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-[16px] md:text-[18px] max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            From startups to established brands, we create tailored solutions <br className="hidden md:block" /> that drive success and make a real impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] relative overflow-hidden active:scale-95 group inline-flex items-center justify-center"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
              <span className="relative z-10">Build Your Product</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />
    </section>
  );
}
