"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Database, Smartphone } from "lucide-react";

const capabilities = [
  { 
    text: "High-Converting Landing Pages & Sales Funnels", 
    icon: LayoutTemplate,
    description: "Designed strictly for conversion and speed.",
    bgType: "glow-left"
  },
  { 
    text: "Complex SaaS Dashboards & Portals", 
    icon: Database,
    description: "Data-heavy interfaces made intuitive and beautiful.",
    bgType: "glow-center"
  },
  { 
    text: "Native & Cross-platform Mobile App UI", 
    icon: Smartphone,
    description: "Fluid mobile experiences built for engagement.",
    bgType: "glow-right"
  },
];

export function CapabilitiesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 max-w-6xl mx-auto">
          <div className="max-w-xl">
              <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden shadow-xl z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
                <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                <span className="tracking-tight relative z-10 text-white">Capabilities</span>
              </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight text-white"
            >
              <span className="text-white block">Best capabilities</span>
              <span className="text-white/40 block">for your business</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-white max-w-sm"
          >
            A flexible service stack tailored to product launches, business growth, and digital transformation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-1 relative rounded-3xl overflow-hidden group cursor-default h-[400px] flex flex-col"
              >
                {/* Visual Top Portion matching the "dark dashboard mockups" vibe */}
                <div className="w-full h-3/5 bg-[#0b0617] rounded-t-[1.3rem] rounded-b-xl border-b border-white/5 relative overflow-hidden flex items-center justify-center p-6">
                  {/* Faux charts / icons */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Gradient Glows */}
                  {item.bgType === "glow-left" && (
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/40 blur-[50px] rounded-full" />
                  )}
                  {item.bgType === "glow-center" && (
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/40 blur-[50px] rounded-full" />
                  )}
                  {item.bgType === "glow-right" && (
                     <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/60 blur-[50px] rounded-full" />
                  )}
                  
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                </div>

                {/* Text Bottom Portion */}
                <div className="p-6 flex flex-col justify-end flex-1">
                  <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">
                    {item.text}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
