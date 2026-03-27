"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Syntaxview provide?",
    answer: "We offer Web Development, App Development, UX/UI Design, and Graphics Design — helping businesses build digital products and visual experiences from strategy to execution.",
  },
  {
    question: "Can you handle both design and development?",
    answer: "Yes. Syntaxview combines design and development in one streamlined workflow, allowing us to move efficiently from concept to launch while maintaining consistency.",
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
    <section id="faq" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted text-balance mx-auto"
          >
            Everything you may want to know before we start building together.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "border border-border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen ? "bg-card shadow-lg ring-1 ring-primary/20" : "bg-transparent hover:bg-muted/5"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors",
                    isOpen ? "border-primary bg-primary/10 text-primary" : "border-border text-muted"
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
                      <div className="p-6 pt-0 text-muted leading-relaxed">
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
