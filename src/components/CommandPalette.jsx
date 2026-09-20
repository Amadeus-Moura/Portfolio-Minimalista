import { useState, useEffect, useRef } from 'react';
import { personalInfo, projects } from '../data/portfolioData';
import { Search, FileText, Swords, Mail, MessageCircle, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function CommandPalette({ isOpen, onClose, onOpenCurriculum, onSelectProject }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(() => inputRef.current?.focus(), 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'cv',
      label: 'Visualizar Currículo Executivo',
      category: 'Ações Rápidas',
      icon: FileText,
      handler: () => {
        onClose();
        onOpenCurriculum();
      }
    },
    {
      id: 'sao',
      label: 'Abrir Portfólio Gamificado (Modo SAO)',
      category: 'Experiência Alternativa',
      icon: Swords,
      handler: () => {
        onClose();
        window.open(personalInfo.saoPortfolio, '_blank');
      }
    },
    {
      id: 'whatsapp',
      label: 'Iniciar conversa no WhatsApp',
      category: 'Contato',
      icon: MessageCircle,
      handler: () => {
        onClose();
        window.open(`https://wa.me/${personalInfo.phoneClean}`, '_blank');
      }
    },
    {
      id: 'copy-email',
      label: 'Copiar Email (amadeus.moura1@gmail.com)',
      category: 'Contato',
      icon: Mail,
      handler: () => {
        navigator.clipboard.writeText(personalInfo.email);
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.3 } });
        onClose();
      }
    },
    {
      id: 'github',
      label: 'Acessar Perfil no GitHub',
      category: 'Links Externos',
      icon: GithubIcon,
      handler: () => {
        onClose();
        window.open(personalInfo.github, '_blank');
      }
    },
    {
      id: 'linkedin',
      label: 'Acessar Perfil no LinkedIn',
      category: 'Links Externos',
      icon: LinkedinIcon,
      handler: () => {
        onClose();
        window.open(personalInfo.linkedin, '_blank');
      }
    },
  ];

  // Add project entries to palette
  const projectEntries = projects.map((p) => ({
    id: `proj-${p.id}`,
    label: `${p.title} (${p.statusBadge})`,
    category: 'Projetos',
    icon: Sparkles,
    handler: () => {
      onClose();
      onSelectProject(p);
    }
  }));

  const allItems = [...actions, ...projectEntries];

  const filtered = query.trim() === ''
    ? allItems
    : allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite para buscar projetos, seções ou ações..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
          />
          <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500 font-mono">
              Nenhum comando encontrado para "{query}"
            </div>
          ) : (
            filtered.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.handler}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-zinc-900 text-left text-xs transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-sky-400 transition-colors">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-zinc-200 group-hover:text-white font-medium block">
                        {item.label}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <CornerDownLeft className="w-3.5 h-3.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })
          )}
        </div>

        {/* Bottom bar */}
        <div className="px-5 py-2.5 bg-zinc-900/50 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>Navegação Rápida</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-400">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-400">K</kbd>
          </span>
        </div>
      </div>
    </div>
  );
}
