"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function ContactHero() {
  const scrollToForm = () => {
    const form = document.getElementById("contact-inner");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0b0514]">
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

      {/* Cinematic Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)] blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.1)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center gap-3 px-5 py-2 rounded-xl border border-white/[0.08] bg-[#0c0c1e] text-[14px] font-light text-white/70 mb-10 overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10 opacity-50" />
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Let&apos;s Work Together</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.8rem] md:text-[4.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            <span className="text-white block">Any Questions Rising?</span>
            <span className="text-white/40 block">We are All Here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-[16px] md:text-[18px] max-w-xl mx-auto font-light leading-relaxed mb-12"
          >
            Whether you have a question, need assistance, <br className="hidden md:block" /> or want to start a new project, our team is here to help.
          </motion.p>

          <motion.button
            onClick={scrollToForm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="px-10 py-5 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] relative overflow-hidden active:scale-95 group"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
            <span className="relative z-10">Fill The Form Out</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
