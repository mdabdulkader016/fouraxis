"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const techLogos = [
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "NextJs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
];

export function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[75vh] pt-32 pb-12 z-10 w-full">
      
      {/* Exact Match Background Glows */}
      {/* Exact Match SVG Background */}
      <div className="absolute inset-0 pointer-events-none -z-30 overflow-hidden flex justify-center items-start">
        <img 
          src="/BG.svg" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-top opacity-90 mix-blend-screen"
        />
      </div>
      
      {/* Bottom fade for seamless blending into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0514] to-transparent pointer-events-none -z-20" />

      {/* Floating 3D Elements removed */}

      {/* Top Pill with Lines */}
      <div className="flex items-center gap-4 mb-6 w-full max-w-3xl mx-auto px-4 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#581c87] to-[#d8b4fe] flex-1 opacity-50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-[#a855f7]/40 bg-[#160f24]/80 backdrop-blur-md"
        >
          <Star className="w-4 h-4 text-white" fill="currentColor" />
          <span className="text-[16px] font-light tracking-wide text-white">Top Rated Software Consulting Firm</span>
        </motion.div>
        <div className="h-px bg-gradient-to-l from-transparent via-[#581c87] to-[#d8b4fe] flex-1 opacity-50" />
      </div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[2.5rem] md:text-[3.6rem] lg:text-[4.5rem] font-display font-medium leading-[1.05] tracking-tight text-white relative z-10 mx-auto px-4 shadow-black drop-shadow-md flex flex-col items-center w-full"
      >
        <span className="text-center block">Make powerful digital</span>
        <span className="text-center block" style={{ marginTop: '-0.1em' }}>
          solution <span className="italic text-[rgb(204,255,56)]">with us.</span>
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[15px] md:text-[1.1rem] text-white mt-6 mb-10 max-w-[600px] mx-auto px-4 font-normal leading-relaxed tracking-wide z-10 text-center"
      >
        <p>We build secure, high-end, tailored solution for your business.</p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-5 z-10"
      >
        <Link
          href="#chat"
          className="px-8 py-4 bg-[#171124] border border-white hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:-translate-y-1 text-white text-[16px] font-light rounded-full transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          Chat Now
        </Link>

        <Link
          href="#quote"
          className="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-full hover:bg-[#4b00cc] hover:scale-105 hover:-translate-y-1 transition-all border border-white flex items-center justify-center gap-2 w-full sm:w-auto relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />
          <span className="relative z-10 shadow-black drop-shadow-md">Get A Quote</span>
          <ArrowUpRight className="w-5 h-5 text-white relative z-10 shadow-black drop-shadow-md" />
        </Link>
      </motion.div>

      {/* Tech Stack Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-[500px] mx-auto mt-20 relative z-10 flex flex-col items-center"
      >
        {/* Faded Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
        
        {/* Scrolling Logos */}
        <div 
          className="w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
          }}
        >
          <motion.div
             animate={{ x: ["0%", "-50%"] }}
             transition={{ 
               duration: 25,
               repeat: Infinity,
               ease: "linear"
             }}
             className="flex items-center w-max"
          >
             {[...techLogos, ...techLogos].map((tool, index) => (
                <div key={`${tool.name}-${index}`} className="flex items-center justify-center w-[100px] opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                   <img src={tool.logo} alt={tool.name} title={tool.name} className="h-8 md:h-11 w-auto object-contain brightness-150" />
                </div>
             ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
