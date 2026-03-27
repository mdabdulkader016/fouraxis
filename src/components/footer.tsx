import Link from "next/link";
import { MessageCircle, Briefcase, Code, Palette } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-5 pr-4">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Syntaxview Logo" className="h-10 w-auto dark:invert-0 invert dark:brightness-100 brightness-0" />
            </Link>
            <p className="text-muted leading-relaxed mb-8 max-w-sm">
              Syntaxview crafts high-quality digital experiences through web development, app development, UX/UI design, and graphics design — built for brands that want to grow with confidence.
            </p>
            <div className="flex gap-4">
              {[MessageCircle, Briefcase, Code, Palette].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-muted">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">Process</Link></li>
              <li><Link href="#work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-muted">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Web Development</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">App Development</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">UX/UI Design</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Graphics Design</span></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-foreground mb-6">Ready to talk?</h4>
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg text-sm font-bold hover:bg-card hover:border-primary transition-all w-full"
            >
              Start Your Project
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-muted">
            © 2026 Syntaxview. All rights reserved.
          </p>
          <div className="text-xs font-medium text-muted flex gap-2">
            <span>Design-led.</span>
            <span>Performance-driven.</span>
            <span>Built to scale.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
