<script setup>
import { ref, onMounted } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: "project-1",
    title: "Way Fields - Smart Ecosystem",
    description: "A comprehensive digital experience for the next generation of smart wearables, focusing on performance metrics and intuitive user interfaces.",
    image: "/portfolio-featured.png",
    color: "from-blue-600/20 to-blue-400/5",
  },
  {
    id: "project-2",
    title: "Horizon Analytics - Data Platform",
    description: "Enterprise-grade data visualization platform that transforms complex datasets into actionable business intelligence for global retailers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    color: "from-purple-600/20 to-purple-400/5",
  },
  {
    id: "project-3",
    title: "Nexus CRM - Business Intelligence",
    description: "Next-gen customer relationship management tool featuring AI-driven lead scoring and automated sales pipelines for high-growth tech firms.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    color: "from-emerald-600/20 to-emerald-400/5",
  },
  {
    id: "project-4",
    title: "Lumina - Creative Portfolio",
    description: "A high-performance aesthetic portfolio for a London-based digital design studio, emphasizing minimalist motion and cinematic presentation.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=80",
    color: "from-orange-600/20 to-orange-400/5",
  },
  {
    id: "project-5",
    title: "Aura - Wellness & Mindset",
    description: "A calming mobile-first web application designed to help users track mental health metrics and practice guided mindfulness exercises.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80",
    color: "from-pink-600/20 to-pink-400/5",
  },
  {
    id: "project-6",
    title: "Vertex - Fintech Dashboard",
    description: "Unified financial dashboard for multi-currency asset management, featuring real-time market updates and low-latency transaction processing.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80",
    color: "from-cyan-600/20 to-cyan-400/5",
  },
];

const cardRefs = ref([])

onMounted(() => {
  cardRefs.value.forEach((cardEl) => {
    gsap.to(cardEl, {
      scale: 0.94,
      opacity: 0.6,
      ease: "none",
      scrollTrigger: {
        trigger: cardEl,
        start: "start start",
        end: "end start",
        scrub: true,
      }
    })
  })
})
</script>

<template>
  <section id="portfolio" class="py-24 relative bg-[#0b0514]">
    <div class="absolute top-10 left-1/2 -translate-x-[640px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6]">
      <img src="/rectangle-19.svg" alt="" class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]" style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);" />
    </div>

    <div class="absolute top-10 left-1/2 translate-x-[40px] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.35] lg:opacity-[0.6] -scale-x-100">
      <img src="/rectangle-19.svg" alt="" class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]" style="-webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%); mask-image: radial-gradient(circle at center, black 40%, transparent 80%);" />
    </div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Header Area -->
      <div class="text-center mb-24 flex flex-col items-center">
        <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden shadow-xl z-10">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
          <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
          <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
          <span class="tracking-tight relative z-10 text-white">Portfolio</span>
        </div>

        <h2 class="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl">
          <span class="text-white block mb-2">Our Selected Projects</span>
          <span class="text-white/40 block">That Propel Your Website.</span>
        </h2>

        <p class="text-white/50 text-[15px] max-w-xl mx-auto font-light leading-relaxed mb-10">
          Explore our curated work, showcasing collaborations with visionary clients across diverse industries.
        </p>
        
        <router-link
          to="#portfolio-all"
          class="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] transition-all shadow-[0_0_20px_rgba(94,0,255,0.4)] relative overflow-hidden active:scale-95 group inline-flex items-center justify-center"
        >
          <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
          <span class="relative z-10">View All Work</span>
        </router-link>
      </div>

      <!-- Stacking Parallax Cards Container -->
      <div class="relative flex flex-col items-center pb-[10vh]">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="sticky top-32 w-full mb-20 last:mb-0" 
          :style="{ zIndex: index + 10 }"
        >
          <div
            ref="cardRefs"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
            class="relative max-w-6xl mx-auto rounded-[3.5rem] p-1.5 border border-white/[0.05] bg-white/[0.02] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          >
            <div class="relative w-full h-full rounded-[3.1rem] overflow-hidden bg-[#0a0a14]">
              <div class="absolute top-[1.5px] left-1/2 -translate-x-1/2 w-[80%] h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />

              <div class="relative aspect-[16/10] md:aspect-[21/11] overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
                
                <div class="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
                
                <div class="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 z-20">
                   <div
                     v-motion
                     :initial="{ opacity: 0, y: 20 }"
                     :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
                   >
                     <h3 class="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white mb-2 sm:mb-4 tracking-tight">
                       {{ project.title }}
                     </h3>
                     <p class="text-white/60 text-[14px] sm:text-[15px] md:text-[17px] max-w-2xl leading-relaxed font-light line-clamp-2">
                       {{ project.description }}
                     </p>
                   </div>
                </div>
                
                <div class="absolute top-8 right-8 z-20">
                  <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer group">
                      <ArrowUpRight class="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
              
              <div :class="`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 -z-10`" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Cinematic Glows -->
    <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
    <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
  </section>
</template>
