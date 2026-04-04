<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="py-24 relative bg-[#0b0514] overflow-hidden">
    <div class="container mx-auto px-4 md:px-8 max-w-7xl">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        class="relative w-full rounded-[3rem] border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] overflow-hidden p-12 md:p-24 text-center shadow-2xl"
      >
        <!-- Custom Branded Animated Gradient -->
        <div
          class="absolute inset-x-0 -top-[30%] -bottom-[30%] w-[160%] h-[160%] -left-[30%] pointer-events-none opacity-100 mix-blend-screen animate-gradient-flow"
        >
          <img 
            src="/GroupGradiant.svg" 
            alt="Animated Gradient Background" 
            class="w-full h-full object-cover opacity-100 brightness-[1.5] contrast-[1.2]"
          />
        </div>

        <!-- Additional Soft Ambient Glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)] pointer-events-none" />

        <!-- Central Pulsing Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none" />

        <!-- Badge -->
        <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-10 overflow-hidden z-10 mx-auto">
          <!-- Premium Top Glow Effect -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,255)] to-transparent z-10" />
          <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,102,255)]/20 blur-md rounded-full pointer-events-none" />
          
          <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0 animate-pulse" />
          <span class="tracking-tight relative z-10 text-white font-medium">Join Us Now</span>
        </div>

        <h2 class="relative z-10 text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.15] tracking-tight mb-10 max-w-4xl mx-auto">
          <span class="text-white">Each Project we Undertake <br class="hidden md:block" /> </span>
          <span class="text-white/40">is a Unique Opportunity.</span>
        </h2>

        <p class="relative z-10 text-white/50 text-[16px] md:text-[1.1rem] max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
        </p>

        <router-link
          to="/contact"
          class="relative z-10 px-12 py-5 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 transition-all inline-flex items-center gap-2 overflow-hidden active:scale-95 group/btn"
        >
          <!-- Surface Highlight -->
          <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
          
          <span class="relative z-10 flex items-center gap-2">
            Book an Appointment
            <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </router-link>

        <!-- Grainy Texture Overlay -->
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradientFlow {
  0% { transform: scale(1) rotate(0deg) translate(-100px, -100px); }
  25% { transform: scale(1.4) rotate(45deg) translate(100px, 100px); }
  50% { transform: scale(1.2) rotate(-45deg) translate(-50px, 50px); }
  75% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(-100px, -100px); }
}
.animate-gradient-flow {
  animation: gradientFlow 15s linear infinite;
}
</style>
