"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

interface ValueSectionProps {
  id: string;
  badge: string;
  title: string;
  subtitle1: string;
  text1: string;
  subtitle2: string;
  text2: string;
  image: string;
  reverse?: boolean;
}

function ValueSection({ badge, title, subtitle1, text1, subtitle2, text2, image, reverse }: ValueSectionProps) {
  return (
    <section className="py-20 relative bg-[#0b0514] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reverse ? "lg:flex lg:flex-row-reverse" : ""}`}>
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] p-2 ${reverse ? "order-2" : "order-1"}`}
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-[#0c0c1e]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col items-start ${reverse ? "order-1" : "order-2"}`}
          >
            <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-xl border border-white/[0.08] bg-[#0c0c1e] text-[14px] font-light text-white/70 mb-8 overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10 opacity-50" />
               <span>{badge}</span>
            </div>

            <h2 className="text-[2.2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight text-white mb-10 max-w-md">
                   {title}
            </h2>

            <div className="space-y-8 mb-12">
                <div className="flex flex-col gap-2">
                    <h4 className="text-white text-[17px] font-medium tracking-tight uppercase opacity-90">{subtitle1}</h4>
                    <p className="text-white/50 text-[15px] font-light leading-relaxed max-w-lg">{text1}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-white text-[17px] font-medium tracking-tight uppercase opacity-90">{subtitle2}</h4>
                    <p className="text-white/50 text-[15px] font-light leading-relaxed max-w-lg">{text2}</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
               <Link
                    href="#contact"
                    className="px-10 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center relative overflow-hidden group shadow-lg active:scale-95"
               >
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2">
                        Book an Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
               </Link>

               <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-1.5">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                     ))}
                  </div>
                  <span className="text-[14px] text-white/50 tracking-wide font-medium">
                     4.9/5 from 200+ clients
                  </span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function AboutValueSections() {
  return (
    <>
      <ValueSection
        id="classic-agency"
        badge="AGENCY HISTORY"
        title="An Agency With Classic Design Aesthetic"
        subtitle1="THE HIGHEST QUALITY"
        text1="We pride ourselves on delivering standard-setting design and development services that stand the test of time."
        subtitle2="THE BEST STRATEGY"
        text2="Our approach blends data-driven insights with world-class creative to ensure your brand's long-term digital growth."
        image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
        reverse={false}
      />
      
      <ValueSection
        id="smarter-work"
        badge="WORK ETHIC"
        title="Work Smarter Not Harder"
        subtitle1="SMART SYSTEMS"
        text2="We leverage the latest AI-driven tools and methodologies to streamline our creative workflow and maximize output quality."
        subtitle2="EFFICIENT TEAMWORK"
        text1="Our distributed team model ensures around-the-clock productivity and seamless collaboration across timezones."
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
        reverse={true}
      />
    </>
  );
}
