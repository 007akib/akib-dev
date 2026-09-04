import { motion } from "motion/react";
import { Download, Mail, Linkedin, Phone } from "lucide-react";
import { Meta } from "../types";

export default function Hero({ meta }: { meta: Meta }) {
  const isPlaceholder = (text: string) => text.includes("ACTION_REQUIRED");

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Texture - Animated Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at center, var(--color-accent-teal) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}>
        <motion.div
          animate={{
            y: [0, 40],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-base to-primary-base"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 z-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full glass border border-accent-teal/30 text-accent-cyan text-sm font-mono tracking-wide relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-teal/10 rotate-45 group-hover:animate-[spin_3s_linear_infinite]" style={{ transformOrigin: 'center' }}></div>
            <span className="relative z-10">{meta.location}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(20,224,196,0.3)]">
            {meta.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-sans font-medium mb-6">
            {meta.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            {meta.tagline}
          </p>

          <p className="text-base text-accent-cyan/80 mb-10 max-w-2xl font-mono text-sm leading-relaxed border-l-2 border-accent-teal pl-4 glass-panel p-4 rounded-r-lg">
            {meta.positioning}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-accent-teal/90 backdrop-blur hover:bg-accent-cyan text-primary-base font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(14,124,123,0.4)] hover:shadow-[0_0_30px_rgba(20,224,196,0.6)]"
            >
              View Projects
            </button>
            <a
              href="/Akib_Ansari_Portfolio_2026.pdf"
              download
              className="px-6 py-3 glass hover:bg-white/5 border border-accent-teal/30 hover:border-accent-cyan text-white rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Download Portfolio PDF
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <a href={`mailto:${meta.contact.email}`} className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href={`https://${meta.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={`tel:${meta.contact.phone}`} className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="Phone">
              <Phone size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
