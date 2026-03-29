import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { CustomCursor } from "@/components/custom-cursor";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Fouraxis | Web, App, UX/UI & Graphics Design Solutions",
  description: "Fouraxis delivers premium web development, app development, UX/UI design, and graphics design services for businesses that want modern digital experiences that perform.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
