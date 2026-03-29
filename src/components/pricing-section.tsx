"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Package",
    description: "Perfect for small teams and startups.",
    price: "$599",
    period: "/month",
    features: [
      "Custom UI Design",
      "Basic Development",
      "Standard Maintenance",
      "Email Support",
    ],
    highlight: false,
    delay: 0,
  },
  {
    name: "Professional Plan",
    description: "Ideal for growing businesses and agencies.",
    price: "$1299",
    period: "/month",
    features: [
      "Advanced UX/UI Design",
      "Full-stack Web App",
      "Performance Optimization",
      "Priority Support (24/7)",
      "SEO Integration"
    ],
    highlight: true,
    delay: 0.1,
  },
  {
    name: "Enterprise Solution",
    description: "For large scale products and custom platforms.",
    price: "$2999",
    period: "/month",
    features: [
      "Dedicated Product Team",
      "Mobile App Development",
      "Custom Backend Architecture",
      "Dedicated Account Manager",
      "Post-launch Analytics"
    ],
    highlight: false,
    delay: 0.2,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden shadow-xl z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
            <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
            <span className="tracking-tight relative z-10 text-white">Pricing</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight text-white"
          >
            <span className="text-white block">Choose the Right Plan</span>
            <span className="text-white/40 block">For Your Business</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.delay }}
              className={`relative rounded-[2rem] p-8 flex flex-col h-full bg-[#0b0617] backdrop-blur-xl border ${
                plan.highlight 
                  ? "border-primary/50 shadow-[0_0_50px_rgba(168,85,247,0.15)] py-12" 
                  : "border-white/5 opacity-80 hover:opacity-100 transition-opacity"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              
              <div className="flex items-end gap-1 mb-8">
                <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                <span className="text-white/40 mb-1">{plan.period}</span>
              </div>
              
              <p className="text-sm text-white/50 mb-8 border-b border-white/5 pb-8">{plan.description}</p>
              
              <button 
                className={`w-full py-4 rounded-full font-bold text-[16px] transition-all mb-8 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:opacity-90"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/50'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.highlight && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
