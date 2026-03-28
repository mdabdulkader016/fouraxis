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
        className={`relative p-8 md:p-12 rounded-[2rem] border border-white/[0.05] bg-[#0d0d1b] overflow-hidden group shadow-[0_-20px_80px_rgba(0,0,0,0.6)]`}
      >
        {/* Stage Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white ring-1 ring-white/5 transition-all duration-500 group-hover:bg-white/[0.08]">
            <Icon className="w-6 h-6" />
          </div>
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/40 text-[11px] font-medium uppercase tracking-[0.2em]">
            {stage.stage}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-4 tracking-tight">
          {stage.title}
        </h3>
        <p className="text-white/60 text-[15px] leading-relaxed mb-10 max-w-md font-light">
          {stage.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {stage.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.01] text-white/30 text-xs font-light hover:text-white/60 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {stage.hasCTA && (
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] transition-all shadow-[0_10px_40px_rgba(94,0,255,0.3)] group/btn"
          >
            Book an Appointment
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
          </Link>
        )}

        {/* Deep background accent */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-40 pointer-events-none`} />
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

          {/* The Flat Curved Stage Shape - More Rounded & Clipped to eliminate box artifacts */}
          <div
            className="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-t-[120px] md:rounded-t-[180px] border-t border-white/[0.08] flex items-center justify-center"
            style={{
              clipPath: "inset(0 0 -100px 0 round 120px 120px 0 0)",
              WebkitClipPath: "inset(0 0 -100px 0 round 120px 120px 0 0)"
            }}
          >
            {/* Intense Inner Glow Line across the center top edge only */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,255)] to-transparent opacity-100" />

            {/* Subtle top-surface light bloom */}
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="absolute inset-0 bg-[#0b0514] -z-20" />

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-7xl mx-auto relative">

            {/* Left Column - Scrolling/Stacking Cards */}
            <div className="flex flex-col">
              <div className="mb-20">
                {/* Badge - Same style as AboutSection */}
                <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group shadow-xl">
                  {/* Premium Top Glow Effect (Brand Blue) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />

                  <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                  <span className="tracking-tight relative z-10 text-white">How We Work?</span>
                </div>

                <h2 className="text-4xl md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
                  <span className="text-white block mb-1">We Simplify The Journey</span>
                  <span className="text-white/40 block">From Scratch To Product.</span>
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
            <div className="hidden lg:block sticky top-40 self-start">
              <motion.div
                style={{ opacity: imageOpacity }}
                className="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02]"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square group bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80"
                    alt="Process visualization"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-grayscale duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    </>
  );
}
