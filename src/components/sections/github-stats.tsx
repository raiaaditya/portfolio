import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Github, Trophy, Code, ExternalLink } from "lucide-react";

export function GithubStats() {
  // TODO: Replace 'GITHUB_USERNAME_PLACEHOLDER' with your actual GitHub username
  const githubUsername = "raiaaditya";

  // LeetCode Stats Placeholders
  // TODO: Update total problems solved
  const leetcodeTotalSolved = 211;
  // TODO: Update easy/medium/hard count
  const leetcodeEasy = 144;
  const leetcodeMedium = 53;
  const leetcodeHard = 14;
  // TODO: Update contest rating (optional)
  const leetcodeRating = 1655;
  // TODO: Add LeetCode profile link here
  const leetcodeProfileUrl = "https://leetcode.com/u/user2940Tx/";

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Coding Activity"
          subtitle="A combined view of my coding contributions and problem-solving activity across platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* GitHub Activity Part */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Github className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">GitHub Contributions</h3>
            </div>

            <div className="glass-card p-1 rounded-xl overflow-hidden hover:shadow-cyan-500/10 transition-shadow">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&bg_color=0f172a&title_color=22d3ee&text_color=94a3b8&icon_color=a855f7&border_color=334155&hide_border=true`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="glass-card p-1 rounded-xl overflow-hidden hover:shadow-cyan-500/10 transition-shadow">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&bg_color=0f172a&title_color=22d3ee&text_color=94a3b8&border_color=334155&hide_border=true`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="glass-card p-1 rounded-xl overflow-hidden hover:shadow-cyan-500/10 transition-shadow">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&background=0f172a&ring=22d3ee&fire=22d3ee&currStreakNum=94a3b8&currStreakLabel=a855f7&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8&hide_border=true`}
                alt="GitHub Streak"
                className="w-full h-auto rounded-lg mx-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* LeetCode Activity Part */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Code className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-white">LeetCode Activity</h3>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col h-full justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-yellow-500/10 rounded-lg">
                    <Trophy className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Problem Solving</h4>
                    <span className="text-sm text-muted-foreground">Global Rank & Stats</span>
                  </div>
                </div>
                <a
                  href={leetcodeProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 transition-colors"
                  aria-label="View LeetCode Profile"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                  <span className="text-sm text-muted-foreground block mb-1">Total Solved</span>
                  <span className="text-3xl font-bold text-white">{leetcodeTotalSolved}</span>
                </div>
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                  <span className="text-sm text-muted-foreground block mb-1">Contest Rating</span>
                  <span className="text-3xl font-bold text-white">{leetcodeRating}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Difficulty Breakdown</h5>

                <div className="space-y-4">
                  {/* Easy */}
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-medium text-sm">Easy</span>
                    <span className="text-white font-semibold">{leetcodeEasy}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className="bg-emerald-400 h-2 rounded-full"
                      style={{ width: `${leetcodeTotalSolved > 0 ? (leetcodeEasy / leetcodeTotalSolved) * 100 : 0}%` }}
                    ></div>
                  </div>

                  {/* Medium */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-yellow-400 font-medium text-sm">Medium</span>
                    <span className="text-white font-semibold">{leetcodeMedium}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${leetcodeTotalSolved > 0 ? (leetcodeMedium / leetcodeTotalSolved) * 100 : 0}%` }}
                    ></div>
                  </div>

                  {/* Hard */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-red-400 font-medium text-sm">Hard</span>
                    <span className="text-white font-semibold">{leetcodeHard}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className="bg-red-400 h-2 rounded-full"
                      style={{ width: `${leetcodeTotalSolved > 0 ? (leetcodeHard / leetcodeTotalSolved) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Badges Section */}
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Badges</h5>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="relative w-full h-32 sm:h-36 group rounded-xl bg-slate-950/50 border border-slate-800/50 p-4 hover:border-slate-700 transition-colors flex items-center justify-center">
                    <img
                      src="/assets/images/Pandas_Badge.png" // TODO: Add LeetCode badge 1 image path here
                      alt="LeetCode Badge 1"
                      className="w-full h-full object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div className="relative w-full h-32 sm:h-36 group rounded-xl bg-slate-950/50 border border-slate-800/50 p-4 hover:border-slate-700 transition-colors flex items-center justify-center">
                    <img
                      src="/assets/images/Quest_Math_Large.png" // TODO: Add LeetCode badge 2 image path here
                      alt="LeetCode Badge 2"
                      className="w-full h-full object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
