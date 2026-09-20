import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MessageCircle, Copy, Check, Send, Sparkles, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenCurriculum }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = `Olá Amadeus! Meu nome é ${formData.name || 'um visitante do seu portfólio'}${
      formData.email ? ` (${formData.email})` : ''
    }. ${formData.message || 'Gostaria de conversar sobre uma oportunidade.'}`;
    const url = `https://wa.me/${personalInfo.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato Profissional — ${formData.name || 'Portfólio'}`);
    const body = encodeURIComponent(
      `Olá Amadeus,\n\nMeu nome é: ${formData.name}\nEmail de contato: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-24 relative border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Comunicação Direta
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Vamos Construir Algo Sólido?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-light">
            Disponível para entrevistas, estágios e posições júnior em desenvolvimento backend, automação e inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="rounded-3xl bg-zinc-950 border border-zinc-800/80 p-6 hover:border-zinc-700/80 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">E-MAIL PRINCIPAL</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all"
                title="Copiar email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-3xl bg-zinc-950 border border-zinc-800/80 p-6 hover:border-zinc-700/80 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">WHATSAPP / TELEFONE</span>
                  <a
                    href={`https://wa.me/${personalInfo.phoneClean}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all"
                title="Copiar telefone"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl bg-zinc-950 border border-zinc-800/80 p-5 hover:border-zinc-700/80 transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Perfil</span>
                  <span className="text-xs font-semibold text-white group-hover:text-sky-400">LinkedIn →</span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl bg-zinc-950 border border-zinc-800/80 p-5 hover:border-zinc-700/80 transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Código</span>
                  <span className="text-xs font-semibold text-white group-hover:text-zinc-200">GitHub →</span>
                </div>
              </a>
            </div>

            {/* Location & Timezone info */}
            <div className="rounded-3xl bg-zinc-950/80 border border-zinc-800/60 p-5 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Recife / Jaboatão dos Guararapes — PE, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Horário Oficial de Brasília (UTC-3)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Interactive Message Composer */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950 border border-zinc-800/90 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800/80">
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Envie uma Mensagem Rápida
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-0.5">
                  Escolha se deseja enviar diretamente pelo WhatsApp ou pelo seu cliente de E-mail.
                </p>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-sky-400 border border-zinc-800">
                1-Click
              </span>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Seu Nome / Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Ana Silva (Tech Recruiter)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Seu E-mail (Opcional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: ana@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-1">
                  Mensagem / Assunto
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Olá Amadeus! Gostamos do seu perfil para uma vaga de Desenvolvedor Backend Júnior..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar pelo WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 font-semibold text-xs transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Enviar pelo E-mail</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
