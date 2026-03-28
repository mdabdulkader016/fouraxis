"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-24 relative bg-[#0b0514] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[3rem] border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] overflow-hidden p-12 md:p-24 text-center shadow-2xl"
        >
          {/* Custom Branded Animated Gradient (GroupGradiant.svg) */}
          <motion.div
            animate={{
              scale: [1.1, 1.5, 1.1],
              rotate: [0, 12, -12, 0],
              x: [-150, 150, -150],
              y: [-80, 80, -80],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-x-0 -top-[20%] -bottom-[20%] w-[150%] h-[150%] -left-[25%] pointer-events-none opacity-80 mix-blend-screen"
          >
            <img 
              src="/GroupGradiant.svg" 
              alt="Animated Gradient Background" 
              className="w-full h-full object-cover opacity-100 brightness-[1.5] contrast-[1.2]"
            />
          </motion.div>

          {/* Additional Soft Ambient Glow to ensure depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)] pointer-events-none" />

          {/* Central Pulsing Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-10 overflow-hidden z-10 mx-auto">
            {/* Premium Top Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,255)] to-transparent z-10" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,102,255)]/20 blur-md rounded-full pointer-events-none" />
            
            <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0 animate-pulse" />
            <span className="tracking-tight relative z-10 text-white font-medium">Join Us Now</span>
          </div>

          <h2 className="relative z-10 text-4xl md:text-[3.5rem] font-display font-medium leading-[1.15] tracking-tight mb-10 max-w-4xl mx-auto">
            <span className="text-white">Each Project we Undertake <br className="hidden md:block" /> </span>
            <span className="text-white/40">is a Unique Opportunity.</span>
          </h2>

          <p className="relative z-10 text-white/50 text-[16px] md:text-[1.1rem] max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
          </p>

          <Link
            href="#contact"
            className="relative z-10 px-12 py-5 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 transition-all inline-flex items-center gap-2 overflow-hidden active:scale-95 group/btn"
          >
            {/* Surface Highlight */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
            
            <span className="relative z-10 flex items-center gap-2">
              Book an Appointment
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Grainy Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      </div>
    </section>
  );
}
