import { GraduationCap } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm border border-border/40 rounded-full transition-colors duration-500 bg-background/80 shadow-sm">
      <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-2" data-testid="link-home">
        <span className="text-primary">&gt;</span> Alnour_Alharin
      </a>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#about" className="hover:text-primary transition-colors" data-testid="link-about">./About</a>
          <a href="/#experience" className="hover:text-primary transition-colors" data-testid="link-experience">./Experience</a>
          <a href="/#publications" className="hover:text-primary transition-colors" data-testid="link-publications">./Publications</a>
          <a href="/articles" className="hover:text-primary transition-colors" data-testid="link-articles">./Articles</a>
          <a href="/#contact" className="hover:text-primary transition-colors" data-testid="link-contact">./Contact</a>
        </div>
      </div>
    </nav>
  );
}
