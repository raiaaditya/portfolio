import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Skills" subtitle="Technologies and tools I work with." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-display font-semibold mb-6 text-white border-b border-white/10 pb-4">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
