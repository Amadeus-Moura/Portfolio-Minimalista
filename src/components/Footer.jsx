import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Swords, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ onOpenCurriculum }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950 text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-white text-xs">
            AM
          </div>
          <div>
            <span className="font-semibold text-zinc-200 block">Amadeus Moura</span>
            <span className="text-[11px] text-zinc-500 font-mono">Ciência da Computação UNIFG · Recife, PE</span>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>·</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
            <span>LinkedIn</span>
          </a>
          <span>·</span>
          <button
            onClick={onOpenCurriculum}
            className="hover:text-white transition-colors"
          >
            Currículo
          </button>
          <span>·</span>
          <a
            href={personalInfo.saoPortfolio}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            <Swords className="w-3 h-3" />
            <span>SAO Mode</span>
          </a>
        </div>

        {/* Right Scroll to Top */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-zinc-600 font-mono">
            © {new Date().getFullYear()} Amadeus Moura
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
