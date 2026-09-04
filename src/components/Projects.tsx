import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { Database, Terminal, ArrowRight, ExternalLink } from "lucide-react";

import SalesDashboardDemo from "./SalesDashboardDemo";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 bg-primary-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-1 bg-accent-teal block"></span>
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-heading font-bold text-white group-hover:text-accent-cyan transition-colors">
                {project.name}
              </h3>
              <span className="px-3 py-1 bg-primary-light text-xs font-mono text-gray-300 rounded-full border border-primary-light">
                {project.category}
              </span>
            </div>
            <p className="text-accent-teal font-mono text-sm">{project.type}</p>
          </div>
          
          <div className="flex items-center gap-3">
            {project.demo_link && (
              <ProjectLink url={project.demo_link} label="Live Demo" />
            )}
            <ProjectLink url={project.code_link} label="Source Code" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Problem</h4>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Solution</h4>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-primary-dark border border-primary-light rounded text-sm text-gray-300 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.id === "insightsql" && <InsightSqlDemo />}
        {project.id === "ecommerce-sales-analysis" && <SalesDashboardDemo />}

        <div className="mt-8 pt-6 border-t border-primary-light flex flex-col md:flex-row justify-between gap-4 text-sm">
          <div className="text-gray-400">
            <span className="text-gray-500 uppercase tracking-wider font-semibold mr-2">Status:</span>
            {project.status}
          </div>
          {'roadmap' in project && (
             <div className="text-gray-400">
               <span className="text-gray-500 uppercase tracking-wider font-semibold mr-2">Roadmap:</span>
               {(project as any).roadmap?.join(" • ")}
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectLink({ url, label }: { url: string; label: string }) {
  if (url.includes("ACTION_REQUIRED")) {
    return (
      <span className="px-4 py-2 bg-primary-dark border border-dashed border-primary-light text-gray-500 text-sm font-mono rounded flex items-center gap-2 cursor-not-allowed" title="Link to be added">
        <ExternalLink size={16} />
        {label} (Pending)
      </span>
    );
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-primary-light hover:bg-accent-teal/10 border border-primary-light hover:border-accent-teal text-white text-sm font-mono rounded flex items-center gap-2 transition-all">
      <ExternalLink size={16} />
      {label}
    </a>
  );
}

function InsightSqlDemo() {
  const [activeQuery, setActiveQuery] = useState<number | null>(null);

  const queries = [
    {
      q: "Which acquisition channel brought in the most AMC renewals?",
      sql: "SELECT acquisition_channel, COUNT(*) as renewals\nFROM customers\nJOIN orders ON customers.customer_id = orders.customer_id\nWHERE product_name LIKE '%AMC%'\nGROUP BY acquisition_channel\nORDER BY renewals DESC\nLIMIT 1;",
      table: {
        cols: ["acquisition_channel", "renewals"],
        rows: [["Google Ads", "12"]]
      },
      insight: "Google Ads drove the highest number of AMC renewals, generating 12 renewals. This suggests that search intent marketing is highly effective for capturing high-lifetime-value customers who purchase recurring maintenance contracts."
    },
    {
      q: "What were total sales by city in the last quarter?",
      sql: "SELECT city, SUM(unit_price * quantity) as total_sales\nFROM customers\nJOIN orders ON customers.customer_id = orders.customer_id\nWHERE order_date >= '2026-06-01'\nGROUP BY city\nORDER BY total_sales DESC;",
      table: {
        cols: ["city", "total_sales"],
        rows: [["Dehradun", "419988.0"], ["Roorkee", "139995.0"], ["Haridwar", "111996.0"], ["Rishikesh", "83997.0"]]
      },
      insight: "Dehradun generated the highest sales volume in the last quarter with ₹4.19L in revenue. To maximize returns, consider allocating more performance marketing budget to the Dehradun region."
    },
    {
      q: "Which product line has the highest average order value?",
      sql: "SELECT category, product_name, AVG(unit_price * quantity) as avg_order_value\nFROM orders\nGROUP BY product_name\nORDER BY avg_order_value DESC\nLIMIT 1;",
      table: {
        cols: ["category", "product_name", "avg_order_value"],
        rows: [["AC Sales", "Split AC 1.5 Ton", "34999.0"]]
      },
      insight: "The 'Split AC 1.5 Ton' leads in average order value at ₹34,999. Promoting this specific model could efficiently drive up overall revenue figures."
    }
  ];

  return (
    <div className="bg-[#05080f] rounded-lg border border-primary-light overflow-hidden mt-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-primary-light bg-primary-dark">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-sm">
          <Terminal size={16} />
          <span>Interactive Demo Output (pre-generated)</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        <p className="text-gray-400 mb-4 text-sm">Select a question to see the generated SQL and insights:</p>
        
        <div className="flex flex-col gap-3 mb-6">
          {queries.map((q, i) => (
            <button
              key={i}
              onClick={() => setActiveQuery(activeQuery === i ? null : i)}
              className={`text-left px-4 py-3 rounded-lg border transition-all flex items-center justify-between ${activeQuery === i ? 'bg-accent-teal/10 border-accent-teal text-white' : 'bg-primary-base border-primary-light text-gray-300 hover:border-gray-500'}`}
            >
              <span>{q.q}</span>
              <ArrowRight size={18} className={`transition-transform ${activeQuery === i ? 'text-accent-cyan rotate-90' : 'text-gray-500'}`} />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeQuery !== null && (
            <motion.div
              key={activeQuery}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-4 border-t border-primary-light">
                {/* SQL Code */}
                <div>
                  <h5 className="text-xs font-mono text-gray-500 uppercase mb-2 flex items-center gap-2">
                    <Database size={14} /> Generated SQL
                  </h5>
                  <pre className="bg-[#020408] p-4 rounded-lg overflow-x-auto text-accent-teal font-mono text-sm border border-primary-light/50">
                    <code>{queries[activeQuery].sql}</code>
                  </pre>
                </div>

                {/* Table Data */}
                <div>
                  <h5 className="text-xs font-mono text-gray-500 uppercase mb-2">Executed Result</h5>
                  <div className="overflow-x-auto rounded-lg border border-primary-light/50">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-primary-dark font-mono text-gray-400">
                        <tr>
                          {queries[activeQuery].table.cols.map((col, i) => (
                            <th key={i} className="px-4 py-2 border-b border-r border-primary-light/50 last:border-r-0">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-[#020408] font-mono text-gray-300">
                        {queries[activeQuery].table.rows.map((row, i) => (
                          <tr key={i} className="border-b border-primary-light/50 last:border-b-0">
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-2 border-r border-primary-light/50 last:border-r-0">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Insight */}
                <div>
                  <h5 className="text-xs font-mono text-gray-500 uppercase mb-2">Generated Insight</h5>
                  <div className="bg-primary-dark/50 p-4 rounded-lg border-l-2 border-accent-cyan text-gray-300 leading-relaxed">
                    {queries[activeQuery].insight}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
