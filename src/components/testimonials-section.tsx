"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Syntaxview brought clarity to our product vision and delivered a polished website that felt premium from day one.",
    author: "Founder",
    company: "SaaS Startup",
  },
  {
    quote: "The UI quality, responsiveness, and communication were excellent. The final product exceeded our expectations.",
    author: "Operations Lead",
    company: "Service Brand",
  },
  {
    quote: "We needed design and development under one roof — Syntaxview handled both seamlessly.",
    author: "Marketing Manager",
    company: "Growing Business",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 relative border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            What Clients Appreciate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted text-balance mx-auto max-w-2xl"
          >
            Thoughtful design, clean execution, and dependable communication from start to finish.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 p-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col h-full">
                <p className="text-foreground/90 text-lg leading-relaxed mb-8 flex-1">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted/20 border border-border flex items-center justify-center text-muted font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm tracking-wide">{t.author}</div>
                    <div className="text-xs text-muted">{t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
