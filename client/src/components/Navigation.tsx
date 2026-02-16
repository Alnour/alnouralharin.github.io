import { GraduationCap } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm border-b border-border/40 transition-colors duration-500 bg-background/80">
      <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-2" data-testid="link-home">
        <span className="text-primary">&gt;</span> Alnour_Alharin
      </a>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors" data-testid="link-about">./About</a>
          <a href="#experience" className="hover:text-primary transition-colors" data-testid="link-experience">./Experience</a>
          <a href="#publications" className="hover:text-primary transition-colors" data-testid="link-publications">./Publications</a>
          <a href="#education" className="hover:text-primary transition-colors" data-testid="link-education">./Education</a>
          <a href="#contact" className="hover:text-primary transition-colors" data-testid="link-contact">./Contact</a>
        </div>
      </div>
    </nav>
  );
}
