import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { packages, getPackage, getDestination } from "@/lib/data";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | RAYDAM`,
    description: pkg.summary,
  };
}

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const destination = getDestination(pkg.destinationSlug);

  return (
    <>
      <div className="relative h-[45vh] min-h-[300px] w-full">
        <Image src={pkg.image} alt={pkg.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/25 to-transparent" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-10 text-white">
          <Link href="/pacotes" className="text-sm text-emerald-100 hover:underline">
            ← Voltar aos pacotes
          </Link>
          <h1 className="mt-3 text-4xl font-bold">{pkg.title}</h1>
          {destination && (
            <p className="mt-2 text-amber-300">
              Destino: {destination.name}
            </p>
          )}
        </Container>
      </div>

      <Container className="grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-lg text-stone-700">{pkg.summary}</p>

          <h2 className="mt-10 text-2xl font-bold text-emerald-900">O que está incluso</h2>
          <ul className="mt-4 space-y-2">
            {pkg.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-stone-700">
                <span className="mt-1 text-emerald-600">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-emerald-900">Roteiro</h2>
          <ol className="mt-4 space-y-4 border-l-2 border-emerald-200 pl-6">
            {pkg.itinerary.map((step) => (
              <li key={step.day}>
                <p className="font-semibold text-emerald-800">{step.day}</p>
                <p className="text-stone-600">{step.description}</p>
              </li>
            ))}
          </ol>

          {pkg.gallery && (
            <>
              <h2 className="mt-10 text-2xl font-bold text-emerald-900">Fotos</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {pkg.gallery.map((photo) => (
                  <div key={photo.src} className="relative h-56 overflow-hidden rounded-xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    {photo.alt.includes("Ilustração") && (
                      <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white">
                        Ilustração gerada por IA
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm text-stone-500">a partir de</p>
          <p className="text-3xl font-extrabold text-emerald-800">
            R$ {pkg.price.toLocaleString("pt-BR")}
            <span className="text-sm font-normal text-stone-500"> /pessoa</span>
          </p>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <dt className="text-stone-500">Duração</dt>
              <dd className="font-medium text-stone-800">{pkg.duration}</dd>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <dt className="text-stone-500">Grupo</dt>
              <dd className="font-medium text-stone-800">{pkg.groupSize}</dd>
            </div>
          </dl>

          <Link
            href={`/contato?pacote=${pkg.slug}`}
            className="mt-6 block rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
          >
            Solicitar orçamento
          </Link>
        </aside>
      </Container>
    </>
  );
}
