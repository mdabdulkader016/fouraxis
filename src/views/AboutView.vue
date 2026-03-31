<script setup>
import AboutHero from '@/components/AboutHero.vue'
import AboutValueSections from '@/components/AboutValueSections.vue'
import AwardsSection from '@/components/AwardsSection.vue'
import ToolsSection from '@/components/ToolsSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import CtaSection from '@/components/CtaSection.vue'
</script>

<template>
  <main class="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-x-clip w-full max-w-full">
    <!-- Bottom Viewport Fade-to-Darkness Overlay -->
    <div 
      class="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-50 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/80 to-transparent" 
    />

    <AboutHero />
    <AboutValueSections />
    <AwardsSection />
    <ToolsSection />
    <FaqSection />
    <CtaSection />
  </main>
</template>
