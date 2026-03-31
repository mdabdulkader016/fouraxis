<script setup>
import { CheckCircle2, ArrowRight } from "lucide-vue-next";

defineProps({
  title: String,
  subtitle: String,
  badge: String,
  description: String,
  features: Array,
  image: String,
  isReversed: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-8 max-w-7xl">
      <div :class="`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`">
        
        <!-- Content Area -->
        <div class="flex-1 w-full text-left flex flex-col items-start">
          <div
            v-motion
            :initial="{ opacity: 0, x: isReversed ? 50 : -50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            class="flex flex-col items-start"
          >
            <div v-if="badge" class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group">
              <!-- Premium Top Glow Effect (Brand Blue) -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
              <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />

              <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
              <span class="tracking-tight relative z-10 text-white">{{ badge }}</span>
            </div>

            <h2 class="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
              <span class="text-white block mb-1">{{ title }}</span>
              <span v-if="subtitle" style="color: #e5e7eb" class="block">{{ subtitle }}</span>
            </h2>
            
            <p class="text-white/60 text-[15px] leading-relaxed mb-10 max-w-lg font-normal">
              {{ description }}
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
              <div v-for="(feature, idx) in features" :key="idx" class="flex items-center gap-3 group">
                <div class="w-5 h-5 rounded-full bg-[#5E00FF] flex items-center justify-center shrink-0">
                  <CheckCircle2 class="w-3.5 h-3.5 text-white" />
                </div>
                <span class="text-white/80 text-[15px] font-light">{{ feature }}</span>
              </div>
            </div>
            
            <a
              href="#contact"
              class="px-8 py-4 bg-[#5E00FF] text-white text-[16px] font-light rounded-2xl hover:bg-[#4b00cc] hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center relative overflow-hidden group/btn"
            >
              <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
              <span class="relative z-10 flex items-center gap-2">
                Get Started 
                <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
        
        <!-- Image / Slider Area -->
        <div class="flex-1 w-full">
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95, x: isReversed ? -50 : 50 }"
            :visibleOnce="{ opacity: 1, scale: 1, x: 0, transition: { duration: 800 } }"
            class="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02]"
          >
            <div class="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square group bg-black">
              <img
                :src="image"
                :alt="title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <!-- Subtle inner shadow to blend edges -->
              <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
