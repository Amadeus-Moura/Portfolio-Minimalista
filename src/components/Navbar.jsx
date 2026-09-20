import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, FileText, Swords, Mail, Check, Menu, X, Command } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenCurriculum, onOpenCommandPalette }) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.1 }
    });
    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 shadow-2xl shadow-black/40' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Monogram & Live Status */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/70 flex items-center justify-center font-mono font-bold text-base text-zinc-100 group-hover:border-sky-500/60 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all">
            AM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-100 flex items-center gap-1.5">
              Amadeus Moura
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </span>
            <span className="text-[11px] text-zinc-400 font-mono">Backend & IA · Recife</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/70 backdrop-blur-md px-3 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 px-3 py-1.5 rounded-full hover:bg-zinc-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 bg-zinc-800/70 px-2.5 py-1 rounded-full border border-zinc-700/60 hover:border-zinc-500 transition-all ml-1"
            title="Abrir menu de comandos rápidos (Ctrl + K)"
          >
            <Command className="w-3 h-3 text-sky-400" />
            <span>K</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* SAO Gamified Link Badge */}
          <a
            href={personalInfo.saoPortfolio}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-950/40 text-indigo-300 border border-indigo-800/50 hover:bg-indigo-900/40 hover:border-indigo-600 transition-all group"
            title="Visitar versão alternativa do portfólio inspirada em Sword Art Online"
          >
            <Swords className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-12 transition-transform" />
            <span>Modo SAO</span>
            <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded font-mono">RPG</span>
          </a>

          {/* Curriculum Modal Button */}
          <button
            onClick={onOpenCurriculum}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Currículo</span>
          </button>

          {/* Fast Email Copy */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 hover:border-sky-500/50 transition-all"
            title="Copiar email para área de transferência"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copiado!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>Copiar Email</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
            aria-label="Abrir menu de comandos"
          >
            <Command className="w-4 h-4 text-sky-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-zinc-950/95 border border-zinc-800 backdrop-blur-2xl shadow-2xl flex flex-col gap-3">
          <div className="flex flex-col gap-1 pb-3 border-b border-zinc-800/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCurriculum();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Visualizar Currículo Executivo</span>
            </button>

            <a
              href={personalInfo.saoPortfolio}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-xs font-medium text-indigo-300"
            >
              <Swords className="w-4 h-4 text-indigo-400" />
              <span>Explorar Portfólio Gamificado (SAO)</span>
            </a>

            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-xs font-medium text-sky-300"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-sky-400" />}
              <span>{copied ? 'Email Copiado!' : 'Copiar Email (amadeus.moura1@gmail.com)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
