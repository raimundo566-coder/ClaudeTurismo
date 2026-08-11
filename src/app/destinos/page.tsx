import type { Metadata } from "next";
import Container from "@/components/Container";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinos | RAYDAM",
  description: "Conheça os principais destinos da Chapada das Mesas.",
};

export default function DestinosPage() {
  return (
    <Container className="py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
        Destinos
      </p>
      <h1 className="mt-2 text-4xl font-bold text-emerald-900">
        Explore a Chapada das Mesas
      </h1>
      <p className="mt-4 max-w-2xl text-stone-600">
        Cachoeiras, rios e formações rochosas únicas espalhadas por uma das
        regiões mais preservadas do Maranhão.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </Container>
  );
}
