import { Link } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm border-b border-border/40 transition-colors duration-500 bg-background/80">
      <Link href="/">
        <a className="text-xl font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-2">
          <span className="text-primary">&gt;</span> Alnour_Alharin
        </a>
      </Link>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#philosophy" className="hover:text-primary transition-colors">./Philosophy</a>
          <a href="#work" className="hover:text-primary transition-colors">./Work</a>
          <a href="#writing" className="hover:text-primary transition-colors">./Writing</a>
          <a href="#contact" className="hover:text-primary transition-colors">./Contact</a>
        </div>
      </div>
    </nav>
  );
}