export const personalInfo = {
  name: "Amadeus Moura dos Santos",
  shortName: "Amadeus Moura",
  tagline: "Desenvolvedor Backend & Engenheiro de Agentes de IA",
  location: "Recife / Jaboatão dos Guararapes, PE",
  status: "Disponível para Estágio & Júnior Tech",
  availability: "Disponível para posições presenciais em Recife ou remotas globalmente",
  email: "amadeus.moura1@gmail.com",
  phone: "+55 81 99711-3723",
  phoneClean: "5581997113723",
  linkedin: "https://linkedin.com/in/amadeus-moura",
  github: "https://github.com/Amadeus-Moura",
  saoPortfolio: "https://Amadeus-Moura.github.io/Portfolio-Gameficado/",
  degree: "Ciência da Computação — UNIFG (Conclusão: Dez/2026)",
  currentRole: "Líder Técnico no SmartSync · Jovem Aprendiz / Suporte TI na GuardSecure",
  bio: "Estudante de Ciência da Computação na UNIFG e desenvolvedor focado em Backend, Sistemas Concorrentes e Engenharia de IA. Atuo como Líder Técnico no projeto SmartSync (SCADA IoT B2B) e mantenho agentes autônomos de IA em produção 24/7 na Oracle Cloud com Docker. Alio o rigor teórico de algoritmos e compiladores à disciplina diária da musculação e precisão rítmica do contrabaixo.",
  highlights: [
    { label: "Experiência Prática", value: "+3.5 Anos", detail: "construindo software & APIs" },
    { label: "Agentes 24/7 na Nuvem", value: "2 em Produção", detail: "Oracle Cloud OCI + Docker" },
    { label: "Liderança Técnica", value: "SmartSync", detail: "SCADA Industrial IoT B2B" },
    { label: "Formação Acadêmica", value: "UNIFG '26", detail: "Ciência da Computação" }
  ]
};

export const projects = [
  {
    id: "smart-sync",
    title: "SmartSync — Sistema SCADA B2B & Telemetria Industrial",
    subtitle: "Plataforma de automação e monitoramento IoT em tempo real para indústrias",
    category: "backend",
    role: "Líder Técnico & Arquiteto Backend · Ago/2024 – Presente",
    statusBadge: "Em Produção / B2B",
    statusColor: "emerald",
    stack: ["Node.js", "TypeScript", "React", "Prisma ORM", "WebSockets", "BullMQ", "MySQL/PostgreSQL", "NR-12"],
    image: null,
    github: null, // Private proprietary project
    confidential: true,
    summary: "Plataforma industrial para monitoramento de consumo energético e telemetria de dispositivos IoT em tempo real. Desenvolvida sob rigorosas normas de segurança NR-12 com painel sinótico de alta densidade.",
    caseStudy: {
      overview: "O SmartSync nasceu para suprir a demanda de gestão predial e fabril crítica, fornecendo controle remoto de máquinas, telemetria energética instantânea e proteção de operadores.",
      challenges: [
        "Transmissão e processamento de centenas de eventos simultâneos de sensores sem engargalar a aplicação.",
        "Implementação de controle de acesso granular baseado em papéis (RBAC) com níveis de operadores, fiscais e administradores.",
        "Conformidade técnica e visual com a norma regulamentadora brasileira NR-12 (segurança no trabalho em máquinas)."
      ],
      solutions: [
        "Arquitetura de mensageria assíncrona utilizando WebSockets bidirecionais e filas BullMQ para processamento desacoplado de telemetria.",
        "Modelagem relacional robusta com Prisma ORM e migrações estruturadas para auditoria em conformidade regulatória.",
        "Dashboard responsivo com painel sinótico industrial de alta densidade visual e feedback operacional instantâneo."
      ],
      metrics: [
        { label: "Padrão de Segurança", value: "Norma NR-12" },
        { label: "Comunicação", value: "WebSockets Realtime" },
        { label: "Papel", value: "Liderança de Arquitetura" }
      ]
    }
  },
  {
    id: "my-akame",
    title: "My Akame — Assistente Executiva de IA Autônoma",
    subtitle: "Agente cognitivo proativo com Model Router dinâmico operando 24/7 na nuvem",
    category: "ai",
    role: "Engenheiro de IA & Criador · Set/2026 – Presente",
    statusBadge: "24/7 na Nuvem (OCI)",
    statusColor: "sky",
    stack: ["Python 3.11", "Google Gemini API", "Docker", "SQLite", "Oracle Cloud (OCI)", "Telegram API", "IMAP SSL"],
    image: "/projects/akame.png",
    github: "https://github.com/Amadeus-Moura/Agente-My-Akame",
    confidential: false,
    summary: "Agente executivo autônomo na Oracle Cloud. Integração multimodal a áudio, roteador cognitivo de modelos (Flash Lite vs Flash 3.6), leitor seguro IMAP para newsletters e worker proativo de agenda.",
    caseStudy: {
      overview: "A Akame é um agente autônomo de inteligência artificial executiva projetado para atuar como assistente pessoal e secretária de alta performance, superando limitações de chatbots convencionais por meio de proatividade real.",
      challenges: [
        "Alucinações de data/hora típicas de LLMs operando em servidores de nuvem com fuso horário UTC.",
        "Sobrecarga e instabilidades da API Google Gemini durante horários de pico (HTTP 503 e 429).",
        "Segurança de acesso: proteger agenda e dados confidenciais contra acessos não autorizados no Telegram."
      ],
      solutions: [
        "Timezone Engine determinístico com injeção estrita de carimbo horário de Brasília (America/Sao_Paulo) e array determinístico em português.",
        "Model Router cognitivo com resiliência: chaveamento dinâmico entre Gemini Flash Lite (sub-segundo) e Gemini Flash 3.6 (análise densa), aliado a backoff exponencial com zero stack traces para o usuário.",
        "Worker assíncrono contínuo em segundo plano que alerta sobre reuniões com 15-20 minutos de antecedência e entrega Briefings Matinais automatizados às 07:00 da manhã.",
        "Leitor IMAP SSL seguro integrado para resumir newsletters executivas (The News, TechDrops) e persistência relacional SQLite com Memória de Longo Prazo (LTM)."
      ],
      metrics: [
        { label: "Disponibilidade", value: "99.9% 24/7" },
        { label: "Hospedagem", value: "Oracle Cloud OCI" },
        { label: "Roteamento", value: "Flash Lite & 3.6" }
      ]
    }
  },
  {
    id: "my-marin",
    title: "My Marin — Assistente Multimodal & Companheira IA",
    subtitle: "Agente cognitivo com acompanhamento de hábitos, agenda inteligente e persona empática",
    category: "ai",
    role: "Engenheiro de IA & Criador · Set/2026 – Presente",
    statusBadge: "24/7 na Nuvem (OCI)",
    statusColor: "purple",
    stack: ["Python 3.11", "Google Gemini API", "Docker", "SQLite", "Oracle Cloud (OCI)", "Telegram Voice"],
    image: null,
    github: "https://github.com/Amadeus-Moura/Agente-My-Marin",
    confidential: false,
    summary: "Agente de IA companheira e organizadora diária rodando em container Docker na OCI. Suporte a áudio multimodal, rastreamento de hábitos, agenda com sincronização Google Calendar em 1 clique e persona humanizada.",
    caseStudy: {
      overview: "Projetada para ser um ponto de suporte pessoal e de hábitos diários com alta empatia e calor humano, inspirada na persona de Marin Kitagawa, mantendo rigor técnico de persistência e disponibilidade contínua.",
      challenges: [
        "Manter consistência psicológica e tom empático afetuoso sem perder a objetividade na execução de tarefas de agenda.",
        "Processamento eficiente de áudios de voz do Telegram com latência reduzida e feedback progressivo.",
        "Isolamento seguro de perfil com persistência de preferências de rotina, cuidados de pets e restrições alimentares."
      ],
      solutions: [
        "Pipeline de áudio em memória (io.BytesIO) para envio direto à API multimodal sem dependência de escrita intermediária em disco.",
        "Memória de Longo Prazo em SQLite relacional que registra histórico de conversas, evolução de hábitos e detalhes sensíveis.",
        "Containerização Docker otimizada em instância dedicada na Oracle Cloud Infrastructure com reinicialização automática e persistência em volume."
      ],
      metrics: [
        { label: "Infraestrutura", value: "Oracle VM Dedicada" },
        { label: "Interação", value: "Áudio Multimodal & Texto" },
        { label: "Sincronização", value: "Google Calendar 1-Click" }
      ]
    }
  },
  {
    id: "mediaflow",
    title: "MediaFlow — Transcrição de Contrabaixo & Mapeamento Sonoro",
    subtitle: "Engenharia de áudio open-source mapeando frequências sonoras diretamente no braço do instrumento",
    category: "audio",
    role: "Criador & Engenheiro de Software · Projeto Open-Source",
    statusBadge: "Open-Source Ativo",
    statusColor: "cyan",
    stack: ["TypeScript", "Node.js", "yt-dlp", "Web Audio API", "DOM Manipulation", "Algoritmos de FFT"],
    image: "/projects/mediaflow.png",
    github: "https://github.com/Amadeus-Moura/MidiaFlow",
    confidential: false,
    summary: "Plataforma open-source que une engenharia de software e contrabaixo elétrico. Extrai mídias com yt-dlp e gera tablaturas interativas sincronizadas casa a casa no fretboard em tempo real.",
    caseStudy: {
      overview: "O MediaFlow nasceu da intersecção entre a minha vivência no contrabaixo e o gosto por engenharia de sistemas. Transcreve notas e grooves de áudios da web para representação visual interativa no braço do instrumento.",
      challenges: [
        "Extração e conversão de fluxos de áudio de diferentes fontes de mídia da web com baixa latência.",
        "Mapeamento determinístico de notas fundamentais e harmônicos para posições físicas de casas e cordas no fretboard.",
        "Garantir sincronia temporal estrita entre o playback de áudio e a animação das casas sem engasgos de frame no navegador."
      ],
      solutions: [
        "Integração do yt-dlp no backend para decodificação e streaming eficiente de fontes de áudio.",
        "Algoritmo customizado de correlação de frequências para conversão de pitch para coordenadas (corda, traste).",
        "Otimização extrema da camada de apresentação através de manipulação direta e pontual do DOM, evitando repaints globais desnecessários."
      ],
      metrics: [
        { label: "Foco", value: "Engenharia de Áudio & DOM" },
        { label: "Licença", value: "Open-Source" },
        { label: "Instrumento", value: "Contrabaixo Elétrico" }
      ]
    }
  },
  {
    id: "drone-bombeiro",
    title: "Drone Bombeiro Autônomo — Simulação Computacional",
    subtitle: "Software embarcado conceitual e modelagem matemática para combate aéreo a incêndios",
    category: "research",
    role: "Pesquisador & Desenvolvedor · Projeto Acadêmico",
    statusBadge: "Pesquisa Concluída",
    statusColor: "amber",
    stack: ["Python", "Modelagem Matemática", "Mecânica dos Fluidos", "Sistemas Embarcados", "Simulação"],
    image: "/projects/drone.png",
    github: "https://github.com/Amadeus-Moura/Simula-Voo-Drone-Bombeiro",
    confidential: false,
    summary: "Simulador computacional para drone de contenção de chamas. Algoritmos de cálculo de balística de água, pressão de bico pressurizado e navegação autônoma considerando vento e altitude.",
    caseStudy: {
      overview: "Projeto interdisciplinar focado em aplicar física aplicada e lógica computacional em sistemas embarcados de resgate e segurança pública.",
      challenges: [
        "Modelagem física precisa do comportamento de jatos d'água sob variações dinâmicas de altitude e rajadas de vento.",
        "Cálculo de trajetória de voo autônomo com restrições severas de peso, volume e autonomia de bateria."
      ],
      solutions: [
        "Modelagem matemática em Python para cálculo de pressão hidráulica e alcance efetivo do jato d'água.",
        "Estruturação de máquina de estados para tomada de decisões autônoma de aproximação e descarga de agente extintor."
      ],
      metrics: [
        { label: "Aplicação", value: "Física Computacional" },
        { label: "Linguagem", value: "Python Puro" },
        { label: "Foco", value: "Sistemas Embarcados" }
      ]
    }
  },
  {
    id: "sao-portfolio",
    title: "Portfólio Gamificado — SAO Experience",
    subtitle: "Interface web imersiva inspirada na HUD e menus suspensos de Sword Art Online",
    category: "frontend",
    role: "Criador & Desenvolvedor Frontend · Projeto Pessoal",
    statusBadge: "Live na Web",
    statusColor: "indigo",
    stack: ["React", "CSS 3D Transforms", "Vite", "Web Audio", "GitHub Pages"],
    image: null,
    github: "https://github.com/Amadeus-Moura/Portfolio-Gameficado",
    liveUrl: "https://Amadeus-Moura.github.io/Portfolio-Gameficado/",
    confidential: false,
    summary: "Experiência interativa com menu circular flutuante, efeitos sonoros diegéticos, painel de inventário, atributos de RPG e visual futurista de anime.",
    caseStudy: {
      overview: "Construído para transformar o currículo profissional em uma jornada imersiva, replicando fielmente o sistema de menus do anime Sword Art Online com alta fidelidade visual e sonora.",
      challenges: [
        "Recriação de menus suspensos circulares em cascata com física e posicionamento 3D fluído.",
        "Garantir responsividade e desempenho de animação a 60 FPS sem travamentos em navegadores móveis."
      ],
      solutions: [
        "Estrutura pura em CSS 3D transforms e React state management para sincronizar aberturas de janelas e janelas modais de inspeção.",
        "Engine de áudio procedural e efeitos sonoros diegéticos sincronizados com eventos de clique e hover."
      ],
      metrics: [
        { label: "Estilo", value: "HUD Sword Art Online" },
        { label: "Framework", value: "React + Vite" },
        { label: "Efeitos", value: "CSS 3D & Audio FX" }
      ]
    }
  }
];

export const skillCategories = [
  {
    name: "Backend & Arquitetura",
    icon: "Server",
    skills: [
      { name: "Node.js & TypeScript", level: "Avançado", highlight: "APIs REST, WebSockets, tipagem estrita" },
      { name: "Python", level: "Avançado", highlight: "AsyncIO, scripts de automação, integrações" },
      { name: "APIs RESTful & WebSockets", level: "Avançado", highlight: "Design de contratos, streaming em tempo real" },
      { name: "BullMQ & Filas", level: "Intermediário", highlight: "Processamento de background assíncrono" },
      { name: "Arquitetura & Clean Code", level: "Avançado", highlight: "Separação de camadas, desacoplamento, RBAC" }
    ]
  },
  {
    name: "Inteligência Artificial & LLMs",
    icon: "Bot",
    skills: [
      { name: "Google Gemini API (3.5 / 3.6 / 3.8)", level: "Especialista", highlight: "Model Routing, tokens, multimodal áudio/visão" },
      { name: "Function Calling & Tool Use", level: "Avançado", highlight: "Execução determinística de comandos via IA" },
      { name: "Memória de Longo Prazo (LTM)", level: "Avançado", highlight: "Persistência relacional de fatos e preferências" },
      { name: "Engenharia de Prompt", level: "Avançado", highlight: "System instructions, personas, guardrails" },
      { name: "Resiliência & Tolerância a Falhas", level: "Avançado", highlight: "Backoff exponencial, fallback dinâmico de modelos" }
    ]
  },
  {
    name: "Bancos de Dados & ORMs",
    icon: "Database",
    skills: [
      { name: "SQLite", level: "Avançado", highlight: "Persistência leve in-process para microsserviços" },
      { name: "PostgreSQL & MySQL", level: "Avançado", highlight: "Modelagem relacional, índices, chaves estrangeiras" },
      { name: "Prisma ORM", level: "Avançado", highlight: "Schemas complexos, relações 1:N / N:M, migrations" },
      { name: "Modelagem Relacional & ACID", level: "Avançado", highlight: "Normalização e integridade referencial" }
    ]
  },
  {
    name: "Cloud, DevOps & Infraestrutura",
    icon: "Cloud",
    skills: [
      { name: "Oracle Cloud Infrastructure (OCI)", level: "Avançado", highlight: "Instâncias Linux, VNIC, regras de firewall, 24/7" },
      { name: "Docker & Docker Compose", level: "Avançado", highlight: "Multi-stage builds, volumes persistentes, isolamento" },
      { name: "Linux (Ubuntu / Debian)", level: "Avançado", highlight: "Bash, systemd, SSH, gerenciamento de processos" },
      { name: "Git, GitHub & CI/CD", level: "Avançado", highlight: "Git flow, deploy keys, automações" },
      { name: "Segurança & SSL/TLS", level: "Avançado", highlight: "IMAP seguro, single-tenant gateways, variáveis seguras" }
    ]
  },
  {
    name: "Frontend & Ferramentas",
    icon: "Layout",
    skills: [
      { name: "React & Vite", level: "Intermediário/Avançado", highlight: "Hooks modernos, SPA, performance" },
      { name: "Tailwind CSS", level: "Avançado", highlight: "Design responsivo, dark mode, micro-interações" },
      { name: "Zustand & State", level: "Intermediário", highlight: "Gerenciamento de estado global desacoplado" },
      { name: "Manipulação de DOM & Áudio", level: "Avançado", highlight: "Web Audio API, sincronia de alta precisão" }
    ]
  },
  {
    name: "Hardware, Suporte de TI & Redes",
    icon: "Wrench",
    skills: [
      { name: "Diagnóstico de Hardware & Manutenção", level: "Avançado", highlight: "Vivência técnica na GuardSecure" },
      { name: "Redes TCP/IP & Conectividade", level: "Intermediário", highlight: "Configuração de roteamento, DNS, firewalls" },
      { name: "Controle de Almoxarifado & Ativos", level: "Avançado", highlight: "Rastreabilidade de equipamentos e segurança física" },
      { name: "Protocolos IoT & ESP32", level: "Intermediário", highlight: "Telemetria serial, MQTT e comunicação industrial" }
    ]
  }
];

export const timelineExperience = [
  {
    period: "Set/2025 – Presente",
    company: "GuardSecure",
    role: "Jovem Aprendiz Administrativo & Suporte de TI",
    type: "Profissional",
    description: "Atuação simultânea no suporte técnico de TI e na rotina operacional corporativa da empresa.",
    points: [
      "Diagnóstico e manutenção de computadores: formatações, substituição e upgrade de hardware, instalação de sistemas e softwares.",
      "Resolução de problemas de conectividade, periféricos e suporte aos colaboradores.",
      "Controle de estoque técnico e almoxarifado de TI — gestão de fluxo de equipamentos, uniformes e EPIs com rigor e rastreabilidade.",
      "Organização física e digital de documentação corporativa com manutenção de sigilo e conformidade."
    ],
    techs: ["Hardware", "Redes", "Windows/Linux", "Suporte TI", "Gestão de Ativos"]
  },
  {
    period: "Ago/2024 – Presente",
    company: "SmartSync",
    role: "Líder Técnico & Arquiteto Backend",
    type: "Liderança Técnica",
    description: "Liderança de ponta a ponta na arquitetura técnica de uma plataforma industrial SCADA IoT B2B.",
    points: [
      "Definição da arquitetura da API RESTful em Node.js com TypeScript e modelagem de banco de dados via Prisma ORM.",
      "Integração de telemetria em tempo real com WebSockets e fila BullMQ para eventos de máquinas industriais.",
      "Desenho de motor de controle de acesso granular baseado em papéis (RBAC) e conformidade visual com normas NR-12.",
      "Supervisão técnica de deploy em servidores locais e nuvem."
    ],
    techs: ["Node.js", "TypeScript", "Prisma", "WebSockets", "BullMQ", "NR-12"]
  },
  {
    period: "Set/2026 – Presente",
    company: "Projetos Autônomos de IA",
    role: "Engenheiro de IA & Infraestrutura Cloud",
    type: "Engenharia de Software",
    description: "Concepção, arquitetura e implantação contínua de agentes de IA executivos na Oracle Cloud.",
    points: [
      "Criação da assistente executiva Akame com Model Router dinâmico (Gemini 3.5/3.6) e worker proativo de briefings.",
      "Criação da assistente multimodal Marin com suporte a voz via Telegram, hábitos e integração Google Calendar em 1 clique.",
      "Containerização completa em Docker e operação autônoma 24/7 em instâncias dedicadas OCI."
    ],
    techs: ["Python", "Google Gemini API", "Docker", "OCI", "SQLite", "Telegram API"]
  },
  {
    period: "Jan/2023 – Dez/2026",
    company: "UNIFG — Centro Universitário dos Guararapes",
    role: "Bacharelado em Ciência da Computação",
    type: "Acadêmico",
    description: "Graduação superior com aprofundamento em fundamentos de computação, sistemas distribuídos e teoria formal.",
    points: [
      "Destaque em matérias fundamentais: Teoria da Computação (Autômatos Finitos Determinísticos/AFD), Compiladores e Estruturas de Dados.",
      "Projetos práticos interdisciplinares aplicando modelagem matemática e simulação computacional de voo de drones bombeiros.",
      "Aplicação direta do aprendizado acadêmico na liderança de projetos de software reais."
    ],
    techs: ["Algoritmos", "Compiladores", "Autômatos (AFD)", "C/C++", "Python", "Estrutura de Dados"]
  }
];

export const sideQuests = [
  {
    title: "Contrabaixo Elétrico",
    subtitle: "Groove, Rock & Heavy Metal",
    icon: "Music",
    description: "Assim como a linha de contrabaixo sustenta discretamente toda a harmonia de uma música sem precisar aparecer na frente, uma boa arquitetura de backend sustenta a aplicação de ponta a ponta sem falhar. Essa paixão inspirou diretamente o projeto open-source MediaFlow."
  },
  {
    title: "Musculação & Hipertrofia",
    subtitle: "Disciplina, Consistência & Foco",
    icon: "Dumbbell",
    description: "A disciplina espartana exigida na academia — repetições consistentes, progressão de carga e foco no longo prazo — é exatamente a mentalidade que aplico na engenharia de software: evolução contínua, zero desculpas e superação diária diante de problemas complexos."
  },
  {
    title: "Filosofia de Engenharia",
    subtitle: "Pragmatismo & Robustez",
    icon: "Compass",
    description: "Sistemas simples que funcionam superam sistemas complexos que vivem caindo. Meu foco é escrever código limpo, desacoplado, com boa tipagem, tolerância a falhas externas e documentação clara para quem for manter."
  }
];
