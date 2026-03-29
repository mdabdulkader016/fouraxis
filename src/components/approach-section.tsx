"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Smartphone, Palette, Image as ImageIcon, ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
  duration: string;
  features: string[];
  color: string;
}

const services = [
  {
    id: "service-1",
    category: "Development",
    title: "Web Development",
    description: "By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality.",
    icon: Monitor,
    price: "$2500 / Project",
    duration: "2 - 3 Week",
    features: ["Design+Raw Coded Development", "Interactive Elements"],
    color: "from-blue-600/20 to-blue-400/5",
  },
  {
    id: "service-2",
    category: "Development",
    title: "App Development",
    description: "Whether you're building a simple app or a complex platform, our team provides scalable solutions tailored to your needs, ensuring your project is robust.",
    icon: Smartphone,
    price: "$7500 / Project",
    duration: "4 - 6 Week",
    features: ["Flutter Development", "Database and Back-End"],
    color: "from-indigo-600/20 to-indigo-400/5",
  },
  {
    id: "service-3",
    category: "Design",
    title: "UX/UI Design",
    description: "From custom logo designs to comprehensive brand guidelines, we cover all aspects of your visual presence across all digital touchpoints.",
    icon: Palette,
    price: "$4500 / Project",
    duration: "3 - 4 Week",
    features: ["User Journey + Wireframing", "High-Fidelity Prototyping"],
    color: "from-purple-600/20 to-purple-400/5",
  },
  {
    id: "service-4",
    category: "Design",
    title: "Graphics Design",
    description: "Compelling visual identities and brand assets that make your business stand out from the competition with clear, professional visuals.",
    icon: ImageIcon,
    price: "$800 / Project",
    duration: "1 Week",
    features: ["Brand Identity Assets", "Social Media Graphics"],
    color: "from-emerald-600/20 to-emerald-400/5",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div 
      className="sticky top-40 w-full mb-12 last:mb-0" 
      style={{ 
        zIndex: index + 10,
      }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative p-8 md:p-12 rounded-[3.2rem] border border-white/[0.08] bg-gradient-to-br from-[#0c0c1e] to-[#04040a] overflow-hidden group shadow-2xl"
      >
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000 group-hover:opacity-100" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(0,120,255,0.12)_0%,transparent_50%)] pointer-events-none" />

        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#0b0514] border border-white/10 flex items-center justify-center text-white ring-1 ring-white/5 shadow-2xl relative">
            <Icon className="w-7 h-7" />
            <div className={`absolute inset-0 blur-2xl opacity-10 pointer-events-none bg-blue-500 transition-opacity group-hover:opacity-30`} />
          </div>
          
          <div className="relative inline-flex items-center px-6 py-2 rounded-2xl border border-white/10 bg-[#0b0514]/50 text-white/50 text-[13px] font-medium tracking-wide">
            <span className="relative z-10">{service.category}</span>
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-[1.75rem] md:text-[2.2rem] font-display font-medium text-white mb-6 tracking-tight">
            {service.title}
          </h3>
          
          <p className="text-white/50 text-[16px] leading-relaxed mb-8 max-w-md font-normal">
            {service.description}
          </p>

          <div className="flex items-center gap-4 mb-10">
            <div className="px-5 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white text-[15px] font-medium flex items-center gap-2">
              {service.price}
            </div>
            <div className="px-5 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/60 text-[15px] font-normal">
              {service.duration}
            </div>
          </div>

          <div className="space-y-4 mb-10">
            {service.features.map((feature: string) => (
              <div key={feature} className="flex items-center gap-3 text-white/70 text-[15px] font-light">
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <Link
            href="#contact"
            className="px-10 py-4 bg-[#0066FF] text-white text-[16px] font-medium rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(0,102,255,0.4)] flex items-center justify-center relative overflow-hidden w-fit group/btn active:scale-95"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              Book an Appointment
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        <div className="absolute inset-x-0 -bottom-32 -right-32 w-[130%] h-[130%] pointer-events-none opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12">
          <Image 
            src="/blur logo.svg" 
            alt="Logo watermark" 
            fill
            className="object-contain"
          />
        </div>

        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 pointer-events-none transition-opacity duration-700 group-hover:opacity-15`} />
      </motion.div>
    </div>
  );
}

export function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);

  return (
    <>
      <section id="services-showcase" ref={containerRef} className="pb-24 pt-0 relative bg-[#0b0514]">
        {/* Cinematic Section Divider */}
        <div className="relative w-full h-24 md:h-28 mb-16 pointer-events-none flex justify-center overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[200%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.3)_0%,transparent_70%)] blur-[50px] -translate-y-[80%]" />
          <div 
            className="relative w-[95%] max-w-[1400px] h-full bg-[#0b0514] rounded-t-[250px] md:rounded-t-[400px] border-t border-white/[0.08] flex items-center justify-center"
            style={{
              clipPath: "inset(0 0 -100px 0 round 250px 250px 0 0)",
              WebkitClipPath: "inset(0 0 -100px 0 round 250px 250px 0 0)"
            }}
          >
            {/* Removed the intense inner glow line as requested previously */}
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="absolute inset-0 bg-[#0b0514] -z-20" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid xl:grid-cols-2 gap-16 xl:gap-24 items-start max-w-7xl mx-auto relative">
            
            {/* Left Column - Sticky Visual */}
            <div className="hidden xl:block sticky top-40 self-start order-2 xl:order-1">
              <motion.div 
                style={{ opacity: imageOpacity }}
                className="relative z-10 w-full max-w-md lg:max-w-none mx-auto rounded-3xl p-2 sm:p-4 border border-white/5 bg-white/[0.02]"
              >
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.6)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
                
                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square group bg-black">
                  <Image 
                    src="/shamin-haky-RIk-i9rXPao-unsplash.jpg" 
                    alt="Our Services visualization" 
                    fill
                    className="object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
                </div>
              </motion.div>
            </div>

            {/* Right Column - Scrolling Cards */}
            <div className="flex flex-col order-1 xl:order-2">
              <div className="mb-20">
                <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-8 overflow-hidden group shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                  <span className="tracking-tight relative z-10 text-white">Our Services</span>
                </div>

                <h2 className="text-[2rem] md:text-[2.8rem] font-display font-medium leading-[1.1] tracking-tight mb-8">
                  <span className="text-white block mb-1">Get High-Quality</span>
                  <span className="text-white/40 block">Clear Services Remotely.</span>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 text-[15px] max-w-lg font-light leading-relaxed"
                >
                  Discover our range of services designed to elevate your brand and propel your business to next level.
                </motion.p>
              </div>

              <div className="relative pb-[60vh] flex flex-col items-center">
                {services.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Removed Bottom Divider Line as requested previously */}
    </>
  );
}
