import { useEffect, useState } from 'react';
import { personalInfo, timelineExperience, skillCategories } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function CurriculumModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyCvText = () => {
    const text = `AMADEUS MOURA DOS SANTOS
Desenvolvedor Backend & Engenheiro de Agentes de IA
Recife, PE | ${personalInfo.phone} | ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

RESUMO PROFISSIONAL
Estudante de Ciência da Computação na UNIFG (conclusão em Dez/2026) e desenvolvedor com foco em Backend, Sistemas Concorrentes e Engenharia de IA. Atua como Líder Técnico na arquitetura da plataforma SmartSync (SCADA IoT B2B) e mantém agentes autônomos de IA em produção contínua 24/7 na Oracle Cloud com Docker. Vivência técnica em suporte de TI e infraestrutura de hardware na GuardSecure.

EXPERIÊNCIA PROFISSIONAL
- GuardSecure | Jovem Aprendiz Administrativo & Suporte de TI (Set/2025 – Presente)
  • Diagnóstico e manutenção de computadores, formatação, substituição de hardware e instalação de sistemas.
  • Suporte aos colaboradores em redes e conectividade; controle rigoroso de estoque técnico e almoxarifado de TI.
  • Organização documental sigilosa e conformidade de arquivos físicos e digitais.

- SmartSync | Líder Técnico & Arquiteto Backend (Ago/2024 – Presente)
  • Arquitetura de API RESTful em Node.js com TypeScript e modelagem relacional via Prisma ORM.
  • Telemetria em tempo real com WebSockets e fila BullMQ para eventos de máquinas industriais.
  • Controle de acesso granular baseado em papéis (RBAC) e conformidade técnica e visual com normas NR-12.

- Projetos de IA Autônoma (Akame & Marin) | Engenheiro de IA & Cloud (Set/2026 – Presente)
  • Agente executivo com Model Router dinâmico (Gemini Flash Lite e Flash 3.6), mitigação de falhas e background worker para briefings diários e alertas de agenda.
  • Pipeline de áudio multimodal via Telegram, persistência SQLite LTM e containerização Docker na Oracle Cloud OCI 24/7.

FORMAÇÃO ACADÊMICA
- Centro Universitário dos Guararapes (UNIFG)
  Bacharelado em Ciência da Computação | Previsão de Formatura: Dez/2026
  Destaque: Teoria da Computação (Autômatos Finitos Determinísticos), Compiladores e Estruturas de Dados.

PRINCIPAIS COMPETÊNCIAS
- Backend & Linguagens: Node.js, TypeScript, Python 3.11, JavaScript, RESTful APIs, WebSockets, BullMQ.
- Bancos de Dados: MySQL, PostgreSQL, SQLite, Prisma ORM.
- Inteligência Artificial: Google Gemini API, Model Routing, Function Calling, Prompt Engineering, Multimodal.
- Cloud & DevOps: Oracle Cloud Infrastructure (OCI), Docker, Docker Compose, Linux Ubuntu, Git/GitHub.
- Hardware & Suporte: Diagnóstico de Hardware, Manutenção, Redes TCP/IP, Almoxarifado Técnico.
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.2 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-auto max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollbarGutter: 'stable' }}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
            <span className="text-xs font-mono text-zinc-400 uppercase">Currículo Executivo · Amadeus Moura</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCvText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-300 border border-zinc-800 transition-all"
              title="Copiar currículo como texto"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-sm"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors ml-2"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="space-y-8 text-zinc-200 font-light">
          
          {/* Header block */}
          <div className="border-b border-zinc-800 pb-6">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Amadeus Moura dos Santos
            </h1>
            <p className="text-base text-sky-400 font-medium mt-1">
              Desenvolvedor Backend &amp; Engenheiro de Agentes de IA
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-400 mt-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Recife / Jaboatão dos Guararapes, PE
              </span>
              <span>·</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 text-zinc-300 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                {personalInfo.email}
              </a>
              <span>·</span>
              <a href={`https://wa.me/${personalInfo.phoneClean}`} className="flex items-center gap-1 text-zinc-300 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                {personalInfo.phone}
              </a>
              <span>·</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sky-400 hover:underline">
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <span>·</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-zinc-300 hover:underline">
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Resumo */}
          <div>
            <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2 font-semibold">
              Resumo Profissional
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              Estudante de Ciência da Computação na UNIFG (conclusão em Dez/2026) com sólida base em sistemas lógicos, bancos de dados e desenvolvimento de software. Atua como <strong>Líder Técnico no SmartSync</strong> (SCADA industrial IoT B2B), coordenando arquitetura em Node.js com TypeScript e Prisma ORM, e mantém <strong>agentes autônomos de IA em produção 24/7 na Oracle Cloud</strong> com Docker. Vivência prática em suporte corporativo de TI e gestão de ativos na GuardSecure.
            </p>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-4 font-semibold">
              Experiência Profissional
            </h2>

            <div className="space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">
                    GuardSecure
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">Set/2025 – Presente</span>
                </div>
                <p className="text-xs text-sky-400/90 font-medium mb-2">
                  Jovem Aprendiz Administrativo &amp; Suporte de TI
                </p>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 font-light">
                  <li>Diagnóstico e manutenção de computadores: formatações, substituição de peças, instalação e configuração de sistemas e softwares.</li>
                  <li>Atendimento a colaboradores para resolução de problemas de conectividade de rede, impressoras e periféricos.</li>
                  <li>Controle de estoque técnico e almoxarifado de TI — gestão de fluxo de equipamentos, uniformes e EPIs com rigor e rastreabilidade.</li>
                  <li>Gestão documental física e digital com controle de sigilo e conformidade interna.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">
                    SmartSync
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">Ago/2024 – Presente</span>
                </div>
                <p className="text-xs text-sky-400/90 font-medium mb-2">
                  Líder Técnico &amp; Arquiteto Backend (SCADA IoT B2B)
                </p>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 font-light">
                  <li>Liderança da arquitetura da API RESTful em Node.js com TypeScript e modelagem relacional via Prisma ORM.</li>
                  <li>Transmissão de telemetria em tempo real através de WebSockets bidirecionais e filas de eventos com BullMQ.</li>
                  <li>Desenvolvimento do motor de autorização baseado em papéis (RBAC) e telas sinóticas alinhadas às normas industriais NR-12.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">
                    Projetos de IA Autônoma (Akame &amp; Marin)
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">Set/2026 – Presente</span>
                </div>
                <p className="text-xs text-sky-400/90 font-medium mb-2">
                  Engenheiro de IA &amp; Infraestrutura Cloud (OCI)
                </p>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 font-light">
                  <li>Desenvolvimento e deploy em produção 24/7 na Oracle Cloud de assistentes de IA autônomas containerizadas com Docker.</li>
                  <li>Model Router dinâmico com chaveamento cognitivo entre Gemini Flash Lite e Gemini Flash 3.6 com mitigação de erros 503/429.</li>
                  <li>Processamento multimodal de áudio via Telegram, persistência SQLite para LTM e integração IMAP SSL para newsletters matinais.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Formação Acadêmica */}
          <div>
            <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2 font-semibold">
              Formação Acadêmica
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Bacharelado em Ciência da Computação
                </h3>
                <p className="text-xs text-zinc-400">Centro Universitário dos Guararapes (UNIFG)</p>
              </div>
              <span className="text-xs font-mono text-zinc-400">Previsão: Dez/2026</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-light">
              Ênfase em Teoria da Computação (Autômatos Finitos Determinísticos / AFD), Compiladores, Algoritmos Avançados e Engenharia de Software.
            </p>
          </div>

          {/* Competências Técnicas */}
          <div>
            <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 font-semibold">
              Competências Técnicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300 font-light">
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="font-semibold text-white block mb-1">Backend &amp; Linguagens:</span>
                Node.js, TypeScript, Python 3.11, JavaScript, RESTful APIs, WebSockets, BullMQ.
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="font-semibold text-white block mb-1">Bancos de Dados &amp; ORMs:</span>
                PostgreSQL, MySQL, SQLite, Prisma ORM, Modelagem Relacional e Integridade ACID.
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="font-semibold text-white block mb-1">Inteligência Artificial:</span>
                Google Gemini API, Model Routing, Function Calling, Long Term Memory (LTM), Prompt Engineering.
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <span className="font-semibold text-white block mb-1">Cloud, Infra &amp; Suporte:</span>
                Oracle Cloud (OCI), Docker &amp; Compose, Linux Ubuntu, Git/GitHub, Diagnóstico de Hardware e Redes.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
