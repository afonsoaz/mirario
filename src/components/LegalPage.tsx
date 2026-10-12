import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 md:px-8" aria-label="Navegação principal">
          <Link to="/" className="nav-link font-display text-2xl text-primary md:text-3xl">Restaurante Mira Rio</Link>
          <Link to="/" className="nav-link text-xs font-semibold uppercase text-muted-foreground">Voltar ao início</Link>
        </nav>
      </header>
      <main id="conteudo" className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <h1 className="font-display text-5xl italic text-primary md:text-6xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última atualização: {updated}</p>
        <div className="legal-prose mt-10">{children}</div>
      </main>
      <LegalFooter />
    </div>
  );
}

export function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Informação legal" className={`flex flex-wrap gap-x-4 gap-y-2 ${className}`}>
      <Link className="nav-link" to="/privacidade">Privacidade</Link>
      <Link className="nav-link" to="/termos">Termos e condições</Link>
      <Link className="nav-link" to="/cookies">Cookies</Link>
      <a className="nav-link" href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer">
        Livro de Reclamações<span className="sr-only"> (abre numa nova janela)</span>
      </a>
    </nav>
  );
}

function LegalFooter() {
  return (
    <footer className="border-t border-border px-5 py-8 text-xs uppercase text-muted-foreground md:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-between">
        <p>© 2026 Restaurante Mira Rio</p>
        <LegalLinks />
      </div>
    </footer>
  );
}

export const CONTACT = {
  name: "Restaurante Mira Rio",
  address: "Av. João Paulo II, 400, 4795 Rebordões, Santo Tirso, Portugal",
  email: "mirario.sts@gmail.com",
  phone: "+351 252 853 492",
};
