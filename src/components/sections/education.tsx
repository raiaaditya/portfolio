import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GraduationCap, School, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="My academic background and qualifications." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Matriculation / High School */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="glass-card p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <School size={80} className="text-cyan-400" />
            </div>

            <h3 className="text-xl font-display font-semibold text-white border-b border-white/10 pb-4 relative z-10">
              Matriculation
            </h3>

            <div className="space-y-3 relative z-10 text-muted-foreground">
              <h4 className="text-lg font-medium text-cyan-400">St.  John's  School</h4> {/* TODO: Replace with actual school name */}
              <p>Ghazipur, Uttar Pradesh</p>       {/* TODO: Replace with actual location */}
              <p className="font-mono text-white">Percentage: 92.8%</p>        {/* TODO: Replace with actual percentage */}
              <p className="italic text-sm pt-4 border-t border-white/10">April 2019 - March 2020</p>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen size={80} className="text-cyan-400" />
            </div>

            <h3 className="text-xl font-display font-semibold text-white border-b border-white/10 pb-4 relative z-10">
              Intermediate
            </h3>

            <div className="space-y-3 relative z-10 text-muted-foreground">
              <h4 className="text-lg font-medium text-cyan-400">St. John's School</h4> {/* TODO: Replace with actual college name */}
              <p>Ghazipur, Uttar Pradesh</p>       {/* TODO: Replace with actual location */}
              <p className="font-mono text-white">Percentage: 90.6%</p>        {/* TODO: Replace with actual percentage */}
              <p className="italic text-sm pt-4 border-t border-white/10">April 2021 - March 2022</p>
            </div>
          </motion.div>

          {/* College / University */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={80} className="text-cyan-400" />
            </div>

            <h3 className="text-xl font-display font-semibold text-white border-b border-white/10 pb-4 relative z-10">
              College / University
            </h3>

            <div className="space-y-3 relative z-10 text-muted-foreground">
              <h4 className="text-lg font-medium text-cyan-400">Lovely Professional University</h4> {/* TODO: Replace with actual college name */}
              <p>Punjab, India</p>       {/* TODO: Replace with actual location */}
              <p className="font-mono text-white">CGPA: 8.27*</p>        {/* TODO: Replace with actual percentage */}
              <p className="italic text-sm pt-4 border-t border-white/10">August 2023 - Present</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
