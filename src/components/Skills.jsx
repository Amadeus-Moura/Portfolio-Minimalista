import { skillCategories } from '../data/portfolioData';
import { Server, Bot, Database, Cloud, Layout, Wrench, Shield, Check } from 'lucide-react';

const iconMap = {
  Server,
  Bot,
  Database,
  Cloud,
  Layout,
  Wrench,
};

export default function Skills() {
  return (
    <section id="stack" className="py-24 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Stack Tecnológico
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Arsenal Técnico &amp; Competências
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-light">
            Conjunto de ferramentas e conceitos aplicados no dia a dia para construir produtos escaláveis, resilientes e de fácil manutenção.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Server;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-zinc-950 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all hover:bg-zinc-900/20 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-800/70">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3.5">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex flex-col">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-medium text-zinc-200">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.2 rounded ${
                            skill.level === 'Especialista' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            skill.level === 'Avançado' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' :
                            'bg-zinc-800 text-zinc-400 border border-zinc-700'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-500 font-light">
                          {skill.highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-900/80 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                  <span>Prática de Produção</span>
                  <Check className="w-3.5 h-3.5 text-emerald-500/70" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
