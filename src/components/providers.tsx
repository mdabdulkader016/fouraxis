"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis } from "@studio-freight/react-lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}
