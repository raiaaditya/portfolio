import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowRight, Github } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { ParticleBackground } from "@/components/ui/particle-background";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [text] = useTypewriter({
    words: portfolioData.hero.titles,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image if available, mixed with particles */}
      <div 
        className="absolute inset-0 z-0 opacity-20 object-cover"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-4 backdrop-blur-sm"
          >
            Welcome to my portfolio
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-4">
            Hi, I'm <span className="text-gradient">{portfolioData.hero.name}</span>
          </h1>

          <div className="text-2xl md:text-4xl font-display font-semibold text-muted-foreground h-12 md:h-16">
            {text}
            <Cursor cursorStyle="_" />
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground/80 mt-6 font-light">
            {portfolioData.hero.tagline}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </button>

            <a
              href="/assets/Aaditya_Rai_Resume.pdf" // TODO: Update this path if you place the resume file elsewhere
              download
              className="px-8 py-4 rounded-xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-center"
            >
              Download Resume
            </a>

            <a
              href={portfolioData.hero.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:text-cyan-400 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
