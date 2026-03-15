import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace this mock submission with actual email service integration
    // Options: Formspree (https://formspree.io/), EmailJS (https://www.emailjs.com/), or backend API
    // Example with EmailJS:
    // import emailjs from '@emailjs/browser';
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    //   .then(() => { toast success }, (error) => { toast error });
    
    setTimeout(() => {
      setIsSubmitting(false);
      const form = e.target as HTMLFormElement;
      form.reset();
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Drop a message." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:rai.aaditya0306@gmail.com" // REPLACE_WITH_YOUR_EMAIL - Update this with your actual Gmail address
                  className="flex items-center gap-4 text-muted-foreground hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">Gmail</span>
                </a>
                
                <a 
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a 
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                    <Github size={20} />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-white/20"
                  placeholder="Hello Aaditya, I'd like to talk about..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
