"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact-inner" className="py-24 relative bg-[#0b0514]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 rounded-[3rem] border border-white/[0.08] bg-[#0c0c1e]/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            {/* Form Glow Effect (Top Corner) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/15 transition-all duration-700" />

            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">First Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">Last Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">How can we reach you?*</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">Where are you from?*</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none font-light appearance-none">
                    <option value="" disabled selected>Select your country...</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="bd">Bangladesh</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">What&apos;s the type of your company?*</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none font-light appearance-none">
                    <option value="" disabled selected>Select Category...</option>
                    <option value="startup">Startup</option>
                    <option value="agency">Agency</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="individual">Individual</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-white/70 text-[14px] font-light ml-2 uppercase tracking-widest">Message*</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white focus:border-blue-500/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20 font-light resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_4px_20px_rgba(0,102,255,0.3)] relative overflow-hidden active:scale-95 group flex items-center justify-center gap-3"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                <span>Submit Now</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <ContactInfoCard
              icon={<Mail className="w-6 h-6 text-blue-400" />}
              label="Email"
              value="hello@syntaxview.com"
              badge="7x24"
            />
            <ContactInfoCard
              icon={<Phone className="w-6 h-6 text-blue-400" />}
              label="Phone"
              value="+1 (212) 555-0123"
            />
            <ContactInfoCard
              icon={<MapPin className="w-6 h-6 text-blue-400" />}
              label="Address"
              value="Gulshan 02, Dhaka-1212, Bangladesh"
              badge="HQ"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({ icon, label, value, badge }: { icon: React.ReactNode; label: string; value: string; badge?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-[2rem] border border-white/5 bg-[#0c0c1e]/40 p-10 hover:border-white/15 transition-all overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
           <div className="flex items-center gap-2">
             <span className="text-white text-[17px] font-medium tracking-tight">
               {label}
             </span>
             {badge && (
               <div className="px-1.5 py-0.5 rounded-md bg-blue-600/20 text-blue-400 text-[9px] font-bold uppercase tracking-wider border border-blue-500/30">
                 {badge}
               </div>
             )}
           </div>
        </div>
      </div>
      
      <p className="text-white/50 text-[15px] font-light leading-relaxed max-w-[200px]">
        {value}
      </p>
      
      <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
         <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white ring-8 ring-[#0c0c1e]">
            <Send className="w-3 h-3 rotate-45" />
         </div>
      </div>
    </motion.div>
  );
}
