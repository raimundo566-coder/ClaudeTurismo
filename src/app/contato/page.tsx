import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato | ClaudeTurismo",
  description: "Solicite um orçamento para o seu roteiro na Chapada das Mesas.",
};

const contactInfo = [
  { label: "Telefone / WhatsApp", value: "(99) 99999-9999" },
  { label: "E-mail", value: "contato@claudeturismo.com.br" },
  { label: "Endereço", value: "Carolina, Maranhão - Brasil" },
  { label: "Horário", value: "Seg a Sáb, 8h às 18h" },
];

export default function ContatoPage() {
  return (
    <Container className="py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
        Contato
      </p>
      <h1 className="mt-2 text-4xl font-bold text-emerald-900">
        Vamos planejar sua viagem
      </h1>
      <p className="mt-4 max-w-2xl text-stone-600">
        Preencha o formulário abaixo com os detalhes do seu grupo e nossa
        equipe retornará com um orçamento personalizado.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-lg font-bold text-emerald-900">Fale conosco</h2>
          <dl className="mt-4 space-y-4 text-sm">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <dt className="text-stone-500">{item.label}</dt>
                <dd className="font-medium text-stone-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Container>
  );
}
