export interface Option {
  id: string
  text: string
}

export interface Question {
  id: number
  text: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Qual área desperta mais o seu interesse?",
    options: [
      { id: "tech", text: "Tecnologia e inovação" },
      { id: "health", text: "Ciências da saúde" },
      { id: "environment", text: "Meio ambiente e sustentabilidade" },
      { id: "communication", text: "Comunicação e mídias digitais" },
      { id: "business", text: "Negócios e empreendedorismo" },
      { id: "arts", text: "Artes e criatividade" },
    ],
  },
  {
    id: 2,
    text: "Como você gosta de trabalhar?",
    options: [
      { id: "alone", text: "Sozinho, com foco total" },
      { id: "team", text: "Em equipe, colaborando com outros" },
      { id: "hybrid", text: "De maneira híbrida, alternando entre equipe e individual" },
      { id: "no_preference", text: "Não tenho preferência" },
    ],
  },
  {
    id: 3,
    text: "Qual causa você gostaria de impactar no futuro?",
    options: [
      { id: "health_wellbeing", text: "Saúde e bem-estar" },
      { id: "tech_innovation", text: "Tecnologia e inovação" },
      { id: "environment_sustainability", text: "Meio ambiente e sustentabilidade" },
      { id: "education", text: "Educação e desenvolvimento humano" },
      { id: "business_economy", text: "Negócios e economia" },
      { id: "entertainment", text: "Entretenimento e cultura" },
    ],
  },
  {
    id: 4,
    text: "Você prefere trabalhar:",
    options: [
      { id: "office", text: "Presencialmente, no escritório ou empresa" },
      { id: "remote", text: "Remotamente, em casa ou qualquer lugar" },
      { id: "hybrid_work", text: "De forma híbrida (presencial + remoto)" },
    ],
  },
  {
    id: 5,
    text: "O que é mais importante para você na sua futura profissão?",
    options: [
      { id: "salary", text: "Salário alto e estabilidade financeira" },
      { id: "purpose", text: "Realização pessoal e propósito" },
      { id: "flexibility", text: "Flexibilidade e equilíbrio pessoal" },
      { id: "innovation", text: "Inovação e desafios constantes" },
    ],
  },
  {
    id: 6,
    text: "Qual destas habilidades você considera seu ponto forte?",
    options: [
      { id: "analytical", text: "Pensamento analítico e resolução de problemas" },
      { id: "creative", text: "Criatividade e pensamento inovador" },
      { id: "communication", text: "Comunicação e relacionamento interpessoal" },
      { id: "leadership", text: "Liderança e tomada de decisões" },
      { id: "technical", text: "Habilidades técnicas e específicas" },
    ],
  },
  {
    id: 7,
    text: "Como você lida com mudanças e novas tecnologias?",
    options: [
      { id: "early_adopter", text: "Sou dos primeiros a adotar novidades" },
      { id: "cautious", text: "Prefiro esperar que outros testem primeiro" },
      { id: "selective", text: "Adoto apenas o que realmente agrega valor" },
      { id: "resistant", text: "Prefiro métodos tradicionais e comprovados" },
    ],
  },
  {
    id: 8,
    text: "Qual destes ambientes de trabalho mais te atrai?",
    options: [
      { id: "startup", text: "Startup dinâmica com ritmo acelerado" },
      { id: "corporate", text: "Empresa estabelecida com estrutura sólida" },
      { id: "ngo", text: "Organização sem fins lucrativos com impacto social" },
      { id: "academic", text: "Ambiente acadêmico ou de pesquisa" },
      { id: "freelance", text: "Trabalho autônomo ou freelancer" },
    ],
  },
  {
    id: 9,
    text: "Qual destas frases melhor descreve sua visão de carreira?",
    options: [
      { id: "specialist", text: "Prefiro me especializar profundamente em uma área" },
      { id: "generalist", text: "Gosto de ter conhecimentos amplos em várias áreas" },
      { id: "entrepreneur", text: "Sonho em criar meu próprio negócio ou projeto" },
      { id: "impact", text: "Quero uma carreira que cause impacto positivo no mundo" },
    ],
  },
  {
    id: 10,
    text: "Qual tecnologia emergente mais desperta seu interesse?",
    options: [
      { id: "ai", text: "Inteligência Artificial e Machine Learning" },
      { id: "biotech", text: "Biotecnologia e avanços médicos" },
      { id: "renewable", text: "Energias renováveis e tecnologias sustentáveis" },
      { id: "vr_ar", text: "Realidade Virtual e Aumentada" },
      { id: "blockchain", text: "Blockchain e tecnologias descentralizadas" },
      { id: "robotics", text: "Robótica e automação" },
    ],
  },
]

