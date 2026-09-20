import { personalInfo } from '../data/portfolioData';
import { Swords, ExternalLink, Sparkles, Gamepad2 } from 'lucide-react';

export default function GamifiedBanner() {
  return (
    <section className="py-12 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950/40 via-zinc-950 to-purple-950/30 border border-indigo-900/40 p-8 sm:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-mono text-indigo-300 mb-3">
              <Swords className="w-3.5 h-3.5 text-indigo-400" />
              <span>EXPERIÊNCIA ALTERNATIVA INTERATIVA</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Prefere uma interface gamer imersiva?
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
              Explore o meu <strong>Portfólio Gamificado</strong> inspirado no anime Sword Art Online (SAO) — equipado com menus radiais circulares, efeitos sonoros diegéticos, painel de atributos e inventário interativo.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href={personalInfo.saoPortfolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 active:scale-[0.98] group"
            >
              <Gamepad2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Entrar no Mundo SAO</span>
              <ExternalLink className="w-4 h-4 text-indigo-200" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
