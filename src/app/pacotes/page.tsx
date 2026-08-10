import type { Metadata } from "next";
import Container from "@/components/Container";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pacotes | ClaudeTurismo",
  description: "Pacotes e passeios guiados pela Chapada das Mesas.",
};

export default function PacotesPage() {
  return (
    <Container className="py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
        Pacotes
      </p>
      <h1 className="mt-2 text-4xl font-bold text-emerald-900">
        Roteiros prontos para viver a Chapada
      </h1>
      <p className="mt-4 max-w-2xl text-stone-600">
        De bate-voltas a expedições de vários dias, escolha o roteiro ideal
        para o seu grupo.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </Container>
  );
}
