"use client";

import { motion } from "framer-motion";
import { 
  LayoutTemplate, Compass, Database, ShoppingCart, 
  Smartphone, Shield, Paintbrush, Share2, 
  Box, Blocks, Rocket, Wrench
} from "lucide-react";

const capabilities = [
  { text: "Landing Pages & Funnels", icon: LayoutTemplate },
  { text: "Corporate Websites", icon: Compass },
  { text: "SaaS Dashboards", icon: Database },
  { text: "E-commerce Interfaces", icon: ShoppingCart },
  { text: "Mobile App UI", icon: Smartphone },
  { text: "Admin Panels", icon: Shield },
  { text: "Brand Graphics", icon: Paintbrush },
  { text: "Social Media Creatives", icon: Share2 },
  { text: "Design Systems", icon: Box },
  { text: "API Integrations", icon: Blocks },
  { text: "MVP Development", icon: Rocket },
  { text: "Maintenance & Iteration", icon: Wrench },
];

export function CapabilitiesGrid() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-secondary/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Core Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted text-balance"
            >
              A flexible service stack tailored to product launches, business growth, and digital transformation.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-6 rounded-2xl border border-border bg-background/50 hover:bg-card backdrop-blur-sm transition-all overflow-hidden flex flex-col items-center text-center gap-4 cursor-default"
              >
                {/* Hover spotlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-3 rounded-full bg-muted/10 group-hover:bg-primary/10 transition-colors z-10 text-foreground/70 group-hover:text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="font-medium text-sm md:text-base z-10">
                  {item.text}
                </span>
                
                {/* Animated border line on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
