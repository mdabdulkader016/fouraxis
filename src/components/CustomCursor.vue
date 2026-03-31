<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const isHovered = ref(false)
const isVisible = ref(false)
const ringRef = ref(null)

onMounted(() => {
  const canUseCustomCursor = window.matchMedia("(pointer: fine)").matches
  if (!canUseCustomCursor) return

  // GSAP quickTo is perfect for high-performance following elements
  const xTo = gsap.quickTo(ringRef.value, "x", { duration: 0.6, ease: "power3" })
  const yTo = gsap.quickTo(ringRef.value, "y", { duration: 0.6, ease: "power3" })

  const moveMouse = (e) => {
    xTo(e.clientX)
    yTo(e.clientY)
    if (!isVisible.value) isVisible.value = true
  }

  const handleHoverStart = (e) => {
    const target = e.target
    if (
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a") ||
      target.getAttribute("role") === "button"
    ) {
      isHovered.value = true
    } else {
      isHovered.value = false
    }
  }

  const handleMouseLeave = () => isVisible.value = false
  const handleMouseEnter = () => isVisible.value = true

  window.addEventListener("mousemove", moveMouse)
  window.addEventListener("mouseover", handleHoverStart)
  document.addEventListener("mouseleave", handleMouseLeave)
  document.addEventListener("mouseenter", handleMouseEnter)

  onUnmounted(() => {
    window.removeEventListener("mousemove", moveMouse)
    window.removeEventListener("mouseover", handleHoverStart)
    document.removeEventListener("mouseleave", handleMouseLeave)
    document.removeEventListener("mouseenter", handleMouseEnter)
  })
})
</script>

<template>
  <div v-show="isVisible" class="fixed inset-0 pointer-events-none z-[9999]">
    <div
      ref="ringRef"
      class="fixed left-0 top-0 rounded-full border-2 border-white/40 z-0 bg-white/5 backdrop-blur-[2px] transition-all duration-300 pointer-events-none"
      :style="{
        transform: 'translate(-50%, -50%)',
        opacity: isHovered ? 1 : 0,
        width: isHovered ? '54px' : '27px',
        height: isHovered ? '54px' : '27px',
      }"
    />
  </div>
</template>
