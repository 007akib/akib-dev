import { motion } from "motion/react";
import { Experience, Education } from "../types";
import { GraduationCap, Briefcase } from "lucide-react";

export default function ExperienceEducation({ exp, edu, certs }: { exp: Experience[], edu: Education[], certs: string[] }) {
  return (
    <section className="py-24 bg-primary-dark border-t border-primary-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-8 h-1 bg-accent-teal block"></span>
              Experience
            </h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-light before:to-transparent">
              {exp.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary-base bg-accent-teal shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                  
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-6 glass-card rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-accent-cyan" />
                      <span className="text-accent-teal font-mono text-sm">{item.dates}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mt-2">{item.role}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.org} {item.location ? `• ${item.location}` : ''}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-accent-teal mt-1">•</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-8 h-1 bg-accent-cyan block"></span>
              Education
            </h2>
            
            <div className="space-y-8 mb-16">
              {edu.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-bold text-lg text-white">{item.degree}</h3>
                    <span className="text-accent-cyan font-mono text-xs px-2 py-1 bg-accent-cyan/10 rounded">{item.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <GraduationCap size={16} />
                    <span>{item.institution}</span>
                  </div>
                  <p className="text-gray-300 text-sm font-mono">Grade: <span className="text-white">{item.grade}</span></p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-4">
              Certifications
            </h3>
            
            <div className="bg-primary-base p-6 rounded-xl border border-primary-light">
              <ul className="space-y-4">
                {certs.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
