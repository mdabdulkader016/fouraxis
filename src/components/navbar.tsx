"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-[#0a0514]/70 backdrop-blur-2xl border border-white/10 rounded-full pl-4 md:pl-6 pr-2 md:pr-3 py-2 md:py-2.5 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative">

        {/* Logo */}
        <Link href="/" className="flex items-center z-10 shrink-0 ml-1 md:ml-2">
          <Image 
            src="/Logo2.png" 
            alt="Logo" 
            width={110}
            height={32}
            className="h-7 md:h-8 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Nav Links — xl+ only, centered absolutely */}
        <nav className="hidden xl:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              const commonClasses = `relative text-[16px] transition-colors ${
                isActive ? "text-white font-light" : "text-white/60 hover:text-white"
              }`;
              const linkContent = (
                <>{link.name}{isActive && (<div className="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-white/50 rounded-full" />)}</>
              );
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={commonClasses}
                >
                  {linkContent}
                </Link>
              );
            })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 z-10 ml-auto">

          {/* WhatsApp Icon — xl+ only */}
          <Link
            href="#whatsapp"
            className="w-10 h-10 rounded-full border border-white bg-white/5 items-center justify-center hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 transition-all hidden xl:flex shrink-0"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </Link>

          {/* Get Started CTA — xl+ only */}
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-white bg-white/5 hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 transition-all items-center gap-2 text-white text-[15px] font-light shrink-0 hidden xl:flex"
          >
            <span>Get Started</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50">its free</span>
            <ArrowUpRight className="w-4 h-4 text-white/50" />
          </Link>

          {/* Hamburger Toggle — always visible below xl */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex xl:hidden p-2 text-white ml-1 rounded-full hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="xl:hidden absolute top-[calc(100%+10px)] left-0 right-0 bg-[#0d0920]/95 backdrop-blur-2xl border border-white/10 rounded-3xl px-3 py-3 shadow-2xl"
          >
            {/* Nav Links */}
            <div className="flex flex-col gap-0.5 mb-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`py-3 px-4 rounded-2xl text-[15px] font-light transition-all ${
                    (pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href)))
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06] mb-3" />

            {/* CTA Button */}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#0066FF] hover:bg-blue-500 text-white rounded-2xl text-[15px] font-medium transition-all active:scale-95"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
