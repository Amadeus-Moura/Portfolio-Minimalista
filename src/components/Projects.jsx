import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Eye, ShieldCheck, Sparkles, Code2, Server } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'backend', label: 'Backend & IoT' },
    { id: 'ai', label: 'Agentes de IA' },
    { id: 'audio', label: 'Áudio & Open-Source' },
    { id: 'research', label: 'Pesquisa & Simulação' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                Portfólio Técnico
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projetos &amp; Engenharia de Sistemas
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl font-light">
              Sistemas distribuídos em produção, agentes cognitivos 24/7 na nuvem da Oracle e soluções de software que resolvem problemas reais.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/60 p-1 rounded-2xl border border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-xl transition-all font-medium ${
                  activeCategory === cat.id
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700/80 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group relative overflow-hidden"
            >
              {/* Subtle accent glow on card hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl pointer-events-none group-hover:bg-sky-500/10 transition-all" />

              <div>
                {/* Header line: Status & Role */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                    project.statusColor === 'emerald' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' :
                    project.statusColor === 'sky' ? 'bg-sky-950/80 text-sky-400 border border-sky-800/60' :
                    project.statusColor === 'purple' ? 'bg-purple-950/80 text-purple-400 border border-purple-800/60' :
                    project.statusColor === 'cyan' ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800/60' :
                    'bg-zinc-900 text-zinc-300 border border-zinc-800'
                  }`}>
                    <span className="w-1 h-1 rounded-full bg-current animate-pulse"></span>
                    {project.statusBadge}
                  </span>

                  {project.confidential && (
                    <span className="text-[10px] font-mono text-amber-500/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      B2B / NR-12
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-1">
                  {project.title}
                </h3>

                <p className="text-xs text-sky-400/80 font-mono mb-3">
                  {project.role}
                </p>

                {/* Summary */}
                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-5">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Area: Stack & Triggers */}
              <div>
                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-zinc-900 text-zinc-500">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-zinc-900">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-medium transition-all group-hover:border-zinc-700"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>Ver Estudo de Caso</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                      title="Ver repositório no GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-800/60 transition-colors"
                      title="Acessar aplicação"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
