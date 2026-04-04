<script setup>
import { ArrowRight } from 'lucide-vue-next'

const row1Images = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=800&q=80",
];

const row2Images = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
];
</script>

<template>
  <section class="py-24 relative overflow-hidden bg-[#0b0514]">
    <!-- Header Area -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="relative container mx-auto px-4 md:px-8 text-center mb-16 overflow-hidden"
    >
      <div class="absolute top-[10%] left-0 -translate-x-[40%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.25] lg:opacity-40">
        <img 
          src="/rectangle-19.svg" 
          alt="Decorative Frame" 
          class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
          style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);"
        />
      </div>

      <div class="absolute top-[10%] right-0 translate-x-[40%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.25] lg:opacity-40 -scale-x-100">
        <img 
          src="/rectangle-19.svg" 
          alt="Decorative Frame" 
          class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
          style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);"
        />
      </div>

      <!-- Badge -->
      <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
        <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
        <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
        <span class="tracking-tight relative z-10 text-white">Launch Your Site</span>
      </div>

      <h2 class="relative z-10 text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
        <span class="text-white block">The Trusted Rise Partner</span>
        <span class="text-white/40 block">For Startups And Agencies</span>
      </h2>

      <p class="relative z-10 text-white/60 text-[15px] max-w-xl mx-auto font-light leading-relaxed mb-10">
        Get your site live in no time! With professional setup and expert support in an easy way.
      </p>

      <router-link
        to="/contact"
        class="relative z-10 px-8 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 transition-all inline-flex items-center gap-2 overflow-hidden active:scale-95 group/btn"
      >
        <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
        <span class="relative z-10 flex items-center gap-2">
          View About Landing
          <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </span>
      </router-link>
    </div>

    <!-- Marquee Section -->
    <div class="container mx-auto px-4 md:px-8 space-y-8">
      <div class="overflow-hidden rounded-[2.5rem] marquee-mask border border-white/5">
        <!-- Row 1: Forward Marquee -->
        <div class="flex animate-marquee-forward gap-6 py-3 w-max px-6 bg-white/[0.01]">
          <div 
            v-for="(src, idx) in [...row1Images, ...row1Images, ...row1Images]" 
            :key="`row1-${idx}`"
            class="relative w-[260px] h-[180px] md:w-[420px] md:h-[280px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a14] shrink-0"
          >
            <img :src="src" alt="Technology" class="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
          </div>
        </div>
      </div>

      <div class="overflow-hidden rounded-[2.5rem] marquee-mask border border-white/5">
        <!-- Row 2: Backward Marquee -->
        <div class="flex animate-marquee-backward gap-6 py-3 w-max px-6 bg-white/[0.01]">
          <div 
            v-for="(src, idx) in [...row2Images, ...row2Images, ...row2Images]" 
            :key="`row2-${idx}`"
            class="relative w-[260px] h-[180px] md:w-[420px] md:h-[280px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a14] shrink-0"
          >
            <img :src="src" alt="Experience" class="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-mask {
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
}
@keyframes marquee-forward {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-1 / 3 * 100%)); }
}
@keyframes marquee-backward {
  from { transform: translateX(calc(-1 / 3 * 100%)); }
  to { transform: translateX(0); }
}
.animate-marquee-forward {
  animation: marquee-forward 50s linear infinite;
}
.animate-marquee-backward {
  animation: marquee-backward 50s linear infinite;
}
.animate-marquee-forward:hover, .animate-marquee-backward:hover {
  animation-play-state: paused;
}
</style>
