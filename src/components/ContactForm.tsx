"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { packages } from "@/lib/data";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("pacote") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-2xl">🌿</p>
        <h3 className="mt-2 text-xl font-bold text-emerald-900">
          Recebemos sua solicitação!
        </h3>
        <p className="mt-2 text-stone-600">
          Nossa equipe vai entrar em contato em breve para preparar seu
          orçamento.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-stone-700">
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-stone-700">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-stone-700">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <div>
          <label htmlFor="package" className="text-sm font-medium text-stone-700">
            Pacote de interesse
          </label>
          <select
            id="package"
            name="package"
            defaultValue={preselected}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          >
            <option value="">Ainda não sei</option>
            {packages.map((pkg) => (
              <option key={pkg.slug} value={pkg.slug}>
                {pkg.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="people" className="text-sm font-medium text-stone-700">
            Número de pessoas
          </label>
          <input
            id="people"
            name="people"
            type="number"
            min={1}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <div>
          <label htmlFor="date" className="text-sm font-medium text-stone-700">
            Data prevista
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-stone-700">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          placeholder="Conte um pouco sobre o seu grupo e o que procura..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:w-auto"
      >
        Enviar solicitação
      </button>
    </form>
  );
}
