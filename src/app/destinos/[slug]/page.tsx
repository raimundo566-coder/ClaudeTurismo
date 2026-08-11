import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PackageCard from "@/components/PackageCard";
import { destinations, getDestination, getPackagesForDestination } from "@/lib/data";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return {
    title: `${destination.name} | RAYDAM`,
    description: destination.description,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const relatedPackages = getPackagesForDestination(destination.slug);

  return (
    <>
      <div className="relative h-[50vh] min-h-[320px] w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-10 text-white">
          <Link href="/destinos" className="text-sm text-emerald-100 hover:underline">
            ← Voltar aos destinos
          </Link>
          <h1 className="mt-3 text-4xl font-bold">{destination.name}</h1>
          <p className="mt-2 text-lg text-amber-300">{destination.tagline}</p>
        </Container>
      </div>

      <Container className="py-16">
        <p className="max-w-3xl text-lg text-stone-700">{destination.description}</p>

        {relatedPackages.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-emerald-900">
              Pacotes para este destino
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
