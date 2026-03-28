"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, LayoutGrid, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const stages = [
  {
    id: "stage-1",
    stage: "Stage 1",
    title: "Kickoff",
    description: "The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations. Through in-depth discussions and thorough research.",
    icon: Rocket,
    tags: ["Comprehensive Consultation", "Project Roadmap"],
    color: "from-blue-600/20 to-blue-400/5",
  },
  {
    id: "stage-2",
    stage: "Stage 2",
    title: "Execution",
    description: "With a clear strategy in place, we move into the execution phase, where ideas come to life. Our team works high efficiently and collaboratively to implement the plan.",
    icon: LayoutGrid,
    tags: ["Seamless Integration", "Real Time Collaboration"],
    color: "from-purple-600/20 to-purple-400/5",
  },
  {
    id: "stage-3",
    stage: "Stage 3",
    title: "Handoff",
    description: "Once the design and development are finalized, we seamlessly transition to the handoff stage. Here, we provide you with all the assets, documentation, and support to a smooth launch.",
    icon: ShieldCheck,
    tags: ["Ongoing Support", "Documentation"],
    color: "from-emerald-600/20 to-emerald-400/5",
    hasCTA: true,
  },
];

function ProcessCard({ stage, index, total }: { stage: any; index: number; total: number }) {
  const Icon = stage.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div 
      className="sticky top-40 w-full mb-12 last:mb-0" 
      style={{ 
        zIndex: index + 10,
      }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative p-8 md:p-12 rounded-[3.2rem] border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] overflow-hidden group transition-all duration-500 hover:scale-[1.01] hover:border-white/30 shadow-2xl"
      >
        {/* Stage Header */}
        <div className="flex items-center justify-between mb-12 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#0b0514] border border-white/10 flex items-center justify-center text-white ring-1 ring-white/5 relative">
            <Icon className="w-7 h-7" />
          </div>
          
          {/* Stage Badge with Gradient Glow matching "How We Work?" */}
          <div className="relative inline-flex items-center px-6 py-2 rounded-2xl border border-white/10 bg-[#0b0514] text-white/90 text-[13px] font-medium tracking-wide overflow-hidden">
            {/* Premium Top Glow Effect (Brand Blue) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,255)] to-transparent z-10" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-[rgb(0,102,255)]/20 blur-md rounded-full pointer-events-none" />
            
            <span className="relative z-10">{stage.stage}</span>
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-[1.75rem] md:text-[2.2rem] font-display font-medium text-white mb-2 tracking-tight">
            {stage.title}
          </h3>
          
          {/* Subtle title divider same as mockup detail */}
          <div className="w-48 h-[1px] bg-gradient-to-r from-white/20 to-transparent mb-8" />
          
          <p className="text-white/50 text-[16px] leading-relaxed mb-10 max-w-md font-normal">
            {stage.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12 relative z-10">
          {stage.tags.map((tag: string) => (
            <span 
              key={tag}
              className="px-5 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/40 text-[13px] font-light hover:bg-white/[0.05] hover:text-white/70 transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button - Identical to "View About Us" button style */}
        {stage.hasCTA && (
          <div className="relative z-10">
            <Link
              href="#contact"
              className="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center relative overflow-hidden w-fit group/btn active:scale-95"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        )}

        {/* Blur Logo Background Watermark - High End Branding */}
        <div className="absolute inset-x-0 -bottom-32 -right-32 w-[130%] h-[130%] pointer-events-none opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12">
          <img 
            src="/blur logo.svg" 
            alt="Logo watermark" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Subtle Dynamic color accent */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-5 pointer-events-none transition-opacity duration-700 group-hover:opacity-15`} />
      </motion.div>
    </div>
  );
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Keep opacity transition for smooth entry/exit
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);

  return (
    <>
      <section id="process" ref={containerRef} className="pb-24 pt-0 relative bg-[#0b0514]">
        {/* Cinematic Section Divider (Wide Podium/Stage with Focused Glow) */}
        <div className="relative w-full h-24 md:h-28 mb-16 pointer-events-none flex justify-center overflow-visible">
          {/* Focused Blue Radial Glow Peak - Above the Stage */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[200%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.3)_0%,transparent_70%)] blur-[50px] -translate-y-[80%]" />

          {/* The Flat Curved Stage Shape - Maximum Rounded Arc & Clipped to eliminate box artifacts */}
          <div 
            className="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-t-[250px] md:rounded-t-[400px] border-t border-white/[0.08] flex items-center justify-center"
            style={{
              clipPath: "inset(0 0 -100px 0 round 250px 250px 0 0)",
              WebkitClipPath: "inset(0 0 -100px 0 round 250px 250px 0 0)"
            }}
          >
            {/* Removed the intense inner glow line */}
            
            {/* Subtle top-surface light bloom */}
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="absolute inset-0 bg-[#0b0514] -z-20" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid xl:grid-cols-2 gap-16 xl:gap-24 items-start max-w-7xl mx-auto relative">
            
            {/* Left Column - Scrolling/Stacking Cards */}
            <div className="flex flex-col">
              <div className="mb-20">
                {/* Badge - Same style as AboutSection */}
                <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group">
                  {/* Premium Top Glow Effect (Brand Blue) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />

                  <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                  <span className="tracking-tight relative z-10 text-white">How We Work?</span>
                </div>

                <h2 className="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
                  <span className="text-white block mb-1">We Simplify The Journey</span>
                  <span className="text-white/40 block">From Design To Launch.</span>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 text-[15px] max-w-lg font-light leading-relaxed"
                >
                  We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.
                </motion.p>
              </div>

              {/* Cards Container */}
              <div className="relative pb-[60vh] flex flex-col items-center">
                {stages.map((stage, index) => (
                  <ProcessCard key={stage.id} stage={stage} index={index} total={stages.length} />
                ))}
              </div>
            </div>

            {/* Right Column - Sticky Visual */}
            <div className="hidden xl:block sticky top-40 self-start">
              <motion.div 
                style={{ opacity: imageOpacity }}
                className="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02]"
              >
                {/* Enhanced Cinema Horizon Glow with Boosted Brightness */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.6)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
                {/* Removed the straight bottom glowing line */}

                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square group bg-black">
                  <img 
                    src="/shamin-haky-RIk-i9rXPao-unsplash.jpg" 
                    alt="Process visualization" 
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* Removed Bottom Divider Line */}
    </>
  );
}
