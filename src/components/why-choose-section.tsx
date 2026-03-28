"use client";

import { motion } from "framer-motion";
import { Target, Users, Server, Clock } from "lucide-react";

const pillars = [
  {
    title: "Strategy-Driven Execution",
    description: "We don't just build deliverables — we build solutions aligned with your business.",
    icon: Target,
  },
  {
    title: "Design + Dev in One Team",
    description: "From concept to launch, our integrated workflow keeps projects faster.",
    icon: Users,
  },
  {
    title: "Scalable, Maintainable Quality",
    description: "We prioritize performance and clean structure so your product grows.",
    icon: Server,
  },
  {
    title: "Clear & Reliable Delivery",
    description: "Transparent collaboration and dependable timelines you can trust.",
    icon: Clock,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden shadow-xl z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
            <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
            <span className="tracking-tight relative z-10 text-white">Features</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight text-white mb-6"
          >
            <span className="text-white block">Delivering excellence:</span>
            <span className="text-white/40 block">Features & Benefits</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-white"
          >
            Total 0140 0000000 (Placeholder Contact)
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group h-full"
              >
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/70 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-display font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
