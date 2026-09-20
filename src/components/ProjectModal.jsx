import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers, Cpu, ShieldAlert, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                project.statusColor === 'emerald' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' :
                project.statusColor === 'sky' ? 'bg-sky-950/80 text-sky-400 border border-sky-800/60' :
                project.statusColor === 'purple' ? 'bg-purple-950/80 text-purple-400 border border-purple-800/60' :
                project.statusColor === 'cyan' ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800/60' :
                'bg-zinc-900 text-zinc-300 border border-zinc-700'
              }`}>
                {project.statusBadge}
              </span>
              <span className="text-xs font-mono text-zinc-500">{project.role}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-1 font-light">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Banner if available */}
        {project.image && (
          <div className="mb-6 rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 max-h-64 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover max-h-64"
            />
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
            Stack Tecnológico &amp; Arquitetura
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Body */}
        {project.caseStudy && (
          <div className="space-y-6 text-sm text-zinc-300 leading-relaxed font-light">
            
            {/* Overview */}
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <h3 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Visão Geral do Desafio
              </h3>
              <p className="text-zinc-300">
                {project.caseStudy.overview}
              </p>
            </div>

            {/* Challenges & Solutions 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Challenges */}
              <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/60">
                <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Complexidades Superadas
                </h4>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {project.caseStudy.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-mono mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/60">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Solução de Engenharia
                </h4>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {project.caseStudy.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-mono mt-0.5">✔</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Metrics */}
            {project.caseStudy.metrics && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                {project.caseStudy.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">{m.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Explorar Repositório no GitHub</span>
              </a>
            ) : project.confidential ? (
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 text-zinc-400 border border-zinc-800 text-xs">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Código Confidencial / Corporativo (SmartSync)</span>
              </div>
            ) : null}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-950/80 text-indigo-300 border border-indigo-800/80 font-medium text-xs hover:bg-indigo-900 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Acessar Aplicação</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300"
          >
            Pressione ESC para fechar
          </button>
        </div>

      </div>
    </div>
  );
}
