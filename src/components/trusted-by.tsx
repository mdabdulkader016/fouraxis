"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
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

export function TrustedBy() {
  return (
    <section className="pb-32 relative z-20 -mt-2">
      <div className="container mx-auto px-4 text-center mb-10 pt-4">
        <h2 className="text-[15px] font-normal text-white tracking-wide">
          Revolutionizing Client Solutions with the Best Tools
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto px-4">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#181325] border border-white/5 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-default"
            title={tool.name}
          >
            <Image 
              src={tool.logo} 
              alt={tool.name} 
              width={32}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8 object-contain opacity-90 brightness-110" 
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
