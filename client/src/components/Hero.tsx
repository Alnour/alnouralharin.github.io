import { motion } from "framer-motion";
import heroLayer from "@/assets/hero-layers.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layer - Abstract */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={heroLayer} 
          alt="Abstract Layers" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">Thoughts Player</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight text-white mix-blend-overlay">
            Layers on Layers <br />
            <span className="text-white/60">on Layers</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            I explore ideas through coding, writing, research, and deep discussions. 
            Seeing disciplines not as identities, but as powerful tools for thinking 
            and experimentation—from the transistor to world models.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {["Machine Learning", "Software Engineering", "Agentic Programming", "RAG"].map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-mono border border-white/10 rounded bg-white/5 text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}