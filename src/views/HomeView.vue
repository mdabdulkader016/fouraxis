<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ResultsSection from '@/components/ResultsSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import PortfolioPreview from '@/components/PortfolioPreview.vue'
import ApproachSection from '@/components/ApproachSection.vue'
import TrustSection from '@/components/TrustSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import CtaSection from '@/components/CtaSection.vue'
</script>

<template>
  <main class="min-h-screen relative selection:bg-primary/30 bg-[#0b0514] overflow-x-clip w-full max-w-full">
    <!-- Bottom Viewport Fade-to-Darkness Overlay -->
    <div 
      class="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-50 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/80 to-transparent" 
    />

    <HeroSection />
    <AboutSection />
    <ProcessSection />
    <ResultsSection />
    <BlogSection />
    <PortfolioPreview />
    <ApproachSection />
    <TrustSection />
    <TestimonialsSection />
    <FaqSection />
    <CtaSection />
  </main>
</template>
