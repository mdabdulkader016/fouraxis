<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const tools = [
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
</script>

<template>
  <section class="py-24 relative bg-[#0b0514]">
        
      <!-- Cinematic Section Divider (Curve down) -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 pointer-events-none flex justify-center overflow-visible z-10 translate-y-[-50%]">
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[200%] bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.2)_0%,transparent_70%)] blur-[50px] translate-y-[80%]" />
          <div 
             class="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-b-[250px] md:rounded-b-[400px]"
             style="-webkit-clip-path: inset(-100px 0 0 0 round 0 0 250px 250px); clip-path: inset(-100px 0 0 0 round 0 0 250px 250px);"
          />
      </div>

      <div class="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        
        <div class="text-center mb-20 flex flex-col items-center">
          <div class="relative inline-flex items-center gap-3 px-5 py-2 rounded-xl border border-white/[0.08] bg-[#0c0c1e] text-[14px] font-light text-white/70 mb-8 overflow-hidden">
             <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10 opacity-50" />
             <span>TOOLS</span>
          </div>

          <h2 class="text-[2.5rem] md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
            <span class="text-white block">Tools and Technologies</span>
            <span class="text-white/40 block">Powering Our Agency</span>
          </h2>

          <p class="text-white/50 text-[16px] max-w-xl mx-auto font-light leading-relaxed mb-12">
             We use a world-class technology stack to build high-performance, <br class="hidden md:block" /> accessible, and scalable digital products.
          </p>

          <a
            href="#contact"
            class="px-8 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] relative overflow-hidden active:scale-95 group inline-flex items-center justify-center"
          >
            <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
            <span class="relative z-10">Build a Product</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
             v-for="(tool, index) in tools" 
             :key="tool.id"
             v-motion
             :initial="{ opacity: 0, y: 30 }"
             :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
             class="group relative rounded-[2rem] border border-white/5 bg-[#0a0a14] p-8 hover:bg-white/[0.03] hover:border-white/10 transition-all cursor-pointer"
          >
            <div class="flex items-center justify-between mb-8">
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-3">
                   <img :src="tool.icon" :alt="tool.name" class="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div v-if="tool.isNew" class="px-2.5 py-1 rounded-md bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">
                    NEW
                </div>
            </div>
            <div class="flex flex-col">
                <h3 class="text-lg font-display font-medium text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                   {{ tool.name }}
                </h3>
                <p class="text-white/40 text-[14px] font-light leading-relaxed">
                   {{ tool.description }}
                </p>
            </div>
            <div class="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight class="w-4 h-4 text-white/30" />
            </div>
          </div>
        </div>

      </div>
    </section>
</template>
