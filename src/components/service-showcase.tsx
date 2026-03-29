"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceShowcaseProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  isReversed?: boolean;
}

export function ServiceShowcase({
  title,
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
          <div className="flex-1 w-full text-left">
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight text-white mb-8">
                {title}
              </h2>
              
              <p className="text-white/60 text-[16px] md:text-[1.1rem] leading-relaxed mb-10 max-w-xl font-light">
                {description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-white/80 text-[15px] font-light">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all rounded-2xl text-white font-medium group"
              >
                Get Started 
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
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
              className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden group/img shadow-2xl"
            >
              {/* Premium Top Edge Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none" />
              
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
              
              {/* Image Border/Frame Effect */}
              <div className="absolute inset-0 border border-white/10 rounded-[3rem] z-20 pointer-events-none" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
