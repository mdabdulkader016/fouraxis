"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  isNew?: boolean;
}

const tools: Tool[] = [
  {
    id: "mern",
    name: "MERN Stack",
    description: "End-to-end JavaScript solution using MongoDB, Express, React, and Node.js.",
    icon: "https://cdn.simpleicons.org/mongodb/47A248",
    isNew: true,
  },
  {
    id: "laravel",
    name: "Laravel",
    description: "The PHP framework for Web Artisans, focused on speed and security.",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
  },
  {
    id: "django",
    name: "Django",
    description: "The high-level Python web framework that encourages rapid development.",
    icon: "https://cdn.simpleicons.org/django/FFFFFF",
  },
  {
    id: "wordpress",
    name: "Wordpress",
    description: "World's most popular CMS, powers everything from blogs to major stores.",
    icon: "https://cdn.simpleicons.org/wordpress/21759B",
  },
  {
    id: "figma",
    name: "Figma",
    description: "Industry-standard collaborative interface design tool for modern teams.",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
    isNew: true,
  },
  {
    id: "ruby",
    name: "Ruby",
    description: "Dynamic, open source programming language with a focus on simplicity and productivity.",
    icon: "https://cdn.simpleicons.org/ruby/CC342D",
  },
];

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-[2rem] border border-white/5 bg-[#0a0a14] p-8 hover:bg-white/[0.03] hover:border-white/10 transition-all cursor-pointer"
    >
      <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-3">
             <Image src={tool.icon} alt={tool.name} width={24} height={24} unoptimized className="opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
          {tool.isNew && (
              <div className="px-2.5 py-1 rounded-md bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">
                  NEW
              </div>
          )}
      </div>
      <div className="flex flex-col">
          <h3 className="text-lg font-display font-medium text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
             {tool.name}
          </h3>
          <p className="text-white/40 text-[14px] font-light leading-relaxed">
             {tool.description}
          </p>
      </div>
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-white/30" />
      </div>
    </motion.div>
  );
}

export function ToolsSection() {
  return (
    <section className="py-24 relative bg-[#0b0514]">
        
      {/* Cinematic Section Divider (Curve down) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 pointer-events-none flex justify-center overflow-visible z-10 translate-y-[-50%]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[200%] bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.2)_0%,transparent_70%)] blur-[50px] translate-y-[80%]" />
          <div 
             className="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-b-[250px] md:rounded-b-[400px]"
             style={{
                 clipPath: "inset(-100px 0 0 0 round 0 0 250px 250px)",
                 WebkitClipPath: "inset(-100px 0 0 0 round 0 0 250px 250px)"
             }}
          />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-xl border border-white/[0.08] bg-[#0c0c1e] text-[14px] font-light text-white/70 mb-8 overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10 opacity-50" />
             <span>TOOLS</span>
          </div>

          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
            <span className="text-white block">Tools and Technologies</span>
            <span className="text-white/40 block">Powering Our Agency</span>
          </h2>

          <p className="text-white/50 text-[16px] max-w-xl mx-auto font-light leading-relaxed mb-12">
             We use a world-class technology stack to build high-performance, <br className="hidden md:block" /> accessible, and scalable digital products.
          </p>

          <Link
            href="#contact"
            className="px-8 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] relative overflow-hidden active:scale-95 group inline-flex items-center justify-center"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
            <span className="relative z-10">Build a Product</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
