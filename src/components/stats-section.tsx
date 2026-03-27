"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });
  
  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  return (
    <span ref={ref} className="font-display font-bold text-5xl md:text-6xl text-foreground flex items-center">
      <motion.span>{displayValue}</motion.span>
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "", label: "Core Service Verticals" },
  { value: 100, suffix: "%", label: "Custom-Built Solutions" },
];

export function StatsSection() {
  return (
    <section className="py-24 relative border-y border-border">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-center md:items-start mb-16">
          <div className="max-w-xl text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Designed to Deliver Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg text-balance"
            >
              We focus on outcomes — better usability, stronger branding, smoother user journeys, and scalable digital infrastructure.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start relative group text-center md:text-left"
            >
              <div className="absolute top-1/2 left-1/2 md:left-0 -translate-y-1/2 md:translate-x-0 -translate-x-1/2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full flex flex-col items-center md:items-start">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-sm md:text-base font-medium text-muted tracking-wide max-w-[140px] leading-tight md:max-w-full">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
