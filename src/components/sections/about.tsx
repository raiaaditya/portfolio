import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/lib/data";
import { Code, Database, Brain } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me and my passion for technology." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.about.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.about.paragraph2}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Code, title: "Software Dev", desc: "Building apps" },
                { icon: Database, title: "Data Analysis", desc: "Finding insights" },
                { icon: Brain, title: "AI & ML", desc: "Intelligent systems" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center relative perspective-[1000px]"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] group transform-style-3d hover:rotate-y-12 hover:-rotate-x-12 transition-transform duration-500">
              {/* Back glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              
              {/* Card */}
              <div className="absolute inset-0 glass-card rounded-3xl border-gradient overflow-hidden flex items-center justify-center">
                {/* Decorative background within card */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent opacity-50" />
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1 mb-6 shadow-2xl shadow-purple-500/30"
                  >
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/avatar.png"
                        alt="Aaditya Rai"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-1">Aaditya Rai</h3>
                  <p className="text-cyan-400 font-medium">Developer & Analyst</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
