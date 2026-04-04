<script setup>
import { Mail, Phone, MapPin, Send } from "lucide-vue-next";
import { CONTACT_DETAILS } from "@/lib/constants";

const infoCards = [
  {
      label: "Email",
      value: "hello@syntaxview.com",
      badge: "7x24",
      icon: Mail,
  },
  {
      label: "WhatsApp",
      value: CONTACT_DETAILS.phone,
      badge: "Fastest",
      icon: Phone,
      href: CONTACT_DETAILS.whatsapp,
  },
  {
      label: "Address",
      value: "Gulshan 02, Dhaka-1212, Bangladesh",
      badge: "HQ",
      icon: MapPin,
  }
];
</script>

<template>
  <section id="contact-inner" class="py-24 relative bg-[#0b0514]">
    <!-- Background Glow -->
    <div class="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none -translate-y-1/2" />

    <div class="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: The Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="lg:col-span-8 rounded-[3rem] border border-white/[0.08] bg-[#0c0c1e]/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
        >
          <!-- Form Glow Effect (Top Corner) -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/15 transition-all duration-700" />

          <form class="space-y-8 relative z-10">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-3">
                <label class="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">First Name*</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  class="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light"
                  required
                />
              </div>
              <div class="space-y-3">
                <label class="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">Last Name*</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  class="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light"
                  required
                />
              </div>
            </div>

            <div class="space-y-3">
              <label class="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">How can we reach you?*</label>
              <input
                type="email"
                placeholder="name@email.com"
                class="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light"
                required
              />
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-3">
                <label class="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">Where are you from?*</label>
                <div class="relative">
                    <select class="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none font-light appearance-none">
                      <option value="" disabled selected>Select your country...</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="bd">Bangladesh</option>
                      <option value="other">Other</option>
                    </select>
                </div>
              </div>
              <div class="space-y-3">
                <label class="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">What's the type of your company?*</label>
                <div class="relative">
                    <select class="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none font-light appearance-none">
                      <option value="" disabled selected>Select Category...</option>
                      <option value="startup">Startup</option>
                      <option value="agency">Agency</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="individual">Individual</option>
                    </select>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <label class="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">Message*</label>
              <textarea
                rows="6"
                placeholder="Tell us about your project or inquiry..."
                class="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-5 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_4px_20px_rgba(0,102,255,0.3)] relative overflow-hidden active:scale-95 group flex items-center justify-center gap-3"
            >
              <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
              <span>Submit Now</span>
              <Send class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

        <!-- Right Column: Contact Info Cards -->
        <div class="lg:col-span-4 space-y-6">
            <a
                v-for="(card, index) in infoCards"
                :key="index"
                :href="card.href || '#'"
                :target="card.href ? '_blank' : undefined"
                :rel="card.href ? 'noopener noreferrer' : undefined"
                v-motion
                :initial="{ opacity: 0, x: 30 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }"
                class="group relative rounded-[2rem] border border-white/5 bg-[#0c0c1e]/40 p-10 hover:border-white/15 transition-all overflow-hidden block"
            >
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />
              
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <component :is="card.icon" class="w-6 h-6 text-blue-400" />
                </div>
                <div>
                   <div class="flex items-center gap-2">
                     <span class="text-white text-[17px] font-medium tracking-tight">
                       {{ card.label }}
                     </span>
                     <div v-if="card.badge" class="px-1.5 py-0.5 rounded-md bg-blue-600/20 text-blue-400 text-[9px] font-bold uppercase tracking-wider border border-blue-500/30">
                       {{ card.badge }}
                     </div>
                   </div>
                </div>
              </div>
              
              <p class="text-white/50 text-[15px] font-light leading-relaxed max-w-[200px]">
                {{ card.value }}
              </p>
              
              <div class="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div class="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white ring-8 ring-[#0c0c1e]">
                    <Send class="w-3 h-3 rotate-45" />
                 </div>
              </div>
            </a>
        </div>

      </div>
    </div>
  </section>
</template>
