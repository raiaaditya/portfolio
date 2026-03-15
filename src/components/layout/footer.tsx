import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 text-center relative overflow-hidden border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center relative z-10">
        <button
          onClick={scrollToTop}
          className="mb-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
        </button>
        
        <p className="text-muted-foreground font-medium">
          © {new Date().getFullYear()} Aaditya Rai. Built with passion for data & code.
        </p>
      </div>
    </footer>
  );
}
