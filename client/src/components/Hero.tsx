import heroLayer from "@/assets/hero-layers.png";
import profilePic from "@assets/profile_picture_1771271722496.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <img 
          src={heroLayer} 
          alt="Abstract Layers" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent transition-colors duration-500" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div
            className="space-y-8 order-2 lg:order-1 animate-fade-in-up"
          >
            <div className="inline-block px-5 py-2 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
              <span className="text-xs font-mono text-primary tracking-widest uppercase" data-testid="text-tagline">Thoughts Player</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight text-foreground mix-blend-normal transition-colors duration-500" data-testid="text-hero-title">
              Alnour <br />
              <span className="text-foreground/60">Alharin</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light" data-testid="text-hero-description">
              A "thoughts player" exploring ideas through coding, writing, research, 
              and deep discussions. From the transistor to world models.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Machine Learning", "Software Engineering", "RAG & Agentic AI", "Computer Vision", "Software Architecture"].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 text-xs font-mono border border-border rounded-full bg-card/50 text-foreground/70" data-testid={`tag-skill-${i}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-scale"
          >
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square lg:aspect-[4/5] group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
              <div className="absolute top-4 -right-4 w-full h-full border border-border rounded-2xl bg-card/30 backdrop-blur-sm -z-10 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 mix-blend-multiply" />
                <img 
                  src={profilePic} 
                  alt="Alnour Alharin" 
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                  data-testid="img-profile"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 z-20">
                <div className="bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-full shadow-xl">
                  <p className="text-xs font-mono text-primary" data-testid="text-caption">Thoughts Player</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-fade-in-delayed"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
      </div>
    </section>
  );
}
