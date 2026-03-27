"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const cases = [
  {
    title: "Conversion-Focused SaaS Landing Page",
    tags: ["Modern product storytelling", "Responsive UI", "Smooth motion interactions"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Business Management Web App",
    tags: ["Dashboard UX", "Workflow optimization", "Clean scalable frontend architecture"],
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "Mobile App + Visual Campaign Assets",
    tags: ["App interface design", "Marketing creatives", "Consistent brand visuals"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export function PortfolioPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="work" className="py-32 relative bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Selected Work & Possibilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted max-w-2xl text-balance"
          >
            A glimpse into the kind of high-impact digital products and brand experiences we can create together.
          </motion.p>
        </div>

        <div className="space-y-12 md:space-y-32">
          {cases.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Area */}
                <div className="w-full md:w-3/5 group cursor-pointer perspective-1000">
                  <motion.div 
                    whileHover={{ scale: 0.98, rotateX: 2, rotateY: index % 2 === 0 ? 2 : -2 }}
                    transition={{ duration: 0.4 }}
                    className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} border border-border flex items-center justify-center`}
                  >
                    {/* Abstract placeholder visual */}
                    <div className="w-3/4 h-3/4 bg-background/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group-hover:shadow-primary/20 transition-all duration-500">
                      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                      <div className="text-muted/50 font-display font-bold text-2xl mb-4 group-hover:scale-110 transition-transform duration-500">
                        Concept Showcase
                      </div>
                      <div className="w-16 h-1 bg-border/50 rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Area */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <h3 className="text-3xl font-display font-bold mb-6">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-muted/10 border border-border/50 rounded-full text-xs font-medium text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors group w-fit">
                    View Concept
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
