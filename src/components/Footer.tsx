import { Meta } from "../types";
import { Download, Mail, Linkedin, Phone } from "lucide-react";

export default function Footer({ meta }: { meta: Meta }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-primary-light py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-heading font-bold text-white mb-2">{meta.name}</h2>
            <p className="text-gray-400 text-sm">{meta.tagline}</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href="/Akib_Ansari_Portfolio_2026.pdf"
              download
              className="px-6 py-2 bg-primary-base border border-accent-teal/30 hover:border-accent-cyan text-white text-sm rounded-lg transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Résumé / PDF
            </a>
            
            <div className="flex gap-6 items-center">
              <a href={`mailto:${meta.contact.email}`} className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href={`https://${meta.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={`tel:${meta.contact.phone}`} className="text-gray-400 hover:text-accent-cyan transition-colors" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© {currentYear} {meta.name}</p>
          <p>Built with Next.js (simulated Vite), TypeScript, Tailwind CSS, Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
