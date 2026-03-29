"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceShowcaseProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  features: string[];
  image: string;
  isReversed?: boolean;
}

export function ServiceShowcase({
  title,
  subtitle,
  badge,
  description,
  features,
  image,
  isReversed = false,
}: ServiceShowcaseProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 lg:gap-24`}>
          
          {/* Content Area */}
          <div className="flex-1 w-full text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              {badge && (
                <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group">
                  {/* Premium Top Glow Effect (Brand Blue) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />

                  <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                  <span className="tracking-tight relative z-10 text-white">{badge}</span>
                </div>
              )}

              <h2 className="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
                <span className="text-white block mb-1">{title}</span>
                {subtitle && <span style={{ color: '#e5e7eb' }} className="block">{subtitle}</span>}
              </h2>
              
              <p className="text-white/60 text-[15px] leading-relaxed mb-10 max-w-lg font-normal">
                {description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-[#5E00FF] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/80 text-[15px] font-light">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center relative overflow-hidden group/btn"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
          
          {/* Image / Slider Area */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: isReversed ? -50 : 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02]"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square group bg-black">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle inner shadow to blend edges */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
