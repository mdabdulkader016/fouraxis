<script setup>
import { ref, onMounted } from 'vue'
import { Rocket, LayoutGrid, ShieldCheck, ArrowRight } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
]

const containerRef = ref(null)
const cardRefs = ref([])
const rightVisualRef = ref(null)

onMounted(() => {
  // Setup card scrolling effects
  cardRefs.value.forEach((cardEl) => {
    gsap.to(cardEl, {
      scale: 0.92,
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
  <section id="process" ref="containerRef" class="pb-24 pt-0 relative bg-[#0b0514]">
    <div class="relative w-full h-24 md:h-28 mb-16 pointer-events-none flex justify-center overflow-visible">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[200%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.3)_0%,transparent_70%)] blur-[50px] -translate-y-[80%]" />
      <div 
        class="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-t-[250px] md:rounded-t-[400px] border-t border-white/[0.08] flex items-center justify-center"
        style="clip-path: inset(0 0 -100px 0 round 250px 250px 0 0); -webkit-clip-path: inset(0 0 -100px 0 round 250px 250px 0 0);"
      >
        <div class="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      </div>
    </div>
    
    <div class="absolute inset-0 bg-[#0b0514] -z-20" />
    
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid xl:grid-cols-2 gap-16 xl:gap-24 items-start max-w-7xl mx-auto relative">
        <div class="flex flex-col">
          <div class="mb-20">
            <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
              <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
              <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
              <span class="tracking-tight relative z-10 text-white">How We Work?</span>
            </div>

            <h2 class="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
              <span class="text-white block mb-1">We Simplify The Journey</span>
              <span class="text-white/40 block">From Design To Launch.</span>
            </h2>
            <p
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-white/60 text-[15px] max-w-lg font-light leading-relaxed"
            >
              We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.
            </p>
          </div>

          <!-- Cards Container -->
          <div class="relative pb-[60vh] flex flex-col items-center">
            <div 
              v-for="(stage, index) in stages" 
              :key="stage.id"
              class="sticky top-40 w-full mb-12 last:mb-0" 
              :style="{ zIndex: index + 10 }"
            >
              <div
                ref="cardRefs"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
                class="relative p-8 md:p-12 rounded-[3.2rem] border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] overflow-hidden group transition-all duration-500 hover:scale-[1.01] hover:border-white/30 shadow-2xl"
              >
                <!-- Stage Header -->
                <div class="flex items-center justify-between mb-12 relative z-10">
                  <div class="w-16 h-16 rounded-2xl bg-[#0b0514] border border-white/10 flex items-center justify-center text-white ring-1 ring-white/5 relative">
                    <component :is="stage.icon" class="w-7 h-7" />
                  </div>
                  
                  <!-- Stage Badge -->
                  <div class="relative inline-flex items-center px-6 py-2 rounded-2xl border border-white/10 bg-[#0b0514] text-white/90 text-[13px] font-medium tracking-wide overflow-hidden">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,255)] to-transparent z-10" />
                    <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-[rgb(0,102,255)]/20 blur-md rounded-full pointer-events-none" />
                    <span class="relative z-10">{{ stage.stage }}</span>
                  </div>
                </div>

                <div class="relative z-10">
                  <h3 class="text-[1.75rem] md:text-[2.2rem] font-display font-medium text-white mb-2 tracking-tight">
                    {{ stage.title }}
                  </h3>
                  
                  <div class="w-48 h-[1px] bg-gradient-to-r from-white/20 to-transparent mb-8" />
                  
                  <p class="text-white/50 text-[16px] leading-relaxed mb-10 max-w-md font-normal">
                    {{ stage.description }}
                  </p>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-3 mb-12 relative z-10">
                  <span 
                    v-for="tag in stage.tags" 
                    :key="tag"
                    class="px-5 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/40 text-[13px] font-light hover:bg-white/[0.05] hover:text-white/70 transition-all cursor-default"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Action Button -->
                <div v-if="stage.hasCTA" class="relative z-10">
                  <a
                    href="#contact"
                    class="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center relative overflow-hidden w-fit group/btn active:scale-95"
                  >
                    <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                    <span class="relative z-10 flex items-center gap-2">
                      Book an Appointment
                      <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>

                <!-- Blur Logo Background Watermark -->
                <div class="absolute inset-x-0 -bottom-32 -right-32 w-[130%] h-[130%] pointer-events-none opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12">
                  <img src="/blur-logo.svg" alt="Logo watermark" class="w-full h-full object-contain" />
                </div>

                <!-- Subtle Dynamic color accent -->
                <div :class="`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-5 pointer-events-none transition-opacity duration-700 group-hover:opacity-15`" />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Sticky Visual -->
        <div class="hidden xl:block sticky top-40 self-start">
          <div 
            ref="rightVisualRef"
            class="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02]"
          >
            <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.6)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

            <div class="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square group bg-black">
              <img 
                src="/abc.jpg" 
                alt="Process visualization" 
                class="w-full h-full object-cover transition-all duration-1000"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0b0514] via-transparent to-transparent opacity-80" />
              <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
