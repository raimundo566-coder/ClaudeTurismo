"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const links = [
  { href: "/", label: "Início" },
  { href: "/destinos", label: "Destinos" },
  { href: "/pacotes", label: "Pacotes" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="text-lg font-bold tracking-tight text-emerald-900">
            Claude<span className="text-amber-600">Turismo</span>
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition hover:text-emerald-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Solicitar orçamento
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-emerald-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-emerald-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-emerald-900" />
        </button>
      </Container>

      {open && (
        <nav className="border-t border-emerald-900/10 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-stone-700 hover:bg-emerald-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
