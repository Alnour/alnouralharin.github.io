import { motion } from "framer-motion";
import heroLayer from "@/assets/hero-layers.png";
import profilePic from "@assets/profile_picture_1771271722496.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layer - Abstract */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <img 
          src={heroLayer} 
          alt="Abstract Layers" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="inline-block px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
              <span className="text-xs font-mono text-primary tracking-widest uppercase">Thoughts Player</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight text-white mix-blend-overlay">
              Layers on Layers <br />
              <span className="text-white/60">on Layers</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
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

          {/* Profile Image Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square lg:aspect-[4/5] group">
              {/* Decorative back layers */}
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
              <div className="absolute top-4 -right-4 w-full h-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm -z-10 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              
              {/* Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 mix-blend-multiply" />
                <img 
                  src={profilePic} 
                  alt="Alnour Alharin - Agentic RAG" 
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Caption Tag */}
              <div className="absolute -bottom-6 -right-6 z-20">
                <div className="bg-background/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg shadow-xl">
                  <p className="text-xs font-mono text-primary">Agentic RAG (Knowledge Game)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}