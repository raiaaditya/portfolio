import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/lib/data";

export function Timeline() {
  return (
    <section id="timeline" className="py-24 relative bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Journey" subtitle="Education and professional milestones." />

        <div className="relative mt-16">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 hidden md:block" />
          
          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-transparent md:hidden" />

          {portfolioData.timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] -translate-x-1/2 z-10 mt-1 md:mt-0" />

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                  <div className="glass-card p-6 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300">
                    <span className="text-cyan-400 font-mono font-semibold tracking-wider text-sm mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
