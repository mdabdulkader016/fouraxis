<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'
import { CONTACT_DETAILS } from '@/lib/constants'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Contact us", href: "/contact" },
]

const handleLinkClick = () => {
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const checkActive = (href) => {
  return route.path === href || (href !== '/' && route.path.startsWith(href))
}
</script>

<template>
  <header class="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
    <div class="bg-[#0a0514]/70 backdrop-blur-2xl border border-white/10 rounded-full pl-4 md:pl-6 pr-2 md:pr-3 py-2 md:py-2.5 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative">

      <!-- Logo -->
      <router-link to="/" class="flex items-center z-10 shrink-0 ml-1 md:ml-2" @click="handleLinkClick">
        <img src="/Logo2.png" alt="Logo" width="110" height="32" class="h-7 md:h-8 w-auto object-contain" />
      </router-link>

      <!-- Desktop Nav Links — xl+ only, centered absolutely -->
      <nav class="hidden xl:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.href"
          @click="handleLinkClick"
          :class="[
            'relative text-[16px] transition-colors',
            checkActive(link.href) ? 'text-white font-light' : 'text-white/60 hover:text-white'
          ]"
        >
          {{ link.name }}
          <div v-if="checkActive(link.href)" class="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-white/50 rounded-full" />
        </router-link>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-2 z-10 ml-auto">

        <!-- WhatsApp Icon — xl+ only -->
        <a
          :href="CONTACT_DETAILS.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20bd5c] hover:scale-105 hover:-translate-y-0.5 transition-all hidden xl:flex shrink-0 shadow-lg shadow-[#25D366]/20"
        >
          <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
        </a>

        <!-- Get Started CTA — xl+ only -->
        <a
          href="#contact"
          class="px-5 py-2.5 rounded-full border border-white bg-white/5 hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 transition-all items-center gap-2 text-white text-[15px] font-light shrink-0 hidden xl:flex"
        >
          <span>Get Started</span>
          <span class="text-white/30">•</span>
          <span class="text-white/50">its free</span>
          <ArrowUpRight class="w-4 h-4 text-white/50" />
        </a>

        <!-- Hamburger Toggle — always visible below xl -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
          class="flex xl:hidden p-2 text-white ml-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <component :is="isMobileMenuOpen ? X : Menu" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile / Tablet Dropdown -->
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition ease-in duration-150 transform"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="xl:hidden absolute top-[calc(100%+10px)] left-0 right-0 bg-[#0d0920]/95 backdrop-blur-2xl border border-white/10 rounded-3xl px-3 py-3 shadow-2xl"
      >
        <!-- Nav Links -->
        <div class="flex flex-col gap-0.5 mb-3">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            @click="handleLinkClick"
            :class="[
              'py-3 px-4 rounded-2xl text-[15px] font-light transition-all',
              checkActive(link.href)
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Divider -->
        <div class="h-px bg-white/[0.06] mb-3" />

        <!-- CTA Button -->
        <a
          href="#contact"
          @click="isMobileMenuOpen = false"
          class="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#0066FF] hover:bg-blue-500 text-white rounded-2xl text-[15px] font-medium transition-all active:scale-95"
        >
          <span>Get Started</span>
          <ArrowUpRight class="w-4 h-4" />
        </a>
      </div>
    </transition>
  </header>
</template>
