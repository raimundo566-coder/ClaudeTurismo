import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function LodgingSection() {
  return (
    <section className="py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
          Hospedagem parceira
        </p>
        <h2 className="mt-2 text-3xl font-bold text-emerald-900">
          Chalés Raydam
        </h2>
        <p className="mt-4 max-w-2xl text-stone-600">
          Para completar sua expedição, indicamos os Chalés Raydam: hospedagem
          em meio à mata, com deck e piscina natural para relaxar depois de
          um dia de aventura.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:h-full">
            <Image
              src="/images/chale-raydam-longe.webp"
              alt="Chalé Raydam em meio à mata"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 66vw, 100vw"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-2xl">
            <Image
              src="/images/chale-raydam-perto.webp"
              alt="Chalé Raydam, vista de perto"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-2xl">
            <Image
              src="/images/piscina-natural-raydam.webp"
              alt="Deck e piscina natural dos Chalés Raydam"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </div>
        </div>

        <Link
          href="/contato"
          className="mt-8 inline-block rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Perguntar sobre hospedagem
        </Link>
      </Container>
    </section>
  );
}
