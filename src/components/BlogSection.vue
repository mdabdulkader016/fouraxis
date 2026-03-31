<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

const blogPosts = [
  {
    id: "requests",
    title: "Submit Unlimited Requests",
    description: "Enjoy the freedom to submit unlimited requests without any restrictions. Whether you need design tweaks, we're here to assist you at every step.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    category: "Service",
    gridClass: "xl:col-span-2 xl:row-span-2",
    hasButtons: true,
  },
  {
    id: "revisions",
    title: "Requests & Revisions",
    description: "Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    category: "Process",
    gridClass: "xl:col-span-2 xl:row-span-1",
    badge: "NEW",
  },
  {
    id: "pricing",
    title: "Worry Free Pricing",
    description: "Whether you're just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    category: "Value",
    gridClass: "xl:col-span-2 xl:row-span-2",
    badge: "NEW",
  },
  {
    id: "turnaround",
    title: "Quick Turnaround",
    description: "We prioritize efficiency without compromising quality.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    category: "Speed",
    gridClass: "xl:col-span-1 xl:row-span-1",
    badge: "NEW",
  },
  {
    id: "publish",
    title: "Publish in Seconds",
    description: "Publish your site in seconds with our streamlined process.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    category: "Release",
    gridClass: "xl:col-span-1 xl:row-span-1",
  },
];

const categoriesRow1 = [
  "Enhanced UX", "Boosted Conversions", "Fast Loading", "SEO Optimized", "Customizable", "Scalable"
];
const categoriesRow2 = [
  "Increased Engagement", "Expandable", "Secure", "User-Friendly"
];
</script>

<template>
  <section id="blog" class="py-32 relative overflow-hidden bg-[#0b0514]">
    <!-- Cinematic Diagonal Section Divider Background -->
    <div class="absolute right-0 top-0 w-[50%] h-[600px] pointer-events-none overflow-hidden select-none opacity-20 lg:opacity-30">
      <div 
        class="absolute right-0 top-0 w-full h-full border-l border-b border-white/[0.08] bg-gradient-to-bl from-white/[0.02] to-transparent"
        style="-webkit-clip-path: polygon(100% 0, 100% 100%, 0 40%, 40% 0); clip-path: polygon(100% 0, 100% 100%, 0 40%, 40% 0);"
      />
    </div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Header Area -->
      <div class="mb-24">
        <div class="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-10 overflow-hidden shadow-2xl group">
           <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
           <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
           <span class="w-2.5 h-2.5 rounded-full bg-white shrink-0 group-hover:scale-110 transition-transform" />
           <span class="tracking-tight relative z-10">Our Blogs</span>
        </div>

        <div class="max-w-4xl mb-12">
          <h2 class="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-12">
            <span class="text-white block mb-2">Built with Skill. Delivered with Care.</span>
            <span class="text-white/40 block">Dream Big. We’ll Build It.</span>
          </h2>
        </div>

        <!-- Tags -->
        <div class="flex flex-col gap-3.5">
          <div class="flex flex-wrap gap-3">
            <span v-for="cat in categoriesRow1" :key="cat" class="px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/60 text-[14px] font-medium hover:bg-white/[0.05] hover:text-white/90 transition-all cursor-default">
              {{ cat }}
            </span>
          </div>
          <div class="flex flex-wrap gap-3 items-center">
            <span v-for="cat in categoriesRow2" :key="cat" class="px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/60 text-[14px] font-medium hover:bg-white/[0.05] hover:text-white/90 transition-all cursor-default">
              {{ cat }}
            </span>
            <a href="#contact" class="px-8 py-2.5 bg-white text-black text-[15px] font-semibold rounded-2xl hover:bg-gray-200 transition-all flex items-center gap-2 active:scale-95 shadow-xl">
              Contact Now
            </a>
          </div>
        </div>
      </div>

      <!-- Bento Grid (4 Columns) -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-auto">
        <div
          v-for="(post, index) in blogPosts"
          :key="post.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          :class="['group relative rounded-[3rem] border border-white/[0.08] bg-[#0a0a14] overflow-hidden flex flex-col', post.gridClass]"
        >
          <!-- Image Container with Blue Halo -->
          <div :class="['relative overflow-hidden', post.gridClass.includes('xl:row-span-2') ? 'h-[200px] md:h-[260px] xl:h-[320px]' : 'h-[180px] md:h-[220px]']">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>

          <!-- Content -->
          <div class="p-10 flex flex-col flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-[1.4rem] font-medium text-white tracking-tight leading-tight">{{ post.title }}</h3>
              <span v-if="post.badge" class="px-2 py-0.5 rounded-[4px] bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">{{ post.badge }}</span>
            </div>

            <p class="text-white/40 text-[14.5px] leading-relaxed mb-8 flex-1 font-light">{{ post.description }}</p>

            <div class="flex flex-wrap gap-3.5 mt-auto">
              <template v-if="post.hasButtons">
                <a href="#contact" class="px-7 py-3.5 bg-[#5E00FF] text-white text-[14px] font-semibold rounded-2xl hover:bg-[#4b00cc] transition-all relative overflow-hidden shadow-[0_0_20px_rgba(94,0,255,0.3)] active:scale-95">
                  <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                  <span class="relative z-10">Book an Appointment</span>
                </a>
              </template>
              <a href="#" class="px-7 py-3.5 bg-white/[0.08] text-white text-[14px] font-semibold rounded-2xl border border-white/[0.1] hover:bg-white/[0.12] transition-colors active:scale-95 flex items-center gap-2 group/read">
                Read More
                <ArrowUpRight class="w-4 h-4 group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
          <div class="absolute inset-0 border border-transparent group-hover:border-white/[0.08] transition-colors pointer-events-none rounded-[3rem]" />
        </div>
      </div>
    </div>

    <!-- Atmospheric Glow -->
    <div class="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />
    <div class="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-600/5 blur-[200px] rounded-full pointer-events-none" />
    <div class="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none mt-24" />
  </section>
</template>
