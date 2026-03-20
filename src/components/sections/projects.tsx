import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");

  // Extract unique tags for filters
  const allTags = ["All", ...Array.from(new Set(portfolioData.projects.flatMap(p => p.tags)))].slice(0, 6);

  const filteredProjects = filter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Some of the meaningful solutions I've built." />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === tag
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "glass text-muted-foreground hover:text-white hover:border-cyan-500/50"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden flex flex-col min-h-[400px] hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-white/10"
              >
                {/* Full Background Image */}
                <img
                  src={(project as any).image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-0"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-0 transition-opacity duration-300 group-hover:opacity-90"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 flex-1 flex flex-col h-full pointer-events-none">
                  {/* External Link top-right */}
                  <div className="flex justify-end mb-auto pointer-events-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 duration-300"
                      aria-label="View Project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  {/* Project Details bottom */}
                  <div className="mt-auto pointer-events-auto pt-4">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-6 line-clamp-3 drop-shadow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/10 text-cyan-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors drop-shadow"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
