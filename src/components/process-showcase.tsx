"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    description: "We understand your goals, audience, and opportunities before writing a single line of code.",
  },
  {
    title: "Design & Prototyping",
    description: "We transform ideas into intuitive user flows and high-fidelity interfaces.",
  },
  {
    title: "Development & Launch",
    description: "We build scalable, production-ready solutions with clean architecture and smooth deployment.",
  },
];

export function ProcessShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for the right visual
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="process" className="py-32 relative overflow-hidden bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 max-w-2xl"
          >
            Built with Strategy. <br/>
            <span className="text-muted">Refined with Precision.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white max-w-2xl text-balance"
          >
            Every project at Fouraxis blends creative thinking, technical excellence, and business-focused execution.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Cards */}
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Visual Frame */}
          <motion.div 
            style={{ y, rotateX }}
            className="relative h-[600px] w-full rounded-3xl perspective-1000 hidden lg:block"
          >
            {/* Layer 1: Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl border border-border/50 backdrop-blur-3xl shadow-2xl" />
            
            {/* Abstract UI Elements */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
              className="absolute top-12 left-12 right-12 bottom-24 bg-background/50 rounded-2xl border border-white/10 shadow-xl overflow-hidden p-6 flex flex-col gap-4 backdrop-blur-xl"
            >
              {/* Header mockup */}
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>
              
              {/* Content mockups */}
              <div className="w-1/3 h-4 bg-muted/20 rounded-full mt-4" />
              <div className="w-full h-32 bg-primary/10 rounded-xl border border-primary/20 mt-4" />
              <div className="flex gap-4 mt-4">
                <div className="flex-1 h-24 bg-secondary/10 rounded-xl py-4 px-4 border border-secondary/20">
                   <div className="w-1/2 h-2 bg-secondary/30 rounded-full mb-3" />
                   <div className="w-3/4 h-2 bg-secondary/20 rounded-full" />
                </div>
                <div className="flex-1 h-24 bg-accent/10 rounded-xl py-4 px-4 border border-accent/20">
                   <div className="w-1/2 h-2 bg-accent/30 rounded-full mb-3" />
                   <div className="w-full h-2 bg-accent/20 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Floating element */}
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
              className="absolute -right-8 bottom-16 bg-background border border-border rounded-xl p-5 shadow-2xl flex items-center gap-4"
            >
               <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent" />
               <div>
                 <div className="text-sm font-bold">100% Quality</div>
                 <div className="text-xs text-muted">Ready for production</div>
               </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
