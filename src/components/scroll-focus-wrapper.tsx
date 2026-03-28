"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollFocusWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track this element's position relative to the viewport.
  // start end = top of element hits bottom of screen (progress 0)
  // start start = top of element hits top of screen (progress 1)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 15%"] 
  });

  // The element stays blurred and faded for the vast majority of its journey 
  // up the screen ("lower maximum part"), and only becomes fully sharp 
  // when it reaches the very top ("first little bit part").
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.2, 0.4, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.7, 1], ["blur(16px)", "blur(10px)", "blur(0px)"]);
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [0.95, 0.97, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, filter: blur, scale }} 
      className="w-full will-change-[opacity,filter,transform]"
    >
      {children}
    </motion.div>
  );
}
