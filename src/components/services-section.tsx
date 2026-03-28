"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, PenTool, Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built for performance, responsiveness, scalability, and business growth. From landing pages to complex platforms, we create web experiences that convert.",
    icon: Monitor,
    colSpan: "col-span-1",
  },
  {
    title: "App Development",
    description: "Robust mobile and cross-platform applications designed for usability, speed, and long-term scalability. We build products that users love and businesses rely on.",
    icon: Smartphone,
    colSpan: "col-span-1",
  },
  {
    title: "UX/UI Design",
    description: "User-centered interfaces crafted for clarity, engagement, and conversion. We design seamless digital journeys that feel intuitive, elegant, and memorable.",
    icon: PenTool,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    title: "Graphics Design",
    description: "Strategic visual design that strengthens brand identity and communication. From marketing assets to digital creatives, we deliver visuals that stand out with purpose.",
    icon: ImageIcon,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-wide uppercase mb-6"
          >
            Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white max-w-2xl"
          >
            We provide the best service for your business
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card glass-card-hover p-8 rounded-[2rem] flex flex-col items-start relative overflow-hidden group ${service.colSpan}`}
              >
                {/* Inner Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8 flex-1">{service.description}</p>
                
                <div className="mt-auto flex items-center gap-2.5 text-[16px] font-semibold text-white/50 group-hover:text-accent transition-colors cursor-pointer">
                  Learn more <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white text-[16px] font-bold rounded-full hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(168,85,247,0.3)]"
          >
            Get Started
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
