"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "vercel",
    logo: "Vercel.",
    title: "Edge Deployment Platform",
    description: "Scaled frontend infrastructure globally, reducing load times by 70% with edge computing.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80",
    metrics: ["70% Faster Load", "10x Global Reach"],
    badge: "NEW",
  },
  {
    id: "shopify",
    logo: "Shopify.",
    title: "Commerce at Scale",
    description: "Rebuilt the checkout pipeline, increasing conversion rate and reducing abandonment.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    metrics: ["42% Conversion Lift", "30% Less Abandonment"],
    badge: "FRESH",
  },
  {
    id: "stripe",
    logo: "Stripe.",
    title: "Payments Infrastructure",
    description: "Integrated smart payment flows with real-time fraud detection at enterprise scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metrics: ["99.99% Uptime", "50% Fraud Reduction"],
  },
  {
    id: "notion",
    logo: "Notion.",
    title: "Productivity OS",
    description: "Designed a custom workspace system that boosted team efficiency and knowledge retention.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    metrics: ["35% Efficiency Gain", "2x Collaboration"],
  },
  {
    id: "linear",
    logo: "Linear.",
    title: "Engineering Velocity",
    description: "Streamlined sprint cycles and bug tracking, cutting release time in half.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    metrics: ["40% Faster Releases", "60% Fewer Bugs"],
    badge: "HOT",
  },
];

function ResultCard({ project }: { project: any }) {
  return (
    <div className="w-[480px] shrink-0 group relative h-[460px] rounded-[1.8rem] overflow-hidden border border-white/[0.1] bg-[#0a0a14] flex flex-col">
      {/* Image — top portion */}
      <div className="relative h-[55%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        {/* Subtle bottom fade from image into card */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a14] to-transparent" />
      </div>

      {/* Content — bottom portion */}
      <div className="flex flex-col flex-1 p-6 pt-4 justify-between">
        {/* Logo + Badge row */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {project.logoIcon && (
                <div className="w-5 h-5 bg-white rounded-[4px] flex items-center justify-center text-[#0b0514] font-bold text-[10px]">
                  ✔
                </div>
              )}
              <span className="text-[1.5rem] font-bold text-white tracking-tight leading-none">
                {project.logo}
              </span>
            </div>
            {project.badge && (
              <span className="px-3 py-1 rounded-md bg-blue-600 text-[10px] font-bold text-white tracking-wider uppercase">
                {project.badge}
              </span>
            )}
          </div>

          <p className="text-white/80 text-[14px] font-medium mb-1">{project.title}</p>
          <p className="text-white/40 text-[13px] leading-relaxed line-clamp-2">{project.description}</p>
        </div>

        {/* Metric Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.metrics.map((metric: string) => (
            <span
              key={metric}
              className="px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 text-[12px] font-normal"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/15 transition-colors pointer-events-none rounded-[1.8rem]" />
    </div>
  );
}

export function ResultsSection() {
  return (
    <section id="results" className="py-24 relative overflow-hidden bg-[#0b0514]">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 md:px-8 text-center mb-16 overflow-hidden"
      >
        {/* Left Shape — bigger, clipped by overflow-hidden */}
        <img
          src="/Rectangle 19.svg"
          alt=""
          className="absolute left-0 top-[58%] h-[80%] w-auto max-w-[30%] pointer-events-none hidden lg:block select-none"
        />

        {/* Right Shape — mirrored, same constraints */}
        <img
          src="/Rectangle 19.svg"
          alt=""
          className="absolute right-0 top-[58%] h-[80%] w-auto max-w-[30%] pointer-events-none hidden lg:block select-none"
          style={{ transform: "scaleX(-1)" }}
        />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden shadow-xl z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
          <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
          <span className="tracking-tight relative z-10 text-white">Results</span>
        </div>

        <h2 className="relative z-10 text-4xl md:text-[3rem] font-display font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
          <span className="text-white block">Delivering Tangible Results</span>
          <span className="text-white/40 block">That Propel Your Success</span>
        </h2>

        <p className="relative z-10 text-white/60 text-[15px] max-w-xl mx-auto font-light leading-relaxed mb-10">
          At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
        </p>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="relative z-10 px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] transition-all shadow-[0_0_20px_rgba(94,0,255,0.4)] inline-flex items-center gap-2 overflow-hidden active:scale-95"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
          <span className="relative z-10 flex items-center gap-2">
            Book a 15-min call
            <PhoneCall className="w-4 h-4" />
          </span>
        </Link>
      </motion.div>

      {/* ── Infinite Marquee — constrained to container width ── */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Clip to container, then apply mask inside */}
        <div
          className="overflow-hidden rounded-3xl"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          {/* Scrolling track */}
          <div className="flex gap-6 w-max py-6 animate-results-marquee">
            {[...projects, ...projects].map((project, idx) => (
              <ResultCard key={`${project.id}-${idx}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe definition */}
      <style>{`
        @keyframes results-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-results-marquee {
          animation: results-marquee 40s linear infinite;
        }
        .animate-results-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
