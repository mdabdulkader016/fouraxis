<script setup>
import { PhoneCall } from 'lucide-vue-next'

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
]
</script>

<template>
  <section id="results" class="py-24 relative overflow-hidden bg-[#0b0514]">
    <!-- Header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="relative container mx-auto px-4 md:px-8 text-center mb-16 overflow-hidden"
    >
      <div class="absolute top-[10%] left-0 -translate-x-[40%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-30 lg:opacity-50">
        <img 
          src="/rectangle-19.svg" 
          alt="" 
          class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
          style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);"
        />
      </div>

      <div class="absolute top-[10%] right-0 translate-x-[40%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-30 lg:opacity-50 -scale-x-100">
        <img 
          src="/rectangle-19.svg" 
          alt="" 
          class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
          style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);"
        />
      </div>
      
      <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
        <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
        <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
        <span class="tracking-tight relative z-10 text-white">Results</span>
      </div>

      <h2 class="relative z-10 text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
        <span class="text-white block">Delivering Tangible Results</span>
        <span class="text-white/40 block">That Propel Your Success</span>
      </h2>

      <p class="relative z-10 text-white/60 text-[15px] max-w-xl mx-auto font-light leading-relaxed mb-10">
        At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
      </p>

      <router-link
        to="/contact"
        class="relative z-10 px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] hover:scale-105 hover:-translate-y-1 transition-all inline-flex items-center gap-2 overflow-hidden active:scale-95"
      >
        <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
        <span class="relative z-10 flex items-center gap-2">
          Book a 15-min call
          <PhoneCall class="w-4 h-4" />
        </span>
      </router-link>
    </div>

    <!-- Infinite Marquee -->
    <div class="container mx-auto px-4 md:px-8">
      <div
        class="overflow-hidden rounded-3xl"
        style="-webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%); mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);"
      >
        <div class="flex gap-6 w-max py-6 animate-results-marquee">
          <!-- ResultCard replication inside the loop -->
          <div
            v-for="(project, idx) in [...projects, ...projects]"
            :key="`${project.id}-${idx}`"
            class="w-[280px] md:w-[380px] lg:w-[480px] shrink-0 group relative h-[380px] md:h-[420px] lg:h-[460px] rounded-[1.8rem] overflow-hidden border border-white/[0.1] bg-[#0a0a14] flex flex-col transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1.5"
          >
            <!-- Image top portion -->
            <div class="relative h-[55%] overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a14] to-transparent" />
            </div>
            
            <!-- Content bottom portion -->
            <div class="flex flex-col flex-1 p-6 pt-4 justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <div v-if="project.logoIcon" class="w-5 h-5 bg-white rounded-[4px] flex items-center justify-center text-[#0b0514] font-bold text-[10px]">✔</div>
                    <span class="text-[1.5rem] font-bold text-white tracking-tight leading-none">{{ project.logo }}</span>
                  </div>
                  <span v-if="project.badge" class="px-3 py-1 rounded-md bg-blue-600 text-[10px] font-bold text-white tracking-wider uppercase">{{ project.badge }}</span>
                </div>
                <p class="text-white/80 text-[14px] font-medium mb-1">{{ project.title }}</p>
                <p class="text-white/40 text-[13px] leading-relaxed line-clamp-2">{{ project.description }}</p>
              </div>
              
              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="metric in project.metrics" :key="metric" class="px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 text-[12px] font-normal">
                  {{ metric }}
                </span>
              </div>
            </div>
            <div class="absolute inset-0 border border-transparent group-hover:border-white/25 transition-colors pointer-events-none rounded-[1.8rem]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes results-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-results-marquee {
  animation: results-marquee 40s linear infinite;
}
.animate-results-marquee:hover {
  animation-play-state: paused;
}
</style>
