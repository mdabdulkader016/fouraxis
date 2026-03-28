"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <>
      <section id="about" className="py-24 relative overflow-hidden bg-[#0b0514]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Outline Frame & Image container */}
            <div className="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02]">
              <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square group bg-black">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="Team working together"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle inner shadow to blend edges */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col items-start"
          >
            <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group">
              {/* Premium Top Glow Effect (Brand Blue) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />

              <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
              <span className="tracking-tight relative z-10 text-white">About Fouraxis</span>
            </div>

            {/* Headings */}
            <h2 className="text-4xl md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
              <span className="text-white block mb-1">Building Stronger Brands</span>
              <span className="text-white/40 block">Creating Impressions!</span>
            </h2>

            {/* Paragraph */}
            <p className="text-white/60 text-[15px] leading-relaxed mb-10 max-w-lg font-normal">
              Delivering high-quality, on-demand product with precision. Elevate your brand effortlessly, one step at a time.
            </p>

            {/* Divider Line */}
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10 ml-4" />

            {/* Bullet Points */}
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-white/80 text-[15px]">
                <div className="w-5 h-5 rounded-full bg-[#5E00FF] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white bg-[#5E00FF] rounded-full" />
                </div>
                From $0 to $500,000 in revenue.
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[15px]">
                <div className="w-5 h-5 rounded-full bg-[#5E00FF] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white bg-[#5E00FF] rounded-full" />
                </div>
                47% growth in new customers.
              </li>
            </ul>

            {/* Actions & Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Link
                href="#about-more"
                className="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                <span className="relative z-10">View About Us</span>
              </Link>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <span className="text-[15px] text-white/50 tracking-wide font-medium">
                  200+ Agencies Rated
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
