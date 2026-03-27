"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    title: "SaaS Landing Page",
    category: "Web Design",
    color: "from-blue-500/10 to-transparent border-blue-500/20",
    imagePlaceholder: "bg-[#0f0a1f] border-blue-500/10"
  },
  {
    title: "Finance App Interface",
    category: "Mobile App",
    color: "from-primary/20 to-transparent border-primary/30",
    imagePlaceholder: "bg-[#0f0a1f] border-primary/20"
  },
  {
    title: "Marketing Platform",
    category: "Web Application",
    color: "from-accent/10 to-transparent border-accent/20",
    imagePlaceholder: "bg-[#0f0a1f] border-accent/10"
  },
];

export function PortfolioPreview() {
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center">
        
        <div className="mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-wide uppercase mb-6"
           >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Check out our latest complete Project
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col rounded-3xl overflow-hidden glass-card cursor-pointer hover:border-white/20 transition-colors"
               >
                 {/* Top visual part */}
                 <div className={`w-full aspect-[4/5] bg-gradient-to-t ${project.color} border-b relative p-6 flex items-end justify-center overflow-hidden`}>
                    
                    {/* Floating Phone/Web mockup placeholder inside */}
                    <motion.div 
                       whileHover={{ y: -10 }}
                       transition={{ duration: 0.4 }}
                       className={`w-[80%] h-[90%] rounded-t-2xl border-t border-l border-r shadow-2xl relative overflow-hidden ${project.imagePlaceholder}`}
                    >
                       <div className="w-full h-8 border-b border-inherit flex items-center px-4 gap-1.5 opacity-50">
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                       </div>
                       <div className="p-4 flex flex-col gap-3">
                          <div className="w-full h-24 bg-white/5 rounded-lg" />
                          <div className="w-2/3 h-4 bg-white/5 rounded" />
                          <div className="w-full h-4 bg-white/5 rounded" />
                       </div>
                    </motion.div>

                 </div>

                 {/* Bottom Text Part */}
                 <div className="p-6 text-left flex items-center justify-between">
                    <div>
                      <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{project.category}</div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                 </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
