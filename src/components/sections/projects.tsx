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
                className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border-gradient"
              >
                {/* Image Placeholder (since no specific images were provided, using a styled div or abstract placeholder) */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden flex items-center justify-center border-b border-white/5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
                  <h3 className="text-2xl font-black text-white/20 uppercase tracking-widest px-4 text-center">
                    {project.title.split(' ')[0]}
                  </h3>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-black/50 rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center mt-auto">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
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
