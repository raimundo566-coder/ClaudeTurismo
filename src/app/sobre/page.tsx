import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Sobre | RAYDAM",
  description: "Conheça a história e os valores da RAYDAM.",
};

const values = [
  {
    title: "Segurança em primeiro lugar",
    description:
      "Guias certificados, equipamentos revisados e protocolos claros em todos os passeios.",
  },
  {
    title: "Turismo responsável",
    description:
      "Trabalhamos com comunidades locais e respeitamos a capacidade de carga de cada destino.",
  },
  {
    title: "Experiências sob medida",
    description:
      "Roteiros flexíveis para famílias, grupos de amigos, empresas e viajantes solo.",
  },
];

export default function SobrePage() {
  return (
    <>
      <div className="relative h-[40vh] min-h-[280px] w-full">
        <Image
          src="/images/estrada-chapada-das-mesas.png"
          alt="Estrada com formação rochosa da Chapada das Mesas ao fundo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/60" />
        <Container className="relative z-10 flex h-full flex-col justify-center text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">
            Sobre nós
          </p>
          <h1 className="mt-2 text-4xl font-bold">Quem é a RAYDAM</h1>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-emerald-900">Nossa história</h2>
            <p className="mt-4 text-stone-700">
              Nascemos em Carolina, no coração da Chapada das Mesas, uma
              região de transição entre a Amazônia e o Cerrado. Nosso
              objetivo é mostrar ao mundo a beleza das cachoeiras, rios,
              trilhas e formações rochosas que marcam esse ecossistema único
              do Maranhão. Ao longo dos anos, construímos roteiros pensados
              para todos os perfis de viajante, sempre ao lado de guias e
              famílias locais.
            </p>
            <p className="mt-4 text-stone-700">
              Hoje somos referência em ecoturismo e turismo de aventura na
              região, unindo conforto, segurança e respeito ao meio ambiente
              em cada expedição.
            </p>
          </div>

          <div className="grid gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-bold text-emerald-900">{value.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
