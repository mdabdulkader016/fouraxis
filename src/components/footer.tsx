import Link from "next/link";
import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 pr-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                 <Rocket className="w-4 h-4 text-white" />
               </div>
               <span className="text-xl font-bold tracking-tight text-white">Fouraxis</span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-8 max-w-sm text-sm">
              Helping businesses build digital products and visual experiences from strategy to execution.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-5">
            <h4 className="font-bold text-white mb-6 tracking-wide">About</h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">Process</Link></li>
              <li><Link href="#work" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 tracking-wide">Follow</h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dribbble</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li>hello@fouraxis.com</li>
              <li>+1 (555) 000-0000</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/40">
            © 2026 Fouraxis. All rights reserved.
          </p>
          <div className="text-sm font-medium text-white/40 flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
