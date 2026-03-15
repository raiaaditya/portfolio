import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function GithubStats() {
  // TODO: Replace 'GITHUB_USERNAME_PLACEHOLDER' with your actual GitHub username
  const githubUsername = "raiaaditya";
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="GitHub Activity" subtitle="A snapshot of my open-source contributions." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-1 rounded-xl overflow-hidden hover:shadow-cyan-500/10 transition-shadow"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&bg_color=0f172a&title_color=22d3ee&text_color=94a3b8&icon_color=a855f7&border_color=334155&hide_border=true`} 
              alt="GitHub Stats" 
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-1 rounded-xl overflow-hidden hover:shadow-cyan-500/10 transition-shadow"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&bg_color=0f172a&title_color=22d3ee&text_color=94a3b8&border_color=334155&hide_border=true`} 
              alt="Top Languages" 
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 glass-card p-1 rounded-xl overflow-hidden hover:shadow-cyan-500/10 transition-shadow"
          >
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&background=0f172a&ring=22d3ee&fire=22d3ee&currStreakNum=94a3b8&currStreakLabel=a855f7&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8&hide_border=true`} 
              alt="GitHub Streak" 
              className="w-full h-auto rounded-lg mx-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
