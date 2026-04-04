<script setup>
import { ArrowRight, Star } from "lucide-vue-next";

const sections = [
  {
        id: "classic-agency",
        badge: "AGENCY HISTORY",
        title: "An Agency With Classic Design Aesthetic",
        subtitle1: "THE HIGHEST QUALITY",
        text1: "We pride ourselves on delivering standard-setting design and development services that stand the test of time.",
        subtitle2: "THE BEST STRATEGY",
        text2: "Our approach blends data-driven insights with world-class creative to ensure your brand's long-term digital growth.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
        reverse: false
  },
  {
        id: "smarter-work",
        badge: "WORK ETHIC",
        title: "Work Smarter Not Harder",
        subtitle1: "SMART SYSTEMS",
        text2: "We leverage the latest AI-driven tools and methodologies to streamline our creative workflow and maximize output quality.",
        subtitle2: "EFFICIENT TEAMWORK",
        text1: "Our distributed team model ensures around-the-clock productivity and seamless collaboration across timezones.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
        reverse: true
  }
];
</script>

<template>
  <div>
      <section v-for="section in sections" :key="section.id" class="py-20 relative bg-[#0b0514] overflow-hidden">
        <div class="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div :class="`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${section.reverse ? 'lg:flex lg:flex-row-reverse' : ''}`">
            
            <!-- Image Column -->
            <div
              v-motion
              :initial="{ opacity: 0, x: section.reverse ? 30 : -30 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
              :class="`relative w-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] p-2 ${section.reverse ? 'lg:order-2 order-2' : 'lg:order-1 order-1'}`"
            >
              <div class="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-[#0c0c1e]">
                  <img
                      :src="section.image"
                      :alt="section.title"
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
              </div>
            </div>

            <!-- Content Column -->
            <div
              v-motion
              :initial="{ opacity: 0, x: section.reverse ? -30 : 30 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
              :class="`flex flex-col items-start w-full ${section.reverse ? 'lg:order-1 order-1' : 'lg:order-2 order-2'}`"
            >
              <div class="relative inline-flex items-center gap-3 px-5 py-2 rounded-xl border border-white/[0.08] bg-[#0c0c1e] text-[14px] font-light text-white/70 mb-8 overflow-hidden">
                 <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10 opacity-50" />
                 <span>{{ section.badge }}</span>
              </div>

              <h2 class="text-[2.2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight text-white mb-10 max-w-md">
                     {{ section.title }}
              </h2>

              <div class="space-y-8 mb-12">
                  <div class="flex flex-col gap-2">
                      <h4 class="text-white text-[17px] font-medium tracking-tight uppercase opacity-90">{{ section.subtitle1 }}</h4>
                      <p class="text-white/50 text-[15px] font-light leading-relaxed max-w-lg">{{ section.text1 }}</p>
                  </div>
                  <div class="flex flex-col gap-2">
                      <h4 class="text-white text-[17px] font-medium tracking-tight uppercase opacity-90">{{ section.subtitle2 }}</h4>
                      <p class="text-white/50 text-[15px] font-light leading-relaxed max-w-lg">{{ section.text2 }}</p>
                  </div>
              </div>

              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                 <router-link
                      to="/contact"
                      class="px-10 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center relative overflow-hidden group shadow-lg active:scale-95"
                 >
                      <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                      <span class="relative z-10 flex items-center gap-2">
                          Book an Appointment <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                 </router-link>

                 <div class="flex flex-col">
                    <div class="flex items-center gap-1 mb-1.5">
                       <template v-for="i in 5" :key="i">
                          <Star class="w-3.5 h-3.5 fill-white text-white" />
                       </template>
                    </div>
                    <span class="text-[14px] text-white/50 tracking-wide font-medium">
                       4.9/5 from 200+ clients
                    </span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  </div>
</template>
