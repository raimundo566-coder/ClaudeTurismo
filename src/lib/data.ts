export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export type Package = {
  slug: string;
  title: string;
  destinationSlug: string;
  duration: string;
  groupSize: string;
  price: number;
  summary: string;
  highlights: string[];
  itinerary: { day: string; description: string }[];
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "cachoeira-do-prata",
    name: "Cachoeira do Prata",
    tagline: "Águas cristalinas em meio à mata",
    description:
      "Uma das quedas d'água mais fotografadas da Chapada das Mesas, com piscina natural perfeita para banho e trilhas de acesso fácil.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "cachoeira-de-sao-romao",
    name: "Cachoeira de São Romão",
    tagline: "A gigante de 33 metros",
    description:
      "Queda d'água imponente cercada de vegetação nativa, ideal para quem busca contato direto com a natureza e boas fotos.",
    image:
      "https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "chapada-das-mesas-mirante",
    name: "Mirante da Chapada",
    tagline: "Pôr do sol sobre as mesas rochosas",
    description:
      "Formações rochosas em formato de mesa que dão nome à região, com vista panorâmica ideal para o entardecer.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "rio-novo",
    name: "Rio Novo",
    tagline: "Bóia-cross e paisagens de tirar o fôlego",
    description:
      "Trecho de águas calmas e cristalinas, perfeito para descida de bóia e passeios de canoa em família.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop",
  },
];

export const packages: Package[] = [
  {
    slug: "expedicao-cachoeiras",
    title: "Expedição Cachoeiras da Chapada",
    destinationSlug: "cachoeira-do-prata",
    duration: "3 dias / 2 noites",
    groupSize: "até 12 pessoas",
    price: 890,
    summary:
      "Roteiro completo pelas principais cachoeiras da região, com guias locais, transporte 4x4 e hospedagem incluída.",
    highlights: [
      "Visita à Cachoeira do Prata e São Romão",
      "Transporte 4x4 e guia especializado",
      "Café da manhã e almoço incluídos",
      "Hospedagem em pousada regional",
    ],
    itinerary: [
      { day: "Dia 1", description: "Chegada, check-in e Cachoeira do Prata ao entardecer." },
      { day: "Dia 2", description: "Trilha e banho na Cachoeira de São Romão, tarde livre." },
      { day: "Dia 3", description: "Mirante da Chapada ao amanhecer e retorno." },
    ],
    image:
      "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "aventura-rio-novo",
    title: "Aventura no Rio Novo",
    destinationSlug: "rio-novo",
    duration: "1 dia",
    groupSize: "até 20 pessoas",
    price: 250,
    summary:
      "Bate-volta com descida de bóia, canoagem e piquenique às margens do Rio Novo. Ideal para famílias e grupos.",
    highlights: [
      "Descida de bóia-cross",
      "Passeio de canoa",
      "Piquenique às margens do rio",
      "Equipamentos de segurança inclusos",
    ],
    itinerary: [
      { day: "Manhã", description: "Saída, deslocamento até o Rio Novo e briefing de segurança." },
      { day: "Tarde", description: "Bóia-cross, canoagem, piquenique e retorno." },
    ],
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "pordosol-mirante",
    title: "Pôr do Sol no Mirante",
    destinationSlug: "chapada-das-mesas-mirante",
    duration: "meio período",
    groupSize: "até 15 pessoas",
    price: 150,
    summary:
      "Passeio curto e imperdível até o mirante das formações rochosas, com vista panorâmica para o pôr do sol.",
    highlights: [
      "Trilha leve guiada",
      "Vista panorâmica das mesas rochosas",
      "Lanche e água inclusos",
      "Fotos profissionais do grupo",
    ],
    itinerary: [
      { day: "Tarde", description: "Saída, trilha guiada até o mirante e contemplação do pôr do sol." },
    ],
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop",
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesForDestination(slug: string) {
  return packages.filter((p) => p.destinationSlug === slug);
}
