"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Syntaxview brought clarity to our product vision and delivered a polished website that felt premium from day one.",
    author: "Founder",
    company: "SaaS Startup",
    avatar: "/avatars/1.png"
  },
  {
    quote: "The UI quality, responsiveness, and communication were excellent. The final product exceeded our expectations.",
    author: "Operations Lead",
    company: "Service Brand",
    avatar: "/avatars/2.png"
  },
  {
    quote: "We needed design and development under one roof — Syntaxview handled both seamlessly.",
    author: "Marketing Manager",
    company: "Growing Business",
    avatar: "/avatars/3.png"
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract blurred background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-wide uppercase mb-6"
          >
            Review
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white max-w-2xl"
          >
            What our clients are saying
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8 flex-1 italic relative z-10">
                &quot;{t.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/10">
                {/* Fallback avatar if image fails or doesn't exist */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-white shadow-lg overflow-hidden">
                   {t.author[0]}
                </div>
                <div>
                  <div className="font-bold text-sm tracking-wide text-white">{t.author}</div>
                  <div className="text-xs text-white/50">{t.company}</div>
                </div>
              </div>

              {/* Glowing bottom edge like the design reference */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
