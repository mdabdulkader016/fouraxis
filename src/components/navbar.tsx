"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#work" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact us", href: "#contact" },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-[#0a0514]/70 backdrop-blur-2xl border border-white/10 rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center z-10 w-1/4">
          <img src="/Logo.png" alt="Logo" className="h-8 max-w-[120px] object-contain brightness-0 invert" />
        </Link>

        {/* Links - Centered Absolutely */}
        <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activeItem === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveItem(link.name)}
                className={`relative text-[13px] transition-colors ${
                  isActive ? "text-white font-medium" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-white/50 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 z-10 justify-end w-1/4">
          
          {/* WhatsApp Icon Button */}
          <Link 
            href="#whatsapp" 
            className="w-10 h-10 rounded-full border border-white bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors hidden md:flex shrink-0"
          >
            <svg 
              className="w-4 h-4 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </Link>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-white bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 text-white text-[13px] shrink-0"
          >
            <span>Get Started</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50">its free</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white lg:hidden ml-2"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[110%] left-0 right-0 bg-[#181325]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveItem(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`py-3 px-4 rounded-xl text-sm ${
                  activeItem === link.name ? "bg-white/10 text-white" : "text-white/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
