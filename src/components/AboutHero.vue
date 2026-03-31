<script setup>
import { Play } from 'lucide-vue-next'
</script>

<template>
<section class="pt-40 pb-20 relative bg-[#0b0514] overflow-hidden">
      <!-- Brand SVG Reflections — Precision-positioned to frame the header text -->
      <div class="absolute top-20 left-1/2 -translate-x-[640px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6]">
        <img 
          src="/rectangle-19.svg" 
          alt="" 
          class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
          style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);"
        />
      </div>

      <div class="absolute top-20 left-1/2 translate-x-[40px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6] -scale-x-100">
        <img 
          src="/rectangle-19.svg" 
          alt="" 
          class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
          style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);"
        />
      </div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="text-center flex flex-col items-center">
          <!-- Badge -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[15px] font-light text-white mb-8 overflow-hidden shadow-xl"
          >
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10" />
            <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
            <div class="w-8 h-4 bg-blue-600 rounded-md flex items-center justify-center text-[10px] font-bold mr-1">ABOUT</div>
            <span class="tracking-tight relative z-10 text-white/90">Learn About Us</span>
          </div>

          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
            class="text-[2.5rem] md:text-[4.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8 max-w-5xl"
          >
            <span class="text-white block">Learn More About Fouraxis</span>
            <span class="text-white/90 block">Let's Deep Dive!</span>
          </h1>

          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            class="text-white/50 text-[16px] md:text-[18px] max-w-2xl mx-auto font-light leading-relaxed mb-16"
          >
            We are a design-led agency focused on transforming your ideas <br class="hidden md:block" /> into premium digital products that people love.
          </p>
          
          <!-- Video / Visual Placeholder Matching Image -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 300 } }"
            class="relative w-full max-w-5xl aspect-[21/10] rounded-[3rem] overflow-hidden border border-white/10 group cursor-pointer shadow-3xl"
          >
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-[#0a0a14]" />
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)]" />
            
            <!-- Animated Blue Shape / Symbol from Image -->
            <div class="absolute inset-0 flex items-center justify-center">
                 <img 
                    src="/GroupGradiant.svg" 
                    alt="Abstract Visual" 
                    class="w-[400px] h-[400px] object-contain opacity-80 filter blur-xl animate-pulse"
                 />
                 <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <!-- Play Button Overlay -->
            <div class="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                <div class="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:bg-white group-hover:text-black transition-all">
                    <Play class="w-8 h-8 fill-current" />
                </div>
            </div>

            <!-- Premium Edges -->
            <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
          </div>
        </div>
      </div>

      <!-- Background Cinematic Glows -->
      <div class="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div class="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />
    </section>
</template>
