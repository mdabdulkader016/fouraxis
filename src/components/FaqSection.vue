<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import { cn } from '../lib/utils'

const faqs = [
  {
    question: "What do I need to get started?",
    answer: "To get started, we'll need a brief overview of your project, target audience, and any existing brand assets or design preferences you may have. A quick discovery call helps us align on the vision.",
  },
  {
    question: "What kind of customization is available?",
    answer: "We offer full design and development customization. Every element can be tailored to match your brand identity and specific functional requirements, from layout to interactive elements.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer: "Very easy. We build with modern CMS integrations or clean, documented code that makes content updates straightforward even for users without technical experience.",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer: "We offer a satisfaction guarantee. If we don't meet the agreed-upon milestones or design standards, we'll work tirelessly to resolve it or provide a partial refund based on the project stage.",
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all. We handle all the technical aspects from start to finish. You'll receive a fully functional, easy-to-manage product with zero coding required on your end.",
  },
  {
    question: "What will I get after purchasing the template?",
    answer: "You'll receive the complete source code, design assets, and documentation. If we're handling the setup, you'll get a fully deployed and live website ready for your business.",
  },
];

const openIndex = ref(0)
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const beforeEnter = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
}
const enter = (el, done) => {
  el.style.transition = 'height 0.4s cubic-bezier(0.04, 0.62, 0.23, 0.98), opacity 0.4s ease'
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
  el.addEventListener('transitionend', done, { once: true })
}
const afterEnter = (el) => {
  el.style.height = 'auto'
}
const leave = (el, done) => {
  el.style.height = el.scrollHeight + 'px'
  // Force reflow
  void el.offsetHeight
  el.style.transition = 'height 0.4s cubic-bezier(0.04, 0.62, 0.23, 0.98), opacity 0.4s ease'
  el.style.height = '0'
  el.style.opacity = '0'
  el.addEventListener('transitionend', done, { once: true })
}
</script>

<template>
  <section id="faq" class="pb-24 pt-0 relative bg-[#0b0514]">
    <div class="relative w-full h-24 md:h-28 mb-16 pointer-events-none flex justify-center overflow-visible">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[200%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.3)_0%,transparent_70%)] blur-[50px] -translate-y-[80%]" />
      <div 
        class="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-t-[250px] md:rounded-t-[400px] flex items-center justify-center"
        style="-webkit-clip-path: inset(0 0 -100px 0 round 250px 250px 0 0); clip-path: inset(0 0 -100px 0 round 250px 250px 0 0);"
      >
      </div>
    </div>

    <div class="absolute inset-0 bg-[#0b0514] -z-20" />

    <div class="container mx-auto px-4 md:px-8 max-w-7xl">
      <div class="grid xl:grid-cols-12 gap-12 xl:gap-24">
        
        <!-- Left Column: Header (Sticky on desktop) -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="xl:col-span-5 xl:sticky xl:top-32 h-fit"
        >
          <!-- Badge -->
          <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden z-10 w-fit">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
            <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
            <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
            <span class="tracking-tight relative z-10 text-white">FAQ</span>
          </div>

          <h2 class="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight text-white mb-6">
            Frequently <br /> <span class="text-white/40 whitespace-nowrap">Asked Questions</span>
          </h2>
          
          <p class="text-white/60 text-[15px] max-w-sm font-light leading-relaxed">
            Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
          </p>
        </div>

        <!-- Right Column: Accordion -->
        <div class="xl:col-span-7 space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
            :class="cn(
              'group rounded-[1.8rem] border border-white/[0.05] overflow-hidden transition-all duration-500',
              openIndex === index 
                ? 'bg-[#0c0c1e] border-[#0066FF]/40 scale-[1.02] -translate-y-1' 
                : 'bg-[#0b0514] hover:bg-[#0c0c1e] hover:border-white/10 hover:scale-[1.01] hover:-translate-y-0.5'
            )"
          >
            <button
              @click="toggle(index)"
              class="w-full flex items-center justify-between p-8 text-left transition-all relative group/btn cursor-pointer"
            >
              <span class="text-[1.1rem] font-medium text-white group-hover:text-white transition-colors text-left pr-8">
                {{ faq.question }}
              </span>
              <div :class="cn(
                 'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border relative overflow-hidden',
                 openIndex === index 
                   ? 'bg-[#0066FF] border-transparent text-white rotate-[135deg]' 
                   : 'bg-white/[0.03] border-white/10 text-white/40 group-hover:border-white/20'
              )">
                <Plus class="w-5 h-5 relative z-10" />
              </div>
            </button>

            <transition
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
            >
              <div v-show="openIndex === index" class="overflow-hidden">
                <div class="px-8 pb-8 pt-0 text-white/50 leading-relaxed text-[15px] font-light">
                  {{ faq.answer }}
                </div>
              </div>
            </transition>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
