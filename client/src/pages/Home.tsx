import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LayerSection } from "@/components/LayerSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Music, BookOpen, Brain, Terminal, Layers, Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navigation />
      
      <main>
        <Hero />
        
        <LayerSection index={0} id="philosophy" title="Philosophy" subtitle="The Abstraction Stack">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              I come from an Electrical and Electronics Engineering background, and I view the abstraction layers 
              from physics to logic in the same way I think about higher-level computational layers.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Digital systems design",
                "Programming abstractions",
                "Computer networks",
                "Clean design",
                "Machine learning",
                "Software design",
                "LLMs and RAG",
                "Agentic programming"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="h-[1px] w-8 bg-border group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                  <span className="font-mono text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 border border-border bg-card/20 rounded-lg">
              <h3 className="font-serif text-xl mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                Layers on Layers on Layers
              </h3>
              <p className="text-sm text-muted-foreground">
                My ultimate goal in the tech industry is to write my novel. 
                The book aims to tell the story of how we build beautiful abstractions, 
                from the transistor to world models.
              </p>
            </div>
          </div>
        </LayerSection>

        <LayerSection index={1} id="work" title="Experience" subtitle="Concrete Problems">
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-border/40 space-y-12">
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <h3 className="text-xl font-medium text-foreground">Oracle Fusion Observability</h3>
                <p className="text-sm font-mono text-muted-foreground mb-4">Software Engineer • Recent</p>
                <p className="text-muted-foreground mb-4">
                  Led 5 major projects focusing on observability and intelligent systems.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="bg-card/40 border-border/40 backdrop-blur-sm hover:bg-card/60 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-base font-mono flex items-center gap-2">
                        <Brain className="w-4 h-4 text-primary" />
                        Observability Assistant
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        RAG and agentic workflows implementation for intelligent system monitoring.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card/40 border-border/40 backdrop-blur-sm hover:bg-card/60 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-base font-mono flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-primary" />
                        Time Series ML Ops
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Machine learning operations infrastructure for time-series data analysis.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-background border-2 border-border" />
                <h3 className="text-xl font-medium text-foreground">Significant Fields</h3>
                <p className="text-sm font-mono text-muted-foreground mb-4">Hands-on Experience</p>
                <div className="flex flex-wrap gap-2">
                  {["Computer Vision", "Observability", "Master Data Management", "Software Architecture"].map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-card/40 border-border hover:bg-card/60 transition-colors text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </LayerSection>

        <LayerSection index={2} id="writing" title="Curiosity" subtitle="Beyond Code">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-transparent border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <CardTitle className="font-serif flex items-center justify-between text-foreground">
                  Inspirations
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I admire people like Donald Knuth the same way I admire people like G. Hinton.
                  Bridging the gap between rigorous algorithmic foundation and probabilistic intuition.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-border rounded-lg bg-card/20">
                <Music className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Music & Study</h4>
                  <p className="text-sm text-muted-foreground">
                    Core music lover. I play guitar and study people, often through the lens of music.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-border rounded-lg bg-card/20">
                <BookOpen className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Explaining Books</h4>
                  <p className="text-sm text-muted-foreground">
                    I break down complex ideas and books on TikTok, continuing the theme of "thoughts playing".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LayerSection>

        <LayerSection index={3} id="contact" title="Connect" subtitle="Start a Discussion">
           <div className="flex flex-col md:flex-row gap-6">
             <Button variant="outline" className="h-12 border-border hover:bg-card/40 gap-2 text-foreground">
               <Mail className="w-4 h-4" />
               Email Me
             </Button>
             <Button variant="outline" className="h-12 border-border hover:bg-card/40 gap-2 text-foreground">
               <Linkedin className="w-4 h-4" />
               LinkedIn
             </Button>
             <Button variant="outline" className="h-12 border-border hover:bg-card/40 gap-2 text-foreground">
               <Github className="w-4 h-4" />
               GitHub
             </Button>
             <Button variant="outline" className="h-12 border-border hover:bg-card/40 gap-2 text-foreground">
               <MessageSquare className="w-4 h-4" />
               TikTok
             </Button>
           </div>
        </LayerSection>

        <footer className="py-12 border-t border-border/40 text-center mt-12">
          <p className="font-serif italic text-muted-foreground">
            "From the transistor to world models"
          </p>
          <div className="mt-8 text-xs font-mono text-muted-foreground/60">
            © 2026 Alnour Alharin
          </div>
        </footer>
      </main>
    </div>
  );
}