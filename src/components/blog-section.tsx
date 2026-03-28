"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "requests",
    title: "Submit Unlimited Requests",
    description: "Enjoy the freedom to submit unlimited requests without any restrictions. Whether you need design tweaks, we're here to assist you at every step.",
    image: "/blog-next.png",
    category: "Service",
    gridClass: "lg:col-span-2 lg:row-span-2",
    hasButtons: true,
  },
  {
    id: "revisions",
    title: "Requests & Revisions",
    description: "Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated.",
    image: "/blog-tech.png",
    category: "Process",
    gridClass: "lg:col-span-2 lg:row-span-1",
    badge: "NEW",
  },
  {
    id: "turnaround",
    title: "Quick Turnaround",
    description: "We prioritize efficiency without compromising quality.",
    image: "/blog-turnaround.png",
    category: "Speed",
    gridClass: "lg:col-span-1 lg:row-span-1",
    badge: "NEW",
  },
  {
    id: "publish",
    title: "Publish in Seconds",
    description: "Publish your site in seconds with our streamlined process.",
    image: "/blog-publish.png",
    category: "Release",
    gridClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "pricing",
    title: "Worry Free Pricing",
    description: "Whether you're just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget.",
    image: "/blog-references.png",
    category: "Value",
    gridClass: "lg:col-span-2 lg:row-span-2",
    badge: "NEW",
  },
];

const categoriesRow1 = [
  "Enhanced UX", 
  "Boosted Conversions", 
  "Fast Loading", 
  "SEO Optimized", 
  "Customizable", 
  "Scalable"
];

const categoriesRow2 = [
  "Increased Engagement",
  "Expandable",
  "Secure",
  "User-Friendly"
];

function BlogCard({ post }: { post: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative rounded-[3rem] border border-white/[0.08] bg-[#0a0a14] overflow-hidden flex flex-col ${post.gridClass}`}
    >
      {/* Image Container with Blue Halo */}
      <div className={`relative overflow-hidden ${post.gridClass.includes('row-span-2') ? "h-[300px] md:h-[340px]" : "h-[220px]"}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Soft atmospheric blue bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        {/* Stronger blue accent radial glow on images */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-[1.4rem] font-medium text-white tracking-tight leading-tight">
            {post.title}
          </h3>
          {post.badge && (
            <span className="px-2 py-0.5 rounded-[4px] bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">
              {post.badge}
            </span>
          )}
        </div>

        <p className="text-white/40 text-[14.5px] leading-relaxed mb-8 flex-1 font-light">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-3.5 mt-auto">
          {post.hasButtons ? (
            <>
              <Link
                href="#contact"
                className="px-7 py-3.5 bg-[#5E00FF] text-white text-[14px] font-semibold rounded-2xl hover:bg-[#4b00cc] transition-all relative overflow-hidden shadow-[0_0_20px_rgba(94,0,255,0.3)] active:scale-95"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />
                <span className="relative z-10">Book an Appointment</span>
              </Link>
              <Link
                href="#"
                className="px-7 py-3.5 bg-white/[0.08] text-white text-[14px] font-semibold rounded-2xl border border-white/[0.1] hover:bg-white/[0.12] transition-colors active:scale-95 flex items-center gap-2 group/read"
              >
                Read More
                <ArrowUpRight className="w-4 h-4 group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5 transition-transform" />
              </Link>
            </>
          ) : (
            <Link
              href="#"
              className="px-7 py-3.5 bg-white/[0.08] text-white text-[14px] font-semibold rounded-2xl border border-white/[0.1] hover:bg-white/[0.12] transition-colors active:scale-95 flex items-center gap-2 group/read"
            >
              Read More
              <ArrowUpRight className="w-4 h-4 group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 border border-transparent group-hover:border-white/[0.08] transition-colors pointer-events-none rounded-[3rem]" />
    </motion.div>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="py-32 relative overflow-hidden bg-[#0b0514]">
      {/* Cinematic Diagonal Section Divider Background */}
      <div className="absolute right-0 top-0 w-[50%] h-[600px] pointer-events-none overflow-hidden select-none opacity-20 lg:opacity-30">
        <div 
          className="absolute right-0 top-0 w-full h-full border-l border-b border-white/[0.08] bg-gradient-to-bl from-white/[0.02] to-transparent"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 40%, 40% 0)",
            WebkitClipPath: "polygon(100% 0, 100% 100%, 0 40%, 40% 0)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="mb-24">
          {/* Badge: Our Blogs with established premium effect */}
          <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-[#0b0514] text-[16px] font-light text-white mb-10 overflow-hidden shadow-2xl group">
             {/* Premium Top Glow Effect (Brand Blue) */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[rgb(0,85,254)] to-transparent z-10" />
             <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[rgb(0,85,254)]/20 blur-md rounded-full pointer-events-none" />
             
             <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0 group-hover:scale-110 transition-transform" />
             <span className="tracking-tight relative z-10">Our Blogs</span>
          </div>

          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight mb-12">
            <span className="text-white block mb-2">Built with Skill. Delivered with Care.</span>
            <span className="text-white/40 block">Dream Big. We’ll Build It.</span>
          </h2>
          </div>

          {/* Tags in Two Row Grid Layout */}
          <div className="flex flex-col gap-3.5">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-3">
              {categoriesRow1.map((cat) => (
                <span
                  key={cat}
                  className="px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/60 text-[14px] font-medium hover:bg-white/[0.05] hover:text-white/90 transition-all cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Row 2 + Contact Now Button */}
            <div className="flex flex-wrap gap-3 items-center">
              {categoriesRow2.map((cat) => (
                <span
                  key={cat}
                  className="px-6 py-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white/60 text-[14px] font-medium hover:bg-white/[0.05] hover:text-white/90 transition-all cursor-default"
                >
                  {cat}
                </span>
              ))}
              
              {/* Contact Now precisely as seen in row 2 */}
              <Link
                href="#contact"
                className="px-8 py-2.5 bg-white text-black text-[15px] font-semibold rounded-2xl hover:bg-gray-200 transition-all flex items-center gap-2 active:scale-95 shadow-xl"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bento Grid (4 Columns) with exactly matched order and spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Submit Unlimited Requests (Large Top Left) */}
          <BlogCard post={blogPosts[0]} />
          
          {/* Card 2: Requests & Revisions (Medium Top Right) */}
          <BlogCard post={blogPosts[1]} />

          {/* Order logic for grid flow matching exactly */}
          <BlogCard post={blogPosts[4]} /> {/* Card 5: Pricing (Large Bottom Right) */}

          <BlogCard post={blogPosts[2]} /> {/* Card 3: Turnaround (Small Bottom Left) */}
          <BlogCard post={blogPosts[3]} /> {/* Card 4: Publish (Small Bottom Left) */}
        </div>

      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-600/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none mt-24" />
    </section>
  );
}
