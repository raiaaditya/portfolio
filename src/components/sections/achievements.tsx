import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Trophy, Star, Target, Award } from "lucide-react";

export function Achievements() {
  const achievementsData = [
    {
      id: 1,
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
      title: "Consistent Problem Solver", // TODO: Update title
      date: "2023 - Present", // TODO: Update date
      description: "Solved 200+ problems on LeetCode and earned a 5⭐ rating on GeeksforGeeks, showcasing consistency, strong problem-solving skills, and continuous learning.", // TODO: Update description
    },
    {
      id: 2,
      icon: <Target className="w-5 h-5 text-blue-500" />,
      title: "Extensive DSA Practice", // TODO: Update title
      date: "2023 - Present", // TODO: Update date
      description: "Practiced diverse DSA problems covering arrays, graphs, dynamic programming, and more, improving logical thinking and optimizing problem-solving approaches.", // TODO: Update description
    },
    {
      id: 3,
      icon: <Star className="w-5 h-5 text-purple-500" />,
      title: "Hands-on Project Development", // TODO: Update title
      date: "September 2025", // TODO: Update date
      description: "Developed multiple real-world projects including a fitness app and data analysis systems, applying practical knowledge of development and problem-solving.", // TODO: Update description
    },
    {
      id: 4,
      icon: <Award className="w-5 h-5 text-green-500" />,
      title: "Hackathon Achievement", // TODO: Update title
      date: "November 2025", // TODO: Update date
      description: "Ranked 56th among 1000+ participants in a competitive hackathon, showcasing innovation and the ability to solve real-world problems under pressure.", // TODO: Update description
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Key milestones that showcase my consistency, problem-solving skills, and academic excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-row items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {/* Left: Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {achievement.icon}
              </div>

              {/* Right: Content Container */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
                  <h3 className="text-lg font-bold text-white">
                    {achievement.title}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
