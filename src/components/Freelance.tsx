import { motion } from "motion/react";
import { ClientWork } from "../types";
import { Briefcase, Activity } from "lucide-react";

export default function Freelance({ work }: { work: ClientWork[] }) {
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
          Freelance & Client Work
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {work.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={item.id}
              className="glass-card rounded-xl overflow-hidden flex flex-col group"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-accent-teal" size={24} />
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {item.client}
                  </h3>
                </div>
                
                {item.industry && (
                  <p className="text-gray-400 text-sm mb-6 pb-4 border-b border-primary-light">
                    {item.industry}
                  </p>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Status</h4>
                    <p className="text-accent-cyan font-mono text-sm">{item.engagement_status}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Work Delivered</h4>
                    <p className="text-gray-300">{item.work_delivered}</p>
                  </div>

                  {item.in_progress && (
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">In Progress</h4>
                      <p className="text-gray-300">{item.in_progress}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tech_stack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-base border border-primary-light rounded text-sm text-gray-300 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {item.growth_plan_illustrative && (
                <div className="bg-[#1a1708] border-t border-yellow-900/50 p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-600 text-[#1a1708] text-xs font-bold px-3 py-1 uppercase tracking-wider transform translate-x-[20%] translate-y-[50%] rotate-45 z-10 w-40 text-center shadow-lg">
                    Simulated
                  </div>
                  
                  <div className="flex items-center gap-2 text-yellow-500 mb-4">
                    <Activity size={20} />
                    <h4 className="font-heading font-semibold text-lg">Illustrative Growth Plan</h4>
                  </div>
                  
                  <p className="text-yellow-600/80 text-xs italic mb-4">
                    {item.growth_plan_illustrative.disclaimer}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-xs uppercase tracking-wider text-yellow-700 font-semibold mb-1">Funnel Design</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.growth_plan_illustrative.funnel}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/20 p-3 rounded border border-yellow-900/30">
                        <div className="text-yellow-700 text-xs uppercase mb-1">Budget</div>
                        <div className="text-yellow-500 font-mono">₹{item.growth_plan_illustrative.simulated_projections.monthly_budget_inr}/mo</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded border border-yellow-900/30">
                        <div className="text-yellow-700 text-xs uppercase mb-1">Est. CPC</div>
                        <div className="text-yellow-500 font-mono">₹{item.growth_plan_illustrative.simulated_projections.estimated_cpc_inr_range}</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded border border-yellow-900/30">
                        <div className="text-yellow-700 text-xs uppercase mb-1">Daily Clicks</div>
                        <div className="text-yellow-500 font-mono">{item.growth_plan_illustrative.simulated_projections.estimated_daily_clicks_range}</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded border border-yellow-900/30">
                        <div className="text-yellow-700 text-xs uppercase mb-1">Conv. Rate</div>
                        <div className="text-yellow-500 font-mono">{item.growth_plan_illustrative.simulated_projections.illustrative_landing_page_conversion_pct_range}%</div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs uppercase tracking-wider text-yellow-700 font-semibold mb-1">Planned Dashboard</h5>
                      <p className="text-gray-300 text-sm">{item.growth_plan_illustrative.planned_dashboard}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
