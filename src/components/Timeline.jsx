import { timelineExperience } from '../data/portfolioData';
import { Briefcase, GraduationCap, Building2, Terminal, Cpu } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="trajetoria" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              Carreira &amp; Formação
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trajetória &amp; Experiência
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-light">
            A união entre a base teórica rigorosa da Ciência da Computação e a vivência diária prática em infraestrutura corporativa e engenharia de software.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
          {timelineExperience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-sky-400 group-hover:scale-125 transition-all flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>

              {/* Content Card */}
              <div className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-7 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/30">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    {exp.period}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {exp.type}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-medium text-zinc-300 mb-3 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                  {exp.company}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 mb-4 font-light">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-2 mb-5 text-xs text-zinc-300 font-light">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-mono mt-0.5 text-sm">›</span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                  {exp.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
