"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Rocket, ChevronUp, ArrowUpRight } from "lucide-react";

export function Footer() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-[#0b0514] pt-8 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* The Premium Footer Card */}
        <div className="relative w-full rounded-t-[3.5rem] md:rounded-t-[4.5rem] rounded-b-none border border-white/10 bg-[#000000] overflow-hidden shadow-2xl">

          {/* Visual Layer 1: Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-[0.3]" />

          {/* Visual Layer 2: Localized Depth Glow (Right Corner) */}
          <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Visual Layer 3: Top Edge Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

          {/* ── MOBILE LAYOUT (hidden on md+) ── */}
          <div className="md:hidden flex flex-col items-center text-center px-6 pt-10 pb-8 gap-8 relative z-10">

            {/* Logo */}
            <Link href="/" className="flex items-center justify-center">
              <img src="/Logo2.png" alt="Logo" className="h-8 object-contain" />
            </Link>

            {/* Tagline */}
            <p className="text-white/40 text-[14px] font-light leading-relaxed max-w-[260px]">
              Building powerful digital solutions for ambitious brands.
            </p>

            {/* Location pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 text-[13px] font-light">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Gulshan 02, Dhaka-1212, Bangladesh</span>
            </div>

            {/* Newsletter — full width */}
            <div className="w-full max-w-sm">
              <div className="relative flex items-center p-1.5 rounded-2xl bg-[#0b0514]/60 backdrop-blur-md border border-white/[0.08] shadow-2xl focus-within:border-white/20 transition-all">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-transparent border-none outline-none text-white text-[14px] font-light pl-4 w-full placeholder:text-white/20"
                />
                <button className="px-5 py-2.5 rounded-xl bg-[#0066FF] text-white text-[13px] font-medium transition-all hover:bg-blue-600 active:scale-95 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            {/* Nav Links — 2 column grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-0 w-full max-w-xs text-left">
              {/* Pages */}
              <div>
                <h4 className="text-white text-[13px] font-semibold uppercase tracking-widest mb-5 opacity-40">Pages</h4>
                <ul className="space-y-4 text-[15px] font-light text-white/50">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="#work" className="hover:text-white transition-colors">Portfolio</Link></li>
                  <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              {/* Social */}
              <div>
                <h4 className="text-white text-[13px] font-semibold uppercase tracking-widest mb-5 opacity-40">Social</h4>
                <ul className="space-y-4 text-[15px] font-light text-white/50">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Linkedin</a></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            {/* CTA Card */}
            <div className="w-full rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] p-6 flex flex-col items-center gap-5">
              <div className="w-10 h-10 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-blue-400" />
              </div>
              <div className="space-y-2 text-center">
                <h4 className="text-white text-[20px] font-medium leading-tight">
                  Ready for your next project?
                </h4>
                <p className="text-white/40 text-[14px] font-light leading-relaxed">
                  Let's build something extraordinary together.
                </p>
              </div>
              <Link
                href="#contact"
                className="relative group w-full flex items-center justify-center gap-2 py-3.5 bg-[#0066FF] text-white text-[15px] font-medium rounded-2xl transition-all hover:bg-blue-600 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                <span className="relative z-10">Book a Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Bottom Bar */}
            <div className="w-full pt-4 border-t border-white/5 flex flex-col items-center gap-3">
              <div className="flex items-center gap-6 text-[13px] font-light text-white/40">
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                <div className="w-[1px] h-3 bg-white/10" />
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              </div>
              <p className="text-[13px] font-light text-white/25">
                © 2026 Fouraxis. All rights reserved.
              </p>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}
          <div className="hidden md:block p-12 md:p-20 md:pb-20">
            {/* Main Content Grid */}
            <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 mb-6 items-start">

              {/* Column 1: Brand & Newsletter */}
              <div className="xl:col-span-4 space-y-10">
                <Link href="/" className="flex items-center shrink-0">
                  <img src="/Logo2.png" alt="Logo" className="h-8 max-w-[120px] object-contain" />
                </Link>

                <div className="flex items-start gap-3 text-white/50 text-[14px] font-light leading-relaxed max-w-[280px]">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p>
                    Gulshan 02,
                    Dhaka-1212 <br />
                    Bangladesh
                  </p>
                </div>

                {/* Newsletter */}
                <div className="relative max-w-[340px] group">
                  <div className="relative flex items-center p-1.5 rounded-2xl bg-[#0b0514]/50 backdrop-blur-md border border-white/[0.08] shadow-2xl transition-all group-focus-within:border-white/20">
                    <input
                      type="email"
                      placeholder="Enter Your Email..."
                      className="bg-transparent border-none outline-none text-white text-[14px] font-light pl-4 w-full placeholder:text-white/20"
                    />
                    <button className="px-5 py-2.5 rounded-xl bg-[#0066FF] text-white text-[14px] font-medium transition-all hover:bg-blue-600 hover:scale-105 active:scale-95 whitespace-nowrap">
                      Subscribe Us
                    </button>
                  </div>
                </div>
              </div>

              {/* Column 2: Template Pages */}
              <div className="xl:col-span-2">
                <h4 className="text-white text-[16px] font-medium mb-8">Pages</h4>
                <ul className="space-y-5 text-[15px] font-light text-white/40">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="#work" className="hover:text-white transition-colors">Portfolio</Link></li>
                  <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>

              {/* Column 3: Social */}
              <div className="xl:col-span-2">
                <h4 className="text-white text-[16px] font-medium mb-8">Social</h4>
                <ul className="space-y-5 text-[15px] font-light text-white/40">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Linkedin</a></li>
                </ul>
              </div>

              {/* Column 4: CTA Showcase */}
              <div className="xl:col-span-4 md:col-span-2 flex flex-col items-center xl:items-end text-center xl:text-right space-y-8">
                <div className="space-y-4 max-w-[320px]">
                  <h4 className="text-white text-[24px] md:text-[28px] font-medium leading-tight">
                    Ready to start your next project?
                  </h4>
                  <p className="text-white/50 text-[15px] font-light leading-relaxed">
                    Let's focus on building something extraordinary together.
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="relative group px-8 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl transition-all hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 active:scale-95 overflow-hidden"
                >
                  {/* Surface Highlight */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Strategy Call
                    <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-30 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-visible">
              <p className="text-[14px] font-light text-white/80">
                © 2026 Fouraxis. All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-[14px] font-light text-white/90">
                <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Fixed Back to Top Button */}
      {mounted && <ScrollToTopButton />}
    </footer>
  );
}


function ScrollToTopButton() {
  const [direction, setDirection] = React.useState<"up" | "down">("down");

  React.useEffect(() => {
    const handleScroll = () => {
      // Toggle direction based on scroll position (400px threshold)
      if (window.scrollY > 400) {
        setDirection("up");
      } else {
        setDirection("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (direction === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll directly to the bottom (the footer)
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={handleClick}
      className="fixed bottom-10 right-6 md:right-12 z-[999] p-4 rounded-full bg-[#0066FF] text-white transition-all active:scale-95 group border border-white/20 hover:border-white/40 hover:bg-blue-600"
      whileHover={{ y: direction === "up" ? -5 : 5 }}
    >
      <motion.div
        animate={{ rotate: direction === "up" ? 0 : 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.div>
    </motion.button>
  );
}
