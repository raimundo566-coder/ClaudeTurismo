import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import { destinations, packages } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Balneario_encontro_das_%C3%A1guas_-_Parque_Nacional_das_Chapadas_das_mesas.JPG"
          alt="Balneário Encontro das Águas, Parque Nacional da Chapada das Mesas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/50 to-emerald-950/20" />
        <p className="absolute bottom-2 right-3 z-10 text-[10px] text-white/60">
          Foto: Wikimedia Commons
        </p>

        <Container className="relative z-10 py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Chapada das Mesas · Maranhão
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Cachoeiras, trilhas e aventuras que ficam na memória
          </h1>
          <p className="mt-6 max-w-xl text-lg text-emerald-50">
            A ClaudeTurismo cria roteiros guiados pelos destinos mais bonitos
            da Chapada das Mesas, com segurança, conforto e guias locais
            especializados.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/pacotes"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
            >
              Ver pacotes
            </Link>
            <Link
              href="/contato"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Solicitar orçamento
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-100 bg-stone-50 py-10">
        <Container className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            ["+15", "anos de estrada"],
            ["+8.000", "viajantes atendidos"],
            ["12", "roteiros exclusivos"],
            ["4.9★", "avaliação média"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-2xl font-extrabold text-emerald-800 sm:text-3xl">{value}</p>
              <p className="mt-1 text-sm text-stone-600">{label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                Destinos
              </p>
              <h2 className="mt-2 text-3xl font-bold text-emerald-900">
                Lugares para explorar
              </h2>
            </div>
            <Link href="/destinos" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              Ver todos os destinos →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-50 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                Pacotes
              </p>
              <h2 className="mt-2 text-3xl font-bold text-emerald-900">
                Roteiros prontos para viver
              </h2>
            </div>
            <Link href="/pacotes" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              Ver todos os pacotes →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="rounded-3xl bg-emerald-900 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold">Pronto para viver a Chapada das Mesas?</h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100">
            Fale com a nossa equipe e monte um roteiro sob medida para o seu
            grupo, família ou empresa.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
          >
            Solicitar orçamento
          </Link>
        </Container>
      </section>
    </>
  );
}
