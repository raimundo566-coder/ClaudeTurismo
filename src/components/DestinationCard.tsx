import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/lib/data";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinos/${destination.slug}`}
      className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-emerald-900">{destination.name}</h3>
        <p className="mt-1 text-sm font-medium text-amber-600">{destination.tagline}</p>
        <p className="mt-3 text-sm text-stone-600 line-clamp-2">{destination.description}</p>
      </div>
    </Link>
  );
}
