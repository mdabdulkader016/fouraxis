"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO",
    company: "Innovate Solutions",
    quote: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence with ease.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=b6e3f4",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    company: "Nexus Digital",
    quote: "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=ffdfbf",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Founder",
    company: "GreenLeaf Enterprises",
    quote: "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=c0aede",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    role: "Creative Director",
    company: "PixelWorks Studio",
    quote: "We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into stunning websites effortlessly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark&backgroundColor=d1d4f9",
    rating: 5,
  },
  {
    name: "Brian Clark",
    role: "Team Lead",
    company: "Mandro Designs",
    quote: "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our user experience.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brian&backgroundColor=b6e3f4",
    rating: 5,
  },
  {
    name: "Daniel Carter",
    role: "Founder",
    company: "Fusion Studios",
    quote: "The team's dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel&backgroundColor=ffdfbf",
    rating: 5,
  },
];

const brands = [
  { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg" },
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { name: "Linear", logo: "https://cdn.worldvectorlogo.com/logos/linear-1.svg" },
  { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer-1.svg" },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b0514]">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 md:px-8 text-center mb-16 overflow-hidden"
      >
        {/* Brand SVG Reflections — framing (Consistent style) */}
        <div className="absolute top-[10%] left-0 -translate-x-[40%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.2] lg:opacity-30">
          <Image 
            src="/rectangle-19.svg" 
            alt="Decorative Frame" 
            fill
            unoptimized
            className="object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
            style={{ 
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}
          />
        </div>

        <div className="absolute top-[10%] right-0 translate-x-[40%] w-[600px] h-[400px] pointer-events-none overflow-hidden select-none opacity-[0.2] lg:opacity-30 -scale-x-100">
          <Image 
            src="/rectangle-19.svg" 
            alt="Decorative Frame" 
            fill
            unoptimized
            className="object-contain filter drop-shadow-[0_0_15px_rgba(0,102,254,0.3)]"
            style={{ 
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}
          />
        </div>

        {/* Badge */}
        <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
          <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
          <span className="tracking-tight relative z-10 text-white">Testimonial</span>
        </div>

        <h2 className="relative z-10 text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
          <span className="text-white block">Customer Reviews About</span>
          <span className="text-white/40 block">Work, Usability and Design.</span>
        </h2>

        <p className="relative z-10 text-white/60 text-[15px] max-w-xl mx-auto font-light leading-relaxed mb-10">
          Hear from our happy clients! See how we&apos;ve helped them achieve their goals and create lasting impact.
        </p>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden mb-12 opacity-30 hover:opacity-60 transition-opacity duration-500 marquee-mask">
          <div className="flex animate-logo-marquee gap-12 sm:gap-24 py-4 w-max px-8">
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                <Image 
                  src={brand.logo} 
                  alt={brand.name} 
                  width={32}
                  height={32}
                  className="object-contain"
                  unoptimized
                />
                <span className="font-display font-bold text-xl tracking-tight text-white uppercase italic">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Link
          href="#contact"
          className="relative z-10 px-10 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 transition-all inline-flex items-center gap-2 overflow-hidden active:scale-95 group/btn"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
          <span className="relative z-10 flex items-center gap-2">
            View About Landing
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Link>
      </motion.div>

      <style>{`
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-1 / 3 * 100%)); }
        }
        .animate-logo-marquee {
          animation: logo-marquee 30s linear infinite;
        }
      `}</style>

      {/* ── Testimonial Grid ── */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1.5 hover:border-white/30"
            >
              {/* Card Decoration Icons (Small X / Mark) */}
              <div className="absolute top-6 right-8 opacity-[0.15] group-hover:opacity-30 transition-opacity">
                 <div className="w-6 h-6 border-t border-l border-white/40" />
                 <div className="w-6 h-6 border-b border-r border-white/40 -translate-y-2 translate-x-1" />
              </div>

              {/* Avatar Layer */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 p-0.5 bg-[#0b0514] shadow-xl">
                   <Image src={t.avatar} alt={t.name} width={56} height={56} className="object-cover" unoptimized />
                </div>
              </div>

              {/* Stars Rating */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-white/60 text-[15px] leading-relaxed mb-8 flex-1 min-h-[100px] font-normal relative z-10">
                &quot;{t.quote}&quot;
              </p>

              {/* Author Footer */}
              <div className="relative z-10 pt-6 border-t border-white/5 mt-auto">
                <div className="font-medium text-white text-[16px] tracking-tight mb-1">
                   {t.name} <span className="text-white/30 mx-1.5">•</span> <span className="text-white/50 text-[14px] font-normal">{t.role}</span>
                </div>
                <div className="text-[13px] text-white/30 uppercase tracking-widest font-medium">
                   {t.company}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(0,120,255,0.05)_0%,transparent_50%)] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
