<script setup>
const scrollToForm = () => {
  const form = document.getElementById("contact-inner");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0b0514]">
    <!-- Brand SVG Reflections — mirroring framing (consistent with site design) -->
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

    <!-- Cinematic Ambient Glows -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)] blur-[100px] pointer-events-none -translate-y-1/2" />
    <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.1)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

    <div class="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
      <div class="text-center flex flex-col items-center">
        
        <!-- Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="relative inline-flex items-center gap-3 px-5 py-2 rounded-xl border border-white/[0.08] bg-[#0c0c1e] text-[14px] font-light text-white/70 mb-10 overflow-hidden"
        >
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,102,254)] to-transparent z-10 opacity-50" />
          <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Let's Work Together</span>
        </div>

        <!-- Headline -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
          class="text-[2.8rem] md:text-[4.5rem] font-display font-medium leading-[1.1] tracking-tight mb-8 max-w-4xl"
        >
          <span class="text-white block">Any Questions Rising?</span>
          <span class="text-white/40 block">We are All Here.</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          class="text-white/50 text-[16px] md:text-[18px] max-w-xl mx-auto font-light leading-relaxed mb-12"
        >
          Whether you have a question, need assistance, <br class="hidden md:block" /> or want to start a new project, our team is here to help.
        </p>

        <button
          @click="scrollToForm"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
          class="px-10 py-5 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] relative overflow-hidden active:scale-95 group"
        >
          <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
          <span class="relative z-10">Fill The Form Out</span>
        </button>
      </div>
    </div>
  </section>
</template>
