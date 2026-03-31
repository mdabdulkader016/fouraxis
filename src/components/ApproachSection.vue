<script setup>
import { ref, onMounted } from 'vue'
import { Monitor, Smartphone, Palette, ImageIcon, ArrowRight, CheckCircle2 } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: "service-1",
    category: "Development",
    title: "Web Development",
    description: "By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality.",
    icon: Monitor,
    price: "$2500 / Project",
    duration: "2 - 3 Week",
    features: ["Design+Raw Coded Development", "Interactive Elements"],
    color: "from-blue-600/20 to-blue-400/5",
  },
  {
    id: "service-2",
    category: "Development",
    title: "App Development",
    description: "Whether you're building a simple app or a complex platform, our team provides scalable solutions tailored to your needs, ensuring your project is robust.",
    icon: Smartphone,
    price: "$7500 / Project",
    duration: "4 - 6 Week",
    features: ["Flutter Development", "Database and Back-End"],
    color: "from-indigo-600/20 to-indigo-400/5",
  },
  {
    id: "service-3",
    category: "Design",
    title: "UX/UI Design",
    description: "From custom logo designs to comprehensive brand guidelines, we cover all aspects of your visual presence across all digital touchpoints.",
    icon: Palette,
    price: "$4500 / Project",
    duration: "3 - 4 Week",
    features: ["User Journey + Wireframing", "High-Fidelity Prototyping"],
    color: "from-purple-600/20 to-purple-400/5",
  },
  {
    id: "service-4",
    category: "Design",
    title: "Graphics Design",
    description: "Compelling visual identities and brand assets that make your business stand out from the competition with clear, professional visuals.",
    icon: ImageIcon,
    price: "$800 / Project",
    duration: "1 Week",
    features: ["Brand Identity Assets", "Social Media Graphics"],
    color: "from-emerald-600/20 to-emerald-400/5",
  },
];

const containerRef = ref(null)
const cardRefs = ref([])
const rightVisualRef = ref(null)

onMounted(() => {
  cardRefs.value.forEach((cardEl) => {
    gsap.to(cardEl, {
      scale: 0.92,
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

  gsap.fromTo(rightVisualRef.value, 
    { opacity: 0.4 },
    {
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.value,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
      }
    }
  )
  gsap.to(rightVisualRef.value, {
    opacity: 0.4,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: containerRef.value,
      start: "bottom 90%",
      end: "bottom 10%",
      scrub: true,
    }
  })
})
</script>

<template>
  <section id="services-showcase" ref="containerRef" class="pb-24 pt-0 relative bg-[#0b0514]">
    <div class="relative w-full h-24 md:h-28 mb-16 pointer-events-none flex justify-center overflow-visible">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[200%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.3)_0%,transparent_70%)] blur-[50px] -translate-y-[80%]" />
      <div 
        class="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-t-[250px] md:rounded-t-[400px] border-t border-white/[0.08] flex items-center justify-center"
        style="-webkit-clip-path: inset(0 0 -100px 0 round 250px 250px 0 0); clip-path: inset(0 0 -100px 0 round 250px 250px 0 0);"
      >
        <div class="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      </div>
    </div>

    <div class="absolute inset-0 bg-[#0b0514] -z-20" />
    
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid xl:grid-cols-2 gap-16 xl:gap-24 items-start max-w-7xl mx-auto relative">
        
        <div class="hidden xl:block sticky top-40 self-start order-2 xl:order-1">
          <div 
            ref="rightVisualRef"
            class="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02] opacity-40"
          >
            <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.6)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
            
            <div class="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square group bg-black">
              <img 
                src="/abc.jpg" 
                alt="Our Services visualization" 
                class="w-full h-full object-cover transition-all duration-1000"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0b0514] via-transparent to-transparent opacity-80" />
              <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
            </div>
          </div>
        </div>

        <div class="flex flex-col order-1 xl:order-2">
          <div class="mb-20">
            <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group shadow-xl">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
              <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
              <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
              <span class="tracking-tight relative z-10 text-white">Our Services</span>
            </div>

            <h2 class="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
              <span class="text-white block mb-1">Get High-Quality</span>
              <span class="text-white/40 block">Clear Services Remotely.</span>
            </h2>
            <p
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-white/60 text-[15px] max-w-lg font-light leading-relaxed"
            >
              Discover our range of services designed to elevate your brand and propel your business to next level.
            </p>
          </div>

          <div class="relative pb-[60vh] flex flex-col items-center">
            <div 
              v-for="(service, index) in services" 
              :key="service.id"
              class="sticky top-40 w-full mb-12 last:mb-0" 
              :style="{ zIndex: index + 10 }"
            >
              <div
                ref="cardRefs"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
                class="relative p-8 md:p-12 rounded-[3.2rem] border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] overflow-hidden group shadow-2xl"
              >
                <div class="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000 group-hover:opacity-100" />
                <div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(0,120,255,0.12)_0%,transparent_50%)] pointer-events-none" />

                <div class="flex items-center justify-between mb-8 relative z-10">
                  <div class="w-16 h-16 rounded-2xl bg-[#0b0514] border border-white/10 flex items-center justify-center text-white ring-1 ring-white/5 shadow-2xl relative">
                    <component :is="service.icon" class="w-7 h-7" />
                    <div class="absolute inset-0 blur-2xl opacity-10 pointer-events-none bg-blue-500 transition-opacity group-hover:opacity-30" />
                  </div>
                  
                  <div class="relative inline-flex items-center px-6 py-2 rounded-2xl border border-white/10 bg-[#0b0514]/50 text-white/50 text-[13px] font-medium tracking-wide">
                    <span class="relative z-10">{{ service.category }}</span>
                  </div>
                </div>

                <div class="relative z-10">
                  <h3 class="text-[1.75rem] md:text-[2.2rem] font-display font-medium text-white mb-6 tracking-tight">
                    {{ service.title }}
                  </h3>
                  
                  <p class="text-white/50 text-[16px] leading-relaxed mb-8 max-w-md font-normal">
                    {{ service.description }}
                  </p>

                  <div class="flex items-center gap-4 mb-10">
                    <div class="px-5 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white text-[15px] font-medium flex items-center gap-2">
                      {{ service.price }}
                    </div>
                    <div class="px-5 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/60 text-[15px] font-normal">
                      {{ service.duration }}
                    </div>
                  </div>

                  <div class="space-y-4 mb-10">
                    <div v-for="feature in service.features" :key="feature" class="flex items-center gap-3 text-white/70 text-[15px] font-light">
                      <CheckCircle2 class="w-4.5 h-4.5 text-blue-500" />
                      {{ feature }}
                    </div>
                  </div>
                </div>

                <div class="relative z-10">
                  <a
                    href="#contact"
                    class="px-10 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(0,102,255,0.4)] flex items-center justify-center relative overflow-hidden w-fit group/btn active:scale-95"
                  >
                    <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                    <span class="relative z-10 flex items-center gap-2">
                      Book an Appointment
                      <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>

                <div class="absolute inset-x-0 -bottom-32 -right-32 w-[130%] h-[130%] pointer-events-none opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12">
                  <img src="/blur-logo.svg" alt="Logo watermark" class="w-full h-full object-contain" />
                </div>

                <div :class="`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 pointer-events-none transition-opacity duration-700 group-hover:opacity-15`" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
