import { personalInfo, sideQuests } from '../data/portfolioData';
import { Music, Dumbbell, Compass, Terminal, Shield, Award, Sparkles } from 'lucide-react';

const iconMap = {
  Music,
  Dumbbell,
  Compass,
};

export default function AboutIdentity() {
  return (
    <section id="sobre" className="py-24 relative border-t border-zinc-900 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              Identidade &amp; Princípios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Além do Terminal: Disciplina &amp; Engenharia
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-light">
            O rigor técnico aplicado na programação reflete diretamente os princípios que guiam minha rotina diária.
          </p>
        </div>

        {/* 2-Column Split: The Bio Narrative and The Side Quests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-950 border border-zinc-800/80 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/80">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-sky-400 text-lg">
                  AM
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Amadeus Moura dos Santos
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Recife / Jaboatão dos Guararapes · PE
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 font-light leading-relaxed">
                <p>
                  Minha caminhada na computação começou há mais de três anos e meio. Desde as primeiras linhas de código, fui atraído pela lógica interna das coisas: como dados trafegam de forma assíncrona, como bancos garantem integridade ACID e como manter serviços de pé com zero downtime.
                </p>
                <p>
                  Na <strong className="text-white font-medium">UNIFG</strong>, mergulho nos alicerces fundamentais da Ciência da Computação — de compiladores e autômatos determinísticos a estruturas de dados densas.
                </p>
                <p>
                  Na prática profissional, alio a vivência de suporte técnico e processos corporativos na <strong className="text-white font-medium">GuardSecure</strong> com a responsabilidade de liderar a arquitetura da plataforma industrial <strong className="text-white font-medium">SmartSync</strong> e criar agentes cognitivos autônomos na nuvem.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>UNIFG Ciência da Computação · 2026</span>
              <span className="text-sky-400">Recife, Brasil</span>
            </div>
          </div>

          {/* Right Column: 3 Side Quests / Identity Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {sideQuests.map((quest, idx) => {
              const IconComponent = iconMap[quest.icon] || Compass;

              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-zinc-950 border border-zinc-800/80 p-6 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/30 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-110 group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-bold text-white tracking-tight">
                          {quest.title}
                        </h4>
                        <span className="text-[11px] font-mono text-zinc-500">
                          [{quest.subtitle}]
                        </span>
                      </div>

                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {quest.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
