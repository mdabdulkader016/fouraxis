"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  href: string;
  className?: string;
}

const projects: Project[] = [
  {
    id: "way-fields",
    title: "Way Fields",
    year: "2024",
    image: "/portfolio-featured.png",
    href: "#",
    className: "md:col-span-1",
  },
  {
    id: "raven-studio",
    title: "Raven Studio",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    href: "#",
    className: "md:col-span-1",
  },
  {
    id: "white-stag",
    title: "White Stag",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
    href: "#",
    className: "md:col-span-2",
  },
  {
    id: "horizon-analytics",
    title: "Horizon Analytics",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=80",
    href: "#",
    className: "md:col-span-1",
  },
  {
    id: "nexus-crm",
    title: "Nexus CRM",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80",
    href: "#",
    className: "md:col-span-1",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] aspect-[16/10] ${project.className}`}
    >
      <Link href={project.href} className="block w-full h-full relative cursor-pointer">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Darkened overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        
        {/* Info Area */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between z-10">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm md:text-base font-light font-sans tracking-widest uppercase">
              {project.year}
            </span>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-6 right-6 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
           <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
           </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function PortfolioGrid() {
  return (
    <section className="py-20 relative bg-[#0b0514]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
