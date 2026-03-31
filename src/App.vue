<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

import CustomCursor from './components/CustomCursor.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Initialize Lenis smooth scroll exactly like Next.js app
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Expose lenis instance if needed
  window.lenis = lenis;
  
  onUnmounted(() => {
    lenis.destroy();
  });
})
</script>

<template>
  <CustomCursor />
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
/* Global styles are handled in style.css */
</style>
