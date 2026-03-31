"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import Image from "next/image";

interface Award {
  id: string;
  title: string;
  subtitle: string;
  logo: string;
}

const awards: Award[] = [
  {
    id: "1",
    title: "Site of the Day",
    subtitle: "Awwwards 2024",
    logo: "https://cdn.simpleicons.org/awwwards/FFFFFF",
  },
  {
    id: "2",
    title: "Honorable Mention",
    subtitle: "CSS Design Awards",
    logo: "https://cdn.simpleicons.org/cssdesignawards/FFFFFF",
  },
  {
    id: "3",
    title: "Developer Award",
    subtitle: "The FWA 2023",
    logo: "https://cdn.simpleicons.org/thefwa/FFFFFF",
  },
  {
    id: "4",
    title: "Mobile Excellence",
    subtitle: "Behance Featured",
    logo: "https://cdn.simpleicons.org/behance/FFFFFF",
  },
];

function AwardCard({ award, index }: { award: Award; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-[2rem] border border-white/5 bg-[#0a0a14] p-8 hover:bg-white/[0.03] hover:border-white/10 transition-all cursor-pointer"
    >
      <div className="flex items-center justify-between mb-10">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:bg-white transition-all">
             <Image src={award.logo} alt={award.title} width={32} height={32} unoptimized className="opacity-80 group-hover:invert transition-all" />
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white transition-colors">
             <Plus className="w-4 h-4" />
          </div>
      </div>
      <div className="flex flex-col">
          <h3 className="text-xl font-display font-medium text-white mb-1 tracking-tight">
             {award.title}
          </h3>
          <p className="text-white/40 text-[14px] font-light uppercase tracking-widest">
             {award.subtitle}
          </p>
      </div>
    </motion.div>
  );
}

export function AwardsSection() {
  return (
    <section className="py-24 relative bg-[#0b0514]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-xl border border-white/[0.08] bg-[#0c0c1e] text-[14px] font-light text-white/70 mb-8 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10 opacity-50" />
                    <span>AWARDS</span>
                </div>

                <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight text-white mb-8">
                    Recognized <br /> <span className="text-white/40">for Excellence</span>
                </h2>
                
                <p className="text-white/50 text-[16px] leading-relaxed max-w-md font-light">
                    Our commitment to design quality and technical precision has earned us accolades from the industry's most prestigious organizations.
                </p>
            </div>

            {/* Right Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                    <AwardCard key={award.id} award={award} index={index} />
                ))}
            </div>

        </div>

      </div>
    </section>
  );
}
