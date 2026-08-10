import Image from "next/image";
import Link from "next/link";
import { Package } from "@/lib/data";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-52 w-full">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-emerald-800/90 px-3 py-1 text-xs font-semibold text-white">
          {pkg.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-emerald-900">{pkg.title}</h3>
        <p className="mt-2 flex-1 text-sm text-stone-600">{pkg.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-500">a partir de</span>
            <p className="text-xl font-bold text-emerald-800">
              R$ {pkg.price.toLocaleString("pt-BR")}
              <span className="text-xs font-normal text-stone-500"> /pessoa</span>
            </p>
          </div>
          <Link
            href={`/pacotes/${pkg.slug}`}
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
