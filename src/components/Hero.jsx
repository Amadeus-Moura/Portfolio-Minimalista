import { personalInfo } from '../data/portfolioData';
import { ArrowDownRight, MessageCircle, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onOpenCurriculum }) {
  const whatsappUrl = `https://wa.me/${personalInfo.phoneClean}?text=${encodeURIComponent(
    "Olá Amadeus! Vi seu portfólio minimalista e gostaria de conversar sobre oportunidades na área de Backend / IA."
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-6 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-zinc-400">STATUS:</span>
          <span className="font-medium text-zinc-200">Disponível para Estágio & Júnior Backend/IA</span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span className="hidden sm:inline text-zinc-400">Recife / Remoto</span>
        </div>

        {/* Main Headings */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Amadeus Moura
            <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl font-light text-zinc-400">
              Desenvolvedor Backend &amp; Engenharia de IA
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mb-8 font-light">
            Construo arquiteturas resilientes, APIs de alta concorrência e agentes cognitivos autônomos operando 24/7 na nuvem.
            Atuo como <span className="text-white font-medium">Líder Técnico no SmartSync</span> (SCADA IoT B2B) e curso <span className="text-white font-medium">Ciência da Computação na UNIFG</span> (conclusão em Dez/2026).
          </p>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 active:scale-[0.98]"
          >
            <span>Ver Projetos em Produção</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 font-semibold text-sm transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all"
            title="Ver GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all"
            title="Ver LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>

        {/* Interactive Terminal Bar */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 max-w-3xl mb-12 backdrop-blur-md">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800/60 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-zinc-400">amadeus@oracle-cloud-oci:~$</span>
            </div>
            <span className="text-[11px] text-zinc-500 hidden sm:inline">sa-saopaulo-1 (Ubuntu 24.04 LTS)</span>
          </div>
          <div className="font-mono text-xs sm:text-xs text-zinc-300 flex flex-col gap-1">
            <p className="text-zinc-400">
              <span className="text-emerald-400">➜</span> <span className="text-sky-300">systemctl status</span> docker --no-pager
            </p>
            <p className="text-zinc-400 pl-4">
              ● <span className="text-emerald-400">active (running)</span> — [akame_bot, marin_bot] 24/7 uptime · Gemini Flash Router connected
            </p>
          </div>
        </div>

        {/* Bento Strip of Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {personalInfo.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/60 group"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block group-hover:text-sky-400 transition-colors">
                {item.value}
              </span>
              <span className="text-xs text-zinc-400 font-light block mt-0.5">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
