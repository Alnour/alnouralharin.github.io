import { cn } from "@/lib/utils";

interface LayerSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function LayerSection({ id, title, subtitle, children, className, index = 0 }: LayerSectionProps) {
  return (
    <section id={id} className={cn("py-24 relative border-t border-border/40 transition-colors duration-500", className)}>
      <div className="container px-6 md:px-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          <div className="space-y-4">
            <span className="text-xs font-mono text-primary/70 tracking-widest">0{index + 1} / LAYER</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground" data-testid={`text-section-title-${id}`}>{title}</h2>
            {subtitle && <p className="text-muted-foreground font-light">{subtitle}</p>}
          </div>
          
          <div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
