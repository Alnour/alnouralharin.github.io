import { Link } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm border-b border-white/5">
      <Link href="/">
        <a className="text-xl font-serif font-medium tracking-tight hover:text-primary transition-colors">
          Alnour Alharin
        </a>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
        <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
        <a href="#work" className="hover:text-foreground transition-colors">Work</a>
        <a href="#writing" className="hover:text-foreground transition-colors">Writing</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </nav>
  );
}