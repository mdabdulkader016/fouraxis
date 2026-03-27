"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const workflowSteps = [
  {
    id: "01",
    title: "Discover",
    description: "Understand goals, audience, scope, and opportunities.",
  },
  {
    id: "02",
    title: "Design",
    description: "Create wireframes, flows, visuals, and approval-ready concepts.",
  },
  {
    id: "03",
    title: "Develop",
    description: "Build robust, responsive, scalable digital solutions.",
  },
  {
    id: "04",
    title: "Deliver & Improve",
    description: "Launch, optimize, iterate, and support future growth.",
  },
];

export function WorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl" ref={containerRef}>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted text-balance mx-auto max-w-2xl"
          >
            A simple, structured process that keeps your project clear, collaborative, and moving forward.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line background */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-[23px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-accent -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative flex items-center md:justify-between flex-row">
                  {/* Connect dot */}
                  <div className="absolute left-[23px] md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10" />

                  {/* Desktop Layout - Left / Right spread */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full pl-16 md:pl-0 md:w-[45%] ${isEven ? 'md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}
                  >
                    <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 text-6xl font-display font-bold text-muted/10 group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                        {step.id}
                      </div>
                      <h3 className="text-2xl font-bold font-display mb-3 text-foreground">{step.title}</h3>
                      <p className="text-muted leading-relaxed relative z-10">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
