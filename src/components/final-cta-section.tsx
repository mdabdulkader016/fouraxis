"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section id="contact" className="pt-32 pb-16 relative overflow-hidden">
        
      {/* Immersive Parallax Web Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] pointer-events-none -z-10 flex flex-col items-center justify-end">
          {/* Faux 3D network lines / lattice structure */}
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-background to-background relative overflow-hidden">
             {/* Simple visual wireframe arcs */}
             {[...Array(6)].map((_, i) => (
                 <div key={`arc-${i}`} className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[100%] border border-primary/20" 
                      style={{ 
                          width: `${100 + i * 200}px`, 
                          height: `${50 + i * 100}px`, 
                          borderBottom: 'none' 
                      }} 
                 />
             ))}
             {/* Radial rays */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(at_bottom_center,_inherit_0deg,_inherit_360deg)] opacity-20 mask-radial" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-accent/30 rounded-[100%] blur-[120px]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center max-w-4xl pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 text-white tracking-tight"
        >
          Get started with Syntaxview today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white text-balance mx-auto mb-12 leading-relaxed max-w-xl"
        >
          Have a project in mind? Let&apos;s talk about how we can help you build and scale your next big digital product.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex justify-center mb-16"
        >
          <Link
            href="#contact"
            className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white text-lg font-bold rounded-full hover:opacity-90 transition-all shadow-[0_4px_30px_rgba(236,72,153,0.3)] hover:shadow-[0_4px_40px_rgba(236,72,153,0.5)] flex items-center gap-3"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
