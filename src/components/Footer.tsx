import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-emerald-900/10 bg-emerald-950 text-emerald-50">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-lg font-bold">
              Claude<span className="text-amber-400">Turismo</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-emerald-200">
            Turismo de aventura e ecoturismo na Chapada das Mesas, Maranhão.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Navegue
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/destinos" className="hover:text-amber-400">Destinos</Link></li>
            <li><Link href="/pacotes" className="hover:text-amber-400">Pacotes</Link></li>
            <li><Link href="/sobre" className="hover:text-amber-400">Sobre nós</Link></li>
            <li><Link href="/contato" className="hover:text-amber-400">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Contato
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-emerald-200">
            <li>Carolina, Maranhão - Brasil</li>
            <li>(99) 99999-9999</li>
            <li>contato@claudeturismo.com.br</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Redes sociais
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-emerald-200">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-emerald-900/40 py-6 text-center text-xs text-emerald-300">
        © {new Date().getFullYear()} ClaudeTurismo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
