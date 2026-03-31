<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MapPin, Rocket, ChevronUp, ArrowUpRight } from 'lucide-vue-next'

const mounted = ref(false)
const direction = ref('down')

onMounted(() => {
  mounted.value = true
  const handleScroll = () => {
    if (window.scrollY > 400) {
      direction.value = 'up'
    } else {
      direction.value = 'down'
    }
  }
  window.addEventListener("scroll", handleScroll)
  onUnmounted(() => window.removeEventListener("scroll", handleScroll))
})

const handleClick = () => {
  if (direction.value === 'up') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="bg-[#0b0514] pt-8 pb-0 relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-8 max-w-[1400px]">
      <!-- The Premium Footer Card -->
      <div class="relative w-full rounded-t-[3.5rem] md:rounded-t-[4.5rem] rounded-b-none border border-white/10 bg-[#000000] overflow-hidden shadow-2xl">

        <!-- Visual Layer 1: Subtle Grid Pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-[0.3]" />

        <!-- Visual Layer 2: Localized Depth Glow (Right Corner) -->
        <div class="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)] pointer-events-none" />

        <!-- Visual Layer 3: Top Edge Highlight -->
        <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

        <!-- ── MOBILE LAYOUT (hidden on md+) ── -->
        <div class="md:hidden flex flex-col items-center text-center px-6 pt-10 pb-8 gap-8 relative z-10">

          <!-- Logo -->
          <router-link to="/" class="flex items-center justify-center">
            <img src="/Logo2.png" alt="Logo" width="120" height="32" class="h-8 w-auto object-contain" />
          </router-link>

          <!-- Tagline -->
          <p class="text-white/40 text-[14px] font-light leading-relaxed max-w-[260px]">
            Building powerful digital solutions for ambitious brands.
          </p>

          <!-- Location pill -->
          <div class="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 text-[13px] font-light">
            <MapPin class="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>Gulshan 02, Dhaka-1212, Bangladesh</span>
          </div>

          <!-- Newsletter — full width -->
          <div class="w-full max-w-sm">
            <div class="relative flex items-center p-1.5 rounded-2xl bg-[#0b0514]/60 backdrop-blur-md border border-white/[0.08] shadow-2xl focus-within:border-white/20 transition-all">
              <input
                type="email"
                placeholder="Enter your email..."
                class="bg-transparent border-none outline-none text-white text-[14px] font-light pl-4 w-full placeholder:text-white/20"
              />
              <button class="px-5 py-2.5 rounded-xl bg-[#0066FF] text-white text-[13px] font-medium transition-all hover:bg-blue-600 active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          <!-- Divider -->
          <div class="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <!-- Nav Links — 2 column grid -->
          <div class="grid grid-cols-2 gap-x-8 gap-y-0 w-full max-w-xs text-left">
            <!-- Pages -->
            <div>
              <h4 class="text-white text-[13px] font-semibold uppercase tracking-widest mb-5 opacity-40">Pages</h4>
              <ul class="space-y-4 text-[15px] font-light text-white/50">
                <li><router-link to="/" class="hover:text-white transition-colors">Home</router-link></li>
                <li><router-link to="/about" class="hover:text-white transition-colors">About</router-link></li>
                <li><router-link to="/portfolio" class="hover:text-white transition-colors">Portfolio</router-link></li>
                <li><router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link></li>
                <li><router-link to="/services" class="hover:text-white transition-colors">Services</router-link></li>
              </ul>
            </div>
            <!-- Social -->
            <div>
              <h4 class="text-white text-[13px] font-semibold uppercase tracking-widest mb-5 opacity-40">Social</h4>
              <ul class="space-y-4 text-[15px] font-light text-white/50">
                <li><a href="#" class="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Youtube</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Linkedin</a></li>
              </ul>
            </div>
          </div>

          <!-- Divider -->
          <div class="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <!-- CTA Card -->
          <div class="w-full rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] p-6 flex flex-col items-center gap-5">
            <div class="w-10 h-10 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center">
              <Rocket class="w-5 h-5 text-blue-400" />
            </div>
            <div class="space-y-2 text-center">
              <h4 class="text-white text-[20px] font-medium leading-tight">
                Ready for your next project?
              </h4>
              <p class="text-white/40 text-[14px] font-light leading-relaxed">
                Let's build something extraordinary together.
              </p>
            </div>
            <a
              href="#contact"
              class="relative group w-full flex items-center justify-center gap-2 py-3.5 bg-[#0066FF] text-white text-[15px] font-medium rounded-2xl transition-all hover:bg-blue-600 active:scale-95 overflow-hidden"
            >
              <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
              <span class="relative z-10">Book a Strategy Call</span>
              <ArrowUpRight class="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <!-- Mobile Bottom Bar -->
          <div class="w-full pt-4 border-t border-white/5 flex flex-col items-center gap-3">
            <div class="flex items-center gap-6 text-[13px] font-light text-white/40">
              <a href="#" class="hover:text-white transition-colors">Terms</a>
              <div class="w-[1px] h-3 bg-white/10" />
              <a href="#" class="hover:text-white transition-colors">Privacy</a>
            </div>
            <p class="text-[13px] font-light text-white/25">
              © 2026 Fouraxis. All rights reserved.
            </p>
          </div>
        </div>

        <!-- ── DESKTOP LAYOUT (hidden on mobile) ── -->
        <div class="hidden md:block p-12 md:p-20 md:pb-20">
          <!-- Main Content Grid -->
          <div class="relative z-10 grid md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 mb-6 items-start">

            <!-- Column 1: Brand & Newsletter -->
            <div class="xl:col-span-4 space-y-10">
              <router-link to="/" class="flex items-center shrink-0">
                <img src="/Logo2.png" alt="Logo" width="120" height="32" class="h-8 w-auto object-contain" />
              </router-link>

              <div class="flex items-start gap-3 text-white/50 text-[14px] font-light leading-relaxed max-w-[280px]">
                <MapPin class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p>
                  Gulshan 02,
                  Dhaka-1212 <br />
                  Bangladesh
                </p>
              </div>

              <!-- Newsletter -->
              <div class="relative max-w-[340px] group">
                <div class="relative flex items-center p-1.5 rounded-2xl bg-[#0b0514]/50 backdrop-blur-md border border-white/[0.08] shadow-2xl transition-all group-focus-within:border-white/20">
                  <input
                    type="email"
                    placeholder="Enter Your Email..."
                    class="bg-transparent border-none outline-none text-white text-[14px] font-light pl-4 w-full placeholder:text-white/20"
                  />
                  <button class="px-5 py-2.5 rounded-xl bg-[#0066FF] text-white text-[14px] font-medium transition-all hover:bg-blue-600 hover:scale-105 active:scale-95 whitespace-nowrap">
                    Subscribe Us
                  </button>
                </div>
              </div>
            </div>

            <!-- Column 2: Template Pages -->
            <div class="xl:col-span-2">
              <h4 class="text-white text-[16px] font-medium mb-8">Pages</h4>
              <ul class="space-y-5 text-[15px] font-light text-white/40">
                <li><router-link to="/" class="hover:text-white transition-colors">Home</router-link></li>
                <li><router-link to="/about" class="hover:text-white transition-colors">About</router-link></li>
                <li><router-link to="/portfolio" class="hover:text-white transition-colors">Portfolio</router-link></li>
                <li><router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link></li>
                <li><router-link to="/services" class="hover:text-white transition-colors">Services</router-link></li>
              </ul>
            </div>

            <!-- Column 3: Social -->
            <div class="xl:col-span-2">
              <h4 class="text-white text-[16px] font-medium mb-8">Social</h4>
              <ul class="space-y-5 text-[15px] font-light text-white/40">
                <li><a href="#" class="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Youtube</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Linkedin</a></li>
              </ul>
            </div>

            <!-- Column 4: CTA Showcase -->
            <div class="xl:col-span-4 md:col-span-2 flex flex-col items-center xl:items-end text-center xl:text-right space-y-8">
              <div class="space-y-4 max-w-[320px]">
                <h4 class="text-white text-[24px] md:text-[28px] font-medium leading-tight">
                  Ready to start your next project?
                </h4>
                <p class="text-white/50 text-[15px] font-light leading-relaxed">
                  Let's focus on building something extraordinary together.
                </p>
              </div>

              <a
                href="#contact"
                class="relative group px-8 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl transition-all hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <!-- Surface Highlight -->
                <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                <span class="relative z-10 flex items-center gap-2">
                  Book a Strategy Call
                  <Rocket class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="relative z-30 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-visible">
            <p class="text-[14px] font-light text-white/80">
              © 2026 Fouraxis. All rights reserved.
            </p>
            <div class="flex items-center gap-8 text-[14px] font-light text-white/90">
              <a href="#" class="hover:text-white transition-colors">Terms & Conditions</a>
              <div class="w-[1px] h-4 bg-white/10 hidden md:block" />
              <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <!-- Fixed Back to Top Button -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-50 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-50 opacity-0"
    >
      <button
        v-if="mounted"
        @click="handleClick"
        class="fixed bottom-10 right-6 md:right-12 z-[999] p-4 rounded-full bg-[#0066FF] text-white transition-all active:scale-95 group border border-white/20 hover:border-white/40 hover:bg-blue-600 hover:-translate-y-[5px]"
        :class="{'hover:translate-y-[5px]': direction === 'down'}"
      >
        <div class="transition-transform duration-400 ease-in-out" :class="direction === 'up' ? '' : 'rotate-180'">
          <ChevronUp class="w-6 h-6 group-hover:scale-110 transition-transform" />
        </div>
      </button>
    </transition>
  </footer>
</template>
