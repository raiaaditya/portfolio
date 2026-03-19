import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Award, Calendar, Building2 } from "lucide-react";

export function Certifications() {
  const certificationsData = [
    {
      id: 1,
      image: "/assets/images/NPTEL.png", // TODO: Add certificate image path here
      title: "NPTEL Cloud Computing", // TODO: Add certificate title here
      issuer: "NPTEL Swayam", // TODO: Add certificate issuer here
      description: "Completed NPTEL certification in Cloud Computing, gaining knowledge of cloud architecture, virtualization, and distributed systems.", // TODO: Add short description here
      date: "April 2025", // TODO: Add completion date here
      link: "https://drive.google.com/file/d/1XsAxil3Hr-sV6Rf1vdA9zK2Oqz9pmrEr/view?usp=sharing", // TODO: Add Google Drive certificate link here
    },
    {
      id: 2,
      image: "/assets/images/Oracle_Cloud.png", // TODO: Add certificate image path here
      title: "Oracle Cloud Foundation Associate", // TODO: Add certificate title here
      issuer: "Oracle University", // TODO: Add certificate issuer here
      description: "Completed Oracle Cloud Foundation Associate certification, gaining knowledge of Oracle Cloud infrastructure, services, and solutions.", // TODO: Add short description here
      date: "September 2025", // TODO: Add completion date here
      link: "https://drive.google.com/file/d/1_fhNC2Yz_dAX8ipWy42UceoTtblwIS4A/view?usp=sharing", // TODO: Add Google Drive certificate link here
    },
    {
      id: 3,
      image: "/assets/images/Infosys.png", // TODO: Add certificate image path here
      title: "Build Generative AI Apps and Solutions with No-Code Tools", // TODO: Add certificate title here
      issuer: "Infosys", // TODO: Add certificate issuer here
      description: "Completed Infosys certification in Build Generative AI Apps and Solutions with No-Code Tools, gaining knowledge of generative AI, no-code tools, and AI-powered application development.", // TODO: Add short description here
      date: "August 2025", // TODO: Add completion date here
      link: "https://drive.google.com/file/d/1u5V7BzTp3dza1XXPVH0bsTXTQMghDX0t/view?usp=drive_link", // TODO: Add Google Drive certificate link here
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials that validate my technical expertise and continuous learning journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border-gradient cursor-pointer block"
            >
              {/* Image Container */}
              <div
                className="h-48 relative overflow-hidden border-b border-white/5 bg-black/40 flex items-center justify-center"
              >
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <Award size={48} className="text-cyan-500/50 group-hover:scale-110 transition-transform duration-300" />
                )}

                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-cyan-300 mb-4">
                  <Building2 size={14} />
                  <span>{cert.issuer}</span>
                </div>

                {/* The description truncates normally, expands on hover */}
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {cert.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
