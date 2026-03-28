"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Fouraxis provide?",
    answer: "We offer Web Development, App Development, UX/UI Design, and Graphics Design — helping businesses build digital products and visual experiences from strategy to execution.",
  },
  {
    question: "Can you handle both design and development?",
    answer: "Yes. Fouraxis combines design and development in one streamlined workflow, allowing us to move efficiently from concept to launch while maintaining consistency.",
  },
  {
    question: "Do you work with startups and established businesses?",
    answer: "Absolutely. We work with startups, growing brands, agencies, and established businesses looking for modern, high-quality digital solutions.",
  },
  {
    question: "Can you build custom solutions instead of templates?",
    answer: "Yes. Our approach is focused on custom-built, business-specific solutions tailored to your goals, audience, and technical requirements.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. We can support maintenance, updates, improvements, and future iterations depending on your project needs.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16 flex flex-col items-center">
            <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-wide uppercase mb-6"
           >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen ? "bg-[#110822] border-primary/30" : "bg-transparent border-white/5 hover:bg-white/[0.02]"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={cn("font-medium pr-8 transition-colors", isOpen ? "text-white" : "text-white/70")}>{faq.question}</span>
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg",
                    isOpen ? "bg-primary text-white" : "bg-white/5 border border-white/10 text-white/50"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-white/50 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
