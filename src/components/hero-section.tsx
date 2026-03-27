"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Layers, Rocket } from "lucide-react";
import Link from "next/link";

const chips = [
  { text: "Fast Delivery", icon: Rocket },
  { text: "Pixel-Perfect UI", icon: Layers },
  { text: "Scalable Code", icon: Code },
  { text: "Conversion-Focused Design", icon: Zap },
];

export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12 md:mt-0">
      <div className="flex-1 w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">Full-Stack Digital Product Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
        >
          Build Bold <br className="hidden md:block" />
          Digital Products <br className="hidden md:block" />
          with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Syntaxview</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted text-balance mb-10 max-w-2xl leading-relaxed"
        >
          From high-performance websites and scalable mobile apps to intuitive UX/UI and standout visual design — 
          Syntaxview helps businesses launch faster, look sharper, and grow smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white text-base font-medium rounded-full hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 group"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-background border border-border hover:bg-muted/10 text-foreground text-base font-medium rounded-full transition-all flex items-center justify-center"
          >
            View Our Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-x-8 gap-y-4"
        >
          <p className="w-full text-xs font-semibold text-muted uppercase tracking-wider mb-2">Web • App • UX/UI • Graphics</p>
          <p className="text-sm text-foreground/60 w-full">Crafted for startups, brands, and growing businesses</p>
        </motion.div>
      </div>

      <div className="flex-1 relative hidden lg:block h-[600px] w-full">
        {/* Abstract floating chips / visual elements */}
        {chips.map((chip, index) => {
          const Icon = chip.icon;
          return (
            <motion.div
              key={chip.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                delay: index * 0.8,
                ease: "easeInOut",
                opacity: { duration: 0.5, delay: 1 + index * 0.2 }
              }}
              className="absolute glass-card px-6 py-4 rounded-2xl flex items-center gap-4 z-10"
              style={{
                top: `${20 + index * 20}%`,
                left: index % 2 === 0 ? '10%' : '40%',
              }}
            >
              <div className="p-3 bg-primary/20 rounded-xl">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-sm whitespace-nowrap">{chip.text}</span>
            </motion.div>
          );
        })}
        
        {/* Core floating orb */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-[80px]"
        />
      </div>
    </div>
  );
}
