"use client";

import { motion } from "framer-motion";
import { Target, Users, Server, Clock } from "lucide-react";

const pillars = [
  {
    title: "Strategy-Driven Execution",
    description: "We don't just build deliverables — we build solutions aligned with your business goals.",
    icon: Target,
  },
  {
    title: "Design + Development in One Team",
    description: "From concept to launch, our integrated workflow keeps projects faster, cleaner, and more consistent.",
    icon: Users,
  },
  {
    title: "Scalable, Maintainable Quality",
    description: "We prioritize performance, clean structure, and long-term usability so your product is built to grow.",
    icon: Server,
  },
  {
    title: "Clear Communication & Reliable Delivery",
    description: "Transparent collaboration, milestone-based execution, and dependable timelines you can trust.",
    icon: Clock,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-32 relative border-y border-border/50 bg-background/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Why Businesses Choose Syntaxview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted text-balance"
          >
            We combine technical expertise, design thinking, and practical execution to deliver digital solutions that actually move the needle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-px bg-border/50 -z-10" />

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-background border-2 border-border/50 flex items-center justify-center mb-8 relative group-hover:border-primary/50 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Number indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
