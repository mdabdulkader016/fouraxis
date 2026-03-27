"use client";

import { motion, Variants } from "framer-motion";
import { Monitor, Smartphone, PenTool, Image as ImageIcon } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built for performance, responsiveness, scalability, and business growth. From landing pages to complex platforms, we create web experiences that convert.",
    features: ["Custom Business Websites", "Web Applications", "CMS & Admin Panels", "API Integrations"],
    icon: Monitor,
  },
  {
    title: "App Development",
    description: "Robust mobile and cross-platform applications designed for usability, speed, and long-term scalability. We build products that users love and businesses rely on.",
    features: ["Android / iOS Apps", "Cross-Platform Development", "MVP Development", "App UI Engineering"],
    icon: Smartphone,
  },
  {
    title: "UX/UI Design",
    description: "User-centered interfaces crafted for clarity, engagement, and conversion. We design seamless digital journeys that feel intuitive, elegant, and memorable.",
    features: ["Wireframes & User Flows", "Product Interface Design", "Design Systems", "Dashboard & SaaS UI"],
    icon: PenTool,
  },
  {
    title: "Graphics Design",
    description: "Strategic visual design that strengthens brand identity and communication. From marketing assets to digital creatives, we deliver visuals that stand out with purpose.",
    features: ["Social Media Creatives", "Brand Visual Assets", "Marketing Materials", "Presentation & Campaign Design"],
    icon: ImageIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted text-balance"
          >
            End-to-end digital solutions built to solve problems, create impact, and scale with confidence.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-3xl group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-muted/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted leading-relaxed mb-8">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
