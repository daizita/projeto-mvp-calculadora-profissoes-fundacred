export interface Profession {
  id: number
  title: string
  description: string
  field: string
  growth: string
  category: string
}

export const professions: Profession[] = [
  {
    id: 1,
    title: "Especialista em IA Ética",
    description:
      "Profissional que desenvolve e supervisiona sistemas de inteligência artificial garantindo que sigam princípios éticos e não perpetuem vieses.",
    field: "Tecnologia e Ética",
    growth: "Alta demanda até 2030",
    category: "technology",
  },
  {
    id: 2,
    title: "Engenheiro de Cibersegurança Quântica",
    description:
      "Especialista em proteger sistemas e dados contra ameaças que utilizam computação quântica, desenvolvendo novos protocolos de segurança.",
    field: "Segurança Digital",
    growth: "Crescimento de 300% até 2035",
    category: "technology",
  },
  {
    id: 3,
    title: "Geneticista de Precisão",
    description:
      "Profissional que personaliza tratamentos médicos baseados no perfil genético individual, aumentando a eficácia e reduzindo efeitos colaterais.",
    field: "Medicina e Biotecnologia",
    growth: "Setor em expansão global",
    category: "health",
  },
  {
    id: 4,
    title: "Cirurgião de Robótica Médica",
    description:
      "Médico especializado em realizar cirurgias remotas utilizando robôs de alta precisão, permitindo procedimentos menos invasivos.",
    field: "Medicina e Tecnologia",
    growth: "Mercado em rápida expansão",
    category: "health",
  },
  {
    id: 5,
    title: "Engenheiro de Ecossistemas",
    description:
      "Profissional que projeta e implementa soluções para restaurar ecossistemas danificados e criar ambientes urbanos sustentáveis.",
    field: "Meio Ambiente e Sustentabilidade",
    growth: "Crescimento constante até 2040",
    category: "environment",
  },
  {
    id: 6,
    title: "Gestor de Economia Circular",
    description:
      "Especialista em transformar modelos de negócios lineares em circulares, eliminando resíduos e maximizando o reuso de recursos.",
    field: "Sustentabilidade e Negócios",
    growth: "Alta demanda em empresas globais",
    category: "environment",
  },
  {
    id: 7,
    title: "Estrategista de Realidade Aumentada",
    description:
      "Profissional que cria experiências imersivas para marcas, integrando o mundo físico e digital para engajar consumidores.",
    field: "Marketing Digital e Tecnologia",
    growth: "Mercado em expansão acelerada",
    category: "communication",
  },
  {
    id: 8,
    title: "Curador de Conteúdo Digital",
    description:
      "Especialista em selecionar, organizar e personalizar conteúdo digital relevante para diferentes audiências e plataformas.",
    field: "Comunicação e Mídias Digitais",
    growth: "Crescimento constante",
    category: "communication",
  },
  {
    id: 9,
    title: "Consultor de Transformação Digital",
    description:
      "Profissional que ajuda empresas a se adaptarem às novas tecnologias e modelos de negócios digitais para manterem competitividade.",
    field: "Negócios e Tecnologia",
    growth: "Alta demanda em todos os setores",
    category: "business",
  },
  {
    id: 10,
    title: "Especialista em Finanças Descentralizadas",
    description:
      "Profissional que desenvolve e gerencia sistemas financeiros baseados em blockchain e criptomoedas, criando alternativas ao sistema bancário tradicional.",
    field: "Finanças e Tecnologia",
    growth: "Setor em rápida evolução",
    category: "business",
  },
  {
    id: 11,
    title: "Designer de Experiências Multissensoriais",
    description:
      "Artista que cria experiências imersivas combinando tecnologia, arte e design para estimular múltiplos sentidos simultaneamente.",
    field: "Arte e Tecnologia",
    growth: "Nicho em crescimento",
    category: "arts",
  },
  {
    id: 12,
    title: "Arquiteto de Espaços Virtuais",
    description:
      "Profissional que projeta ambientes digitais para metaversos, jogos e experiências de realidade virtual, criando espaços funcionais e esteticamente agradáveis.",
    field: "Design Digital e Arquitetura",
    growth: "Expansão acelerada até 2035",
    category: "arts",
  },
]

