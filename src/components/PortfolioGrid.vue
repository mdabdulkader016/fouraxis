<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const projects = [
  {
    id: "way-fields",
    title: "Way Fields",
    year: "2024",
    image: "/portfolio-featured.png",
    href: "/portfolio",
    className: "md:col-span-1",
  },
  {
    id: "raven-studio",
    title: "Raven Studio",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    href: "/portfolio",
    className: "md:col-span-1",
  },
  {
    id: "white-stag",
    title: "White Stag",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    href: "/portfolio",
    className: "md:col-span-2",
  },
  {
    id: "horizon-analytics",
    title: "Horizon Analytics",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=80",
    href: "/portfolio",
    className: "md:col-span-1",
  },
  {
    id: "nexus-crm",
    title: "Nexus CRM",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80",
    href: "/portfolio",
    className: "md:col-span-1",
  },
];
</script>

<template>
  <section class="py-20 relative bg-[#0b0514]">
      <div class="container mx-auto px-4 md:px-8 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
              :class="`group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] aspect-[16/10] ${project.className}`"
            >
              <a :href="project.href" class="block w-full h-full relative cursor-pointer">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <!-- Darkened overlay for text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                <!-- Info Area -->
                <div class="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between z-10">
                  <div class="flex flex-col">
                    <h3 class="text-xl md:text-2xl font-display font-medium text-white tracking-tight">
                      {{ project.title }}
                    </h3>
                  </div>
                  <div class="flex items-center gap-4">
                    <span class="text-white/40 text-sm md:text-base font-light font-sans tracking-widest uppercase">
                      {{ project.year }}
                    </span>
                  </div>
                </div>

                <!-- Hover Arrow -->
                <div class="absolute top-6 right-6 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <ArrowUpRight class="w-5 h-5 group-hover:rotate-45 transition-transform" />
                   </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>
</template>
