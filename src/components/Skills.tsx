import { motion } from "motion/react";
import { Skills as SkillsType } from "../types";
import { Code, BrainCircuit, BarChart3, AppWindow, TrendingUp } from "lucide-react";

export default function Skills({ skills }: { skills: SkillsType }) {
  const categories = [
    {
      key: "languages_and_analysis",
      label: "Languages & Analysis",
      icon: <Code size={24} />,
      items: skills.languages_and_analysis,
    },
    {
      key: "ml_and_generative_ai",
      label: "ML & Generative AI",
      icon: <BrainCircuit size={24} />,
      items: skills.ml_and_generative_ai,
    },
    {
      key: "bi_data_and_cloud",
      label: "BI, Data & Cloud",
      icon: <BarChart3 size={24} />,
      items: skills.bi_data_and_cloud,
    },
    {
      key: "development",
      label: "Development",
      icon: <AppWindow size={24} />,
      items: skills.development,
    },
    {
      key: "performance_marketing",
      label: "Performance Marketing",
      icon: <TrendingUp size={24} />,
      items: skills.performance_marketing,
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-1 bg-accent-teal block"></span>
          Core Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={category.key}
              className={`glass-card rounded-xl p-6 transition-all duration-300 ${category.key === "performance_marketing" ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-3 text-white mb-4">
                <div className="p-2 bg-primary-base/50 rounded-lg text-accent-cyan group-hover:scale-110 transition-transform relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-teal/20 rotate-45 group-hover:animate-[spin_3s_linear_infinite]" style={{ transformOrigin: 'center' }}></div>
                  <div className="relative z-10">{category.icon}</div>
                </div>
                <h3 className="font-heading font-semibold text-lg">{category.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-base border border-primary-light rounded-md text-sm text-gray-300 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
