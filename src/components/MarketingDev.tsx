import { motion } from "motion/react";
import { PerformanceMarketing as PerfMarketingType, Development as DevType } from "../types";
import { TrendingUp, CheckCircle, Code2, Server, Smartphone, Cpu } from "lucide-react";

export function PerformanceMarketing({ data }: { data: PerfMarketingType }) {
  return (
    <section className="py-24 bg-primary-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-1 bg-accent-teal block"></span>
          Performance Marketing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-accent-teal pl-6">
              {data.rationale}
            </p>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-2 text-accent-cyan mb-4">
                <TrendingUp size={20} />
                <h3 className="font-heading font-semibold text-lg">Applied Work & Case Studies</h3>
              </div>
              <p className="text-gray-300 mb-4">{data.applied_work}</p>
              <p className="text-gray-400 text-sm italic">{data.simulation_case_studies_note}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-xl h-full">
              <h3 className="font-heading font-semibold text-white mb-4">Certifications & Progress</h3>
              <ul className="space-y-4">
                {data.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-accent-teal mt-1 shrink-0" size={18} />
                    <span className="text-gray-300">{cert}</span>
                  </li>
                ))}
                {data.in_progress.map((prog, i) => (
                  <li key={i} className="flex items-start gap-3 opacity-70">
                    <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-500 mt-1 shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </div>
                    <span className="text-gray-400">{prog}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Development({ data }: { data: DevType }) {
  const stacks = [
    { label: "Full-Stack Web", items: data.full_stack_web, icon: <Server size={20} /> },
    { label: "Mobile", items: data.mobile, icon: <Smartphone size={20} /> },
    { label: "Currently Deepening", items: data.currently_deepening, icon: <Cpu size={20} /> },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-1 bg-accent-teal block"></span>
          Development
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-accent-cyan pl-6 max-w-4xl">
            {data.rationale}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stacks.map((stack, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-3 text-accent-cyan mb-4">
                {stack.icon}
                <h3 className="font-heading font-semibold text-lg text-white">{stack.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, j) => (
                  <span key={j} className="px-3 py-1 bg-primary-base border border-primary-light rounded text-sm text-gray-300 font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 rounded-xl flex items-start gap-4"
        >
          <div className="p-3 bg-accent-teal/10 rounded-lg text-accent-teal shrink-0">
            <Code2 size={24} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-white mb-2">APIs & AI Integration</h3>
            <p className="text-gray-300">{data.ai_integration}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
