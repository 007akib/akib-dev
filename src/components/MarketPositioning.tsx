import { motion } from "motion/react";
import { MarketPositioningNotes } from "../types";
import { Search } from "lucide-react";

export default function MarketPositioning({ data }: { data: MarketPositioningNotes }) {
  return (
    <section className="py-12 bg-primary-dark border-y border-primary-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 shrink-0"
          >
            <div className="flex items-center gap-2 text-accent-teal mb-2">
              <Search size={20} />
              <h3 className="font-heading font-semibold text-lg">Market Context</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Why this portfolio is built this way.
              <br />
              <span className="text-xs text-gray-500 mt-1 block">Source: {data.source_basis}</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3"
          >
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
              {data.key_findings.map((finding, idx) => (
                <div 
                  key={idx} 
                  className="snap-start shrink-0 w-72 md:w-80 glass-card p-5"
                >
                  <p className="text-sm text-gray-300 font-sans leading-relaxed">
                    "{finding}"
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-accent-teal/5 border border-accent-teal/20 rounded-lg">
              <p className="text-sm text-accent-cyan font-mono">
                <span className="text-white/60 uppercase text-xs mr-2 block mb-1">Response</span>
                {data.how_this_portfolio_responds}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
