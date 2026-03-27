"use client";

import { motion } from "framer-motion";

const logos = [
  "BrandOne",
  "PixelNest",
  "NovaEdge",
  "BluePeak",
  "OrbitLabs",
  "BrightCore",
];

export function TrustedBy() {
  return (
    <section className="py-24 border-y border-border bg-muted/5 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-lg font-medium text-muted">
          Trusted by ambitious startups, growing brands, and modern businesses
        </h2>
      </div>

      {/* Marquee implementation */}
      <div className="relative flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-24 items-center pl-24"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="text-2xl font-bold font-display text-foreground/40 hover:text-foreground/80 transition-colors mx-8 tracking-wider"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
